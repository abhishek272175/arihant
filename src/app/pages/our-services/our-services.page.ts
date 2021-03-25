import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.page.html',
  styleUrls: ['./our-services.page.scss'],
})
export class OurServicesPage implements OnInit {

  constructor(

    private authService: AuthService,
    public router: Router

  ) { }

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

  ngOnInit() {
  }

}
