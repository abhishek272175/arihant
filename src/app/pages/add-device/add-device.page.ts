import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  deviceOptions() {
		this.router.navigateByUrl('/device-options');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}
}
