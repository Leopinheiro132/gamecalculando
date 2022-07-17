let player = new Player();
var Accont = 0;
function Game(){
    resizeCanvas(800, 500);
    image(gameimg,0,0); //imagem de back ground do jogo
    
    ///////////// 
    image(btn1,655,20,150,50);
    //rect(675, 20, 110, 50, 10);
    textFont(fontMenu);
    textSize(25);
    stroke(0, 191, 255)
    text("Acertos: \n      "+Accont,650,250);
    noStroke()
    fill(255);
    ///////botão voltar
    if(mouseX>675 && mouseX<780 && mouseY>20 && mouseY<= 70){
      stroke(0, 191, 255);
      if(mouseIsPressed){
        aud[0].play();
        dificut = 0;
        tela = 2;
        Accont=0;
      }
    }
    else{
      noStroke()
    }
    text("Voltar",685,50);
    ////////////
    noStroke();
    fill(0);
    textSize(50);
    
    switch (dificut) {
      case 1:
        text(num1+" + "+num2+"= ?",200, 120);
      break;
      case 2:
        text(num1+" - "+num2+"= ?",200, 120);
      break;
      case 3:
        text(num1+" * "+num2+"= ?",200, 120);
      break;
      case 4:
        text(num1+" ÷ "+num2+"= ?",200, 120);
      break
    }
    textFont('Georgia');
    textSize(20);
    text("Ajude a carregar o navio\n com os barris corretos",170, 40);
    if(Accont>5){
      text("Hora de mudar de faser",170,85);
    }
    textSize(12);
    fill(0);
  
  ////////////////CONTROLE PLAYER//////////
    if((keyIsDown(UP_ARROW)||keyIsDown(87)) && player.Y>0) {
      player.Y -= 2.5;
      player.Active = false;
    }
    if((keyIsDown(DOWN_ARROW)||keyIsDown(83)) && player.Y<490) {
      player.Y += 2.5;
      player.Active = false;
    }
    if((keyIsDown(LEFT_ARROW)||keyIsDown(65))&& player.X>0) {
      player.X -= 2.5;
      player.Active = false;
    }
    if((keyIsDown(RIGHT_ARROW)||keyIsDown(68))&& player.X<595) {
      player.X += 2.5;
      player.Active = false;
    }
////////////////////////////////////////
  push();
  player.init();
  pop();
  alea();
  image(layer1,0,0);
}

function keyPressed() {
  if(keyCode == ESCAPE){
    tela = 1;
    dificut = 0;
    togglePlay();
    Accont=0;
    } 
}
function coll(x1,y1,x2,y2){
  let _tam = 25;
  rectMode(CENTER);
  if(x1 > x2 + _tam){
	return false;
  }
  if(y1 > y2 + 20){
	return false;
  }
  if(x1 + _tam < x2){
	return false;
  }
  if(y1 + 20 < y2){
	return false;
  }
return true;
}
function collblock(base,alvo){
  if(coll(cubos[base].cubX,cubos[base].cubY,cubos[alvo].cubX,cubos[alvo].cubY)){
    cubos[base].cubX = parseInt(random(cubos[base].cubX,200))
    cubos[alvo].cubX = cubos[base].cubX+34
  }
}
function collPlayer(){
  for(i=0;i<5;i++){
    if(coll(player.X,player.Y,cubos[i].cubX,cubos[i].cubY)){
      player.Y = cubos[i].cubY-20;
      cubos[i].carr = true;
    }
  }
}
function Div(N1,N2){
  if(N1%N2 === 0){
    return true;
  }
  else{
    return false
  }
}