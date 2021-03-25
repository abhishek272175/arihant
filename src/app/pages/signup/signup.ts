import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NavController, MenuController, ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { UserData } from '../../providers/user-data';

import { RegisterOptions } from '../../interfaces/register-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: RegisterOptions = { first_name: '', last_name: '', email: '', phone: '', password: '', password_confirmation: '', is_term_accept: '' };
  submitted = false;
  apiresponse: any;
  terms:any;


  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    private alertService: AlertService,
    public modalCtrl: ModalController,
    public userData: UserData,
    public router: Router
  ) { }

  onSignup(form: NgForm) {

    this.submitted = true;
    this.terms= 1;

    if (form.valid) {

      this.authService.register(this.signup.first_name, this.signup.last_name, this.signup.email, this.signup.phone, this.signup.password, this.signup.password_confirmation, this.terms).subscribe(
        data => {
          this.apiresponse = data;

          if (this.apiresponse.status == true) {

            this.router.navigateByUrl('/login');

            this.alertService.presentToast(this.apiresponse.message);
            this.alertService.removeLoading();

          }
          else {
            this.alertService.presentToast(this.apiresponse.message);
            this.alertService.removeLoading();
          }
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


    }


  }

  openTerms() {
		//debugger;
    this.router.navigateByUrl("/term-condition");

	}

}
