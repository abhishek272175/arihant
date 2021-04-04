import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-device',
  templateUrl: './adding-device.page.html',
  styleUrls: ['./adding-device.page.scss'],
})
export class AddingDevicePage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  addingDevice() {
		this.router.navigateByUrl('/adding-device');
	}
}
