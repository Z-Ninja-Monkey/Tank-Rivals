let lastShotTime = 0;
let shotDelay = 100; // delay between shots in milliseconds

function GunClickControl(bullets) {
    let currentTime = new Date().getTime();
    if (mouse.pressing('right_mouse') && currentTime - lastShotTime > shotDelay) {
        bullet = new bullets.Sprite(tank.x, tank.y, 10, 'k');
        bullet.layer = -10;
        let angle = Math.atan2(mouse.y - tank.y, mouse.x - tank.x);
        bullet.velocity.x = Math.cos(angle) * 7;
        bullet.velocity.y = Math.sin(angle) * 7;
        lastShotTime = currentTime;

    }
}
