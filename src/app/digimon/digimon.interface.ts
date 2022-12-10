export interface Digimon {
  name: string;
  img: string;
  level: string;
}

export interface FilteredDigimon extends Digimon {
  visible: boolean;
}
