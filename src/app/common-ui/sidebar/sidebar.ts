import { Component } from '@angular/core';
import {SvgIcon} from '../svg-icon/svg-icon';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIcon,
    NgForOf
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  menuItems = [
    {
      label: 'About me',
      icon: 'ankh',
      link: '#about'
    },
    {
      label: 'Projects',
      icon: 'ankh',
      link: '#projects'
    },
    {
      label: 'Funbox',
      icon: 'ankh',
      link: '#funbox'
    }

  ]
}
