import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-adding1',
  templateUrl: './device-adding1.page.html',
  styleUrls: ['./device-adding1.page.scss'],
})
export class DeviceAdding1Page implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  switches() {
		this.router.navigateByUrl('/all-button');
	}
  home() {
		this.router.navigateByUrl('/home');
	}
  profile() {
		this.router.navigateByUrl('/profile');
	}

}
