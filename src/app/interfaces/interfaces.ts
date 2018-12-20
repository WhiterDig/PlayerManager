export interface Player {
  id: number;
  name: string;
  race: Race;
  class: Class;
  gender: Gender;
  level: number;
  height?: string;
  weight?: number;
  stats: {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
  };
  background?: string;
}

export enum Race {
  Elf = 'Elf',
  Human = 'Human',
  Dwarf = 'Dwarf',
  Gnome = 'Gnome',
  Halfling = 'Halfling',
  Orc = 'Orc',
  Goblin = 'Goblin'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export enum Class {
  Warrior = 'Warrior',
  Mage = 'Mage',
  Paladin = 'Paladin',
  Warlock = 'Warlock',
  Monk = 'Monk',
  Ranger = 'Ranger',
  Bard = 'Bard'
}
