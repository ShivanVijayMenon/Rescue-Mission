function createWalls(){

    fill("white");

    mainRoom = createSprite(dWidth/2, dHeight/2);
    mainRoom.addImage("floor", mainRoomImage);
    mainRoom.scale = 0.77;
    centreLeftRoom = createSprite(0 - dWidth/2 , dHeight/2);
    centreLeftRoom.addImage("floor", centreLeftImage);
    centreLeftRoom.scale = 0.77;
    centreRightRoom = createSprite(dWidth + dWidth/2,  dHeight/2);
    centreRightRoom.addImage("floor", centreRightImage);
    centreRightRoom.scale = 0.77;

    topRightRoom = createSprite(dWidth + dWidth/2, 0 -  dHeight/2);
    topRightRoom.addImage("floor", topRightImage);
    topRightRoom.scale = 0.77;
    topLeftRoom = createSprite(-750, 0 -  dHeight/2);
    topLeftRoom.addImage("floor", topLeftImage);
    topLeftRoom.scale = 0.77;
    topMiddleRoom = createSprite(750, 0 -  dHeight/2);
    topMiddleRoom.addImage("floor", topMiddleImage);
    topMiddleRoom.scale = 0.77;

    bottomMiddleRoom = createSprite(750, 1125);
    bottomMiddleRoom.addImage("floor", bottomMiddleImage);
    bottomMiddleRoom.scale = 0.77;
    bottomLeftRoom = createSprite(-750, 1125);
    bottomLeftRoom.addImage("floor", bottomLeftImage);
    bottomLeftRoom.scale = 0.77;
    bottomRightRoom = createSprite(2250, 1125);
    bottomRightRoom.addImage("floor", bottomRightImage);
    bottomRightRoom.scale = 0.77;

    grandFloor = createSprite(3750, 375);
    grandFloor.addImage("bossFloor", bossFloorImage);
    grandFloor.scale = 0.3;

    FirstWall1 = createSprite(100, 170 , 50, 340);  
    FirstWall2 = createSprite(100, 580 , 50, 340);   
    FirstWall3 = createSprite(dWidth - 100, 170 , 50, 340); 
    FirstWall4 = createSprite(dWidth - 100, 580 , 50, 340); 

    FirstWall5 = createSprite(dWidth - 390 , 130 , 700, 50);  
    FirstWall6 = createSprite(320 , 130 , 700, 50);   
    FirstWall7 = createSprite(dWidth - 390, dHeight - 130, 700, 50);  
    FirstWall8 = createSprite(320, dHeight - 130, 700, 50);
    
    SecondWall1 = createSprite(dWidth + 100, 170 , 50, 340);  
    SecondWall2 = createSprite(dWidth + 100, 580 , 50, 340);   
    SecondWall3 = createSprite(dWidth*2 - 100, 170 , 50, 340); 
    SecondWall4 = createSprite(dWidth*2 - 100, 500 , 50, 340); 

    SecondWall5 = createSprite(dWidth*2 - 390 , 130 , 700, 50); 
    SecondWall6 = createSprite(dWidth + 320 , 130 , 700, 50); 
    SecondWall7 = createSprite(dWidth*2 - 390, dHeight - 130, 700, 50);
    SecondWall8 = createSprite(dWidth + 320, dHeight - 130, 700, 50);

    ThirdWall1 = createSprite(100 - dWidth, 170 , 50, 340);  
    ThirdWall2 = createSprite(100 - dWidth, 500 , 50, 340);   
    ThirdWall3 = createSprite(0 - 100, 170 , 50, 340); 
    ThirdWall4 = createSprite(0 - 100, 580 , 50, 340); 

    ThirdWall5 = createSprite(0 - 320 , 130 , 700, 50); 
    ThirdWall6 = createSprite(0 - dWidth + 400 , 130 , 700, 50); 
    ThirdWall7 = createSprite(0 - 320, dHeight - 130, 700, 50);
    ThirdWall8 = createSprite(0 - dWidth + 400, dHeight - 130, 700, 50);

    //ThirdWall1 = createSprite(25, 125 - 750 , 50, 250); 
    //ThirdWall2 = createSprite(25, 625 - 750, 50, 250); 
    //ThirdWall3 = createSprite(dWidth - 25, 125 - 750 , 50, 250); 
    //ThirdWall4 = createSprite(dWidth - 25, 625 - 750, 50, 250); 

    //ThirdWall5 = createSprite(375 , 25 -750, 750, 50); 
    //ThirdWall6 = createSprite(1125 , 25 -750, 750, 50); 
    //ThirdWall7 = createSprite(1250, dHeight - 25 -750 , 500, 50);
    //ThirdWall8 = createSprite(250, dHeight - 25 -750 , 500, 50);     

    FourthWall1 = createSprite(100, 170 + dHeight , 50, 340); 
    FourthWall2 = createSprite(100, 580 + dHeight, 50, 340); 
    FourthWall3 = createSprite(dWidth - 100, 170 + dHeight , 50, 340); 
    FourthWall4 = createSprite(dWidth - 100, 580 + dHeight, 50, 340); 

    FourthWall5 = createSprite(dWidth - 500 , dHeight + 130, 800, 50); 
    FourthWall6 = createSprite(280 , dHeight + 130 , 500, 50); 
    FourthWall7 = createSprite(dWidth - 390, dHeight*2 - 130 , 700, 50);
    FourthWall8 = createSprite(420, dHeight*2 - 130 , 700, 50);   

    FifthWall1 = createSprite(100 + dWidth, 180 + dHeight , 50, 320); 
    FifthWall2 = createSprite(100 + dWidth, 560 + dHeight, 50, 320); 
    FifthWall3 = createSprite(dWidth*2 - 100, 180 + dHeight , 50, 320); 
    FifthWall4 = createSprite(dWidth*2 - 100, 560 + dHeight , 50, 320); 

    FifthWall5 = createSprite(320 + dWidth , 130 + dHeight, 700, 50); 
    FifthWall6 = createSprite(350 + dWidth + dWidth/2 , 130 + dHeight, 700, 50); 
    FifthWall7 = createSprite(375 + dWidth, dHeight - 130 +750 , 750, 50);
    FifthWall8 = createSprite(1125 + dWidth, dHeight - 130 +750 , 750, 50);  

    SixthWall1 = createSprite(15 - dWidth, 375 + dHeight , 50, 750); 
    SixthWall2 = createSprite(15 - dWidth, 375 , 50, 750); 
    SixthWall3 = createSprite(0 - 100 , 180 + dHeight , 50, 320); 
    SixthWall4 = createSprite(0 - 100 , 560 + dHeight, 50, 320); 

    SixthWall5 = createSprite(350 - dWidth , 130 + dHeight, 800, 50); 
    SixthWall6 = createSprite(1150 - dWidth , 130 + dHeight, 650, 50); 
    SixthWall7 = createSprite(400 - dWidth, dHeight*2 - 130 , dWidth/2 , 50);
    SixthWall8 = createSprite(1125 - dWidth, dHeight*2 - 130, dWidth/2, 50);  

    SeventhWall1 = createSprite(25 - dWidth, 375 - dHeight , 50, 250); 
    SeventhWall2 = createSprite(25 - dWidth, 375 - dHeight, 50, 750); 
    SeventhWall3 = createSprite(0 - 90, 180 - dHeight , 50, 320); 
    SeventhWall4 = createSprite(0 - 90, 570 - dHeight, 50, 320); 

    SeventhWall5 = createSprite(375 - dWidth , 130 - dHeight, dWidth/2, 50); 
    SeventhWall6 = createSprite(1125 - dWidth , 130 - dHeight, dWidth/2, 50); 
    SeventhWall7 = createSprite(1200 - dWidth, 0 - 130, dWidth/2, 50);
    SeventhWall8 = createSprite(375 - dWidth, 0 - 130 , dWidth/2, 50);

    EigthWall1 = createSprite(100 + dWidth, 180 - dHeight , 50, 320); 
    EigthWall2 = createSprite(100 + dWidth, 560 - dHeight, 50, 320); 
    EigthWall3 = createSprite(dWidth*2 - 100, 180 - dHeight , 50, 320); 
    EightWall4 = createSprite(dWidth*2 - 100, 560 - dHeight , 50, 320);  

    EigthWall5 = createSprite(320 + dWidth , 130 - dHeight, 780, 50); 
    EigthWall6 = createSprite(350 + dWidth + dWidth/2, 130 - dHeight, 780, 50); 
    EigthWall7 = createSprite(320 + dWidth, 0-130 , 700, 50);
    EigthWall8 = createSprite(350 + dWidth + dWidth/2, 0-130, 700, 50);

    GrandWall1 = createSprite(25 + dWidth*2, 375 + 750 , 50, 1125); 
    GrandWall2 = createSprite(25 +  dWidth*2, 375 - 750 , 50, 1125); 
    GrandWall3 = createSprite(dWidth - 25 + 3000, 375 , 50, 2250);  

    GrandWall5 = createSprite(375 + 3000 , 25 + 1500, 750, 50); 
    GrandWall6 = createSprite(1125 + 3000 , 25 + 1500, 750, 50); 
    GrandWall7 = createSprite(1125 + 3000, dHeight - 25 -1500 , 750, 50);
    GrandWall8 = createSprite(375 + 3000, dHeight - 25 -1500 , 750, 50);

    //middleDoorDown = createSprite(750 - 40, 750 - 100, 100, 50);
    //middleDoorDown.addImage("doorDown", doorUp);
    //middleDoorDown.scale = 0.26
    //middleDoorUp = createSprite(750, 0, 250, 50);
    //middleDoorUp.addImage("doorDown", doorUp);
    //middleDoorUp.scale = 0.26;

    centreRightWall1 = createSprite(-310, 440, 70, 420);

    wallGroup.add(FirstWall1);
    wallGroup.add(FirstWall2);
    wallGroup.add(FirstWall3);
    wallGroup.add(FirstWall4);
    wallGroup.add(FirstWall5);
    wallGroup.add(FirstWall6);
    wallGroup.add(FirstWall7);
    wallGroup.add(FirstWall8);

    wallGroup.add(SecondWall1);
    wallGroup.add(SecondWall2);
    wallGroup.add(SecondWall3);
    wallGroup.add(SecondWall4);
    wallGroup.add(SecondWall5);
    wallGroup.add(SecondWall6);
    wallGroup.add(SecondWall7);
    wallGroup.add(SecondWall8);

    wallGroup.add(ThirdWall1);
    wallGroup.add(ThirdWall2);
    wallGroup.add(ThirdWall3);
    wallGroup.add(ThirdWall4);
    wallGroup.add(ThirdWall5);
    wallGroup.add(ThirdWall6);
    wallGroup.add(ThirdWall7);
    wallGroup.add(ThirdWall8);
    
    wallGroup.add(FourthWall1);
    wallGroup.add(FourthWall2);
    wallGroup.add(FourthWall3);
    wallGroup.add(FourthWall4);
    wallGroup.add(FourthWall5);
    wallGroup.add(FourthWall6);
    wallGroup.add(FourthWall7);
    wallGroup.add(FourthWall8);

    wallGroup.add(FifthWall1);
    wallGroup.add(FifthWall2);
    wallGroup.add(FifthWall3);
    wallGroup.add(FifthWall4);
    wallGroup.add(FifthWall5);
    wallGroup.add(FifthWall6);
    wallGroup.add(FifthWall7);
    wallGroup.add(FifthWall8);

    wallGroup.add(SixthWall1);
    wallGroup.add(SixthWall2);
    wallGroup.add(SixthWall3);
    wallGroup.add(SixthWall4);
    wallGroup.add(SixthWall5);
    wallGroup.add(SixthWall6);
    wallGroup.add(SixthWall7);
    wallGroup.add(SixthWall8);

    wallGroup.add(SeventhWall1);
    wallGroup.add(SeventhWall2);
    wallGroup.add(SeventhWall3);
    wallGroup.add(SeventhWall4);
    wallGroup.add(SeventhWall5);
    wallGroup.add(SeventhWall6);
    wallGroup.add(SeventhWall7);
    wallGroup.add(SeventhWall8);

    wallGroup.add(EigthWall1);
    wallGroup.add(EigthWall2);
    wallGroup.add(EigthWall3);
    wallGroup.add(EigthWall5);
    wallGroup.add(EigthWall6);
    wallGroup.add(EigthWall7);
    wallGroup.add(EigthWall8);

    wallGroup.add(GrandWall1);
    wallGroup.add(GrandWall2);
    wallGroup.add(GrandWall3);
    wallGroup.add(GrandWall5);
    wallGroup.add(GrandWall6);
    wallGroup.add(GrandWall7);
    wallGroup.add(GrandWall8);

    dungeonGroup.add(mainRoom);
    dungeonGroup.add(centreLeftRoom);
    dungeonGroup.add(centreRightRoom);
    dungeonGroup.add(bottomLeftRoom);
    dungeonGroup.add(bottomRightRoom);
    dungeonGroup.add(bottomMiddleRoom);
    dungeonGroup.add(topLeftRoom);
    dungeonGroup.add(topRightRoom);
    dungeonGroup.add(topMiddleRoom);

    wallGroup.setVisibleEach(false);
    dungeonGroup.setVisibleEach(false);

  }