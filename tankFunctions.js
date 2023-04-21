let speed = 2;

function WasdControl(tank, tankPointer) {
  if (kb.pressing('w')) { // 'w' key
    tank.velocity.y = -speed;
    tankPointer.y += -speed * 10;
  } else if (kb.pressing('s')) { // 's' key
    tank.velocity.y = speed;
    tankPointer.y += speed * 10;
  } else {
    tank.velocity.y = 0;
  }

  if (kb.pressing('a')) { // 'a' key
    tank.velocity.x = -speed;
    tankPointer.x += -speed * 10;
  } else if (kb.pressing('d')) { // 'd' key
    tank.velocity.x = speed;
    tankPointer.x += speed * 10;
  } else {
    tank.velocity.x = 0;
  }
}

function ArrowKeyControl(tank2, tankPointer2) {
  if (kb.pressing('ArrowUp')) { // 'w' key
    tank2.velocity.y = -speed;
    tankPointer2.y += -speed * 10;
  } else if (kb.pressing('ArrowDown')) { // 's' key
    tank2.velocity.y = speed;
    tankPointer2.y += speed * 10;
  } else {
    tank2.velocity.y = 0;
  }

  if (kb.pressing('ArrowLeft')) { // 'a' key
    tank2.velocity.x = -speed;
    tankPointer2.x += -speed * 10;
  } else if (kb.pressing('ArrowRight')) { // 'd' key
    tank2.velocity.x = speed;
    tankPointer2.x += speed * 10;
  } else {
    tank2.velocity.x = 0;
  }
}


