import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-device-adding3',
  templateUrl: './device-adding3.page.html',
  styleUrls: ['./device-adding3.page.scss'],
})
export class DeviceAdding3Page implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  switches() {
		this.router.navigateByUrl('/arihant-demo');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}
}
