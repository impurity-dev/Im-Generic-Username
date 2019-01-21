import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item-remote',
  templateUrl: './nav-item-remote.component.html',
  styleUrls: ['./nav-item-remote.component.css']
})
export class NavItemRemoteComponent {
  @Input() src: string;
  @Input() href: string;
  @Input() alt: string;
  @Input() title: string;
}
