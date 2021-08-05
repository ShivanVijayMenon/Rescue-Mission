//Create Variables to store data globally

var gameState = 0;
var playerCount;
var button, button2, button3, button4;
var dHeight = 0;
var dWidth = 0;
var starting;
var page = 0;
var allPlayers;
var database;
var allReady = 0;
var kit1, kit2, kit3;
var form, player, game;
var reset;
var choosenKitNumber;
var readiness;
var readyCount = 0;
var XYvalue;

//Create Variables for loading images

var playerSprite, playerFrontImg, playerRightImg, playerLeftImg;
var kit1img, kit2img, kit3img, kitShowImg;
var nextArrow, startImage, starting;
var backGround,  woodenBoardBack, backGroundStart;

//Create Walls

var FirstWall1, FirstWall2, FirstWall3, FirstWall4, FirstWall5, FirstWall6, FirstWall7, FirstWall8;
var ThirdWall1, ThirdWall2, ThirdWall3, ThirdWall4, ThirdWall5, ThirdWall6, ThirdWall7, ThirdWall8;
var FourthWall1, FourthWall2, FourthWall3, FourthWall4, FourthWall5, FourthWall6, FourthWall7, FourthWall8;
var FifthWall1, FifthWall2, FifthWall3, FifthWall4, FifthWall5, FifthWall6, FifthWall7, FifthWall8;
var SixthWall1, SixthWall2, SixthWall3, SixthWall4, SixthWall5, SixthWall6, SixthWall7, SixthWall8;
var SeventhWall1, SeventhWall2, SeventhWall3, SeventhWall4, SeventhWall5, SeventhWall6, SeventhWall7, SeventhWall8;
var EigthWall1, EigthWall2, EigthWall3, EigthWall4, EigthWall5, EigthWall6, EigthWall7, EigthWall8;
var GrandWall1, GrandWall2, GrandWall3, GrandWall4, GrandWall5, GrandWall6, GrandWall7, GrandWall8;

var wallGroup, dungeonGroup;

var mainRoom, mainRoomImage;
var centreRightRoom, centreLeftRoom, centreRightImage, centreLeftImage;
var bottomRightRoom, bottomLeftRoom, bottomRightImage, bottomLeftImage;
var topRightRoom, topLeftRoom, topRightImage, topLeftImage;

var door1;

var centreRightWall1, centreRightWall2, centreRightWall3, centreRightWall4, centreRightWall5, centreRightWall6, centreRightWall7;
var centreLeftWall1, centreLeftWall2, centreLeftWall3, centreLeftWall4, centreLeftWall5, centreLeftWall6, centreLeftWall7;

//PlayerLocation

var mainPlayer, playerImage;
var playerX, playerY, playerRot;
var playerWeapon, playerArmor;
var playerDamage, playerDamageReduction, playerDamageIncrease;
var playerRange, playerWeaponDelay
var playerHealth, healthLost, playerHtype;

var weaponSprite, weaponSpriteImage;
var bowImage, swordImage, tridentImage;

var playerMovementImage, gunKitWeaponImage, handGunkitWeaponImage, shotGunWeaponImage, playerIdle;

var othermainPlayerSprite, Other1PlayerX, Other1PlayerY;

//Player health variables

var fiveHeart, fourHeart, threeHeart, twoHeart, oneHeart, heartSprite;

//creating player Sprites for linking each players game

var mainPlayer, player1, player2, player3;
var otherPlayer1, otherPlayer2;
var player1x, player2x, player3x, player1y, player2y, player3y, player1rot, player2rot, player3rot;
var playerwpn1x, playerwpn2x, playerwpn3x, playerwpn1y, playerwpn2y, playerwpn3y, playerwpn1rot, playerwpn2rot, playerwpn3rot;
var player1wpn, player2wpn, player3wpn;

function preload(){

    //Preload Background Images

    backGround = loadImage("Images/Background.png");
    floor = loadImage("Images/backgroundStart.png");
    startImage = loadImage("Images/start.png");
    woodenBoardImage = loadImage("Images/boardwithText.png");
    woodenBoardBack = loadImage("Images/Background2.png");

    //Preload Arrows

    nextArrow = loadImage("Images/nextArrow.png");

    //Preload Kit Images

    kit1img = loadImage("Images/Kit1.png");
    kit2img = loadImage("Images/Kit2.png");
    kit3img = loadImage("Images/Kit3.png");

    //Preload Player Images

    playerFrontImg = loadAnimation("Images/PlayerFront.png");
    playerRightImg = loadAnimation("Images/PlayerRight.png");
    playerLeftImg = loadAnimation("Images/PlayerLeft.png");
    playerBackImg = loadAnimation("Images/PlayerBack.png");

    //Preload Images to show selected kits

    kitShowImg = loadImage("Images/BowStandard.png");
    kitShowImg2 = loadImage("Images/Sword.png");
    kitShowImg3 = loadImage("Images/Trident.png");

    //Wall Images

    horizontalDoorWall = loadImage("Images/DoorWalls1.png");
    verticalDoorWall = loadImage("Images/DoorWall2.png");

    //Floor Images

    bossFloorImage = loadImage("Images/bossRoomFloor.png");

    //Door Images

    doorUp = loadImage("Images/DoorUp.png");
    doorSides = loadImage("Images/DoorSides.jpg");1

    //Room Images

    mainRoomImage = loadImage("Images/mainRoom.png");
    centreRightImage = loadImage("Images/centreRight.png");
    centreLeftImage = loadImage("Images/centreLeft.png");
    bottomRightImage = loadImage("Images/bottomRight.png");
    bottomLeftImage = loadImage("Images/bottomLeft.png");
    bottomMiddleImage = loadImage("Images/bottomMiddle.png");
    topRightImage = loadImage("Images/topRight.png");
    topLeftImage = loadImage("Images/topLeft.png");
    topMiddleImage = loadImage("Images/topMiddle.png");

    //Player Movement

    playerMovementImage = loadAnimation("Top_Down_Survivor/flashlight/meleeattack/survivor-meleeattack_flashlight_6.png", "Top_Down_Survivor/flashlight/meleeattack/survivor-meleeattack_flashlight_7.png", "Top_Down_Survivor/flashlight/meleeattack/survivor-meleeattack_flashlight_12.png");

    playerIdle = loadAnimation("Top_Down_Survivor/flashlight/meleeattack/survivor-meleeattack_flashlight_6.png");

    //WeaponImage

    bowImage = loadImage("Images/BowStandard.png");
    swordImage = loadImage("Images/Sword.png");
    tridentImage = loadImage("Images/Trident.png");

    //Heart

    fiveHeart = loadImage("Images/fullHeart.png");
    fourHeart = loadImage("Images/4hearts.png");
    threeHeart = loadImage("Images/3hearts.png");
    twoHeart = loadImage("Images/2hearts.png");
    oneHeart = loadImage("Images/1heart.png");
}

function setup(){

    //Set up firebase

    database = firebase.database();

    //Simplify the display Width and Height

    dHeight = 750;
    dWidth = 1500;

    playerX = dWidth/2;
    playerY = dHeight/2;
    
    createCanvas(dWidth, dHeight);

    //Create Buttons to move into next page

    button = createSprite(dWidth - 50, dHeight - 50, 50, 50);
    button.addImage("button", nextArrow);
    button.scale = 0.1;

    button2 = createSprite(dWidth -50, dHeight - 200 , 50, 50, 50);
    button2.addImage("button", nextArrow);
    button2.scale = 0.1;
    button2.visible = false;

    //To create the start display

    starting = createSprite(dWidth / 2, dHeight /2);
    starting.addImage("start", startImage);
    starting.scale = 0.65;

    //To create the wooden board with the Goal of the Game

    woodenBoard = createSprite(dWidth/ 2, dHeight/2 + 50);
    woodenBoard.addImage("goal", woodenBoardImage);
    woodenBoard.scale = 0.3;
    
    //To call the game Class and to get the gameState

    game = new Game();
    game.getState();

    //Create Reset Button for Ease of Editing

    reset = createButton('reset');
    reset.position(100, 100);

    //Create Wall Group

    

    
    
    //trial2

    dungeonGroup = new Group();
    
    wallGroup = new Group();

    //PlayerHealth

    playerHealth = 50;
    healthLost = 0;
    playerHtype = 0;    

    createWalls();

   

    //trial

    mainPlayer = createSprite(playerX, playerY);
    mainPlayer.addAnimation("player", playerIdle);

    mainPlayer.visible = false;

    weaponSprite = createSprite(mainPlayer.x + 50, mainPlayer.y + 50);
    weaponSprite.visible = false;
    weaponSprite.scale = 0.6;

    otherPlayer1 = createSprite(0, 0);
    otherPlayer1.visible = false;
    otherPlayer1.addAnimation("other", playerIdle);

    otherPlayer2 = createSprite(0, 0);
    otherPlayer2.visible = false;
    otherPlayer2.addAnimation("other2", playerIdle);

    otherPlayerWeapon1 = createSprite(0, 0);
    otherPlayerWeapon1.visible = false;

    otherPlayerWeapon2 = createSprite(0, 0);
    otherPlayerWeapon2.visible = false;

    heartSprite = createSprite(dWidth/2, dHeight - 50);
    heartSprite.addImage(fiveHeart);
    heartSprite.scale = 0.1;
    heartSprite.visible = false;

    playerHealth = 50;

    reset.mousePressed(()=> {

        game.update(0);
        player.updateCount(0);

        database.ref('/').update({
  
          players : null
  
        })

    })
    
}

function draw(){

    background(backGround);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    text(mouseY, 100, 100);
    text(mouseX, 150, 100);

    starting.visible = false;
    woodenBoard.visible = false;
    
    if(gameState === 0){

        if(page === 0){
    
            //Game Title
    
            textSize(70);
            fill("white");
            strokeWeight(10);
            stroke("black")
            text("Rescue Mission", dWidth/2 - 250, 100);  
    
            //Visibility of Start
    
            starting.visible = true;
            
            //Change page if button is pressed

            if(mousePressedOver(button)){
                page = 1;
                button.destroy();
                button2.visible = true;
            }
    
        }

    }
    

    if(page === 1){   

        //To show title and show wooden board with goal

        textSize(50);
        fill("white");
        strokeWeight(8);
        stroke("black");
        text("Rescue Mission", dWidth/2 - 200, 100);  

        woodenBoard.visible = true;

        //Change page is button pressed

        if(mousePressedOver(button2)){

            //To start the game

            page = 2;
            game.start();
            textSize(50);
            fill("white");
            strokeWeight(8);
            stroke("black")
            text("Rescue Mission", dWidth/2 - 200, 100);   

        }  

    }

    if(page === 2){

        //To allow for player to move his sprite for visual appeal

        backGround = woodenBoardBack;

        if(keyDown("left_arrow")){

            playerSprite.addAnimation("player", playerLeftImg);

        }

        if(keyDown("right_arrow")){

            playerSprite.addAnimation("player", playerRightImg);

        }

        if(keyDown("up_arrow")){

            playerSprite.addAnimation("player", playerBackImg);

        }

        if(keyDown("down_arrow")){

            playerSprite.addAnimation("player", playerFrontImg);

        }

        //To switch gameState if all players joined

        if(playerCount >= 3){

            gameState = 1;
            game.update(1);
            page = 3;

        }
        
    }

    if(page === 3){

        //To start the play phase of the game

        playerSprite.visible = false;
        game.play();
        game.getState();
        
        //If all players join to start the game

        if(allReady === 3 || gameState === 2){

            gameState = 2;
            game.update(2);
            
        
        }

    }

    //Start gameplay once its started

    if(gameState === 2){

        wallGroup.setVisibleEach(true);
        dungeonGroup.setVisibleEach(true);

        game.gameStart();
        player.getXInGame1();
        player.getXInGame2();
        player.getXInGame3();
      

    }
    
    //Draw all sprites

    drawSprites();

}

