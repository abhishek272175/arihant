import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-button',
  templateUrl: './all-button.page.html',
  styleUrls: ['./all-button.page.scss'],
})
export class AllButtonPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }
  ishidden = true;
  ishiddenof = false;
  ngOnInit() {
  }
  singleswitch() {
		this.router.navigateByUrl('/single-button');
	}
  switcheson() {

    this.ishidden = true;
    this.ishiddenof = false;

  }

  switchesoff() {

    this.ishiddenof = true;
    this.ishidden = false;

  }

}
