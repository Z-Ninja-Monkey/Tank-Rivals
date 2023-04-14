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