class Game {
    constructor(){
        
    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        var plrluck = player.luck;
        var plrArray = [];
        var a;
    
        var plrReady = [];

        if(allPlayers !== undefined){

          for(var plr in allPlayers){

            plrArray.push(allPlayers[plr].luck);
            plrReady.push(allPlayers[plr].ready);  

            //console.log(allPlayers[plr].x);
            
          }

          if(allPlayers[plr].ready === true){

              allReady = allReady + 1;
              //console.log(allReady);

          }      

          for(var i = 0; i < plrArray.length; i++){

            a = plrArray[i];

              if(plrluck > a){
                player.state = "player";
                player.update();
              }
              else if(plrluck < a){
                player.state = "hunter";
                player.update();
              }
            
          }
          

        }

      }

    }

    gameStart(){

      if(gameState === 2){

        var index = 0;

        otherPlayer1.visible = true;
        otherPlayer1.scale = 0.3;
        otherPlayer2.visible = true;
        otherPlayer2.scale = 0.3;

        otherPlayerWeapon1.visible = true;
        otherPlayerWeapon1.scale = 0.6;
        otherPlayerWeapon2.visible = true;
        otherPlayerWeapon2.scale = 0.6;

        heartSprite.visible = true;

        form.hide(); 

        //Creating the other players of the game depending on player index number

        if(player.index === 1){

          player1 = mainPlayer;

          otherPlayer1.x = player2x;
          otherPlayer1.y = player2y;
          otherPlayer1.rotation = player2rot;

          otherPlayerWeapon1.x = playerwpn2x;
          otherPlayerWeapon1.y = playerwpn2y;
          otherPlayerWeapon1.rotation = playerwpn2rot;

          if(player2wpn === "bow"){

            otherPlayerWeapon1.addImage(bowImage);

          }
          if(player2wpn === "sword"){

            otherPlayerWeapon1.addImage(swordImage);

          }
          if(player2wpn === "trident"){

            otherPlayerWeapon1.addImage(tridentImage);

          }
          
          otherPlayer2.x = player3x;
          otherPlayer2.y = player3y;
          otherPlayer2.rotation = player3rot;

          otherPlayerWeapon2.x = playerwpn3x;
          otherPlayerWeapon2.y = playerwpn3y;
          otherPlayerWeapon2.rot = playerwpn3rot;

          if(player3wpn === "bow"){

            otherPlayerWeapon2.addImage(bowImage);

          }
          if(player3wpn === "sword"){

            otherPlayerWeapon2.addImage(swordImage);

          }
          if(player3wpn === "trident"){

            otherPlayerWeapon2.addImage(tridentImage);

          }

        }
        if(player.index === 2){

          player2 = mainPlayer;

          otherPlayer1.x = player1x;
          otherPlayer1.y = player1y;
          otherPlayer1.rotation = player1rot;

          otherPlayerWeapon1.x = playerwpn1x;
          otherPlayerWeapon1.y = playerwpn1y;
          otherPlayerWeapon1.rotation = playerwpn1rot;

          if(player1wpn === "bow"){

            otherPlayerWeapon1.addImage(bowImage);

          }
          if(player1wpn === "sword"){

            otherPlayerWeapon1.addImage(swordImage);

          }
          if(player1wpn === "trident"){

            otherPlayerWeapon1.addImage(tridentImage);

          }

          otherPlayer2.x = player3x;
          otherPlayer2.y = player3y;
          otherPlayer2.rotation = player3rot;
          
          otherPlayerWeapon2.x = playerwpn3x;
          otherPlayerWeapon2.y = playerwpn3y;
          otherPlayerWeapon2.rotation = playerwpn3rot;

          if(player3wpn === "bow"){

            otherPlayerWeapon2.addImage(bowImage);

          }
          if(player3wpn === "sword"){

            otherPlayerWeapon2.addImage(swordImage);

          }
          if(player3wpn === "trident"){

            otherPlayerWeapon2.addImage(tridentImage);

          }

        }
        if(player.index === 3){

          player3 = mainPlayer;
          otherPlayer1.x = player1x;
          otherPlayer1.y = player1y;
          otherPlayer1.rotation = player1rot;

          otherPlayerWeapon1.x = playerwpn1x;
          otherPlayerWeapon1.y = playerwpn1y;
          otherPlayerWeapon1.rotation = playerwpn1rot;

          if(player1wpn === "bow"){

            otherPlayerWeapon1.addImage(bowImage);

          }
          if(player1wpn === "sword"){

            otherPlayerWeapon1.addImage(swordImage);

          }
          if(player1wpn === "trident"){

            otherPlayerWeapon1.addImage(tridentImage);

          }

          otherPlayer2.x = player2x;
          otherPlayer2.y = player2y;
          otherPlayer2.rotation = player2rot;

          otherPlayerWeapon2.x = playerwpn2x;
          otherPlayerWeapon2.y = playerwpn2y;
          otherPlayerWeapon2.rotation = playerwpn2rot;

          if(player2wpn === "bow"){

            otherPlayerWeapon2.addImage(bowImage);

          }
          if(player2wpn === "sword"){

            otherPlayerWeapon2.addImage(swordImage);

          }
          if(player2wpn === "trident"){

            otherPlayerWeapon2.addImage(tridentImage);

          }

        }
        
        mainPlayer.collide(wallGroup);

        if(player.state === "player"){

          playerDamage = 2;
          mainPlayer.scale = 0.3;
          playerHtype = 0;

        }

        if(player.state === "hunter"){

          playerDamage = 1;
          mainPlayer.scale = 0.3;
          playerHtype = 40;

        }

        playerHealth = playerHealth - playerHtype - healthLost;

        //Player Movement
        mainPlayer.rotateToDirection = true;
        mainPlayer.visible =true;
        weaponSprite.visible = true;
        weaponSprite.rotateToDirection = true;

        //KitEffect

        if(player.choosenKit === "Kit1"){

          playerWeapon = "bow";
          playerArmor = "leather";

        }

        if(player.choosenKit === "Kit2"){

          playerWeapon = "sword";
          playerArmor = "chainmail";

        }

        if(player.choosenKit === "Kit3"){

          playerWeapon = "trident";
          playerArmor = "chainmail";

        }

        //WeaponEffect

        if(playerWeapon === "bow"){

          player.damageIncrease = 1.2;
          playerRange = 100;
          playerWeaponDelay = 40;
          weaponSprite.addImage("weapon", kitShowImg);

        }

        if(playerWeapon === "sword"){

          player.damageIncrease = 1.6;
          playerRange = 20;
          playerWeaponDelay = 20;
          weaponSprite.addImage("weapon", kitShowImg2);

        }

        if(playerWeapon === "trident"){

          playerDamageIncrease = 2;
          playerRange = 30;
          playerWeaponDelay = 50;
          weaponSprite.addImage("weapon", kitShowImg3);

        }
        
        //console.log(mainPlayer.rotation);

        //Player Movement

        if(keyDown("left_arrow")){

          mainPlayer.addAnimation("player", playerMovementImage);
          mainPlayer.rotation = 180;
          mainPlayer.velocityX = -3;

          weaponSprite.x = mainPlayer.x - 70;
          weaponSprite.y = mainPlayer.y;
          weaponSprite.rotation = 180;

        }
        else if(keyDown("right_arrow")){

          mainPlayer.addAnimation("player", playerMovementImage);
          mainPlayer.rotation = 0;
          mainPlayer.velocityX = 3;

          weaponSprite.x = mainPlayer.x + 70;
          weaponSprite.y = mainPlayer.y;
          weaponSprite.rotation = 0;

        }
        else if(keyDown("up_arrow")){

          mainPlayer.addAnimation("player", playerMovementImage);
          mainPlayer.rotation = 270;
          mainPlayer.velocityY = -3;

          weaponSprite.x = mainPlayer.x;
          weaponSprite.y = mainPlayer.y -70;
          weaponSprite.rotation = 270;

        }
        else if(keyDown("down_arrow")){

          mainPlayer.addAnimation("player", playerMovementImage);
          mainPlayer.rotation = 90;
          mainPlayer.velocityY = 3;
          
          weaponSprite.y = mainPlayer.x;
          weaponSprite.y = mainPlayer.y + 70;
          weaponSprite.rotation = 90;

        }
        else {

          mainPlayer.velocityX = 0;
          mainPlayer.velocityY = 0;
          mainPlayer.addAnimation("player", playerIdle)

        }

        if(keyWentDown("space") && mainPlayer.rotation === 180){

          weaponSprite.x = weaponSprite.x - 90;

        }
        else if(mainPlayer.rotation === 180){

          weaponSprite.x = mainPlayer.x - 70;

          if(mouseX < mainPlayer.x){

            weaponSprite.pointTo(mouseX, mouseY);

          }

        }

        if(keyWentDown("space") && mainPlayer.rotation === 0){

          weaponSprite.x = weaponSprite.x + 90;

        }
        else if(mainPlayer.rotation === 0){

          weaponSprite.x = mainPlayer.x + 70;

          if(mouseX > mainPlayer.x){

            weaponSprite.pointTo(mouseX, mouseY);

          }

        }

        if(keyWentDown("space") && mainPlayer.rotation > -91 && mainPlayer.rotation < -89){

          weaponSprite.y = weaponSprite.y -90;

        }
        else if(mainPlayer.rotation > -91 && mainPlayer.rotation < -89){

          weaponSprite.y = mainPlayer.y - 70;

          if(mouseY < mainPlayer.y){

            weaponSprite.pointTo(mouseX, mouseY);

          }

        }

        if(keyWentDown("space") && mainPlayer.rotation < 91 && mainPlayer.rotation > 89){

          weaponSprite.y = weaponSprite.y + 90;

        }
        else if( mainPlayer.rotation < 91 && mainPlayer.rotation > 89){

          weaponSprite.y = mainPlayer.y + 70;

          if(mouseY > mainPlayer.y){

            weaponSprite.pointTo(mouseX, mouseY);

          }

        }
        
        //ArmorEffect

        if(playerArmor === "leather"){

          playerDamageReduction = 1.5;

        }

        if(playerArmor === "chainmail"){

          player.damageReduction = 1.7;

        }

        if(playerArmor === "gold"){

          player.damageReduction = 2;

        }

        //Player Room Change

        if(mainPlayer.x > 0 && mainPlayer.x < 1500 && mainPlayer.y > 0 && mainPlayer.y < 750){

          camera.x = 750;
          camera.y = 375;
  
      }
      if(mainPlayer.x > 1500 && mainPlayer.x < 3000 && mainPlayer.y > 0 && mainPlayer.y < 750){
  
          camera.x = 2250;
          camera.y = 375;
  
      }
      if(mainPlayer.x < 0 && mainPlayer.x > -1500 && mainPlayer.y > 0 && mainPlayer.y < 750){
  
          camera.x = -750;
          camera.y = 375;
  
      }
  
      //Bottom Rooms
  
      if(mainPlayer.x > 0 && mainPlayer.x < 1500 && mainPlayer.y > 750 && mainPlayer.y < 1500){
  
          camera.x = 750;
          camera.y = 375 + 750;
  
      }
      if(mainPlayer.x > 1500 && mainPlayer.x < 3000 && mainPlayer.y > 750 && mainPlayer.y < 1500){
  
          camera.x = 2250;
          camera.y = 375 + 750;
  
      }
      if(mainPlayer.x < 0 && mainPlayer.x > -1500 && mainPlayer.y > 750 && mainPlayer.y < 1500){
  
          camera.x = -750;
          camera.y = 375 + 750;
  
      }
  
      //Top Rooms
  
      if(mainPlayer.x > 0 && mainPlayer.x < 1500 && mainPlayer.y < 0 && mainPlayer.y > -750){
  
          camera.x = 750;
          camera.y = -375;
  
      }
      if(mainPlayer.x < 0 && mainPlayer.x > -1500 && mainPlayer.y < 0 && mainPlayer.y > -750){
  
          camera.x = -750;
          camera.y = -375;
  
      }
      if(mainPlayer.x > 1500 && mainPlayer.x < 3000 && mainPlayer.y < 0 && mainPlayer.y > -750){
  
          camera.x = 2250;
          camera.y = -375;
  
      }
      
      //Boss Room
  
      if(mainPlayer.x > 3000 && mainPlayer.x < 4500){
  
          camera.x = 3750;
  
          if(mainPlayer.y > -425 && mainPlayer.y < 1125){
  
              camera.y = mainPlayer.y;
  
          }
  
      }

      //Hearts

      //console.log(playerHealth);

      if(keyWentDown("1")){

        playerHealth = playerHealth - 1;
        

      }

      if(playerHealth < 50 && playerHealth > 40){
        heartSprite.addImage(fiveHeart);

      }

      if(playerHealth < 40 && playerHealth > 30){

        heartSprite.addImage(fourHeart);

      }

      if(playerHealth < 30 && playerHealth > 20){

        heartSprite.addImage(threeHeart);

      }

      if(playerHealth < 20 && playerHealth > 10){

        heartSprite.addImage(twoHeart);

      }

      if(playerHealth < 10 && playerHealth > 0){

        heartSprite.addImage(oneHeart);

      }
      
      player.x = mainPlayer.x;
      player.y = mainPlayer.y;
      player.rotation = mainPlayer.rotation;
      player.damage = playerDamage;
      player.weapon = playerWeapon;
      player.armor = playerArmor;
      player.WeaponX = weaponSprite.x;
      player.WeaponY = weaponSprite.y;
      player.weaponRot = weaponSprite.rotation;

      player.updateInGame();
      
    }

    }
    
  }
  
