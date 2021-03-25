import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { Storage } from '@ionic/storage';


declare var RazorpayCheckout: any;


@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  userinfo: any;
  utype: any;
  user_id: any;
  payment_id: any;
  amount: any;
  product_id: any;
  apiresponse: any;
  email:any;
  phone:any;
  username:any;

  constructor(

    private authService: AuthService,
    private storage: Storage,
    private router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private alertService: AlertService

  ) { }


  checklogin_for_package(amount, product_id) {
    //debugger;
    this.authService.getToken().then(isLoggedIn => {
      if (isLoggedIn != null) {

        this.storage.get('email').then((val) => {
					this.email = val;
        });
        
        this.storage.get('phone').then((val) => {
					this.phone = val;
        });

        this.storage.get('username').then((val) => {
					this.username = val;
        });

        this.payWithRazorpay(amount, product_id,this.email,this.phone,this.username);

      } else {
        this.router.navigateByUrl("/login");
      }
    });

  }




  payWithRazorpay(amount, product_id,email,phone,username) {



    var options = {
      description: 'Credits towards consultation',
      image: 'https://thepocketlaw.com/img/logo/logo.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_live_CNIZuyF7YLkfjo", // your Key Id from Razorpay dashboard
      amount: amount * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: username,
      prefill: {
        email: email,
        contact: phone,
        name: username
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: () => {
          alert('dismissed')
        }
      }
    };

    var successCallback = (payment_id) => {

      this.authService.getToken().then(isLoggedIn => {
        if (isLoggedIn != null) {
          this.storage.get('user_id').then((val) => {
            this.user_id = val;
            this.alertService.presentLoading();
            this.authService.payment(this.user_id, payment_id, amount, product_id).subscribe(
              data => {
                this.apiresponse = data;

                if (this.apiresponse.status == true) {

                  this.router.navigateByUrl('/tickets');

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
                this.alertService.removeLoading();
              }
            );

          });
        }
      });

    };

    var cancelCallback = (error) => {

      this.alertService.presentToast("Your payment transaction failed");
      this.alertService.removeLoading();

    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }


  ionViewWillEnter() {


    this.alertService.presentLoading();
    this.authService.package_list().subscribe((result) => {
      this.userinfo = result;
      this.alertService.removeLoading();
    })
    this.alertService.removeLoading();

  }


  ngOnInit() {

    //alert("sdsd");
  }


}