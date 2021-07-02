import { Component, OnInit } from "@angular/core";
import { Events } from "../../services/events";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}
  login() {
    this.router.navigateByUrl("/login-page");
  }
  signup() {
    this.router.navigateByUrl("/signup-page");
  }
}
