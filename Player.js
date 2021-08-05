class Player {
  constructor(){

    this.index = null;
    this.name = null;
    this.choosenKit = 0;
    this.luck = round(random(0, 60));
    this.state = null;
    this.ready = false;

    this.damage = null;
    this.damageReduction = null;
    this.damageIncrease = null;
    this.armor = null;
    this.rotation = null;
    this.x = null;
    this.y = null;
    this.weapon = null;

    this.WeaponX = null;
    this.WeaponY = null;

    //this.xArray = [];
    //this.yArray = [];
    this.XYarray = [];

  }

  getCount(){

      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
      
          playerCount = data.val();
    
      });

    }

  getReadiness () {

    var ready = database.ref('players/player' + index);
    ready.on("value", (data)=> {

      readiness = data.val();

    });

  }


  updateCount(count){

      database.ref('/').update({

          playerCount: count
      
      });

  }

  update(){

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({

      name : this.name,
      kit : this.choosenKit,
      luck : this.luck,
      state : this.state,
      ready : this.ready

    });

  }

  updateInGame(){

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({

      name : this.name,
      kit : this.choosenKit,
      luck : this.luck,
      state : this.state,
      ready : this.ready,

      damage : this.damage ,
      damageReduction : this.damageReduction ,
      damageIncrease : this.damageIncrease ,
      armor : this.armor ,
      rotation : this.rotation ,
      x : this.x ,
      y : this.y ,
      weapon : this.weapon,
      weaponx : this.WeaponX,
      weapony : this.WeaponY,
      weaponRot : this.weaponRot

    });

  }


  getXInGame1(){


    var XYref = database.ref('players/player' + 1);
    XYref.on("value", function(data){
      XYvalue = data.val();
      
      var XYposition1 = [XYvalue.x, XYvalue.y];
      var Weaponposition1 = [XYvalue.weaponx, XYvalue.weapony];
      var Weaponrotation1 = XYvalue.weaponRot;
      var rotation1 = XYvalue.rotation;
      var weapon1 = XYvalue.weapon;

      player1x = XYposition1[0];
      player1y = XYposition1[1];
      player1rot = rotation1;
      playerwpn1x = Weaponposition1[0];
      playerwpn1y = Weaponposition1[1];
      playerwpn1rot = Weaponrotation1;
      player1wpn = weapon1;

    });

  }

  getXInGame2(){

    var XYref = database.ref('players/player' + 2);
    XYref.on("value", function(data){
      XYvalue = data.val();

      var XYposition2 = [XYvalue.x, XYvalue.y];
      var Weaponposition2 = [XYvalue.weaponx, XYvalue.weapony];
      var Weaponrotation2 = XYvalue.weaponRot;
      var rotation2 = XYvalue.rotation;
      var weapon2 = XYvalue.weapon;

      player2x = XYposition2[0];
      player2y = XYposition2[1];
      player2rot = rotation2;
      playerwpn2x = Weaponposition2[0];
      playerwpn2y = Weaponposition2[1];
      playerwpn2rot = Weaponrotation2;
      player2wpn = weapon2;

    });

  }
  
  getXInGame3(){

    var XYref = database.ref('players/player' + 3);
    XYref.on("value", function(data){
      XYvalue = data.val();
      
      var XYposition3 = [XYvalue.x, XYvalue.y];
      var Weaponposition3 = [XYvalue.weaponx, XYvalue.weapony];
      var Weaponrotation3 = XYvalue.weaponRot;
      var rotation3 = XYvalue.rotation;
      var weapon3 = XYvalue.weapon;
      
      player3x = XYposition3[0];
      player3y = XYposition3[1];
      player3rot = rotation3;
      playerwpn3x = Weaponposition3[0];
      playerwpn3y = Weaponposition3[1];
      playerwpn3rot = Weaponrotation3;
      player3wpn = weapon3;

    });

  }
  

  static getPlayerInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{

      allPlayers = data.val();

    })
    
  }

  
  
}
