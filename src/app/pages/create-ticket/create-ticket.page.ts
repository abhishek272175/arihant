import { Component, NgZone } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NavController, MenuController, ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { Storage } from '@ionic/storage';

import { UserData } from '../../providers/user-data';

import { TicketOptions } from '../../interfaces/ticket-options';

import { File, IWriteOptions, FileEntry } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
	selector: 'app-create-ticket',
	templateUrl: './create-ticket.page.html',
	styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage {


	signup: TicketOptions = { message: '', subject: '', documentId: '', status: '', created_by: '' };
	submitted = false;
	apiresponse: any;
	name: any
	subject: any;
	documentimg: any;
	selectdocumentimg: any;
	selectedImage: any;
	utype: any;

	constructor(

		private file: File,
		private camera: Camera,
		private DomSanitizer: DomSanitizer,
		private webview: WebView,
		private authService: AuthService,
		public navCtrl: NavController,
		private alertService: AlertService,
		public modalCtrl: ModalController,
		public router: Router,
		private storage: Storage,
		public userData: UserData,

	) { }





	clickedImage: string;

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
	}


	onSignup() {

		this.submitted = true;

		if (this.signup.message != '' && this.signup.subject != '') {

			let documentimg = this.documentimg;
			if (this.documentimg) {

				this.authService.getToken().then(isLoggedIn => {

					if (isLoggedIn != null) {

						this.storage.get('user_id').then((val) => {

							this.utype = val;

						});

						const documentimgreader = new FileReader();
						documentimgreader.readAsArrayBuffer(documentimg);
						documentimgreader.onloadend = () => {
							const imgBlob = new Blob([documentimgreader.result], {
								type: documentimg.type
							});

							const formData = new FormData();

							formData.append('documentId', imgBlob, documentimg.name);

							formData.append('message', this.signup.message);

							formData.append('subject', this.signup.subject);

							formData.append('status', "Open");

							formData.append('created_by', this.utype);


							this.alertService.presentLoading();

							this.authService.add_request(formData).subscribe(
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


					}

				});

			} else {

				this.storage.get('user_id').then((val) => {
					this.utype = val;

					const formData = new FormData();

					formData.append('message', this.signup.message);
					formData.append('subject', this.signup.subject);
					formData.append('status', "Open");
					formData.append('created_by', this.utype);
					this.alertService.presentLoading();

					this.authService.add_request(formData).subscribe(
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