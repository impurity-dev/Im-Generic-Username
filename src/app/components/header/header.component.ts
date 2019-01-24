import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _currentUrl: string;

  constructor(private _router: Router) {
    this._currentUrl = this._router.url;
  }

  ngOnInit() {
    this._router.events.subscribe(() => {
      this._currentUrl = this._router.url;
    });
  }

}
