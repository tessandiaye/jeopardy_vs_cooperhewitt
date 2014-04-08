var img1;
var img2;
var img3;


function setup() {

  //createCanvas(1440, 800);
  createCanvas(window.innerWidth, window.innerHeight);

  img1 = loadImage("11491_5bdcaa94f5f46836_b.jpg");
  img2 = loadImage("15684_50b5bc95d8d0161f_b.jpg");
  img3 = loadImage("39874_4b9c65e109610ba3_b.jpg");

}

function draw() {

  background(255);

  fill(125,125, 125, 50);
  noStroke();
  rect(290,290,270,270);
  rect(590,290,270,270);
  rect(890,290,270,270); 

  image(img1, 300, 300, 250, 250);
  image(img2, 600, 300, 250, 250);
  image(img3, 900, 300, 250, 250);

  var text = createHTML("Created between 1960-70, this object was acquired by the Cooper Hewitt Museum");
  text.position(220, 50);
  //text.id("jeopardy");
  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 16pt; padding: 10px;");

  var text = createHTML("in 1989 as part of The Henry and Ludmilla Shapiro Collection.");
  text.position(320, 85);
  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 16pt; padding: 10px;");
  
  var text = createHTML("What is Lenin Reading Pravda?");
  text.position(530, 200);
  text.style("font-family: monospace; background-color: #CC3300; color: #FFFFFF; font-size: 16pt; padding: 10px;");
//red: #FF0000
//darker red: #CC0000
//red orange: #CC3300

  //text ("test", 200, 200);

  if ((mouseX > 290) && (mouseX < 450) && (mouseY > 380) && (mouseY < 500)) {
  var text = createHTML("A circular plate, with image of Lenin sitting at desk reading copy of Pravda newspaper;");
  text.position(230, 600);
  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 14pt; padding: 10px;");

  var text = createHTML("thin gilded band at edge. Dulevo Porcelain Factory was the manufacturer of this object.");
  text.position(230, 630);
  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 14pt; padding: 10px;");


  var text = createHTML("Its medium is: porcelain, enamel, gilding     |      Its dimensions are: Diameter: 23.9 cm (9 7/16 in.)");
  text.position(230, 660);
  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 13pt; padding: 10px;");

 }
  print("mouseX" + mouseX);
  print("mouseY" + mouseY);

// if (isMousePressed() == true){
//textShow();
 //  var text = createHTML("A circular plate, with image of Lenin sitting at desk reading copy of Pravda newspaper; thin gilded band at edge");
 //  text.position(230, 600);
 //  text.style("font-family: monospace; background-color: #FFFFFF; color: #000000; font-size: 14pt; padding: 10px;");
 // }
}

// function textShow() {
//  }

// function mousePressed() {
// 	if ((mouseX > 290 - 10) && (mouseX < 590 - 10) && (mouseY > 290 - 10) && (mouseY < 600 - 20)) {
//   isMousePressed = true;
//  }
// }
