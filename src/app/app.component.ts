import { Component, OnInit, ViewChildren, ViewEncapsulation, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, IonRouterOutlet } from '@ionic/angular';



import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

import { Events } from './services/events';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	appPages = [
		{
			title: 'Schedule',
			url: '/app/tabs/schedule',
			icon: 'calendar'
		},
		{
			title: 'Speakers',
			url: '/app/tabs/speakers',
			icon: 'people'
		},
		{
			title: 'Map',
			url: '/app/tabs/map',
			icon: 'map'
		},
		{
			title: 'About',
			url: '/app/tabs/about',
			icon: 'information-circle'
		}
	];
	
	isLoggedIn = false;
	lastTimeBackPress = 0;
	timePeriodToExit = 2000;
	utype = "";
	dark:any;
	
	@ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
	
	constructor(
		private menu: MenuController,
		private platform: Platform,
		private router: Router,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private authService: AuthService,
		private alertService: AlertService,
		private storage: Storage,
		private userData: UserData,
		private swUpdate: SwUpdate,
		private toastCtrl: ToastController,
		public events: Events
		) {
		
		this.intiApp();
		this.initializeApp();
		this.backButtonEvent();
		
		this.events.subscribe('toggleMenu', () => {
			this.intiApp();
		});
		
	}
	
	async ngOnInit() {
		
		
	}
	
	intiApp() {
		//debugger;
		
		this.authService.getToken().then(isLoggedIn => {
			if (isLoggedIn != null) {
				this.storage.get('user_id').then((val) => {
					this.utype = val;
				});
				
			}
			
		});
	}
	
	
	checklogin_for_package() {
		//debugger;
		this.authService.getToken().then(isLoggedIn => {
			if (isLoggedIn != null) {
				this.router.navigateByUrl("/home");
				} else {
				this.router.navigateByUrl("/login-page");
			}
		});
		
	}
	
	
	async initializeApp() {
		
		this.platform.ready().then(() => {
			
			this.authService.getToken().then(isLoggedIn => {
				
				console.log(isLoggedIn);
				if (isLoggedIn != null) {
					
					this.storage.get('u_type').then((val) => {
						this.utype = val;
						
						this.router.navigateByUrl("/tickets");
					});
					
					} else {
					this.router.navigateByUrl("/home");
				}
				this.splashScreen.hide();
			});
			
			
			this.statusBar.overlaysWebView(false);
			
			this.statusBar.backgroundColorByHexString('#72a1a7');
			this.statusBar.styleLightContent();
			
			//this.statusBar.styleDefault();
			this.splashScreen.hide();
			
		});
	}
	
	
	backButtonEvent() {
		this.platform.backButton.subscribeWithPriority(999999, async () => {
			this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
				if (this.router.url === '/package' || this.router.url === '/tickets' || this.router.url === '/create-ticket' || this.router.url === '/dashboard' || this.router.url === '/our-services' || this.router.url === '/homepage' || this.router.url === '/view-ticket' || this.router.url === '/' || this.router.url === '/signup' || this.router.url === '/login') {
					if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
						// this.platform.exitApp(); // Exit from app
						navigator['app'].exitApp(); // work in ionic 4
						
						} else {
						this.lastTimeBackPress = new Date().getTime();
					}
					} else if (outlet && outlet.canGoBack()) {
					outlet.pop();
					
				}
			});
		});
	}
	
	
	logout() {
		this.authService.logout().subscribe(
			data => {
				this.alertService.presentToast(data['message']);
			},
			error => {
				console.log(error);
			},
			() => {
				
				this.utype ='';
				
				return this.router.navigateByUrl('/login-page');
			}
		);
	}
	
}