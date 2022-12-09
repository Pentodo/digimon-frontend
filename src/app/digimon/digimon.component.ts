import { Component } from '@angular/core';

import { Digimon } from './digimon.interface';
import { DigimonService } from './digimon.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css'],
})
export class DigimonComponent {
  digimons: Digimon[] = [];
  filteredDigimons: Digimon[] | undefined;

  filter: string = '';
  order: string = 'name';

  constructor(private readonly digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimons();
  }

  getDigimons(): void {
    this.digimonService.getDigimons().subscribe((digimons) => {
      this.digimons = digimons;
      this.sortDigimons();
    });
  }

  filterDigimons(): void {
    this.filteredDigimons = this.filter
      ? this.digimons.filter((digimon) =>
          `${digimon.name} ${digimon.level}`
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        )
      : undefined;
  }

  sortDigimons(): void {
    const levels: any = {
      Fresh: 0,
      'In Training': 1,
      Rookie: 2,
      Champion: 3,
      Ultimate: 4,
      Mega: 5,
      Armor: 6,
    };

    function sortByName(a: Digimon, b: Digimon) {
      return a.name > b.name ? 1 : -1;
    }
    function sortByLevel(a: Digimon, b: Digimon) {
      return levels[a.level] - levels[b.level];
    }

    const sortFunction = this.order === 'name' ? sortByName : sortByLevel;

    this.digimons.sort(sortFunction);
    if (this.filteredDigimons) {
      this.filteredDigimons.sort(sortFunction);
    }
  }
}
