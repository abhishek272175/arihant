import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router

  ) { }

  ngOnInit() {
  }

  googleLogin() {
		this.router.navigateByUrl('/google-login');
	}
}
