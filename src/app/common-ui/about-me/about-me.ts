import {Component, HostListener} from '@angular/core';
import {MapPopupComponent} from '../map-popup/map-popup';
import {NgIf, NgStyle} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'about-me',
  imports: [
    MapPopupComponent,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    NgStyle
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  showTerminal = false;
  showMap = false;
  mapX = 0;
  mapY = 0;

  toggleMap(event: MouseEvent): void {
    this.showMap = !this.showMap;
    if (this.showMap) {
      this.mapX = event.clientX + 10;
      this.mapY = event.clientY + 10;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.popup-wrapper') || target.closest('.city');
    if (!clickedInside) {
      this.showMap = false;
    }
  }
}
