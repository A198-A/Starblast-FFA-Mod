/* FFA MOD | Cheap Battle Royale | Vanilla Battle royale | A better survival | v1.0

  It is a combination between Survial + Pro death match + Battle Royale, this
  will allow it to only be combat and not intense farming for 30 minutes,
  in addition to removing the emotes to prevent people from teaming up and
  things like that..

  You can also add your own ships and replace them with the vanilla ships,
  configure basic options or even options about which aliens you want in
  the game, drops, time and other things

  Done in five days, I think, in summary, the code is shit, by a198_owo
  
  COMMANDS:
  
    - spectate(id) : 
      Makes the player's "id" go into spectator mode, use it to toggle on and off
      
    - sayAll(message) :
      Says a message to all players via an instructor
      To hide the instructor do not put anything in the message, just the ()
      By the way the message must be between ""
      
*/


// || SETTINGS OF THE MOD ||
var options = {
  level: 6, //Level of the ships for the game in addition to the types of aliens, suitable for them, although you can change them below the code
  time: 7, //Waiting time, it has to be in minutes, JUST MINUTES
  animation: false, //Clock animation, causes a lot of lag but is very aesthetic
  alien_attack: {
    active: true, //If you want the aliens in survival mode to appear
    drops: true //If you want those aliens to drop secondaries
  }, 
  boss: {
    active: true,
    drops: true
  },
  alien_points: true, //Lobby aliens that are to earn points for the TOP
  center: true, //Center Secondary Weapon Spawn
  soundtracks: ["argon.mp3","warp_drive.mp3","crystals.mp3"], //List of music
  map_multiplier: 1, //Multiply the size of the map (In case you are lazy to change it below) if you don't want anything, just put 1
  text_list: { //Replace start or wait texts
    wait : [], // "Texto N°1", "Text N°2", ...
    attack: [],
  },
  
// || BASIC GAME SETTINGS OF this.options || READ DOWN
  this_list: {
    map_name: "FFA MOD",
    crystal_drop: 1,
    speed_mod: 1.2,
    crystal_value: 1,
    asteroids_strength: 0.2,
    strafe: 1,
    rcs_toggle: true,
    radar_zoom: 1,
    shield_regen_factor: 1,
    power_regen_factor: 1,
    weapons_store: false,
    
// DO NOT ADD OR MODIFY >:(
    //ships
    //vocabulary
    //lives
    //max_level
    //root_mode
    //survival_time
    //map_size
    //choose_ship
    //soundtrack
    //starting_ship
  }
};

// || CUSTOM SHIPS ||
var ships = [];

var Fly_705 = '{"name":"Mini Oddy","level":7,"model":5,"size":1,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":75,"speed":[125,145],"rotation":[360,720],"acceleration":[100,120]}},"tori":{"circle":{"segments":20,"radius":95,"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,40,45,10,12,30,30,40,30,0],"height":[0,20,25,25,10,12,25,25,20,10,0],"texture":[4,15,63,4,4,4,11,10,4,12]},"laser1":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12]},"laser2":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":180},"cannon":{"section_segments":6,"offset":{"x":0,"y":-115,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[6,6,6,10],"laser":{"damage":[20,30],"rate":1,"type":1,"speed":[200,250],"number":1,"error":2.5,"recoil":800}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"bumpers":{"section_segments":8,"offset":{"x":85,"y":20,"z":0},"position":{"x":[-5,0,5,10,5,0,-5],"y":[-85,-80,-40,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,5,0],"height":[0,20,35,35,25,15,0],"texture":[11,2,63,4,3],"angle":0},"toppropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true},"bottompropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true}},"wings":{"topjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[25],"position":[0,0,0,50],"texture":[1],"bump":{"position":10,"size":30}},"bottomjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[-25],"position":[0,0,0,50],"texture":[1],"bump":{"position":-10,"size":30}}},"typespec":{"name":"Mini Oddy","level":7,"model":5,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":75,"speed":[125,145],"rotation":[360,720],"acceleration":[100,120]}},"shape":[2.906,2.912,2.631,2.245,1.968,0.908,0.922,2.138,2.247,2.205,2.338,2.337,2.318,2.318,2.337,2.338,2.244,2.266,2.28,1.172,1.325,1.554,1.945,2.069,2.036,1.944,2.036,2.069,1.945,1.554,1.325,1.172,2.28,2.266,2.244,2.338,2.337,2.318,2.318,2.337,2.338,2.205,2.247,2.138,0.922,0.908,1.968,2.245,2.631,2.912],"lasers":[{"x":0,"y":-2.9,"z":0,"angle":0,"damage":[20,30],"rate":10,"type":1,"speed":[200,250],"number":1,"spread":0,"error":2.5,"recoil":500}],"radius":2.912}}';
var H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":500,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[5,8],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":500,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[5,8],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917}}';
var Toscain_508 = '{"name":"Toscain","level":5,"model":8,"size":1.7,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":8,"code":508,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01}}';

// Type 191
var Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[245,245],"rotation":[130,130],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0,0,0],"height":[0,0,0,0,0,0,0,0,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]}},"wings":{"main":{"length":[0,0],"width":[0,0,0],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":191,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[245,245],"rotation":[130,130],"acceleration":[120,120]}},"shape":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":0.6}}';
// Type 801 EXPERIMENTAL
var Survival_801 = '{"name":"Survival","level":8,"model":1,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[1,1],"rotation":[130,130],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0,0,0],"height":[0,0,0,0,0,0,0,0,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]}},"wings":{"main":{"length":[0,0],"width":[0,0,0],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Survival","level":8,"model":1,"code":801,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[1,1],"rotation":[130,130],"acceleration":[120,120]}},"shape":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":0.6}}';

ships.push(Fly_705);
ships.push(H_Mercury_609);
ships.push(Toscain_508);

//Commands ships
ships.push(Spectator_191);
ships.push(Survival_801);

//Vocabulary or emotes
var vocabulary = [
  { text: "Good Game", icon: "\u00a3", key: "G" },
  { text: "Hello", icon: "\u0045", key: "O" },
  { text: "Bye", icon: "\u0046", key: "B" },
  { text: "Yes", icon: "\u004c", key: "Y" },
  { text: "No", icon: "\u004d", key: "N" },
  { text: "Thanks", icon: "\u0041", key: "X" },
  { text: "Sorry", icon: "\u00a1", key: "S" },
  { text: "No Prob", icon: "\u0047", key: "P" },
  { text: "Team", icon: "\u0031", key: "T" },
  { text: "Follow me", icon: "\u0050", key: "F" },
  { text: "Mine", icon: "\u0044", key: "M" },
  { text: "Attack", icon: "\u0049", key: "A" },
  { text: "Help", icon: "\u004a", key: "H" },
  { text: "Kill", icon: "\u005b", key: "K" },
  { text: "Leader", icon: "\u002e", key: "L" },
  { text: "Hmm", icon: "\u004b", key: "Q" }
];

//Ship Tier Options
function getLevelData(level) {
  switch (level) {
    case 1:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 0, crystal_drop: 0},
            { code: 11, level: 0, crystal_drop: 0},
            { code: 11, level: 0, crystal_drop: 0},
            { code: 17, level: 0, crystal_drop: 0},
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 0, points: 50 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 10, level: 2, crystal_drop: 30 },
          ],
          count: 10,
          cooldown: 120,
          position: "center",
        },
        center: {
          cooldown: 1,
        },
        drops: [10,11,12],
        map: 30,
        crystals: 1000,
        tiers: [705],
        collision: false,
      };
    case 2:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 0, crystal_drop: 2 },
            { code: 11, level: 0, crystal_drop: 2 },
            { code: 17, level: 0, crystal_drop: 2 },
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 0, points: 50 },
          ],
          max: 10,
          cooldown: 1,
        },
        center: {
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 10, level: 2, crystal_drop: 30 },
          ],
          count: 10,
          cooldown: 120,
          position: "center",
        },
        drops: [10],
        map: 50,
        crystals: 80,
        tiers: [201, 202],
        collision: false,
      };
    case 3:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 0, crystal_drop: 5 },
            { code: 17, level: 0, crystal_drop: 5 },
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 0, points: 25 },
            { code: 10, level: 1, points: 50 },
            { code: 16, level: 1, points: 75 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 10, level: 3, crystal_drop: 200, weapon_drop:20},
          ],
          count: 1,
          cooldown: 120,
          position: "center",
        },
        center: {
          cooldown: 1,
        },
        drops: [10],
        map: 70,
        crystals: 180,
        tiers: [301, 302, 303, 304],
        collision: false,
      };
    case 4:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 1, crystal_drop: 8 },
            { code: 17, level: 0, crystal_drop: 8 },
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 0, points: 25 },
            { code: 10, level: 1, points: 50 },
            { code: 16, level: 1, points: 60 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 10, level: 3, crystal_drop: 200, weapon_drop:21},
          ],
          count: 1,
          cooldown: 120,
          position: "center",
        },
        center: {
          cooldown: 1,
        },
        drops: [10, 41, 42],
        map: 90,
        crystals: 320,
        tiers: [401, 402, 403, 404, 405, 406],
        collision: false,
      };
    case 5:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 2, crystal_drop: 11 },
            { code: 17, level: 1, crystal_drop: 11 },
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 1, points: 35 },
            { code: 10, level: 1, points: 50 },
            { code: 10, level: 2, points: 75 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 12, level: 0, crystal_drop: 200, weapon_drop:21},
          ],
          count: 1,
          cooldown: 120,
          position: "center",
        },
        center: {
          cooldown: 1,
        },
        drops: [10, 11, 41, 42],
        map: 110,
        crystals: 500,
        tiers: [501, 502, 503, 504, 505, 506, 507, 508],
        collision: false,
      };
    case 6:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 2, crystal_drop: 14 },
            { code: 17, level: 2, crystal_drop: 14 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 19, level: 0, crystal_drop: 100 , weapon_drop:21},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
            { code: 16, level: 0, crystal_drop: 10},
          ],
          count: 10,
          cooldown: 120,
          position: "center",
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 2, points: 50 },
            { code: 10, level: 1, points: 50 },
            { code: 10, level: 2, points: 75 },
          ],
          max: 10,
          cooldown: 1,
        },
        center: {
          cooldown: 1,
        },
        drops: [10, 10, 10, 11, 11, 11, 12, 90, 90, 91, 91],
        map: 130,
        crystals: 500,
        tiers: [601, 602, 603, 604, 605, 606, 607, 608, 609],
        collision: true,
      };
    case 7:
      return {
        alien_attack: {
          list: [
            { code: 11, level: 2, crystal_drop: 17 },
            { code: 17, level: 2, crystal_drop: 17 },
          ],
          max: 10,
          cooldown: 1,
        },
        alien_points: {
          list: [
            { code: 10, level: 0, points: 25 },
            { code: 16, level: 2, points: 50 },
            { code: 10, level: 1, points: 50 },
            { code: 10, level: 2, points: 75 },
          ],
          max: 10,
          cooldown: 1,
        },
        boss: {
          list: [
            { code: 15, level: 0, crystal_drop: 200, weapon_drop:21},
            { code: 14, level: 1, crystal_drop: 30}, //Tutorial to change the possibility
            { code: 14, level: 1, crystal_drop: 30},
            { code: 14, level: 1, crystal_drop: 30},
            { code: 14, level: 1, crystal_drop: 30},
            { code: 14, level: 2, crystal_drop: 30},
            { code: 14, level: 2, crystal_drop: 30},
            { code: 14, level: 2, crystal_drop: 30},
            { code: 14, level: 2, crystal_drop: 30},
          ],
          count: 10,
          cooldown: 240,
          position: "star",
        },
        center: {
          cooldown: 1,
        },
        drops: [10, 11, 12, 90, 91],
        map: 150,
        crystals: 980,
        tiers: [701, 702, 703, 704],
        collision: false,
      };
    default:
      return null;
  }
}

getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

if (options.level === "random") options.level = getRandomNumber(1, 7);

const dataForLevel = getLevelData(options.level);
let crystals,tiers,map,alien_attack,alien_points,drops,center, collision, boss;
({ alien_attack,alien_points, drops, map, crystals, tiers, center, collision, boss} = dataForLevel);

function hasContent(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined) {
      return true;
    }
  }
  return false;
}

if (drops.some(hasContent) === false) options.center === false;
if (boss.list.some(hasContent) === false) options.boss.active === false;
if (alien_attack.list.some(hasContent) === false) options.alien_attack.active === false;
if (alien_points.list.some(hasContent) === false) options.alien_points === false;


options.time = Math.floor(options.time);
time = options.time*60;
music = options.soundtracks[Math.floor(Math.random()*options.soundtracks.length)];

let display_text_index = 0, UI, TI_1, TI_2, bossUI, bossTI_1, bossTI_2,loading_dots_index = 0, boss_time = boss.cooldown,loading_text;
const loading_dots = [".","..","...",""];

display_text_0 = options.alien_points === true ?
  "You can also kill aliens to get the TOP" :
  "You can also kill alie.. wait, there is no";
display_text_1 = options.center === true ?
  "Tip, when it starts, secondaries will appear at the end of the map, try to stay there" :
  "According to the configuration, there will be no secondaries in the center";
display_text_2 = options.boss.active === true ?
  "Big waves of aliens are coming.." :
  "It seems that we should not worry so much about the aliens..";
let display_text_list = [
  "You can mine asteroids to get the TOP",
  display_text_0,
  "No more than 30 minute farming on this mod",
  "Possibly you are looking at the discord while you wait",
  "Try to do 2 vs 1, it's good tip..",
  "When the game starts, you just have to kill everyone",
  "Relax, no mine traps here (I think)",
  display_text_1,
  "This is technically a copy of Survival and Battle Royale, also Pro Death Match",
  "For those who wanted the background, fuck you",
  "This mod was created with ChatGPT, although just 70%",
  "You can make yourself a coffee while you wait",
  "And yes, now Bastion can win this Survival",
  display_text_2,
  "If you want a change of the mod, modify it and host it, thanks",
  "I don't know why you're reading this",
  "Please no toxicity, rather that's why there is only one emote normally"];

if (options.text_list.wait.length) display_text_list = options.text_list.wait;

  
this.options = {
  ships: ships,
  vocabulary: vocabulary,
  lives: 0,
  max_level: 1,
  root_mode: "survival",
  survival_time: options.time,
  map_size: Math.floor(map*options.map_multiplier),
  choose_ship: tiers,
  soundtrack: music,
  starting_ship:901, ...options.this_list
  
};

setUI = function(ship,components) {
  components.forEach(c => ship.setUIComponent(c))
};

modifyUI = function(id, position, components) {
  const visible = components ? true : false;
  return {
    id,
    position: position || [0,0,0,0],
    clickable: false,
    visible,
    components: components || [],
  };
};

const block_lives = {
  id: "block_lives",
  position: [0,0,0,0],
  clickable: true,
  shortcut: String.fromCharCode(187),
  visible: true,
};

let radar_background = options.center === true ? {
      id: "radar_background",
      visible: true,
      components: [ //String.fromCharCode(215)
        {type: "text",value:"🗲",position:[90,90,20,20],color:"rgba(255, 246, 77,0.8)"},
        {type: "text",value:"🗲",position:[-10,90,20,20],color:"rgba(255, 246, 77,0.8)"},
        {type: "text",value:"🗲",position:[-10,-10,20,20],color:"rgba(255, 246, 77,0.8)"},
        {type: "text",value:"🗲",position:[90,-10,20,20],color:"rgba(255, 246, 77,0.8)"},
        {type: "round",position:[88.5,88.5,22,22],stroke:"rgba(255, 246, 77,0.6)",fill:"rgba(255, 246, 77,0.15)",width:1},
        {type: "round",position:[-10.5,88.5,22,22],stroke:"rgba(255, 246, 77,0.6)",fill:"rgba(255, 246, 77,0.15)",width:1},
        {type: "round",position:[-10.5,-10.5,22,22],stroke:"rgba(255, 246, 77,0.6)",fill:"rgba(255, 246, 77,0.15)",width:1},
        {type: "round",position:[88.5,-10.5,22,22],stroke:"rgba(255, 246, 77,0.6)",fill:"rgba(255, 246, 77,0.15)",width:1},
      ]} : {
      id: "no_radar_background",
      position: [0,0,0,0],
      clickable: false,
      visible: false
    }
  
var internals_init = function() {
  if (game.custom.internals_init) {
    return;
  }
  const modding = game.modding;
  const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
  if (!internals) {
    modding.terminal.error("Error: modding internals object not found");
    return;
  }
  if (!internals.shipDisconnected.old) {
    function shipDisconnected({id} = {}) {
      if (modding.context.event && id) {
        var ship = game.findShip(id);
        if (ship) {
          modding.context.event({ name: "ship_disconnected", ship }, game);
        }
      }
      return shipDisconnected.old.apply(this, arguments);
    }
    shipDisconnected.old = internals.shipDisconnected;
    internals.shipDisconnected = shipDisconnected;
  }
  game.custom.internals_init = true;
};

this.tick = function(game) {
  this.tick = tick;
  internals_init();
  this.tick(game);
};

var tick = function(game) {
  
if (game.step % 60 === 0) {
  
  time--;
  let tf = formatTime(time);
  
  if (time > -1) { //BEFORE SURVIVAL MODE
  
    loading_dots_current = loading_dots[loading_dots_index];
    loading_text = `Waiting for more players${loading_dots_current}`;
    loading_dots_index = (loading_dots_index + 1) % loading_dots.length;
    
    if (game.step % 900 === 0) {
      display_text_index++
      if (display_text_index >= display_text_list.length) display_text_index = 0;
    }
  
    display_text = display_text_list[display_text_index]
  
    UI = modifyUI(`UI`,[2,67,239,42],[
          { type: "text",position:[-60,53,160,7],value:display_text,color:"#CDE"},
          { type: "text",position:[-60,32,160,10],value:loading_text,color:"#CDE"},]);
  
    if (options.animation === true) {
      TI_1 = modifyUI(`UI ${time}`, [2, 67, 239, 42], [{ type: "text", position: [-60, 42, 160, 10], value: tf, color: "#CDE" }]);
      TI_2 = modifyUI(`UI ${time + 1}`);
    } else {
      TI_1 = modifyUI(`TI`, [2, 67, 239, 42], [{ type: "text", position: [-60, 42, 160, 10], value: tf, color: "#CDE" }]);
      TI_2 = modifyUI(`TI_2`);
    }
  
    randomDrop("points");
  
    for (let ship of game.ships) {
      if (ship.alive) {
        setUI(ship,[UI,TI_1,TI_2,block_lives]);
        if (ship.custom.spec === true) {ship.set({collider:false});}
        else ship.set({stats:77777777,invulnerable:600,collider:collision,shield:999,crystals:0});
      }
    }
  }
  
  
  if (time <= -1) { //AFTER SURVIVAL MODE
  
    if (time === -1) { //START SURVIVAL MODE
      survival_start = true;
      let display_attack_text = [
        "It's time to kill everyone, kill them have no mercy",
      ]
      if (options.text_list.attack.length) display_attack_text = options.text_list.attack;
      display_attack_text = display_attack_text[Math.floor(Math.random()*display_attack_text.length)]
  
      UI = modifyUI(`UI`,[2,67,239,42],[
          { type: "text",position:[-60,56,160,9],value:display_attack_text,color:"#ff8888"},
        ]);
  
      if (options.animation === true) {
        TI_1 = modifyUI(`UI ${time}`);
        TI_2 = modifyUI(`UI ${time + 1}`);
      } else {
        TI_1 = modifyUI(`TI`);
        TI_2 = modifyUI(`TI_2`);
      }

      if (game.aliens.length > 0) {
        for (let alien of game.aliens) {
          alien.set({kill:true});
        }
      }
    }
    
    if (options.boss.active === true) {
      let tb = formatTime(boss_time--);
      
      if (boss_time > -2) {
        bossUI = modifyUI(`bossUI`,[2,72,239,42],[
              { type: "text",position:[-60,32,160,10],value:"Next Alien wave:",color:"#ff8888"},]);
            
        if (options.animation === true) {
          bossTI_1 = modifyUI(`bossTI ${time}`, [2, 72, 239, 42], [{ type: "text", position: [-60, 42, 160, 10], value: tb, color: "#ff8888" }]);
          bossTI_2 = modifyUI(`bossTI ${time + 1}`);
        } else {
          bossTI_1 = modifyUI(`bossTI_1`, [2, 72, 239, 42], [{ type: "text", position: [-60, 42, 160, 10], value: tb, color: "#ff8888" }]);
          bossTI_2 = modifyUI(`bossTI_2`);
        }
      } else if (boss_time <= -2) {
        loading_dots_current = loading_dots[loading_dots_index];
        loading_text = `Another wave is coming${loading_dots_current}`;
        loading_dots_index = (loading_dots_index + 1) % loading_dots.length;
      
        bossUI = modifyUI(`bossUI`,[2,72,239,42],[
              { type: "text",position:[-60,32,160,10],value:"Alien Wave Initiated",color:"#ff8888"},
              { type: "text",position:[-60,44,160,7],value:loading_text,color:"#ff8888"},]);
            
        if (options.animation === true) {
          bossTI_1 = modifyUI(`bossTI ${time}`);
          bossTI_2 = modifyUI(`bossTI ${time + 1}`);
        } else {
          bossTI_1 = modifyUI(`bossTI_1`);
          bossTI_2 = modifyUI(`bossTI_2`);
        }
      }
      
      if (boss_time === -2) {
        randomDrop("boss");
        setTimeout(function(){
          boss_time = boss.cooldown;
        }, 6000)
      }
    }
  
    randomDrop("secondaries");
    
    for (let ship of game.ships) {
      if (ship.alive && !ship.custom.start) {
        ship.custom.start = true;
        setUI(ship,[UI,TI_1,TI_2,block_lives,radar_background]);
        ship.set({stats:77777777,invulnerable:600,crystals:crystals,shield:999});
        if (ship.custom.spec === true) {ship.set({collider:false});}
        else ship.set({collider:true});
        if (ship.custom.spec !== true) warpShip(ship);
        setTimeout(function() {
          invisibleUI = modifyUI(`UI`);
          setUI(ship,[invisibleUI]);
        }, 6000);
        setTimeout(function() {
          if (options.boss.active === true) ship.custom.boss_ui = true;
        }, 9000);
      }
      if (options.boss.active === true && ship.alive && ship.custom.boss_ui) {
        setUI(ship,[bossUI,bossTI_1,bossTI_2])
      }
    }
  }
  
}
};

randomDrop = function(i){
  
  if (i === "points" && options.alien_points === true && game.aliens.length < alien_points.max && game.step % 60*alien_points.cooldown === 0 && alien_points.list.length > 0) {
  getRandomPoint(0,0,map,map*5)
  alien_select = alien_points.list[Math.floor(Math.random()*alien_points.list.length)];
  alien_select.x = randomList.x;
  alien_select.y = randomList.y;
  game.addAlien(alien_select);
  }
  
  if (i === "secondaries") {
    if (options.alien_attack.active === true && game.aliens.length < alien_attack.max && game.step % 60*alien_attack.cooldown === 0 && alien_attack.list.length > 0) {
      getRandomPoint(0,0,map*2,map*5)
      alien_select = alien_attack.list[Math.floor(Math.random()*alien_attack.list.length)];
      if (options.alien_attack.drops === true) alien_select.weapon_drop === false;
      if (!alien_select.weapon_drop && alien_select.weapon_drop !== false) alien_select.weapon_drop = drops[Math.floor(Math.random()*drops.length)];
      alien_select.x = randomList.x;
      alien_select.y = randomList.y;
      game.addAlien(alien_select);
    }
    if (options.center === true && game.step % 60*center.cooldown === 0 && drops.length > 0) {
      getRandomPoint(map*5,map*5,map,map*5)
      game.addCollectible({code:drops[Math.floor(Math.random()*drops.length)],x:randomList.x,y:randomList.y});
    }
  }
  
  if (i === "boss") {
    if (options.boss.active === true && game.aliens.length < 240 && boss.list.length > 0) {
      for (let i = 0; i < boss.count; i++) {
        if (game.aliens.length < 240) {
          let randomList;
          if (boss.position === "star") {
            randomList = getRandomPoint(0,0,map,map*5)
          } else randomList = getRandomPoint(map*5,map*5,map,map*5);
          alien_select = boss.list[Math.floor(Math.random()*boss.list.length)];
          if (options.boss.drops === true) alien_select.weapon_drop === false;
          if (!alien_select.weapon_drop && alien_select.weapon_drop !== false) alien_select.weapon_drop = drops[Math.floor(Math.random()*drops.length)];
          alien_select.x = randomList.x;
          alien_select.y = randomList.y;
          game.addAlien(alien_select);
        }
      }
    }
  }
};

getRandomPoint = function(targetX, targetY, maxDistance, limit) {
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  let randomX = targetX + getRandomNumber(-maxDistance, maxDistance);
  let randomY = targetY + getRandomNumber(-maxDistance, maxDistance);

  const maxLimit = limit;
  const minLimit = -limit;
  randomX = (randomX - minLimit) % (maxLimit - minLimit) + minLimit;
  randomY = (randomY - minLimit) % (maxLimit - minLimit) + minLimit;
  randomList = { x: randomX, y: randomY }
  return randomList;
};

warpShip = function (ship) {
  x = (Math.random()- 0.5) * ship.game.options.map_size*10 ;
  y = (Math.random()- 0.5) * ship.game.options.map_size*10 ;
  ship.set({x:x,y:y,vx:0,vy:0}) ;
};

formatTime = function (time) { //Meg
  if (time > 0) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (time % 60 === 0) {
      minutes = time / 60;
      seconds = "00";
      return minutes.toString() + ":" + seconds;
    }
    if (seconds < 10) seconds = "0" + seconds.toString();
    return minutes.toString() + ":" + seconds.toString();
  } else
return "0:00";
};

killAliens = function (){
  if (game.aliens.length > 0) {
    echo(`[[;#6aff59;]Aliens eliminated]`);
    for (let alien of game.aliens) {
      alien.set({kill:true});
    }
  } else {
    echo(`[[;#f07733;]There are no aliens in the game]`);
  }
}

let instructor_start = false;
sayAll = function(message){
  
  if (message) {
    if (instructor_start === false) {
      instructor_start = true;
      for (let ship of game.ships) {
        ship.instructorSays("\n\n\n\n")
      }
    }
    for (let ship of game.ships) {
      ship.instructorSays(message)
    }
  } else {
    for (let ship of game.ships) {
      ship.hideInstructor()
    }
  }
}

spectate = function(player) {
  if (game.ships[player]) {
     ship = game.ships[player];
    if (ship.custom.spec === true) {
      ship.set({type:ship.custom.type,collider:true,shield:999,stats:ship.custom.stats});
      ship.custom.spec = false;
      echo(`[[;#bfbfbf;]${ship.name} is no longer a spectator]`);
    } else {
      ship.custom.type = ship.type;
      ship.custom.stats = ship.stats;
      ship.set({type:191,stats:88888888,shield: 999,collider: false});
      ship.custom.spec = true;
      echo(`[[;#6aff59;]${ship.name} is now as a spectator]`);
    }
  } else {
    echo(`[[;#f07733;]You must put the ID of a valid player]`);
  }
};

let survival_start = false;
survival = function(id) {
  if (time < options.time*60 - 30 && survival_start === false){
    if (game.ships[id] && game.ships[id].alive === true) {
      survival_start = true;
      ship = game.ships[id]
      type_save = ship.type;
      ship.set({type:801});
      time = 0;
      setTimeout (function() {
        ship.set({type:type_save,shield:9999});
      }, 600)
    } else if (game.ships[id] && game.ships[id].alive === false) {
      echo(`[[;#f07733;]That player is not alive, use another one]`)
    } else echo(`[[;#f07733;]You need to place the ID of a live player]`);
  } else if (survival_start === true) {
    echo(`[[;#f07733;]Survival mode has already started]`);
  }
  else echo(`[[;#f07733;]You need to wait 30 seconds of open game to force start survival mode]`);
}

this.event = function(event, game) {
  switch (event.name)
  {
    case "ship_disconnected":
      let ships_alives = 0;
        for (let ship of game.ships) {
          if (ship.alive === true) {
            ships_alives++;
          }
        }
      if (time <= - 1) echo(`[[;#ffc054;]Player left: ${event.ship.name}\nRemaining survivors: ${ships_alives}]`);
      if (time > - 1) echo(`[[;#ff5454;]Player left: ${event.ship.name} :(\nRemaining players: ${ships_alives}]`);
      break;
    case "ship_destroyed":
      if (time > -10){
      deathUI = modifyUI(`UI`);
      let deathTI_1;
      let deathTI_2;
      if (options.animation === true) {
        deathTI_1 = modifyUI(`UI ${time}`);
        deathTI_2 = modifyUI(`UI ${time + 1}`);
      } else {
        deathTI_1 = modifyUI(`TI`);
        deathTI_2 = modifyUI(`TI_2`);
      } if (event.ship) {
        setUI(ship,[deathUI,deathTI_1,deathTI_2]);
       }
      }
      
      if (time <= -1){
        
        if (event.killer) {
          echo(`[[;#ffc054;]${event.ship.name} (ship: ${event.ship.type}) has been killed by ${event.killer.name} (ship: ${event.killer.type})]`);
        } else if (event.ship) {
          echo(`[[;#ffc054;]${event.ship.name} (ship: ${event.ship.type}) has died, don't ask me why]`)
        }
      }
    break;
  }
}

const aliens = [
  {
    id: "alien_1",
    obj: "https://raw.githubusercontent.com/A198-A/A198/main/obj/fortress.obj",
    diffuse: "https://raw.githubusercontent.com/A198-A/A198/main/alien/fortress.png",
    transparent: false,
    position: { x: -50, y: 10, z: -145 },
    rotation: { x: 0.1, y: 0, z: 1 },
    scale: { x: 1, y: 1, z: 1 }
  },
  {
    id: "alien_2",
    obj: "https://raw.githubusercontent.com/A198-A/A198/main/obj/chicken.obj",
    diffuse: "https://raw.githubusercontent.com/A198-A/A198/main/alien/chicken.png",
    transparent: false,
    position: { x: 70, y: -35, z: -130 },
    rotation: { x: 0.1, y: 0, z: 2 },
    scale: { x: 0.8, y: 0.8, z: 0.8 }
  },
  {
    id: "alien_3",
    obj: "https://raw.githubusercontent.com/A198-A/A198/main/obj/piranha.obj",
    diffuse: "https://raw.githubusercontent.com/A198-A/A198/main/alien/piranha.png",
    transparent: false,
    position: { x: -70, y: -65, z: -130 },
    rotation: { x: 0, y: 0.1, z: 0.1 },
    scale: { x: 3, y: 3, z: 3 }
  },
  {
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 3, y: 3, z: 3 }
  }
];

aliens.forEach(alien => {
  game.setObject({
    id: alien.id,
    type: alien,
    position: alien.position,
    rotation: alien.rotation,
    scale: alien.scale
  });
});