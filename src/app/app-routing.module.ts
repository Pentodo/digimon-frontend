import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DigimonComponent } from './digimon/digimon.component';

const routes: Routes = [
  {
    path: '',
    component: DigimonComponent,
    title: 'Digimon: Digital Monsters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
