import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { NavController, MenuController, ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { TicketOptionsReply } from '../../interfaces/ticket-options-reply';

import { File, IWriteOptions, FileEntry } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-view-ticket',
	templateUrl: './view-ticket.page.html',
	styleUrls: ['./view-ticket.page.scss'],
})
export class ViewTicketPage implements OnInit {

	signup: TicketOptionsReply = { message: '', ticket_document: '', ticketnum: '' };

	userinfo: any;
	myId = null;
	clickedImage: string;
	submitted = false;
	apiresponse: any;
	name: any
	subject: any;
	documentimg: any;
	selectdocumentimg: any;
	selectedImage: any;
	repview = false;
	ticket_view: any;
	ticket_reply: any;
	user_id: any;

	constructor(

		private storage: Storage,
		private activatedRoute: ActivatedRoute,
		private file: File,
		private camera: Camera,
		private DomSanitizer: DomSanitizer,
		private webview: WebView,
		private authService: AuthService,
		public navCtrl: NavController,
		private alertService: AlertService,
		public modalCtrl: ModalController,
		public router: Router,

	) { }

	optionss: CameraOptions = {
		quality: 80,
		destinationType: this.camera.DestinationType.FILE_URI,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
		sourceType: this.camera.PictureSourceType.CAMERA,
		correctOrientation: true,
		targetWidth: 800,
		targetHeight: 800,
	};

	takePicture() {

		this.camera.getPicture(this.optionss).then((imageData) => {
			this.selectedImage = this.webview.convertFileSrc(imageData);;
			this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
				entry.file(file => {
					console.log(file);
					//this.readFile(file);
					this.documentimg = file;
				});
			});
		}, (err) => {
			// Handle error
		});

	}


	ngOnInit() {

		this.myId = this.activatedRoute.snapshot.paramMap.get('myid');

		this.authService.ticket_view(this.myId).subscribe(
			data => {
				this.apiresponse = data;
				this.ticket_view = this.apiresponse.ticket_view;
				this.ticket_reply = this.apiresponse.ticket_reply;
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
	}



	onSignup() {

		this.submitted = true;

		this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
		//alert(this.myId);
		if (this.signup.message != '') {
			//	debugger;

			let documentimg = this.documentimg;
			if (this.documentimg) {

				this.storage.get('user_id').then((user_id) => {
					this.user_id = user_id;

					const documentimgreader = new FileReader();
					documentimgreader.readAsArrayBuffer(documentimg);
					documentimgreader.onloadend = () => {
						const imgBlob = new Blob([documentimgreader.result], {
							type: documentimg.type
						});

						const formData = new FormData();

						formData.append('ticket_document', imgBlob, documentimg.name);

						formData.append('message', this.signup.message);

						formData.append('ticketnum', this.signup.ticketnum);

						formData.append('ticket_id', this.myId);
						formData.append('created_by', this.user_id);

						this.alertService.presentLoading();

						this.authService.ticket_reply(formData).subscribe(
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
								// this.dismissLogin();
								//this.navCtrl.navigateRoot('/following-up');
							}
						);
					};
				});
			} else {
				const formData = new FormData();

				this.storage.get('user_id').then((user_id) => {
					this.user_id = user_id;

					formData.append('message', this.signup.message);

					formData.append('ticketnum', this.signup.ticketnum);

					formData.append('ticket_id', this.myId);

					formData.append('created_by', this.user_id);

					this.alertService.presentLoading();

					this.authService.ticket_reply(formData).subscribe(
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
							// this.dismissLogin();
							//this.navCtrl.navigateRoot('/following-up');
						}
					);

				});


			}
		}
	}


}