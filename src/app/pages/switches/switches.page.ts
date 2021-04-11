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

  ngOnInit() {
    let ref = this;
    var colorPicker = iro.ColorPicker("#picker",{width:150, color:"#ffffff"})
    colorPicker.on('color:change', function(color)
    
    {
      ref.colorcode = color.hexstring;
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

  
}
