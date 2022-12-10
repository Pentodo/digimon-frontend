export interface Digimon {
  name: string;
  img: string;
  level: string;
}

export interface FilterableDigimon extends Digimon {
  visible: boolean;
}
