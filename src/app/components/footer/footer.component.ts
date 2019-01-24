import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
