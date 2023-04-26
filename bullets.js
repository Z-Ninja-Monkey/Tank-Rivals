let lastShotTime = 0;
let lastShotTime2 = 0;
let shotDelay = 140;

function GunClickControl(bullets) {
    let currentTime = new Date().getTime();
    if (kb.pressing('g') && currentTime - lastShotTime > shotDelay) {
        bullet = new bullets.Sprite(tank.x, tank.y, 20, 'k');
        bullet.layer = -10;
        bullet.from = 0;
        /*
        let angle = Math.atan2(mouse.y - tank.y, mouse.x - tank.x);
        bullet.velocity.x = Math.cos(angle) * 7;
        bullet.velocity.y = Math.sin(angle) * 7;*/
        bullet.move(999999, gun.rotation, 10)
        lastShotTime = currentTime;

    }
    let currentTime2 = new Date().getTime();
    if (kb.pressing('o') && currentTime2 - lastShotTime2 > shotDelay) {
        bullet = new bullets.Sprite(tank2.x, tank2.y, 20, 'k');
        bullet.layer = -10;
        bullet.from = 1;
        /*
        let ansgle = Math.atan2(mouse.y - tank.y, mouse.x - tank.x);
        bullet.velocity.x = Math.cos(angle) * 7;
        bullet.velocity.y = Math.sin(angle) * 7;*/
        //alert(gun2.rotation)
        bullet.move(999999, gun2.rotation, 10);
        //bullet.setSpeed()
        lastShotTime2 = currentTime2;

    }
}
