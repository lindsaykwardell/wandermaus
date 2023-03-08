export interface MouseSettlement {
  name: string;
  size: number;
  governance: string;
  details: string;
  notableFeature: string[];
  industry: string[];
  event: string;
  taverns: Tavern[];
}

interface Tavern {
  name: string;
  specialty: string;
}
export function generateSettlement(): MouseSettlement {
  const size = getSize();

  return {
    name: getName(),
    size,
    governance: getGovernance(size),
    details: getDetails(),
    notableFeature: getNotableFeature(size),
    industry: getIndustry(size),
    event: getEvent(),
    taverns: getTaverns(size),
  };
}

function getSize() {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  // get the lower value
  return roll1 < roll2 ? roll1 : roll2;
}

const startNames = [
  "Oaks",
  "Berry",
  "Willow",
  "Stump",
  "Pine",
  "Moon",
  "Green",
  "Black",
  "Stone",
  "Hill",
  "Fig",
  "Apple",
  "Swamp",
  "Owl",
  "Fox",
  "Acorn",
  "Copper",
  "Robber",
  "Colby",
  "Drain",
  "Rose",
  "Copper",
  "Friend",
  "Trunk",
];

const endNames = [
  "thorp",
  "ville",
  "mill",
  "dale",
  "grove",
  "town",
  "vale",
  "seed",
  "ashe",
  "bush",
  "stitch",
  "shine",
  "stand",
  "hill",
  "tower",
  "farm",
  "bridge",
  "gate",
  "creek",
  "pond",
  "nest",
  "ford",
  "grave",
  "burn",
];

function getName() {
  const start = startNames[Math.floor(Math.random() * startNames.length)];
  const end = endNames[Math.floor(Math.random() * endNames.length)];

  return `${start}${end}`;
}

function getGovernance(size: number) {
  const roll = Math.floor(Math.random() * 6) + 1;
  const total = roll + size;

  switch (total) {
    case 2:
    case 3:
      return "Guided by village elders";
    case 4:
    case 5:
      return "Administered by a knight or lower-caste lord";
    case 6:
    case 7:
      return "Organized by guild committee";
    case 8:
    case 9:
      return "Free settlement, governed by council of burghermice";
    case 10:
    case 11:
      return "House of an upper caste noblemouse";
    default:
      return "Seat of baronial power";
  }
}

function getDetails() {
  const details = [
    "Shave elaborate patterns in their fur",
    "Intoxicated by strange plants",
    "Wary of doing business with outsiders",
    "Curious for news from afar",
    "Believe grooming their fur is bad luck",
    "Wear finely embroidered clothing",
    "Brew honey-mead, flavored with pungeant herbs",
    "Cover their faces with long hoods",
    "Impoverished by a cat lord's tithes",
    "Ceremonially crop their tails",
    "Brave hunters of large beasts",
    "All descended from single matriarch",
    "Bake delicious berry pies",
    "Lab escapees, naive about the world",
    "Spend their days lazing by a stream",
    "Long-standing blood feud with another settlement",
    "Dig grand tunnels, overseen by the guild",
    "Wear large, wide-brimmed hats",
    "Have laws and customs confusing to outsiders",
    "On friendly terms with a predator",
  ];

  const random = Math.floor(Math.random() * details.length);
  return details[random];
}

export function getNotableFeature(size?: number): [string] | [string, string] {
  const features = [
    "Maze of defensive, trap-filled tunnels",
    "Exceedingly comfortable, well-appointed inn",
    "Shrine carved of black wood",
    "Meditative mushroom garden",
    "Cow skull, repurposed as a guildhouse",
    "Mess of closely packed shanties",
    "Neat rows of hanging wooden houses",
    "Ornate gate, guarded by statues",
    "Secret bat cult temple",
    "Beetle racing rink",
    "Storehouse, stocked with preserves",
    "Hidden riverboat dock",
    "Crumbling marble palace, built by ancient mice",
    "Scavenged human machine, working",
    "Wooden bridge connects the settlement",
    "Unnervingly tall, twisting tower",
    "Beautiful flower garden",
    "Pigeon rider's roost",
    "Overgrown statue of an ancient hero",
    "Spiral stairwell, leading deep underground",
  ];

  const random = Math.floor(Math.random() * features.length);
  let random2 = Math.floor(Math.random() * features.length);

  while (random2 === random) {
    random2 = Math.floor(Math.random() * features.length);
  }

  if (size === 6) {
    return [features[random], features[random]];
  } else {
    return [features[random]];
  }
}

export function getIndustry(size?: number): [string] | [string, string] {
  const industry = [
    "Farmers, tending to towering crops",
    "Woodcutters, with saws and harnesses",
    "Rough and scarred fishermice, with nets and rafts",
    "Dark and musty mushroom farm",
    "Grains drying on every flat surface",
    "Pungent cheese, cured for years",
    "Gardens of rare herbs. Drying racks are guarded",
    "Hive of bees and their veiled keepers",
    "Merchants and traders, often in need of guards",
    "Stonemasons, working a nearby quarry",
    "Flour mill, driven by a large water-wheel",
    "Deep mine for iron, silver, or tin",
    "Keep silkworms and weave fine cloth",
    "Expert explorers of caves and tunnels",
    "Kiln-fired pottery, glazed in cheerful colours",
    "Wool mill, draped in bright cloth",
    "Excellent school, rowdy pupils",
    "Bustling, well-stocked market",
    "Smell scavenged trash pile, carefully picked over",
    "Beautiful furniture of carved and polished wood",
  ];

  const random = Math.floor(Math.random() * industry.length);
  let random2 = Math.floor(Math.random() * industry.length);

  while (random2 === random) {
    random2 = Math.floor(Math.random() * industry.length);
  }

  if (size === 6) {
    return [industry[random], industry[random]];
  } else {
    return [industry[random]];
  }
}

function getEvent() {
  const events = [
    "Disaster, everyone packing to leave",
    "Wedding, streets decked in flowers",
    "Preparing for grand seasonal feast",
    "An illness has struck",
    "Storehouse has been plundered by insects",
    "Market day, farmers flock to the settlement",
    "Mice are at each other's throats",
    "Warband forming to defeat a beast",
    "Several children have gone missing",
    "Noblemouse makes a frivolous demand",
    "Traveling theatre troupe has arrived",
    "Funeral, streets thick with smoke",
    "Conman whips up an irrational scheme",
    "Pet beetle gone mad, attacking mice",
    "Faerie emissary with an impossible request",
    "Strangely quick-growing plant nearby",
    "Valuable heirloom has been stolen",
    "Cat lord demands a heavy tithe",
    "Coming of age ceremony for the young mice",
    "Wizard tower arrives on tortoise-back",
  ];

  const random = Math.floor(Math.random() * events.length);
  return events[random];
}

export function getTaverns(size?: number): [Tavern] | [Tavern, Tavern] {
  function getTavern(): Tavern {
    const firstName = [
      "White",
      "Green",
      "Black",
      "Red",
      "Silver",
      "Crooked",
      "Friendly",
      "Hidden",
      "Wiley",
      "Glass",
      "Thorny",
      "Broken",
    ];

    const secondName = [
      "Beetle",
      "Fox",
      "Wedge",
      "Kernel",
      "Rat",
      "Cheese",
      "Eagle",
      "Worm",
      "Bee",
      "Lantern",
      "Rose",
      "Knight",
    ];

    const specialty = [
      "Spiced baked carrot",
      "Boiled worm broth",
      "Blackberry pie",
      "Pungent aged cheese",
      "Barley porriage",
      "Thick river-fish steak",
      "Baked apple",
      "Fried, crumbed insect legs",
      "Fresh buttered bread",
      "Scavenged candy",
      "Honey-roasted seeds",
      "Mushroom stew",
    ];

    const random1 = Math.floor(Math.random() * firstName.length);
    const random2 = Math.floor(Math.random() * secondName.length);
    const random3 = Math.floor(Math.random() * specialty.length);

    return {
      name: `${firstName[random1]} ${secondName[random2]}`,
      specialty: specialty[random3],
    };
  }

  if (size === 6) {
    return [getTavern(), getTavern()];
  } else {
    return [getTavern()];
  }
}

export function sizeDescription(size: number) {
  switch (size) {
    case 1:
      return "Farm/manor";
    case 2:
      return "Crossroads";
    case 3:
      return "Hamlet";
    case 4:
      return "Village";
    case 5:
      return "Town";
    default:
      return "City";
  }
}
