import { Hex, generateFeature } from "./hex";

export interface River {
  x1: number;
  x2?: number;
  y1: number;
  y2?: number;
}

export interface Hexgrid {
  hexes: Hex[];
  rivers: River[];
}

export function generateHexgrid(): Hexgrid {
  return reactive({
    hexes: generateHexes(),
    rivers: [],
  });
}

export function generateEmptyHexgrid(): Hexgrid {
  return reactive({
    hexes: generateEmptyHexes(),
    rivers: [],
  });
}

export function generateHexes(): Hex[] {
  return Array.from({ length: 19 }, () => generateHex()).map((hex, index) => {
    if (index === 0) {
      return generateHex(true);
    } else {
      return hex;
    }
  });
}

export function generateEmptyHexes(): Hex[] {
  return Array.from({ length: 19 }, () => generateEmptyHex());
}
