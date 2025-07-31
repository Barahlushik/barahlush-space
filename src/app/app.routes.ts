import { Routes } from '@angular/router';
import {Layout} from './common-ui/layout/layout';
import {ProjectCard} from './common-ui/project-card/project-card';

export const routes: Routes = [
  {
    path: '', component: Layout, children: [
      {path: '', component: ProjectCard}
    ]
  }
];
