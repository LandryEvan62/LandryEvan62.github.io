$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 620, 30, 150, "red");
createPlatform(200, 620, 150, 30, "red");
createPlatform(450, 490, 150, 50, "lime");
createPlatform(170, 390, 60, 30, "blue");
createPlatform(1100, 620, 75, 150, "teal");
createPlatform(1100, 490, 300, 30, "yellow");
createPlatform(650, 620, 75, 5, "orange");
createPlatform(650, 100, 5, 520, "orange");
createPlatform(750, 490, 100, 10, "pink");
createPlatform(1100, 200, 15, 300, "yellow");
createPlatform(950, 370, 100, 10, "pink");
createPlatform(750, 240, 100, 10, "pink");
createPlatform(1100, 200, 150, 30, "yellow");
    // TODO 3 - Create Collectables
createCollectable("skull", 250, 675, 0, 0);
createCollectable("aspd", 180, 350, 0, 0);
createCollectable("mannco", 1300, 700, 0, 0);
    createCollectable("foury", 1180, 150, 0, 0);
    // TODO 4 - Create Cannons
createCannon("top", 260, 3000);
createCannon("right", 300, 2000);
createCannon("right", 650, 2300);
createCannon("bottom", 650, 4000);
createCannon("bottom", 1080, 3000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
