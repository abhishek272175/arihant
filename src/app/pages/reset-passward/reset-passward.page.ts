import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reset-passward',
  templateUrl: './reset-passward.page.html',
  styleUrls: ['./reset-passward.page.scss'],
})

export class ResetPasswardPage {
 

  constructor(

    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }


  ngOnInit() {}

  otp() {
		this.router.navigateByUrl('/google-otp');
	}
}