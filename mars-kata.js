// Rover Object Goes Here
// ======================
let myRover = {
    direction: "N",
    x: 0,
    y: 0,
    path: [{ x: 0, y: 0 }]
  };
  
  // ======================
  function turnLeft(rover, command) {
    if (rover.direction = "N") {
      if (command === "l") {
        rover.direction = "W";
        console.log("turnLeft was called!");
        console.log(`Rover Now Facing ${rover.direction}`);
        let newPosition = { x: rover.x, y: rover.y };
        rover.path.push(newPosition);
      }
    } else if (rover.direction = "W") {
      rover.direction = "S";
      console.log("turnLeft was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    } else if (rover.direction = "S") {
      rover.direction = "E";
      console.log("turnLeft was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    } else if (rover.direction = "E") {
      rover.direction = "N";
      console.log("turnLeft was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    }
  }
  
  function turnRight(rover, command) {
    if (rover.direction = "N") {
      rover.direction = "E";
      console.log("turnRight was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    } else if (rover.direction = "E") {
      rover.direction = "S";
      console.log("turnRight was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    } else if (rover.direction = "S") {
      rover.direction = "W";
      console.log("turnRight was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    } else if (rover.direction = "W") {
      rover.direction = "N";
      console.log("turnRight was called!");
      console.log(`Rover Now Facing ${rover.direction}`);
    }
  }
  
  function moveForward(rover, command) {
    if (rover.direction = "N") {
      rover.y--;
    }
    if (rover.direction = "S") {
      rover.y++;
    }
    if (rover.direction = "E") {
      rover.x++;
    }
    if (rover.direction = "W") {
      rover.x--;
    }
    console.log("moveForward was called");
    console.log(
      `X Coordinates = ${rover.x} Y Coordinates = ${
        rover.y
      } and Facing Direction: ${rover.direction}`
    );
  }
  
  function moveBackward(rover) {
    if (rover.direction = "S") {
      rover.y--;
    }
    if (rover.direction = "N") {
      rover.y++;
    }
    if (rover.direction = "W") {
      rover.x++;
    }
    if (rover.direction = "E") {
      rover.x--;
    }
    console.log("moveBackward was called");
    console.log(
      `X Coordinates = ${rover.x} Y Coordinates = ${
        rover.y
      } and Facing Direction: ${rover.direction}`
    );
  }
  
  function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case "l": // left
          turnLeft(rover, order);
          break;
        case "r": // right
          turnRight(rover, order);
          break;
        case "u": // up
          moveForward(rover, order);
          break;
        case "d": // down
          moveBackward(rover, order);
          break;
      }
    }
    console.log(rover.path);
  }
  
  command(myRover, "l");