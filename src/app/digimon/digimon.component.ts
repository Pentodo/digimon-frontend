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
  filteredDigimons?: Digimon[];

  filter: string = '';

  constructor(private readonly digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimons();
  }

  getDigimons(): void {
    this.digimonService
      .getDigimons()
      .subscribe((digimons) => (this.digimons = digimons));
  }

  filterDigimons(): void {
    this.filteredDigimons = this.filter
      ? this.digimons.filter((digimon) => {
          return (digimon.name + digimon.level)
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        })
      : undefined;
  }
}
