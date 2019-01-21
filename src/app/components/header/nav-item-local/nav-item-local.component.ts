import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item-local',
  templateUrl: './nav-item-local.component.html',
  styleUrls: ['./nav-item-local.component.css']
})
export class NavItemLocalComponent {
  @Input() src: string;
  @Input() href: string;
  @Input() alt: string;
  @Input() title: string;
}
