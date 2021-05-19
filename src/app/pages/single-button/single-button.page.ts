import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import iro from '@jaames/iro';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.page.html',
  styleUrls: ['./single-button.page.scss'],
})
export class SingleButtonPage implements OnInit {
  colorcode:string="";
  constructor(
    public events: Events,
    private authService: AuthService,
    public router: Router
  ) { }
  ishidden = true;
  ishiddenof = false;
  ngOnInit() {
    let ref = this;
    var values = document.getElementById("values");
    var hexInput = document.getElementById("hexInput");
    var colorPicker = iro.ColorPicker("#picker",{width:150, color:"#ffffff"})
    colorPicker.on(["color:init", "color:change"], function(color)
    
    {
      values.innerHTML = [
        "hex: " + color.hexString,
        // "rgb: " + color.rgbString,
        // "hsl: " + color.hslString,
      ].join("<br>");
    })
  }
  switcheson() {

    this.ishidden = true;
    this.ishiddenof = false;

  }

  switchesoff() {

    this.ishiddenof = true;
    this.ishidden = false;

  }
  switches() {
		this.router.navigateByUrl('/switches');
	}
}
