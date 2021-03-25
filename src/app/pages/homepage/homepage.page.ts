import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  slideOptsOne:any;
  SlideDidChange:any;
  sliderOne:any;
  dark:any;

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {


    this.events.publish('toggleMenu', {}
    );

  }

  checklogin_for_package() {
		//debugger;
		this.authService.getToken().then(isLoggedIn => {
			if (isLoggedIn != null) {
				this.router.navigateByUrl("/tickets");
			} else {
				this.router.navigateByUrl("/login");
			}
		});

  }
  
  ourservices() {
		this.router.navigateByUrl('/our-services');
	}

  ionViewWillEnter() {

		this.events.publish('toggleMenu', {}
		);

	}

}