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

  ishidden2 = true;
  ishiddenof2 = false;

  ishidden3 = true;
  ishiddenof3 = false;

  ishidden4 = true;
  ishiddenof4 = false;


  ishidden5 = true;
  ishiddenof5 = false;


  ishidden6 = true;
  ishiddenof6 = false;


  ngOnInit() {
  }
  singleswitch() {
		this.router.navigateByUrl('/single-button');
	}
  switcheson() {

    this.ishidden = true;
    this.ishiddenof = false;

  }
  switcheson2() {

    this.ishidden2 = true;
    this.ishiddenof2 = false;

  }

  switcheson3() {

    this.ishidden3 = true;
    this.ishiddenof3 = false;

  }

  switcheson4() {

    this.ishidden4 = true;
    this.ishiddenof4 = false;

  }

  switcheson5() {

    this.ishidden5 = true;
    this.ishiddenof5 = false;

  }

  switcheson6() {

    this.ishidden6 = true;
    this.ishiddenof6 = false;

  }
  switchesoff() {

    this.ishiddenof = true;
    this.ishidden = false;

  }
  switchesoff2() {

    this.ishiddenof2 = true;
    this.ishidden2 = false;

  }

  switchesoff3() {

    this.ishiddenof3 = true;
    this.ishidden3 = false;

  }

  switchesoff4() {

    this.ishiddenof4 = true;
    this.ishidden4 = false;

  }

  switchesoff5() {

    this.ishiddenof5 = true;
    this.ishidden5 = false;

  }

  switchesoff6() {

    this.ishiddenof6 = true;
    this.ishidden6 = false;

  }

}
