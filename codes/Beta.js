var options = {
  level: 6,
  time: 30,
  center: true,
  field: true,
  players_min: 2,
  rewards: ["🍪","🏆","👑","🥞","🥪","🍭","🤓","🍓","🥮","🍩","🍰","🌹","🎈","👍","👌"],
  vocabulary: [
    { text: "Hello", icon: "\u0045", key: "O" },
    { text: "Bye", icon: "\u0046", key: "B" },
    { text: "Yes", icon: "\u004c", key: "Y" },
    { text: "No", icon: "\u004d", key: "N" },
    { text: "Thanks", icon: "\u0041", key: "X" },
    { text: "Sorry", icon: "\u00a1", key: "S" },
    { text: "No Prob", icon: "\u0047", key: "P" },
    { text: "Good Game", icon: "\u00a3", key: "G" },
    { text: "Team", icon: "\u0031", key: "T" },
    { text: "Follow me", icon: "\u0050", key: "F" },
    { text: "Mine", icon: "\u0044", key: "M" },
    { text: "Attack", icon: "\u0049", key: "A" },
    { text: "Help", icon: "\u004a", key: "H" },
    { text: "Kill", icon: "\u005b", key: "K" },
    { text: "Leader", icon: "\u002e", key: "L" },
    { text: "Hmm", icon: "\u004b", key: "Q" },
    { text: "Radiation", icon: "\u00bc", key: "R" },
    { text: "Discord", icon: "\u007b", key: "D" },
  ]
};
var ships = [];
var Spectator_191 =
  '{"name":"Spectator","level":1.9,"model":1,"size":1,"zoom":0.37,"specs":{"shield":{"capacity":[999,999],"reload":[100,100]},"generator":{"capacity":[0.1,0.1],"reload":[1,1]},"ship":{"mass":60,"speed":[360,360],"rotation":[360,360],"acceleration":[360,360]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0,0,0],"height":[0,0,0,0,0,0,0,0,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]}},"wings":{"main":{"length":[0,0],"width":[0,0,0],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":191,"specs":{"shield":{"capacity":[999,999],"reload":[100,100]},"generator":{"capacity":[0.1,0.1],"reload":[1,1]},"ship":{"mass":60,"speed":[360,360],"rotation":[360,360],"acceleration":[360,360]}},"shape":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":0.6}}';
ships.push(Spectator_191);

options.category = {
  6 :{
    map: 50,
    codes:{
      select: [601,602,603,604,605,606,607,608],
      change: [601,602,603,604,605,606,607,608]
    },
    field: {
      add: 1,//0.65,
      start: 40,
      danger: 80,
      damage: 10
    },
    center: {
      size: 90,
      cooldown: 3,
    },
    drops: [10,10,10,10,10,10,11,11,11,11,12,20,90,90,91,91]
  }
};

options.advanced = options.category[options.level];



this.options = {
  map_name: "FFA Mod",
  choose_ship: options.advanced.codes.select,
  starting_ship: 801,
  max_level: 1,
  speed_mod: 1.2,
  radar_zoom: 1,
  weapons_store: false,
  root_mode: "",
  map_size: options.advanced.map,
  ships:ships,
  vocabulary: options.vocabulary,
  soundtrack: "argon.mp3",
  crystal_value: 0.7,
  asteroids_strength: 0.9,
  projectile_speed: 1.5,
};


for (let ship of game.ships) {
  if (ship.custom.data) ship.custom.data = null;
}


//Poner la variable mod
var mod  = {
  //Botones
  buttons:{
    list:{},
    creation: {
      default: function(id,position,text,key,cooldown,color) {
        let e = [
          cooldown === true ? 0.26 : 0.7,
          cooldown === true ? 0.04 : 0.1,
          color ? color : "204,221,238",
          ];
        return mod.actions.ui.modify(
          id,
          position,
          [
            {
              type: "box",
              position: [11.5, 0, 77, 40],
              fill: "rgba(	"+e[2]+" ,"+e[0]+")",
            },
            {
              type: "box",
              position: [0, 0, 10, 40],
              fill: "rgba(	"+e[2]+" ,"+e[0]+")",
            },
            {
              type: "box",
              position: [90, 0, 10, 40],
              fill: "rgba(	"+e[2]+" ,"+e[0]+")",
            },
            {
              type: "box",
              position: [0, 0, 100, 100],
              fill: "rgba(	"+e[2]+" ,"+e[1]+")",
            },
            {
              type: "box",
              position: [0, 48, 100, 3],
              fill: "rgba(	"+e[2]+" ,"+e[0]+")",
            },
            {
              type: "text",
              position: [5, 55, 90, 35],
              value: text,
              fill: "rgba(	"+e[2]+" ,1)",
            },
            {
              type: "text",
              position: [5, 0, 90, 40],
              value: "Press ["+key+"]",
              color: "#000000",
            },
          ],
          [true, key]);
      },
      change_ship: function (ship) {
        ship.custom.data.buttons.change_ship = true;
        let e = [[1, 30, 9, 5.5], (ship.custom.data.cooldowns.change_ship === true || ship.custom.data.spectate.active === true) ? true : false,];
        mod.actions.ui.set(ship,[mod.buttons.creation.default("change_ship",e[0],"Change Ship","1",e[1])]);
      },
      spectate: function (ship) {
        ship.custom.data.buttons.spectate = true;
        let e = [[11, 30, 9, 5.5],ship.custom.data.cooldowns.spectate === true ? true : false,];
        mod.actions.ui.set(ship,[mod.buttons.creation.default("spectate",e[0],"Spectate","0",e[1])]);
      },
      update_radar: function (ship) {
        ship.custom.data.buttons.update_radar = true;
        let e = [[5.5, 34, 9, 5.5],ship.custom.data.cooldowns.update_radar === true ? true : false,];
        mod.actions.ui.set(ship,[mod.buttons.creation.default("update_radar",e[0],"Update Radar","V",e[1],"255, 136, 136")]);
      },
    }
  },
  //Fase
  fase: {
    list :{
      wait:{
        text: {
        list: [
        "You can mine asteroids to get the TOP",
        "You can also kill alie.. wait, there is no",
        "No more than 30 minute farming on this mod",
        "Possibly you are looking at the discord while you wait",
        "Try to do 2 vs 1, it's good tip..",
        "When the game starts, you just have to kill everyone",
        "Relax, no mine traps here (I think)",
        "According to the configuration, there will be no secondaries in the center",
        "This is technically a copy of Survival and Battle Royale, also Pro Death Match",
        "For those who wanted the background, fuck you",
        "This mod was created with ChatGPT, although just 70%",
        "You can make yourself a coffee while you wait",
        "And yes, now Bastion can win this Survival",
        "It seems that we should not worry so much about the aliens..",
        "If you want a change of the mod, modify it and host it, thanks",
        "I don't know why you're reading this",
        "Please no toxicity, rather that's why there is only one emote normally",
        ],
        select: "",
        index: 0,
        change: function (){
          let e = mod.fase.list.wait.text;
          e.index = (e.index + 1) % e.list.length;
          e.select = e.list[e.index];
          return e.select;
        },
        },
        ui: {},
        time: options.time,
        clock: ""
      },
      start:{
        misc: {
          time: function (time) {
            if (time >= 0) {return time;
            } else return "0";
          }
        },
        ui: {},
        time: 10
      },
      survival:{
        ui:{
          //UI de la cantidad de supervivientes
          survivors: function (count) {
            return mod.actions.ui.modify(
              "survivors",
              [-40, 29, 100, 30],
              [
                {
                  type: "text",
                  position: [0, 0, 100, 15],
                  value: "Survivors: "+count,
                  color: "rgba(	255, 136, 136,1)",
                },
              ]
            );
          },
          //UI del mensaje de supervivencia
          survival: function (ship,active) {
            e = active === true ? "Survival Mode!" : "";
            return mod.actions.ui.set(ship,[mod.actions.ui.modify(
              "survival",
              [0, 82, 100, 30],
              [
                {
                  type: "text",
                  position: [0, 0, 100, 30],
                  value: e,
                  color: "rgba(	255, 136, 136,1)",
                },
              ]
            )]);
          },
          //UI de la advertencia
          warning: function (ship) {
          return  mod.actions.ui.set(ship,[mod.actions.ui.modify("survival",[0, 75, 100, 30],
              [
                {
                  type: "text",
                  position: [0, 42, 100, 9],
                  value: "You will receive a radar that by pressing [V] will show you the radioactive zone",
                  color: "rgba(	255, 136, 136,1)",
                },
                {
                  type: "text",
                  position: [0, 34, 100, 9],
                  value: "Cosmic radiation has been detected near",
                  color: "rgba(	255, 136, 136,1)",
                },
                {
                  type: "text",
                  position: [0, 20, 100, 13],
                  value: "Warning:",
                  color: "rgba(	255, 136, 136,1)",
                },
              ]
            )]);
          },
          //UI de detección de la radiación
          detect: function (ship) {
            let s = ship.custom.data;
            let e = {
              block : [],
              color : []
            };
            
            
            if (s.field.radiation >= 2 && s.field.frame === 1) {
              e.color = ["255, 255, 255","255, 255, 255","255, 255, 255"];
            } else e.color = ["255, 136, 136","255, 186, 186","255, 216, 216"];
            
            if (e.ship_distance > e.distance && s.field.damage > 0) s.field.damage = 0;
            
            if (s.field.radiation >= 2) {
              e.block.push({type:"box",position:[36,33,2,5],fill:"rgba(	"+e.color[2]+",1)"});
              
              
              e.block.push({type:"box",position:[62,33,2,5],fill:"rgba(	"+e.color[2]+",1)"});
            } if (s.field.radiation >= 1) {
              e.block.push({type:"box",position:[36,40,2,5],fill:"rgba(	"+e.color[1]+",1)"});
              e.block.push({ type:"box",position:[38.5,40,2,5],fill:"rgba(	"+e.color[1]+",1)"});
              
              
              e.block.push({type:"box",position:[62,40,2,5],fill:"rgba(	"+e.color[1]+",1)"});
              e.block.push({ type:"box",position:[59.5,40,2,5],fill:"rgba(	"+e.color[1]+",1)"});
            }
            
            
            if (s.field.radiation >= 2) {
              e[3] = "DANGER!";
            } else if (s.field.radiation === 1) {
              e[3] = "Medium";
            } else e[3] = "Low";
            return mod.actions.ui.set(ship,[mod.actions.ui.modify("survival",[0,75,100,30],[
              ...e.block,
              { type:"box",position:[36,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              { type:"box",position:[62,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              
              { type:"box",position:[38.5,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              { type:"box",position:[59.5,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              
              { type:"box",position:[41,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              { type:"box",position:[57,47,2,5],fill:"rgba(	"+e.color[0]+",1)"},
              
              
              { type: "text",position:[0,35,100,10],value:"Radiation level:",color:"rgba("+e.color[0]+",1)"},
              { type: "text",position:[0,43,100,10],value:e[3],color:"rgba("+e.color[0]+",1)"}
              ])]);
            
          },
          //UI del radar del campo de radiación
          field: function () {
          let w = mod.fase.list.survival;
            
          let e = {
            amount: w.time >= 8
            ? options.advanced.field.start + (options.advanced.field.add * (w.time - 8))
            : options.advanced.field.start,
            graphic: 0,
            danger: options.advanced.field.danger};
  
          e.graphic = 100*((e.amount) / (options.advanced.map*5));
          e.danger = 100*((e.amount - e.danger) / (options.advanced.map*5));
          
          // Crea un objeto con la configuración del radar
          return [
              {
                type: "round",
                position: [
                  50 - e.graphic / 2,
                  50 - e.graphic / 2,
                  e.graphic,
                  e.graphic,
                ],
                stroke: "rgba(255, 136, 136,0.3)",
                fill: "rgba(255, 136, 136,0.05)",
                width: 1,
              },
              e.danger >= 0
                ? {
                    type: "round",
                    position: [
                      50 - (e.danger) / 2,
                      50 - (e.danger) / 2,
                      e.danger,
                      e.danger,
                    ],
                    stroke: "rgba(255, 136, 136,0.4)",
                    fill: "rgba(255, 136, 136,0.10)",
                    width: 1,
                  }
                : null,
            ];
          },
          //UI del radar del centro de drops
          center: (function () {
            if (options.center === true){
              let e = {
                graphic: [],
                circle: {
                  a: ((options.advanced.center.size)/(options.advanced.map*5))*100,
                },
                symbol: {}
              };
     
              e.symbol.a = e.circle.a-2;
              e.circle.b = -e.circle.a/2;
              e.symbol.b = -e.symbol.a/2;

              e.circle.pos = [
                [100+e.circle.b, 100+e.circle.b],
                [e.circle.b, 100+e.circle.b],
                [e.circle.b, e.circle.b],
                [100+e.circle.b, e.circle.b]
              ];
              e.symbol.pos = [
                [100+e.symbol.b, 100+e.symbol.b],
                [e.symbol.b, 100+e.symbol.b],
                [e.symbol.b, e.symbol.b],
                [100+e.symbol.b, e.symbol.b]
              ];

              for (const [x,y] of e.symbol.pos) {
                e.graphic.push({
                  type: "text",
                  value: "🗲",
                  position: [x, y, e.symbol.a, e.symbol.a],
                  color: "rgba(255, 246, 77,0.45)"
                });
              }
  
              for (const [x,y] of e.circle.pos) {
                e.graphic.push({
                  type: "round",
                  position: [x, y, e.circle.a, e.circle.a],
                  stroke: "rgba(255, 246, 77,0.4)",
                  fill: "rgba(255, 246, 77,0.08)",
                  width: 1
                });
              }
  
            return e.graphic;
            } else {
              return [];
            }
        })(),
          //UI de la actualización del radar
          update_radar: function (ship) {
            mod.actions.ui.set(ship,[{
              id: "radar_background",
              visible: true,
              components: [
                ...mod.fase.list.survival.ui.center,
                ...mod.fase.list.survival.ui.field(),
              ]
            }]);
          },
        },
        field: {
          effect: function (ship) {
            
            let s = ship.custom.data;
            let w = mod.fase.list.survival;
            
            let a = w.time >= 8
            ? options.advanced.field.start + (options.advanced.field.add * (w.time - 8))
            : options.advanced.field.start;
            
            let e = {
              colors: [],
              block :[],
              radiation: "",
              kill:null,
              shield:0,
              crystals:ship.crystals,
              distance: a - options.advanced.field.danger,
              distance_danger: a,
              ship_distance: Math.sqrt(ship.x * ship.x + ship.y * ship.y)
            };
            
            if (e.ship_distance <= e.distance) {
              s.field.radiation = 2;
    
              if (s.rol === "survivor" && w.time >= 22) {
                s.field.damage = s.field.damage + 1;
    
                e.shield = ship.shield - 10*s.field.damage;
                if (e.shield < 0) {
                  e.crystals = Math.floor(e.crystals + e.shield);
                  e.shield = 0;
                  if (e.crystals < 0) {
                    e.crystals = 0;
                    e.kill = true;
                  }
                }
    
                ship.set({kill:e.kill,shield:e.shield,crystals:e.crystals});
              }
            } else if (e.ship_distance <= e.distance_danger) {
              s.field.radiation = 1;
            } else s.field.radiation = 0;
            
            if (s.field.radiation === 0 && s.field.damage > 1) s.field.damage = 0;
            
            w.ui.detect(ship);
          },
        },
        time:0,
        frame:0
      },
      win:{
        ui:{},
        list:[],
        time: 0,
        winner: false,
        player: function (ship) {
          ship.emptyWeapons();
          mod.actions.ui.clear(ship,["survivors","survival","menu","update_radar","radar_background"])
          let s = ship.custom.data;
          let w = mod.fase.list.win
          if (s.result.active !== true) {
          mod.actions.ui.set(ship,[w.result(s.result.ui, false)]);
              setTimeout(function () {
                mod.actions.ui.set(ship,[w.result(s.result.ui, true)]);
              }, 3000);
          }
          s.result.active = true;
          if (s.rol === "survivor") mod.actions.spectate(ship);
          echo("B")
          s.rol = "";
          s.skill.kills.now = 0;
          s.respawn_late = false;
          s.buttons.update_radar = false;
          ship.set({idle:true,score:0});
        },
        result: function (win_data, click) {
          let e =
            click === false
              ? { click: [false, ""], text: "" }
              : { click: [true, "9"], text: "Press [9] for another round" };
    
          return mod.actions.ui.modify(
            "result",
            [25, 25, 50, 40],
            [
              {
              type: "box",
              position: [0, 84.5, 100, 0.5],
              fill: "rgba(	204	,221,	238 , 1)",
            },
  
            {
              type: "box",
              position: [1, 47, 98, 35],
              fill: "rgba(	204	,221,	238 ,0.1)",
            },
  
            {
              type: "box",
              position: [0, 44, 100, 0.5],
              fill: "rgba(	204	,221,	238 , 1)",
            },
  
            //
  
            {
              type: "box",
              position: [1, 25, 98, 17],
              fill: "rgba(	204	,221,	238 ,0.1)",
            },
            //Linea
            {
              type: "box",
              position: [0, 22, 100, 0.5],
              fill: "rgba(	204	,221,	238 , 1)",
            },
  
            {
              type: "text",
              position: [30, 4, 40, 15],
              value: win_data[0],
              color: "rgba(	204	,221,	238 , 1)",
            },
            {
              type: "text",
              position: [-10.5, 15, 40, 6],
              value: "Round N°" + win_data[1],
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
            //
            {
              type: "text",
              position: [2.5, 28, 40, 6],
              value: "Kills:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "left",
            },
            {
              type: "text",
              position: [-10.5, 28, 40, 6],
              value: win_data[2],
              color: "rgba(	204	,221,	238 , 1)",
              align: "right",
            },
            //
            {
              type: "text",
              position: [2.5, 34, 40, 6],
              value: "Score:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "left",
            },
            {
              type: "text",
              position: [-10.5, 34, 40, 6],
              value: win_data[3],
              color: "rgba(	204	,221,	238 , 1)",
              align: "right",
            },
            //
            {
              type: "text",
              position: [30, 28, 40, 6],
              value: win_data[4],
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
            {
              type: "text",
              position: [30, 34, 40, 6],
              value: win_data[5],
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
  
            {
              type: "text",
              position: [64, 28, 40, 6],
              value: win_data[6],
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
            {
              type: "text",
              position: [64, 34, 40, 6],
              value: win_data[7],
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
  
            {
              type: "text",
              position: [34, 62, 40, 6],
              value: "Total kills:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "left",
            },
            {
              type: "text",
              position: [25, 62, 40, 6],
              value: win_data[8],
              color: "rgba(	204	,221,	238 , 1)",
              align: "right",
            },
            {
              type: "text",
              position: [34, 68, 40, 6],
              value: "Total Wins:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "left",
            },
            {
              type: "text",
              position: [25, 68, 40, 6],
              value: win_data[9],
              color: "rgba(	204	,221,	238 , 1)",
              align: "right",
            },
            {
              type: "text",
              position: [34, 74, 40, 6],
              value: "Total defeats:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "left",
            },
            {
              type: "text",
              position: [25, 74, 40, 6],
              value: win_data[10],
              color: "rgba(	204	,221,	238 , 1)",
              align: "right",
            },
            {
              type: "text",
              position: [30, 50, 40, 9],
              value: "All rounds:",
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
            {
              type: "text",
              position: [30, 88, 40, 9],
              value: e.text,
              color: "rgba(	204	,221,	238 , 1)",
              align: "center",
            },
          ],
          e.click
        );
      },
      },
    },
    select:"wait"
  },
  //Acciones o funciones
  actions: {
    //Para la UI
    ui: {
      clear: function (ship, components) {
        components.forEach((c) => {
          a = {
            id: `${c}`,
            position: [0, 0, 0, 0],
            visible: false,
            clickable: false,
            components: [],
          };
        ship.setUIComponent(a);
        });
      },
      set: function (ship, components) {
        components.forEach((c) => ship.setUIComponent(c));
      },
      modify: function (id, position, components, clickable) {
        const clickable_data = clickable ? clickable : [false, ""];
        return {
          id,
          position: position || [0, 0, 0, 0],
          clickable: clickable_data[0],
          shortcut: clickable_data[1],
          visible: components ? true : false,
          components: components || [],
        };
      },
    },
    //Para un jugador nuevo
    isnew : function(ship) {
      ship.set({idle:false,crystals:0,score:0,x:0,y:0});
      mod.actions.ui.clear(ship,["result","change_ship","spectate","survival","survivors","update_radar","radar_background"]);
      ship.custom.data = {
        buttons:{},
        cooldowns:{
          change_ship: false,
          spectate: false,
          update_radar: false,
        },
        skill: {
          kills:{now:0,total:0},
          losses:0,
          wins:0,
          killer: false
        },
        field: {
          radiation: 0,
          damage: 0,
          frame: 0
        },
        rol: "",
        spectate: {active:ship.type === 191 ? true : false},
        isnew: true,
        respawn_late: false,
        result: {active:false,list:{},ui:{}}
      };
      
      if (mod.fase.select !== "wait") mod.actions.spectate(ship);
    },
    finish: function () {
      mod.fase.list.wait.time = 0;
      mod.fase.list.start.time = 10;
      mod.fase.list.survival.time = 0;
      mod.fase.list.survival.frame = 0;
      mod.fase.list.win.time = 0;
      mod.fase.list.win.winner = false;
      mod.round = mod.round + 1
      mod.fase.select = "wait";
    },
    //Para poner a un jugador como espectador
    spectate: function (ship) {
      let a = ship.custom.data;

      if ((a.spectate.active === false) && ship.type !== 191) {
        ship.custom.code = ship.type;
        a.spectate.active = true;
        ship.set({crystals: 0, type: 191, stats: 0, shield: 999, collider: false});
      } else if (a.spectate.active === true) {
        a.spectate.active = false;
        ship.set({type:ship.custom.code,collider:false,shield: 999,stats: 7777777777});
      }
    },
    //Para poner un reloj segun cierto tiempo
    time: function (time) {
      //Meg
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
    } else return "0:00";
    
    },
    //Revisar la cantidad de jugadores
    players: function() {
      e = [0,0];
      for (let ship of game.ships) {
        if (ship.alive === true) {
          s = ship.custom.data;
          r = ship.custom.data.result.active;
          if (s.spectate.active !== true || s.rol === "survivor") {
            e[0] = e[0] + 1;
          } else e[1] = e[1] + 1;
        }
      }
    return e;
    //Agarrar un punto aleatorio
    },
    //Para agarrar un punto al azar, cercano a otro punto
    random_p: function (targetX, targetY, maxDistance, limit) { //Chat GPT
      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
      let e = {max:limit,min:-limit};
      e.x = targetX + getRandomNumber(-maxDistance, maxDistance);
      e.y = targetY + getRandomNumber(-maxDistance, maxDistance);

      e.x = ((e.x - e.min) % (e.max - e.min)) + e.min;
      e.y = ((e.y - e.min) % (e.max - e.min)) + e.min;
      return { x: e.x, y: e.y };
    },
    drop: function (i) {
      if (i === "secondaries") {
        if ( options.center === true && (game.step % 60) * options.advanced.center.cooldown === 0 ) {
          let f = options.advanced.drops
          let a = mod.actions.random_p(options.advanced.map * 5, options.advanced.map * 5, options.advanced.center.size, options.advanced.map * 5);
          game.addCollectible({code: f[Math.floor(Math.random() * f.length)], x: a.x, y: a.y,
          });
        }
      }
    },
    warp: function (ship) {
      x = (Math.random()- 0.5) * ship.game.options.map_size*10 ;
      y = (Math.random()- 0.5) * ship.game.options.map_size*10 ;
      ship.set({x:x,y:y,vx:0,vy:0}) ;
    }
  },
  //Recursos para el mod UI cosas que se guardan, etc?
  resource: {
    dots: {
      change: function (){
        let e = mod.resource.dots;
        e.index = (e.index + 1) % e.list.length;
        e.current = e.list[e.index];
        return e.current;
      },

      current: "",
      index: 0,
      list: [".", "..", "...", ""]
    },
    ui: {
      //Menu, osea la UI de abajo
      menu: function (fase, data, subtitle, mid, title2, title1, option = false) {
        
      let e = {}

      e.color = fase === "wait" || fase === "start"
        ? "rgba(204, 221,	238, 1)"
        : "rgba(255, 136, 136, 1)";
      e.spec = fase === "wait"
        ? "You are a spectator now, you will not play"
        : "You are a spectator, but you do not play";
      e.down = option === true ?
        [
          {
            type: "text",
            position: [0, 90, 100, 10],
            value: e.spec,
            color: e.color,
          },
          {
            type: "box",
            position: [35, 84, 30, 1],
            fill: e.color,
          },
        ] : [];
      return mod.actions.ui.modify(
        "menu",
        [0, 77, 100, 22],
        [
          ...e.down,
          { type: "box", position: [35, 64, 30, 1], fill: e.color},
          {
            type: "text",
            position: [0, 69.5, 100, 11],
            value: data,
            color: e.color,
          },
          {
            type: "text",
            position: [0, 47, 100, 14],
            value: subtitle,
            color: e.color,
          },
          {
            type: "text",
            position: [0, 29, 100, 15],
            value: mid,
            color: e.color,
          },
          {
            type: "text",
            position: [0, 23, 100, 20],
            value: title2,
            color: e.color,
          },
          {
            type: "text",
            position: [0, 10, 100, 20],
            value: title1,
            color: e.color,
          },
        ]
      );
    },
    },
  },
  round: 1,
};

mod.fase.list.wait.text.select = mod.fase.list.wait.text.list[mod.fase.list.wait.text.index];

this.tick = function(game) {
  if (game.step % 60 === 0) {
    
    for (let ship of game.ships) {
      if (ship.alive === true) {
        
        //Si es nuevo, ponerle todos sus datos
        ship.custom.kick = 0;
        if (!ship.custom.data) mod.actions.isnew(ship);
        
        if (ship.custom.data.respawn_late === true && ship.custom.data.result.ui[1] < mod.round) {
          ship.custom.data.result.ui[5] = mod.fase.list.win.list[ship.custom.data.result.ui[1] - 1];
          
          
          mod.fase.list.win.player(ship);
        }
      }
      if (ship.alive === false) {
        ship.custom.kick = ship.custom.kick > 0 ? ship.custom.kick + 1 : 1;
        if (ship.custom.kick > 50)
          ship.gameover({ "You have been dead for too long (50 seconds)":" ","Sorry but to avoid errors it has been kicked :(":"    ","Don't worry you can rejoin": "                  "});
      }
    }

    if (mod.fase.select === "wait") {
      w = mod.fase.list.wait;
      a = [
        game.step % 900 === 0 ? w.text.change() : w.text.select,
        mod.resource.dots.change()
        ];
      p = mod.actions.players();
      
      if (p[0] >= options.players_min) {
        w.time = w.time - 1;
        w.clock = mod.actions.time(w.time);
      } else {
        w.time = options.time;
        w.clock = "";
      }
      
      w.ui.menu = [
        mod.resource.ui.menu(
        "wait",
        "Ready players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        a[0],
        w.clock,
        "",
        "Waiting for more players"+a[1]),
        mod.resource.ui.menu(
        "wait",
        "Ready players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        a[0],
        w.clock,
        "",
        "Waiting for more players"+a[1],true),
      ];
      
      
      for (let ship of game.ships) {
        if (ship.alive === true && ship.custom.data.isnew === true) {
          r = ship.custom.data.result.active;
          s = ship.custom.data;
          
          
          if (r !== true) {
            if (s.buttons.change_ship !== true) mod.buttons.creation.change_ship(ship);
            if (s.buttons.spectate !== true) mod.buttons.creation.spectate(ship);
          s.spectate.active !== true ?
            (
              ship.set({stats:88888888,collider:true,shield:999,invulnerable:600,crystals:0}),
              mod.actions.ui.set(ship,[w.ui.menu[0]])
            ) : (
              mod.actions.ui.set(ship,[w.ui.menu[1]])
            );
          }
          
          if (w.time <= -1) {
            if (s.spectate.active !== true && r !== true) {
              s.rol = "survivor";
              ship.set({idle:true,collider:true,vx:0,vy:0})
            } else {
              ship.set({score:0,crystals:0})
            }
            mod.actions.ui.clear(ship,["change_ship","spectate"])
            s.buttons.change_ship = false; s.buttons.spectate = false;
          }
        }
      }
      if (w.time <= -1) mod.fase.select = "start";
    }
    
    if (mod.fase.select === "start") {
      w = mod.fase.list.start;
      p = mod.actions.players();
      a = [mod.resource.dots.change()]
      
      w.time = w.time - 1;
      
      w.ui.menu = w.time > 5 ?
      [
        mod.resource.ui.menu(
        "start",
        "Players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        "This is only a few seconds of tension",
        "",
        "The game is starting, please wait"+a[0],
        ""),
        mod.resource.ui.menu(
        "start",
        "Players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        "This is only a few seconds of tension",
        "",
        "The game is starting, please wait"+a[0],
        "",true),
      ] : [
        mod.resource.ui.menu(
        "start",
        "Players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        "You will be put into combat in "+w.misc.time(w.time),
        "",
        "",
        ""),
        mod.resource.ui.menu(
        "start",
        "Players: "+p[0]+"      Spectators: "+p[1]+"      Round: N°" +mod.round,
        "You will be put into combat in "+w.misc.time(w.time),
        "",
        "",
        "",true),
      ]
      
      for (let ship of game.ships) {
        if (ship.alive === true && ship.custom.data.isnew === true) {
          r = ship.custom.data.result.active;
          s = ship.custom.data;
          
          
          if (r !== true) {
            s.rol === "survivor" ?
            (
              mod.actions.ui.set(ship,[w.ui.menu[0]])
            ) : (
              mod.actions.ui.set(ship,[w.ui.menu[1]])
            );
            if (w.time === 5) {
              mod.fase.list.survival.ui.update_radar(ship);
              if (s.rol === "survivor") mod.actions.warp(ship);
            }
            if (w.time <= -1) {
              if (s.rol === "survivor") {
                ship.set({idle:false,collider:true,vx:0,vy:0,crystals:300,shield:999,generator:999})
              } else {
                ship.set({score:0,crystals:0})
              }
            }
          }
        }
      }
      if (w.time <= -1) mod.fase.select = "survival"
    }
    
    
    // MODO SUPERVIVENCIA PENDEJOS PUTOS DE MIERDA OJALA SE oki ya
    if (mod.fase.select === "survival") {
      w = mod.fase.list.survival;
      p = mod.actions.players();
      
      w.time = w.time + 1
      
      w.ui.menu = [
          mod.resource.ui.menu(
          "survival",
          "Spectators: "+p[1]+"      Round: N°" +mod.round,
          "",
          "",
          "",
          ""),
          mod.resource.ui.menu(
          "survival",
          "Spectators: "+p[1]+"      Round: N°" +mod.round,
          "",
          "",
          "",
          "",true),
          mod.fase.list.survival.ui.survivors(p[0])
        ]
      
      mod.actions.drop("secondaries");
      
      if (w.time >= 30 && p[0] <= 1) {
        mod.fase.select = "win";
      }
      
      for (let ship of game.ships) {
        if (ship.alive === true && ship.custom.data.isnew === true) {
          r = ship.custom.data.result.active;
          s = ship.custom.data;
          
          if (r !== true) {
            if (s.rol === "survivor") {
              if (mod.fase.select === "win") {
                mod.fase.list.win.list.push(ship.name);
                mod.fase.list.win.winner = ship.name;
                ship.set({collider:false,invulnerable:600})
                ship.emptyWeapons();
              }
              mod.actions.ui.set(ship,[w.ui.menu[0]])
            } else mod.actions.ui.set(ship,[w.ui.menu[1]])
            if (w.time  === 8) w.ui.warning(ship)
            if (w.time  === 20) mod.actions.ui.clear(ship,["survival"])
            if (w.time >= 8) {
              if (s.buttons.update_radar !== true) mod.buttons.creation.update_radar(ship);
                if (w.time >= 22) w.field.effect(ship);
              }
            mod.actions.ui.set(ship,[w.ui.menu[2]])
          }
        }
      }
    }
    
    
    // La victoria
    if (mod.fase.select === "win") {
      w = mod.fase.list.win;
      p = mod.actions.players();
      
      w.time = w.time + 1;
      
      w.ui.menu = [
          mod.resource.ui.menu(
          "survival",
          "Spectators: "+p[1]+"      Round: N°" +mod.round,
          "",
          "",
          "",
          ""),
          mod.resource.ui.menu(
          "survival",
          "Spectators: "+p[1]+"      Round: N°" +mod.round,
          "",
          "",
          "",
          "",true),
          mod.fase.list.survival.ui.survivors(p[0])
      ];
      
      if (w.time === 1 && w.winner === false) {
        w.winner = "No Winner";
        w.list.push("No Winner");
      }
      
      for (let ship of game.ships) {
        if (ship.alive === true && ship.custom.data.isnew === true) {
          r = ship.custom.data.result.active;
          s = ship.custom.data;
          
          
          if (r !== true) {
            if (s.rol === "survivor") {
              mod.actions.ui.set(ship, [w.ui.menu[0]]);
            } else mod.actions.ui.set(ship, [w.ui.menu[1]]);
            mod.actions.ui.set(ship,[w.ui.menu[2]]);
            
            if (w.time === 5) {
              if (s.rol === "survivor") {
                
                s.skill.wins = s.skill.wins + 1;
                s.result.list = {
                  line1: "You've won!",
                  line2: "Congratulations!",
                  line3: "Your reward:",
                  line4: options.rewards[Math.floor(Math.random() * options.rewards.length)]
                }
              } else {
                s.result.list = {
                  line1: "End of the game",
                  line2: "Winner:",
                  line3: "",
                  line4: ""
                }

                if (s.skill.killer === false) {
                  s.result.list.line3 = "Thanks for";
                  s.result.list.line4 = "spectate";
                } else {
                  s.result.list.line3 = "Your killer:";
                  s.result.list.line4 = s.skill.killer;
                }
              }
              
              s.result.ui = [
                s.result.list.line1,
                mod.round,
                s.skill.kills.now,
                ship.score,
                s.result.list.line2,
                w.winner,
                s.result.list.line3,
                s.result.list.line4,
                s.skill.kills.total,
                s.skill.wins,
                s.skill.losses,
              ];
              
              w.player(ship);
            }
          }
        }
      }
      
      if (w.time === 5) mod.actions.finish();
    }
  }
  
  if (game.step % 15 === 0) {
    if (mod.fase.select === "survival") {
      if (mod.fase.list.survival.frame < 15) {
        w = mod.fase.list.survival;
        w.frame = w.frame + 1;
        t = w.frame //XDDDD???????????????????
        for (let ship of game.ships) {
          if (ship.alive === true && ship.custom.data.result.active !== true && ship.custom.data.isnew === true) {
            if (t === 1 || t === 4 || t === 7 || w === 10 || w === 13) mod.fase.list.survival.ui.survival(ship,true);
            if (t === 3 || t === 6 || t === 9 || w === 12) mod.fase.list.survival.ui.survival(ship,false);
            if (t === 15) mod.actions.ui.clear(ship, ["survival"]);
          }
        }
      }
      if (mod.fase.list.survival.time >= 22) {
        for (let ship of game.ships) {
          if (ship.alive === true && ship.custom.data.isnew === true && ship.custom.data.field.radiation >= 2 && ship.custom.data.rol === "survivor" && ship.custom.data.result.active !== true) {
            let s = ship.custom.data;
            let w = mod.fase.list.survival;
            s.field.frame = s.field.frame + 1;
            if (s.field.frame === 2) s.field.frame = 0;
            w.ui.detect(ship);
            
          }
        }
      }
    }
  }
  
};

this.event = function (event, game) {
  switch (event.name) {
  case "ui_component_clicked" : {
    let ship, s, b = mod.buttons,component = event.id;
    if (event.ship) {
      ship = event.ship;
      s = ship.custom.data;
    }
    
    if (component === "change_ship" && mod.fase.select === "wait" && s.spectate.active !== true && s.cooldowns.change_ship !== true) {
      
      n = options.advanced.codes.change[(options.advanced.codes.change.indexOf(ship.type) + 1) % options.advanced.codes.change.length];
      ship.set({ type: n, stats: 777777777, shield: 9999 });
      s.cooldowns.change_ship = true;
      if (mod.fase.select === "wait") mod.buttons.creation.change_ship(ship);
      setTimeout (function(){
        s.cooldowns.change_ship = false;
        if (mod.fase.select === "wait" && s.spectate.active !== true) mod.buttons.creation.change_ship(ship);
      },360)
      
    }
    
    if (component === "spectate" && mod.fase.select === "wait" && s.cooldowns.spectate !== true) {
      
      mod.actions.spectate(ship);
      s.cooldowns.spectate = true;
      if (mod.fase.select === "wait") {
        s.spectate.active === true ? mod.actions.ui.set(ship,[w.ui.menu[1]]) : mod.actions.ui.set(ship,[w.ui.menu[0]]);
        mod.buttons.creation.change_ship(ship);
        mod.buttons.creation.spectate(ship);
      }
      setTimeout (function(){
        s.cooldowns.spectate = false;
        if (mod.fase.select === "wait") mod.buttons.creation.spectate(ship);
      },360)
      
    }
    
    if (component === "update_radar" && mod.fase.select === "survival" && s.cooldowns.update_radar !== true) {
      
      s.cooldowns.update_radar = true;
      mod.buttons.creation.update_radar(ship);
      mod.fase.list.survival.ui.update_radar(ship);
      
      setTimeout (function(){
        s.cooldowns.update_radar = false;
        if (mod.fase.select === "survival") mod.buttons.creation.update_radar(ship);
      },720)
      
    }
    
    if (component === "result") {
      
      s.result.active = false;
      mod.actions.ui.clear(ship,["result"]);
      ship.set({idle:false,x:0,y:0})
    }
    
    }
    
  break;
  case "ship_destroyed":
      ship = event.ship;
      s = ship.custom.data;
      
      if ((mod.fase.select === "survival" || mod.fase.select === "win") && s.rol === "survivor" && ship.custom.data.isnew === true) {
        mod.actions.spectate(ship);
        s.rol = "";
        s.skill.losses = s.skill.losses + 1;
        
        if (event.killer) {
          event.killer.custom.data.skill.kills.now = event.killer.custom.data.skill.kills.now + 1;
          event.killer.custom.data.skill.kills.total = event.killer.custom.data.skill.kills.total + 1
          
          s.skill.killer = event.killer.name;
        } else {
          s.skill.killer = "The magic of friendship"
        }
        
        
        s.result.ui = [
          "End of the game",
          mod.round,
          s.skill.kills.now,
          ship.score,
          "Winner:",
          w.winner,
          "Your killer:",
          s.skill.killer,
          s.skill.kills.total,
          s.skill.wins,
          s.skill.losses,
        ];
        s.respawn_late = true;
        
      }
  break;
  }
};


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