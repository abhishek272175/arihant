import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-options',
  templateUrl: './device-options.page.html',
  styleUrls: ['./device-options.page.scss'],
})
export class DeviceOptionsPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  deviceAdding() {
		this.router.navigateByUrl('/device-adding');
	}
  deviceAdding1() {
		this.router.navigateByUrl('/device-adding1');
	}
  deviceAdding2() {
		this.router.navigateByUrl('/device-adding2');
	}
  deviceAdding3() {
		this.router.navigateByUrl('/device-adding3');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}
}
