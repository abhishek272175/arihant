import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arihant-demo',
  templateUrl: './arihant-demo.page.html',
  styleUrls: ['./arihant-demo.page.scss'],
})
export class ArihantDemoPage implements OnInit {

  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }
  ishidden = true;
  ishiddenof = false;
  ngOnInit() {
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
