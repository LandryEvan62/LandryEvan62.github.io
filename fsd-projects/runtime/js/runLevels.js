var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


function createSawBlade(x, y){
  var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
sawBladeHitZone.rotationalVelocity = 10;
sawBladeHitZone.velocityX = -5;
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);    
obstacleImage.x = -25
obstacleImage.y = -25
}
/*createSawBlade(400, groundY - 20);
createSawBlade(750, groundY - 50);
createSawBlade(950, groundY - 70);*/


function createEnemy(x, y) {
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.onPlayerCollision = function () {game.changeIntegrity(-10)};
enemy.onProjectileCollision = function () {game.increaseScore(100);
enemy.fadeOut();};

}
/*createEnemy(500, groundY - 55);
createEnemy(800, groundY - 50);
createEnemy(1200, groundY - 50);*/

function createReward(x, y) {
var reward = game.createGameItem("reward", 25);
var greenSquare = draw.rect(50, 50, "lawngreen");
greenSquare.x = -25;
greenSquare.y = -25;
reward.addChild(greenSquare);
reward.x = x;
reward.y = groundY - y;
game.addGameItem(reward);
reward.velocityX = -1;
reward.rotationalVelocity = 1;
reward.onPlayerCollision = function () {game.changeIntegrity(100), reward.fadeOut();};


}
/*createReward(300, 50);*/

function createMarker(x, y){
  var marker = game.createGameItem("marker", 25);
  var blueSquare = draw.rect(50, 50, "blue");
  blueSquare.x = -25;
  blueSquare.y = -25;
  marker.addChild(blueSquare);
  marker.x = x;
  marker.y = groundY - y;
  game.addGameItem(marker);
  marker.velocityX = -1;
  marker.rotationalVelocity = 1;
  marker.onProjectileCollision = function () {;};
  marker.onPlayerCollision = function () {marker.fadeOut();};
  }

/*createMarker(1300, 50)*/

function startLevel() {
      // TODO 13 goes below here
var level = levelData[currentLevel]
var levelObjects = level.gameItems
for (var i = 0; i < levelObjects.length; i++) {
  var eachElement = levelObjects[i];
  createSawBlade(eachElement.x, eachElement.y);
  createEnemy(eachElement.x, eachElement.y);
  createReward(eachElement.x, eachElement.y);
  createMarker(eachElement.x, eachElement.y);
}



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
