import { Component, OnInit } from "@angular/core";
import { Events } from "../../services/events";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-google-otp",
  templateUrl: "./google-otp.page.html",
  styleUrls: ["./google-otp.page.scss"],
})
export class GoogleOtpPage implements OnInit {
  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}
  googleLogin() {
    this.router.navigateByUrl("/ssid-login");
  }
  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }
}
