import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  login() {
		this.router.navigateByUrl('/login-page');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}

}
