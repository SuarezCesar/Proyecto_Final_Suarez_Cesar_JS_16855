/*Importante: esta página la diseñé con escalabilidad en mente, este .js puede actualizarse con facilidad con los personajes
nuevos que vayan saliendo pusheandolo con el arte oficial de lanzamiento en su array y constructor correspondiente e inclusive esto
puede luego puede convertirse en una API. Además con toda la info que aporta el sitio de personajes y habilidades pueden
generarse más funciones si el juego lo requiriese*/

//Constructor de personajes pertenecientes al juego base. Se venden todos juntos.
class BaseGame {
  constructor(id, name, img, bundle) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.bundle = bundle;
  }
}

//Constructor de personajes licenciados, se venden solo con dinero real.
class PaidOnly {
  constructor(id, name, img, price, selected) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.selected = selected;
  }
}

//Constructor de personajes originales no pertenecesientes al juego base. Se venden con dinero o currency del juego que requiere horas.
class HybridPayment {
  constructor(id, name, img, price, hours, selected) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.hours = hours;
    this.selected = selected;
  }
}

baseGameCharacters = []; // Array de personajes del juego base.
paidOnlyCharacters = []; // Array de personajes exclusivamente vendidos por dinero.
grindCharacters = []; //Array de personajes que pueden comprarse con dinero u horas de juego.

const bill = new BaseGame(
  "bill",
  "William Overbeck",
  "images/base_game/bill.png",
  "bundle"
);

const claudette = new BaseGame(
  "claudette",
  "Claudette Morel",
  "images/base_game/claudette.png",
  "bundle"
);

const dwight = new BaseGame(
  "dwight",
  "Dwight Fairfield",
  "images/base_game/dwight.png",
  "bundle"
);

const david = new BaseGame(
  "david",
  "David King",
  "images/base_game/david.png",
  "bundle"
);

const jake = new BaseGame(
  "jake",
  "Jake Park",
  "images/base_game/jake.png",
  "bundle"
);

const meg = new BaseGame(
  "meg",
  "Meg Thomas",
  "images/base_game/meg.png",
  "bundle"
);

const nea = new BaseGame(
  "nea",
  "Nea Karlsson",
  "images/base_game/nea.png",
  "bundle"
);

const hillbilly = new BaseGame(
  "hillbilly",
  "The Hillbilly",
  "images/base_game/hillbilly.png",
  "bundle"
);

const huntress = new BaseGame(
  "huntress",
  "The Huntress",
  "images/base_game/huntress.png",
  "bundle"
);

const nurse = new BaseGame(
  "nurse",
  "The Nurse",
  "images/base_game/nurse.png",
  "bundle"
);

const trapper = new BaseGame(
  "trapper",
  "The Trapper",
  "images/base_game/trapper.png",
  "bundle"
);

const wraith = new BaseGame(
  "wraith",
  "The Wraith",
  "images/base_game/wraith.png",
  "bundle"
);

baseGameCharacters.push(
  bill,
  claudette,
  david,
  dwight,
  jake,
  meg,
  nea,
  hillbilly,
  huntress,
  nurse,
  trapper,
  wraith
);

//Declaración de los personajes paid only para enviar al constructor

const amanda = new PaidOnly(
  "amanda",
  "The Pig",
  "images/premium_dlc/amanda.png",
  115,
  0
);

const tapp = new PaidOnly(
  "tapp",
  "David Tapp",
  "images/premium_dlc/tapp.png",
  115,
  0
);

const laurie = new PaidOnly(
  "laurie",
  "Laurie Strode",
  "images/premium_dlc/laurie.png",
  115,
  0
);

const michael = new PaidOnly(
  "michael",
  "The Shape",
  "images/premium_dlc/michael.png",
  115,
  0
);

const quentin = new PaidOnly(
  "quentin",
  "Quentin Smith",
  "images/premium_dlc/quentin.png",
  115,
  0
);

const freddy = new PaidOnly(
  "freddy",
  "The Nightmare",
  "images/premium_dlc/freddy.png",
  115,
  0
);

const ash = new PaidOnly(
  "ash",
  "Ash Williams",
  "images/premium_dlc/ash.png",
  169,
  0
);

const cheryl = new PaidOnly(
  "cheryl",
  "Cheryl Mason",
  "images/premium_dlc/cheryl.png",
  115,
  0
);

const pyramid = new PaidOnly(
  "pyramidhead",
  "The executioner",
  "images/premium_dlc/pyramidhead.png",
  115,
  0
);

const jill = new PaidOnly(
  "jill",
  "Jill Valentine",
  "images/premium_dlc/jill.png",
  134,
  0
);

const leon = new PaidOnly(
  "leon",
  "Leon Kennedy",
  "images/premium_dlc/leon.png",
  134,
  0
);

const nemesis = new PaidOnly(
  "nemesis",
  "The Nemesis",
  "images/premium_dlc/nemesis.png",
  134,
  0
);

paidOnlyCharacters.push(
  laurie,
  michael,
  quentin,
  freddy,
  tapp,
  amanda,
  ash,
  cheryl,
  pyramid,
  jill,
  leon,
  nemesis
);

const feng = new HybridPayment(
  "feng",
  "Feng Ming",
  "images/original_dlc/feng.png",
  115,
  23,
  0
);

const doctor = new HybridPayment(
  "doctor",
  "The Doctor",
  "images/original_dlc/doctor.png",
  115,
  23,
  0
);

const ace = new HybridPayment(
  "ace",
  "Ace Visconti",
  "images/original_dlc/ace.png",
  115,
  23,
  0
);

const hag = new HybridPayment(
  "hag",
  "The Hag",
  "images/original_dlc/hag.png",
  115,
  23,
  0
);

const kate = new HybridPayment(
  "kate",
  "Kate Denson",
  "images/original_dlc/kate.png",
  115,
  23,
  0
);

const clown = new HybridPayment(
  "clown",
  "The Clown",
  "images/original_dlc/clown.png",
  115,
  23,
  0
);

const adam = new HybridPayment(
  "adam",
  "Adam Francis",
  "images/original_dlc/adam.png",
  115,
  23,
  0
);

const spirit = new HybridPayment(
  "spirit",
  "The Spirit",
  "images/original_dlc/spirit.png",
  115,
  23,
  0
);

const jeff = new HybridPayment(
  "jeff",
  "Jeff Johansen",
  "images/original_dlc/jeff.png",
  115,
  23,
  0
);

const legion = new HybridPayment(
  "legion",
  "The Legion",
  "images/original_dlc/legion.png",
  115,
  23,
  0
);

const jane = new HybridPayment(
  "jane",
  "Jane Romero",
  "images/original_dlc/jane.png",
  115,
  23,
  0
);

const plague = new HybridPayment(
  "plague",
  "The Plague",
  "images/original_dlc/plague.png",
  115,
  23,
  0
);

const yui = new HybridPayment(
  "yui",
  "Yui Kimura",
  "images/original_dlc/yui.png",
  115,
  23,
  0
);

const oni = new HybridPayment(
  "oni",
  "The Oni",
  "images/original_dlc/oni.png",
  115,
  23,
  0
);

const zarina = new HybridPayment(
  "zarina",
  "Zarina Kassir",
  "images/original_dlc/zarina.png",
  115,
  23,
  0
);

const slinger = new HybridPayment(
  "gunslinger",
  "The Deathslinger",
  "images/original_dlc/deathslinger.png",
  115,
  23,
  0
);

const felix = new HybridPayment(
  "felix",
  "Felix Richter",
  "images/original_dlc/felix.png",
  115,
  23,
  0
);

const blight = new HybridPayment(
  "blight",
  "The Blight",
  "images/original_dlc/blight.png",
  115,
  23,
  0
);

const elodie = new HybridPayment(
  "elodie",
  "Élodie Rakoto",
  "images/original_dlc/elodie.png",
  115,
  23,
  0
);

const twins = new HybridPayment(
  "twins",
  "The Twins",
  "images/original_dlc/twins.png",
  115,
  23,
  0
);

const yun = new HybridPayment(
  "yunjin",
  "Yun-jin Lee",
  "images/original_dlc/yunjin.png",
  115,
  23,
  0
);

const trickster = new HybridPayment(
  "trickster",
  "The Trickster",
  "images/original_dlc/trickster.png",
  115,
  23,
  0
);

grindCharacters.push(
  ace,
  hag,
  feng,
  doctor,
  kate,
  clown,
  adam,
  spirit,
  jeff,
  legion,
  jane,
  plague,
  yui,
  oni,
  zarina,
  slinger,
  felix,
  blight,
  elodie,
  twins,
  yun,
  trickster
);
