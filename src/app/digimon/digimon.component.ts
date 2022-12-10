import { Component } from '@angular/core';

import { FilteredDigimon } from './digimon.interface';
import { DigimonService } from './digimon.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css'],
})
export class DigimonComponent {
  digimons: Array<FilteredDigimon> = [];

  filter: string = '';
  order: string = 'name';

  constructor(private readonly digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimons(this.sortDigimons);
  }

  getDigimons(...callback: Function[]): void {
    this.digimonService.getDigimons().subscribe((digimons) => {
      this.digimons = digimons.map((digimon) => {
        return ((digimon as FilteredDigimon) = { ...digimon, visible: true });
      });

      callback.forEach((fn) => fn());
    });
  }

  filterDigimons(): void {
    this.digimons.forEach((digimon) => {
      digimon.visible = this.filter
        ? `${digimon.name} ${digimon.level}`
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        : true;
    });
  }

  sortDigimons(): void {
    switch (this.order) {
      case 'name':
        this.digimons.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });

        break;

      case 'level':
        const levels: any = {
          Fresh: 0,
          'In Training': 1,
          Rookie: 2,
          Champion: 3,
          Ultimate: 4,
          Mega: 5,
          Armor: 6,
        };

        this.digimons.sort((a, b) => {
          return levels[a.level] - levels[b.level];
        });
    }
  }
}
