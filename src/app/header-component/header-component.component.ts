import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  brandName: string;
  menuLinks: any = [];
  constructor() {
    this.brandName  = 'Clickholic';
    this.menuLinks = [
      { 'navName': 'Home', 'navLink': '/home' },
      { 'navName': 'About Us', 'navLink': '/aboutUs' },
      { 'navName': 'Gallery', 'navLink': '/gallery' },
      { 'navName': 'Contact Us', 'navLink': '/contactUs' }
    ];
  }

  ngOnInit() {
  }

}
