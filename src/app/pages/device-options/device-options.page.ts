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
}
