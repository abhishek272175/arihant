import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.page.html',
  styleUrls: ['./single-button.page.scss'],
})
export class SingleButtonPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  switches() {
		this.router.navigateByUrl('/switches');
	}
}
