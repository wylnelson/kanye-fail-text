var track1;
var track2;
var track3;
var track4;
var track5;
var track6;
var track7;
var track8;
var track9;
var track10;
var track11;
var track12;

var book;
var words = [];
var delimiters = " .,*";
var search = "oh";
var search2 = "huh";
var search3 = "woah";
var search4 = "hey";
var wordCounter = 0;

//var = head;
//var yeHeads = [];

function preload() {
  track1 = loadStrings('MBDTF/DarkFantasy.txt');
  track2 = loadStrings('MBDTF/Gorgeous.txt');
  track3 = loadStrings('MBDTF/Power.txt');
  track4 = loadStrings('MBDTF/AllOfTheLights.txt');
  track5 = loadStrings('MBDTF/Monster.txt');
  track6 = loadStrings('MBDTF/SoAppalled.txt');
  track7 = loadStrings('MBDTF/Devil.txt');
  track8 = loadStrings('MBDTF/Runaway.txt');
  track9 = loadStrings('MBDTF/HellOfALife.txt');
  track10 = loadStrings('MBDTF/BlameGame.txt');
  track11 = loadStrings('MBDTF/LostInTheWoods.txt');
  track12 = loadStrings('MBDTF/WhoWillSurvive.txt');
  
  //head = loadImage("MBDTF/kanyehead.png");
}

function setup() {
  createCanvas(800, 600);
  book = track1 + track2 + track3 + track4 + track5 + track6 + track7 + track8 + track9 + track10 + track11 + track12;
  var everything = join(book).toLowerCase();
  words = splitTokens(everything, delimiters);

  for (var i = 0; i < words.length; i++) {
    text(words[i], 10, i * 20);
    if (words[i] == search || words[i] == search2 || words[i] == search3 || words[i] == search4) {
      wordCounter++;
    }

  }
//  for (var j = 0; j<yeHeads.length;j++){
//    yeHeads[j] = new Ye(random(height,width),random(height,width), 30, 30);
//  }
}

function draw() {
  background(0);
  fill(255);

  text("This text has " + words.length + " words", 20, height - 30);
  text("The words " + search + " " + search2 + " " + search3 + " " + search4 + " appear " + wordCounter + " times.", 20, height - 60);



}

/*
function Ye(x, y, l, h){
  this.x = x;
  thix.y = y;
  this.l = l;
  this.h = h;
  
  this.display = function(){
    image(head,0,0,30,30,this.x,thi.y,this.l,this.h);
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}
*/