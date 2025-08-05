import {Component, Input} from '@angular/core';

@Component({
  selector: 'boom-button',
  imports: [],
  templateUrl: './boom-button.html',
  styleUrl: './boom-button.scss'
})
export class BoomButton {
  @Input() url: string = ''; // ссылка для перехода

  openLink() {
    if (this.url) {
      window.open(this.url, '_blank', 'noopener,noreferrer');
    }
  }
}
