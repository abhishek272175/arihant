import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { Events } from '../../services/events';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.page.html',
	styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

	userinfo: any;
	user_id: any;
	expdate: any;
	apiresponse: any;
	curr_date: any;

	constructor(

		private storage: Storage,
		private authService: AuthService,
		private alertService: AlertService,
		public events: Events,
		public router: Router,

	) { }


	ionViewWillEnter() {

		this.authService.getToken().then(isLoggedIn => {

			this.events.publish('toggleMenu', {}
		);

			this.storage.get('user_id').then((val) => {

				this.user_id = val;

				this.authService.dashboard(this.user_id).subscribe(
					data => {
						this.apiresponse = data;

						this.expdate = this.apiresponse.enddate;

						this.curr_date = this.apiresponse.curr_date;

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

			if (isLoggedIn != null) {

				this.storage.get('user_id').then((val) => {

					this.user_id = val;

					this.events.publish('toggleMenu', {}
					);

					this.alertService.presentLoading();
					this.authService.ticket_list(this.user_id).subscribe((result) => {
						this.userinfo = result;
						this.alertService.removeLoading();
					})


				});

			}

		});

	}

	ngOnInit() {

		this.events.publish('toggleMenu', {}
		);

	}

	pkg() {

		this.router.navigateByUrl('/package');

	}

}
