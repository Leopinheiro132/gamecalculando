
class Resp{
  constructor(cubX, cubY) {
      this.cubX = cubX;
      this.cubY = cubY;
      this.cubK = true;
      this.num = parseInt(random(0,10));
      if(dificut === 3){
        this.num = parseInt(random(0,100));
      }
      if(dificut === 4){
        num1 = parseInt(random(0,100));
        this.num = parseInt(random(0,100));
      }
      this.carr = false;
  }
  init() { 
    fill(255, 250, 250);
    imageMode(CENTER);
    image(respImg,this.cubX, this.cubY);
    imageMode(CORNER);
    rectMode(CORNER)
    fill(0);
    textSize(25);
    text(this.num, this.cubX-8, this.cubY+7);
    let distcub = dist(this.cubX, this.cubY, player.X, player.Y);
    if(this.carr){
      if(keyIsDown(32) && (distcub < 35)){
        this.cubX = player.X;
        this.cubY = player.Y - 35;
        //this.cubK = false; 
      }
    }
    if(this.cubK && this.cubY<475){
       this.cubY = this.cubY+8;
    }
  }
}

class Player{
    constructor(X, Y,tam, nome){
      this.Y = 100;
      this.X = 100;
      this.tam = 25;
      this.nome = this.nome;
      this.Active = true;
      this.tmpAnim = 0;
      this.cont = 0;
    }
    init(){
      collPlayer();
      imageMode(CENTER);
      if(this.Active){
      image(Idle[0],this.X, this.Y);
      }else{
        this.Active = true;
      }
      push();
      if(keyIsDown(UP_ARROW)||keyIsDown(87)){

        this.tmpAnim ++;
        image(animAndar[0][this.cont%3],this.X, this.Y);
        if(this.tmpAnim>9){
          this.cont = this.cont+1;
          this.tmpAnim = 0;
        }
      }
      if(keyIsDown(DOWN_ARROW)||keyIsDown(83)){
        image(Idle[0],player.X,player.Y);

        this.tmpAnim ++;
        image(animAndar[1][this.cont%3],this.X, this.Y);
        if(this.tmpAnim>9){
          this.cont = this.cont+1;
          this.tmpAnim = 0;
        }
      }
      
      if(keyIsDown(LEFT_ARROW)||keyIsDown(65)){

        image(Idle[0],player.X,player.Y);
        /*
        this.tmpAnim ++;
        image(animAndar[2][this.cont%3],this.X, this.Y);
        if(this.tmpAnim>9){
          this.cont = this.cont+1;
          this.tmpAnim = 0;
        } 
        */
      }
      if(keyIsDown(RIGHT_ARROW)||keyIsDown(68)){
        image(Idle[0],player.X,player.Y);
        /*
        this.tmpAnim ++;
        image(animAndar[3][this.cont%3],this.X, this.Y);
        if(this.tmpAnim>9){
          this.cont = this.cont+1;
          this.tmpAnim = 0;
        }
        */
      }
      pop();
      imageMode(CORNER);
      textAlign(CENTER);
      text(this.nome,this.X,this.Y-15);
      textAlign(LEFT);
      

    }
}