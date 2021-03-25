import { Injectable } from '@angular/core';
import { ToastController,LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class AlertService {
	loaderToShow: any;
	 
  constructor(private toastController: ToastController,
	  
		public loadingController: LoadingController) {
		
		}
		
		
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }
  
  
async presentLoading() {
     this.loaderToShow = await this.loadingController.create({
    });
    await this.loaderToShow.present();
  }
  

 
 async removeLoading() {
       this.loadingController.dismiss();
  }
  
  
}
