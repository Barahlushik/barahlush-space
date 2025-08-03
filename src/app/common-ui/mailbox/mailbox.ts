import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'mailbox',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mailbox.html',
  styleUrl: './mailbox.scss'
})
export class Mailbox {
  isPrivate = false;
  newShout = '';
  shouts: { date: string; message: string; reply?: string }[] = [
    {
      date: '2025-07-14 14:26',
      message: 'there was Rasim Eminemov'
    },
    {
      date: '2025-07-11 20:11',
      message: 'we are all watching the fragrant flower blooms with dignity!!',
      reply: 'wanna watch it together? 👀'
    },
    {
      date: '2025-07-07 22:18',
      message: 'как же хочется мачика'
    },
    {
      date: '2025-07-09 14:38',
      message: 'пинг'
    },
    {
      date: '2025-07-06 02:39',
      message: 'Hello',
      reply: 'hiiii:3'
    }
  ];

  submitShout() {
    if (this.newShout.trim()) {
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 16).replace('T', ' ');
      this.shouts.unshift({ date: dateStr, message: this.newShout.trim() });
      this.newShout = '';
    }
  }
}
