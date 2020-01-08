// Rover Object Goes Here
// ======================
let myRover = {
  direction: "N",
  x: 0,
  y: 0,
};

function turnLeft(rover) {
  currDir = rover.direction;
  switch (currDir) {
    case "N":
      currDir = "W";
      rover.direction = currDir;
      break;
    case "W":
      currDir = "S";
      rover.direction = currDir;
      break;
    case "S":
      currDir = "E";
      rover.direction = currDir;
      break;
    case "E":
      currDir = "N";
      rover.direction = currDir;
      break;
    default:
      console.log ("Please choose L or R to change direction");
    }
  console.log("Turn Left was called. " + `Now Facing: ` + currDir)
}

function turnRight(rover) {
  currDir = rover.direction;
  switch (currDir) {
    case "N":
      currDir = "E";
      rover.direction = currDir;
      break;
    case "E":
      currDir = "S";
      rover.direction = currDir;
      break;
    case "S":
      currDir = "W";
      rover.direction = currDir;
      break;
    case "W":
      currDir = "N";
      rover.direction = currDir;
      break;
    default:
      console.log ("Please choose L or R to change direction");
    }
  console.log("Turn Right was called. " + `Now Facing: ` + currDir)
}

function moveForward (rover, command) {
  currDir = rover.direction;
  switch (currDir) {
    case "N":
      rover.y--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
    case "W":
      rover.x--;
      break;
    default:
      console.log ("Please press U or D to move Forward/Backward");
  }
  console.log(`X Coordinates = ${rover.x} Y Coordinates = ${rover.y}`)
}

function moveBackward (rover, command) {
  currDir = rover.direction;
  switch (currDir) {
    case "N":
      rover.y++;
      break;
    case "S":
      rover.y--;
      break;
    case "E":
      rover.x--;
      break;
    case "W":
      rover.x++;
      break;
    default:
      console.log ("Please press U or D to move Forward/Backward");
  }
  console.log(`X Coordinates = ${rover.x} Y Coordinates = ${rover.y}`)
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
}
    
    command(myRover, "lluuluuu");