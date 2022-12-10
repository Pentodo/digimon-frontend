import { Component, Input } from '@angular/core';

import { FilterableDigimon } from '../digimon/digimon.interface';

@Component({
  selector: 'app-digimon-cards',
  templateUrl: './digimon-cards.component.html',
  styleUrls: ['./digimon-cards.component.css'],
})
export class DigimonCardsComponent {
  @Input() digimons: FilterableDigimon[] = [];
}
