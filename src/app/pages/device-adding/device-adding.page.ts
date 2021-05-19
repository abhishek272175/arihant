import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-adding',
  templateUrl: './device-adding.page.html',
  styleUrls: ['./device-adding.page.scss'],
})
export class DeviceAddingPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  switches() {
		this.router.navigateByUrl('/single-button');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}
}
