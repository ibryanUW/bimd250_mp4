/*
 * The main function of this class is to represent time over both
 * distance and relevance to another time. 
 * The class uses only points (dots) with an added mapping to an HSL color palette.
 * Within the draw function, the noise() function 
 */
let seconds = 0;
let minutes = 0;
let milliCount = 0;
let adjustStartPosX, adjustStartPosY;
let colorOfDot, dotDistance = 0;

/*
 * Moved background() function to setup() for viewing "timelapse" of creations.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSL);
}

/*
 * Main logic of program.
 * Pseudo Logic:
 * Get the current millisecond count since the program has started to use as a conditional any branching logic.
 * Get return values from Perlin Noice function <b>noise()</b> 
 */
function draw() {
  frameRate(1);

  milliCount = millis();

  // Setting (x1, y1) to the return value of multiplying Perlin Noise value against the width and height.
  adjustStartPosX = noise(second()) * width;
  adjustStartPosY = noise(second()) * height;

  // 1000 milliseconds = 1 second.
  // If 1 or more seconds has passed then reset millisecond counter variable.
  // Function is called to begin the drawing of arbitrary locations on the canvas.
  if (milliCount >= 1000) {
    seconds += 1;
    makePointsHorizontal();
  } else if (seconds > 59 || seconds < 0) {
    print(seconds);
  } else {
    print(seconds);
    makePointsVertical();
  }
}

/*
 *
 */
function makePointsHorizontal() {
  dotDistance = int(dist(adjustStartPosX, adjustStartPosY, width / 2, height / 2));
  colorOfDot = map(dotDistance, 0, 59, 0, 360);
  stroke(colorOfDot);
  for (let i = 0; i <= width; i++) {
    strokeWeight(random(0,3));
    point(random(0, width), adjustStartPosY);
  }

}

/*
 *
 */
function makePointsVertical() {
  dotDistance = int(dist(adjustStartPosX, adjustStartPosY, width / 2, height / 2));
  colorOfDot = map(dotDistance, 0, 59, 0, 360);
  stroke(colorOfDot);
  for (let i = 0; i <= height; i++) {
    strokeWeight(random(0,3));
    point(adjustStartPosX, random(0, height));
  }
}