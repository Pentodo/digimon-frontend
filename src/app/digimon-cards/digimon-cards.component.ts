import { Component, Input } from '@angular/core';

import { Digimon, FilteredDigimon } from '../digimon/digimon.interface';

@Component({
  selector: 'app-digimon-cards',
  templateUrl: './digimon-cards.component.html',
  styleUrls: ['./digimon-cards.component.css'],
})
export class DigimonCardsComponent {
  @Input() digimons: FilteredDigimon[] = [];
}
