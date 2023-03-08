import type { MouseSettlement } from "./settlement";

export type Background =
  | "forest"
  | "grassland"
  | "hills"
  | "mountain"
  | "swamp"
  | "barren"
  | "water";

export interface Hex {
  name: string;
  background: Background;
  terrain: string;
  landmark: string;
  description: string;
  settlement: MouseSettlement | null;
}

export function generateHex(forceSettlement: boolean = false) {
  const background: Background = generateBackground();
  const description = generateDescription();
  const landmark: string = generateLandmark(background);
  const settlement =
    description && !forceSettlement ? null : generateSettlement();
  const hex: Hex = {
    name: settlement?.name || landmark,
    background,
    terrain: generateTerrain(background),
    landmark,
    description: settlement
      ? `${sizeDescription(
          settlement.size
        )} ${settlement.governance.toLowerCase()}.`
      : description,
    settlement: settlement,
  };

  return hex;
}

export function generateEmptyHex() {
  const hex: Hex = {
    name: "",
    background: "grassland",
    terrain: generateTerrain("grassland"),
    landmark: "",
    description: "",
    settlement: null,
  };

  return hex;
}

function generateBackground() {
  const random = Math.floor(Math.random() * 6) + 1;
  switch (random) {
    case 1:
    case 2:
      return "grassland";
    case 3:
    case 4:
      return "forest";
    case 5:
      return "swamp";
    default:
      return "barren";
  }
}

export function generateTerrain(background: Background) {
  let random;
  switch (background) {
    case "forest":
      random = Math.floor(Math.random() * 6) + 1;
      return `/tiles/Terrain/Trees/tree${random}.png`;
    case "grassland":
      random = Math.floor(Math.random() * 5) + 1;
      return `/tiles/Terrain/Grass/hex_grass${random}.png`;
    case "hills":
      random = Math.floor(Math.random() * 4);
      return `/tiles/Terrain/Hills/hill_${random}.png`;
    case "mountain":
      random = Math.floor(Math.random() * 4) + 1;
      return `/tiles/Terrain/Mountains/hex_mountain${random}.png`;
    case "swamp":
      random = Math.floor(Math.random() * 5) + 1;
      return `/tiles/Terrain/Swamp/swamp${random}.png`;
    case "barren":
      random = Math.floor(Math.random() * 8) + 1;
      return `/tiles/Terrain/Sand/hex_sand${random}.png`;
    case "water":
      random = Math.floor(Math.random() * 5) + 1;
      return `/tiles/Terrain/Water/water${random}.png`;
  }
}

const landmarks = {
  grassland: [
    "Anthill",
    "Beech, lightning split",
    "Bone-white tree",
    "Cow skeleton",
    "Field of flowers",
    "Field of wheat",
    "Hedge row",
    "Hollow tree stump",
    "Huge flag rock",
    "Lily-lined pond",
    "Massive fallen tree",
    "Old craggy oak",
    "Old farmhouse",
    "Quiet dirt road",
    "Rabbit warren",
    "Sparrow nest",
    "Stand of pine trees",
    "Steep hill",
    "Stone wall",
    "Tangle of fig roots",
  ],
  forest: [
    "Abandoned shack",
    "Bright clearing",
    "Cascading waterfalls",
    "Cliff face",
    "Cold, fresh spring",
    "Dense underbrush",
    "Face in ancient oak",
    "Fox hole",
    "Grove of ferns",
    "Hollow tree stump",
    "Huge pine tree",
    "Human walking track",
    "Human-made clearing",
    "Meandering brook",
    "Overgrown ruins",
    "Ring of stones",
    "Rocky outcropping",
    "Sunken hollow",
    "Tangle of roots",
    "Termite-ridden tree",
  ],
  swamp: [
    "Canal lock",
    "Converging tributaries",
    "Draping willow",
    "Eroded riverbank",
    "Fallen tree crossing",
    "High waterfall",
    "Huge boulder",
    "Huge concrete dam",
    "Isolated island",
    "Muddy flags",
    "Rocky rapids",
    "Row of dead trees",
    "Silty dam",
    "Stepping stones",
    "Stone bridge",
    "Stony shallows",
    "Submerged trash",
    "Sunken barge",
    "Twisted roots",
    "Wooden bridge",
  ],
  barren: [
    "Abandoned car",
    "Apartment balcony",
    "Blackberry hedge",
    "Busy road",
    "Drainpipe outlet",
    "Dumped furniture",
    "Greenhouse",
    "Mouse ruins",
    "Newly built house",
    "Overgrown garden bed",
    "Pidgeon nest",
    "Pile of trash",
    "Rocky riverbed",
    "Shopping trolley",
    "Stagnant pond",
    "Steel bridge",
    "Trash-filled skip",
    "Tree-lined footpath",
    "Underground car park",
    "Woodshed",
  ],
  hills: [],
  mountain: [],
  water: [],
};

const landmarkDetails = [
  [],
  [
    "Small mouse farm (What threatens their crops?)",
    "Noblemouse's castle (What does it defend against?)",
    "Friendly mouse roadhouse (What is in the basement?)",
    "Mouse hunting lodge (What is their quarry?)",
    "Mining outpost (What have they uncovered?)",
    "Mouse hermit's hut (Why do they shun society?)",
    "Natural caves (What is living here?)",
    "Hedge-knight's tower (What is their quest?)",
  ],
  [
    "Songbird's nest (What sad tales do they sing of?)",
    "Tribe of huge, peaceful beasts (What do they fear?)",
    "Rat bandit hideout (What do they prey on?)",
    "Crow coven's spire (What spells do they caw?)",
    "Hive of insects (What do they hunger for?)",
    "Den of a great predator (What treasure do they guard?)",
    "Frog fortress (What lies hidden in the dungeon?)",
    "Mouse wizard's tower (What spell is almost finished?)",
  ],
  [
    "Dangerous natural feature (How can it be avoided?)",
    "Lonely shrine (Who maintains it? What do they worship?)",
    "Noblemouse's manor (Why was it abandoned?)",
    "Abandoned settlement (What clues did they leave?)",
    "Ruined watchtower (What did it guard from?)",
    "Natural feature, peaceful and safe (Who gathers here?)",
    "Natural feature, out of place (How did it form?)",
    "Rickety bridge (What does it cross over?)",
  ],
  [
    "Ancient bat cult temple (What was summoned?)",
    "Faerie ring (What business do the faeries have here?)",
    "Beetle graveyard (What do the ghosts want?)",
    "Mouse witch's hut (What is she brewing?)",
    "Small, deep pond (What is at the bottom?)",
    "Out-of-season plantlife (Why are they growing here?)",
    "Owl sorcerer's nest (What are they searching for?)",
    "Strange magical anomaly (Why is it spreading?)",
  ],
  [
    "Crashed Lilyputian airship (How can it be repaired?)",
    "Humming stone (What happens when touched?)",
    "Completely lifeless (What disaster has occurred?)",
    "Regularly used by humans (What do they do here?)",
    "Damaged by humans (What have they done?)",
    "Ancient ruins of a past civilization (Who built this?)",
    "Cat lord's hunting ground (What trophies remain?)",
    "Repurposed human construction (How is it used?)",
  ],
];

export function generateDescription(): string {
  const outer = Math.floor(Math.random() * 6);
  const inner = Math.floor(Math.random() * 8);

  if (outer === 0) {
    return "";
  }

  const description = landmarkDetails[outer][inner];
  if (!description) {
    return generateDescription();
  } else {
    return description;
  }
}

export function generateLandmark(background: Background): string {
  const random = Math.floor(Math.random() * 20);
  return landmarks[background]?.[random] || "";
}
