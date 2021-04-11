import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssid-login',
  templateUrl: './ssid-login.page.html',
  styleUrls: ['./ssid-login.page.scss'],
})
export class SsidLoginPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  deviceOptions() {
		this.router.navigateByUrl('/add-device');
	}

}
