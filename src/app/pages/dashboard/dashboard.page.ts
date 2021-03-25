import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  apiresponse: any;
  userinfo: any;
  user_id: any;
  username: any;
  email: any;
  created_at: any;
  expdate: any;
  packagedetails: any;
  slno: any;
  curr_date: any;

  constructor(

    private storage: Storage,
    private authService: AuthService,
    private alertService: AlertService,
    public router: Router,

  ) { }

  ngOnInit() {

  }


  ionViewWillEnter() {

    this.authService.getToken().then(isLoggedIn => {

      if (isLoggedIn != null) {

        this.storage.get('username').then((username) => {
          this.username = username;
        });

        this.storage.get('email').then((email) => {
          this.email = email;
        });

        this.storage.get('created_at').then((created_at) => {
          this.created_at = created_at;
        });

        this.storage.get('user_id').then((val) => {

          this.user_id = val;
          this.alertService.presentLoading();

          this.authService.dashboard(this.user_id).subscribe(
            data => {
              this.apiresponse = data;

              this.expdate = this.apiresponse.enddate;

              this.curr_date = this.apiresponse.curr_date;

              this.packagedetails = this.apiresponse.packagedetails;

              this.alertService.removeLoading();
            },
            error => {
              console.log(error);
              this.alertService.removeLoading();
            },
            () => {
              // this.dismissLogin();
              //this.navCtrl.navigateRoot('/following-up');
            }
          );

        });

      }

    });

  }

  pkg() {

    this.router.navigateByUrl('/package');

  }


}