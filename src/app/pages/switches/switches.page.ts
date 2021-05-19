import { Component, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import iro from '@jaames/iro';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.page.html',
  styleUrls: ['./switches.page.scss'],
})
export class SwitchesPage implements OnInit {
  colorcode:string="";

  constructor() { }

  ishidden = true;
  ishiddenof = false;
  ishidden2 = true;
  ishiddenof2 = false;
  ishidden3 = true;
  ishiddenof3 = false;
  ishidden4 = true;
  ishiddenof4 = false;

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
  switcheson2() {

    this.ishidden2 = true;
    this.ishiddenof2 = false;

  }

  switchesoff2() {

    this.ishiddenof2 = true;
    this.ishidden2 = false;

  }
  switcheson3() {

    this.ishidden3 = true;
    this.ishiddenof3 = false;

  }

  switchesoff3() {

    this.ishiddenof3 = true;
    this.ishidden3 = false;

  }
  switcheson4() {

    this.ishidden4 = true;
    this.ishiddenof4 = false;

  }

  switchesoff4() {

    this.ishiddenof4 = true;
    this.ishidden4 = false;

  }


  
}
