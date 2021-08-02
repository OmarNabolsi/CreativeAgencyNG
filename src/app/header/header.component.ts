import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.navOpened = !this.navOpened;
  }
}
