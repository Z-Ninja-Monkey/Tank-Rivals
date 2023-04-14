let speed = 2;

function WasdControl(tank) {
  if (kb.pressing('w')) { // 'w' key
    tank.velocity.y = -speed;
  } else if (kb.pressing('s')) { // 's' key
    tank.velocity.y = speed;
  } else {
    tank.velocity.y = 0;
  }

  if (kb.pressing('a')) { // 'a' key
    tank.velocity.x = -speed;
  } else if (kb.pressing('d')) { // 'd' key
    tank.velocity.x = speed;
  } else {
    tank.velocity.x = 0;
  }
}