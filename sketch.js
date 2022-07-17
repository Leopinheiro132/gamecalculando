var tela = 1; //telas
let fontMenu; //fonte
let menuImg; //image
let imgfundo; //image
let Esteregg; //image
let gameimg; //image
let credimg; //image
var respImg; //image
var aud = []; //audios
var btn1;
var btn2;
var cubos = [];
var num1 = parseInt(Math.random(1,20)*100);
var num2 = parseInt(Math.random(1,20)*100);
var dificut = 0;
var Idle = [];
var animAndar = [[],[],[],[]];

function preload(){
  //fontes
  fontMenu = loadFont('Howard.ttf');
  Flogo = loadFont('Pieces of Eight.ttf');
  //imagens
  imgfundo = loadImage('background.png');
  imgtuto = loadImage('tutorial.png');
  Esteregg = loadImage('Esteregg.png');
  gameimg = loadImage('gameback.png');
  credimg = loadImage('credimg.png');
  respImg = loadImage('barril.png');
  menuImg = loadImage('menuImg.png');
  layer1 = loadImage('layer1.png')
  btn1 = loadImage('btn1.png')
  //audio
  aud[0] = loadSound('btn.mp3'); //botão
  aud[1] = loadSound('backgoundSong.mp3'); //musica de fundo
  //animção idle
  Idle[0] = loadImage('idleDown.png');
  Idle[1] = loadImage('idleL.png');
  Idle[2] = loadImage('idleR.png');
  Idle[3] = loadImage('idleUp.png');
  //animação andar cima
  animAndar[0][0] = loadImage('walkUp-1.png');
  animAndar[0][1] = loadImage('walkup2.png');
  animAndar[0][2] = loadImage('walkUp-3.png');
  //animação andar baixo
  animAndar[1][0] = loadImage('walkDown-1.png');
  animAndar[1][1] = loadImage('walkDown-2.png');
  animAndar[1][2] = loadImage('walkDown-3.png');
  
  animAndar[2][0] = loadImage('walkL-1.png');
  animAndar[2][1] = loadImage('walkL.png');
  animAndar[2][2] = loadImage('walkL-3.png');
  
  //animação andar Direita
  animAndar[3][0] = loadImage('walkR 1.png');
  animAndar[3][1] = loadImage('walkR 2.png');
  animAndar[3][2] = loadImage('walkR 3.png');
}
//so é chamado uma vez
function setup() {
  createCanvas(400, 500);
  aud[0].setVolume(0.3);
  aud[1].setVolume(0.05);
  //player.nome = prompt("seu nome");
  aud[1].loop();
  realeat();
}

//chamada sequencialmente
function draw() {
  
  switch(tela){
    case 1:
      resizeCanvas(800, 500);
      image(menuImg,0,0);
      //text menu
      fill(0);
      strokeWeight(6);
      textFont(Flogo);
      textAlign(CENTER);
      textSize(90);
      //ideia de titulo
      stroke(0, 191, 255)
      text("Calculando",400,100);
      noStroke();
      strokeWeight(3);
      //botoes
      textFont(fontMenu);
      fill(0);
      image(btn1,590,135,200,70);
      image(btn1,590,240,200,70);
      image(btn1,590,340,200,70);
      fill(255);
      textSize(25);
      if(mouseX>600 && mouseX<790 && mouseY>150 && mouseY<= 200){
         stroke(0, 128, 255);  // start
         textSize(40);
        if(mouseIsPressed){
            tela = 2;
            dificut = 0;
            aud[0].play();
        }
      }
        else{
          textSize(25);
          noStroke();
        }
      text("Start",690,180);

      if(mouseX>600 && mouseX<790 && mouseY>250 && mouseY<= 300){
         stroke(0, 191, 255); //tutorial
         textSize(40);
          if(mouseIsPressed){
            tela = 3;
            aud[0].play();
          }
       }
      else{
        noStroke();
        textSize(25);
      }
      text("Tutorial",685,287);

      if(mouseX>600 && mouseX<790 && mouseY>350 && mouseY<= 400){
         stroke(0, 191, 255); // creditos
         textSize(40);
         if(mouseIsPressed){
            tela = 4;
           aud[0].play();
          }
      }
      else{
        noStroke();
        textSize(25);
      }
      text("Creditos",690,382);

      noStroke();
      textAlign(LEFT);
      break;
      
    case 2:
        rectMode(CORNER);
        //fases
        resizeCanvas(800, 500);
        background(0, 191, 255);
        textFont(fontMenu);
        textSize(40);
        noStroke();
        fill(0)
        text("vamos calcular",250,70);
        text("qual operação vamos?",180,110);
        textFont('Georgia');
        textSize(25);

        rect(250, 200, 100, 75, 10);// +
        rect(400, 200, 100, 75, 10);// -
        rect(250, 330, 100, 75, 10);// *
        rect(400, 330, 100, 75, 10);// ÷
        fill(255);

        if(mouseX>250 && mouseX<350 && mouseY>200 && mouseY<= 275){
          stroke(0, 191, 255);
          if(mouseIsPressed){
            aud[0].play();
            dificut = 1;
            tela = 6;
            realeat();
            console.log("dificuldade: "+dificut);
          }
        }
        else{
          dificut=0;
          noStroke()
        }
      textSize(80);
      text("+",275,255);
      textSize(25)
      
      if(mouseX>400 && mouseX<500 && mouseY>200 && mouseY<= 275){
        stroke(0, 191, 255);
        if(mouseIsPressed){
          aud[0].play();
          dificut = 2;
          tela = 6;
          realeat();
          console.log("dificuldade: "+dificut);
        }
      }
      else{
        noStroke()
      }
      textSize(80);
      text("-",435,255);
      textSize(25);

      if(mouseX>250 && mouseX<350 && mouseY>330 && mouseY<= 405){
        stroke(0, 191, 255);
        if(mouseIsPressed){
          aud[0].play();
          dificut = 3;
          tela = 6;
          realeat();
          console.log("dificuldade: "+dificut);
        }
      }
      else{
        noStroke()
      }
      textSize(80);
      text("x",280,385);
      textSize(25);

      if(mouseX>400 && mouseX<500 && mouseY>330 && mouseY<= 405){
        stroke(0, 191, 255);
        if(mouseIsPressed){
          dificut = 4;
          aud[0].play();
          tela = 6;
          realeat();
          console.log("dificuldade: "+dificut);
        }
      }
      else{
        noStroke()
      }
      textSize(60);
      text("÷",430,385);
      textSize(25);

      image(btn1,280,410,200,70);
      fill(255);
    
      if(mouseX>300 && mouseX<460 && mouseY>420 && mouseY<= 470){
         stroke(0, 191, 255);
         textSize(35);
         if(mouseIsPressed){
           tela = 1;
           aud[0].play();
          }
        }
        else{
          textSize(25);
          noStroke()
        }
        textFont(fontMenu);
        textAlign(CENTER);
        text("Voltar",375,455);
        textFont('Georgia');
        textAlign(LEFT);
      break;
      
    case 3:
      resizeCanvas(800, 500);
      noStroke()
      image(imgtuto,0,0)
      textSize(30);
      textFont('Georgia');
      image(btn1,300,410,200,70);
      fill(255);
    
      if(mouseX>300 && mouseX<490 && mouseY>415 && mouseY<= 465){
         stroke(0, 191, 255);
         textSize(35);
         if(mouseIsPressed){
           tela = 1;
           aud[0].play();
          }
        }
        else{
          noStroke();
          textSize(25);
        }
        textFont(fontMenu);
        textAlign(CENTER);
        text("Voltar",400,455);
        textFont('Georgia');
        textAlign(LEFT);
        
        break;
        
    case 4:
        //credito
        resizeCanvas(800, 500);
        image(credimg,0,0)
        textFont('Georgia');
        textSize(20);
        image(btn1,300,405,200,70);
        fill(255);
        if(mouseX>300 && mouseX<490 && mouseY>415 && mouseY<= 465){
          stroke(0, 191, 255);
          textSize(35);
          if(mouseIsPressed){
            tela = 1;
            aud[0].play();
          }
        }
        else{
          textSize(25);
          noStroke()
        }
         textFont(fontMenu);
         textAlign(CENTER);
         text("Voltar",400,450); 
         noStroke()
         textFont('Georgia');
         textAlign(LEFT);
      break;
      
    case 5:
        //debug pag
      background(132, 255, 173);
      image(Esteregg,100,10);
      fill(0);
      noStroke();
      textFont('Georgia');
      textSize(25);
      text("Ola se vc chegou aki \nvc achou o ester-egg",80, 230);
      text("procura o meu github \no codigo do jogo esta la",80, 290);
      text("https://github.com/Stuka132",60, 350)
      textSize(20);
      
        //botão voltar
      rect(150,420,100,50,50);
      fill(255);
        
      if(mouseX>150 && mouseX<250 && mouseY>400 && mouseY<= 470){
         stroke(0, 191, 255);
          if(mouseIsPressed){
            tela = 1;
            aud[0].play();
          }
      }   
        else{
        noStroke()
        }
      textFont(fontMenu);
        text("Voltar",165,450);
      break;
    case 6:
      Game();
    break
  }
}
function keyPressed() {
  if(keyCode == ESCAPE){
    tela = 1;
    resizeCanvas(400, 500);
  }
}
function realeat(){
  num1 = parseInt(random(0,20));
  num2 = parseInt(random(0,20));
  for(var i=0;i<5;i++) {
    cubos[i] = new Resp(30,30);
  }
}
function alea(){
  let tempo = 0;
  for(var i=0;i<5;i++) {
    for(var m =1;m<=4;m++){
      collblock(0,m);
      if(m!=1){
        collblock(1,m);
      }
      if(m!=2){
        collblock(2,m);
      }
      if(m!=3){
        collblock(3,m);
      }
    }
    for(let t=0;t<4;t++){
      collblock(4,t);
    }

    switch(dificut){
      case 1:
        cubos[0].num = (num1+num2);
        cubos[i].init();
        if((cubos[i].cubX> 530 && cubos[i].cubX<557)&&(cubos[i].cubY>250 && cubos[i].cubY<278)){
          if(cubos[i].num===(num1+num2)){
            cubos[i].cubK = false;
            realeat();
            Accont ++;
          }
          else{
            realeat();
            Accont =0;
          }
        }
      break;
      case 2:
        cubos[0].num = (num1-num2);
        cubos[i].init();
        if(num1>=num2){
          if((cubos[i].cubX> 530 && cubos[i].cubX<557)&&(cubos[i].cubY>250 && cubos[i].cubY<278)){
            if(cubos[i].num===(num1-num2)){
              cubos[i].cubK = false;
              realeat();
              Accont ++;
            }
            else{
              Accont =0;
              realeat();
            }
          }
        }
        else{
          realeat();
        }
      break;
      case 3:
        cubos[0].num = (num1*num2);
        cubos[i].init();
        if((cubos[i].cubX> 530 && cubos[i].cubX<557)&&(cubos[i].cubY>250 && cubos[i].cubY<278)){
          if(cubos[i].num===(num1*num2)){
            cubos[i].cubK = false;
            cubos[i].num = parseInt(random(1,20));
            realeat();
            Accont ++;
          }
          else{
            Accont =0;
            realeat();
          }
        }
      break; 
      case 4:
        cubos[0].num = (num1/num2);
        cubos[i].init();
        if(Div(num1,num2)){
          if((cubos[i].cubX> 530 && cubos[i].cubX<557)&&(cubos[i].cubY>250 && cubos[i].cubY<278)){
            if(cubos[i].num===(num1/num2)){
              cubos[i].cubK = false;
              realeat();
              Accont ++;
            }
            else{
              Accont =0;
              realeat();
            }
          }
        }
        else{
          realeat();
        }
      break;
    }
  }
}
function togglePlay() {
  if (aud[1].isPlaying()) {
    aud[1].pause();
  } else {
    aud[1].loop();
  }
}
