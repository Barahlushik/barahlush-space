import {Component, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MapPopupComponent} from '../map-popup/map-popup';
import {BoomButton} from '../boom-button/boom-button';
import {AboutMe} from '../about-me/about-me';
import {Mailbox} from '../mailbox/mailbox';

@Component({
  selector: 'app-project-card',
  imports: [
    FormsModule,
    CommonModule,
    MapPopupComponent,
    BoomButton,
    AboutMe,
    Mailbox
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

}

