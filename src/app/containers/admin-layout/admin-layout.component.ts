import { Component, OnInit } from '@angular/core';
import { navItems } from './../../_nav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout.component.html',
  // styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
  }

}
