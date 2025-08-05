import {Component, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BoomButton} from '../boom-button/boom-button';
import {AboutMe} from '../about-me/about-me';
import {Mailbox} from '../mailbox/mailbox';

@Component({
  selector: 'app-project-card',
  imports: [
    FormsModule,
    CommonModule,
    BoomButton,
    AboutMe,
    Mailbox
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

  cards = [
    {
      name: 'barahlush.space',
      img: '/assets/img/barahlush-logo.jpg',
      description: 'My dive into frontend development — this personal website is built with Angular as a playground for my experiments, portfolio and visual ideas.',
      tags: ['Angular', 'Exspress', 'SQlite', 'Nginx', 'Umami'],
      sourceUrl: 'https://github.com/Barahlushik/barahlush-space'
    },
    {
      name: 'PSP-club',
      img: '/assets/img/psp-logo.jpg',
      description: 'A community portal for PSP console enthusiasts. Features a game library for download with installation guide, a progress tracking system, and the ability to share experiences with other users.',
      tags: ['C#', 'Go', 'Angular', 'Docker'],
      sourceUrl: ''
    },
    {
      name: 'Disk-gRipper',
      img: '/assets/img/ydisk.png',
      description: 'A utility script for Yandex Disk that helps identify and resolve duplicate files by safely removing unnecessary data. It also supports dumping and transferring files between multiple cloud storage providers.',
      tags: ['YandexDisk', 'C#', 'API', 'Script'],
      sourceUrl: ''
    },
    {
      name: 'Moomin-BrowserGame',
      img: '/assets/img/moomin-icon.jpg',
      description: 'Lightweight browser game with login on cookie based sessions, and auto-cleanup of sessions using scheduled tasks. Built with Servlets, JSP, JSTL and JDBC.',
      tags: ['Java EE', 'Servlet', 'JSP', 'Tomcat', 'JDBC'],
      sourceUrl: 'https://github.com/Barahlushik/Moomin-BrowserGame'
    },
    {
      name: 'Gothic-Souls',
      img: '/assets/img/gothic-game.png',
      description: 'A mini-game inspired by the Dark Souls series, developed using the Pygame library. Engage in battles with enemies, unleash special abilities, and clear the map of opponents.',
      tags: ['Python', 'PyGame', '2D'],
      sourceUrl: 'https://github.com/Barahlushik/GothicGame'
    }
  ];

  cardsPerPage = 3;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
  }

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.cardsPerPage;
    return this.cards.slice(start, start + this.cardsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}

