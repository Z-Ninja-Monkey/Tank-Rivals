function calculateCollisions(){
    for (let i = 0; i < bullets.length; i++) {
		let hit = false;
		if (bullets[i].overlaps(woodCollider) || bullets[i].overlaps(barrierCollider) || bullets[i].overlaps(explosiveCollider)) {
			if (bullets[i].overlaps(woodCollider)) {
				for (let i2 = 0; i2 < woodCollider.length; i2++) {
					if (bullets[i].overlaps(woodCollider[i2])) {
						wood[i2].health -= 1;
						hitSound.play();
						//drawHealthBar(10, wood[i2].health);
						if (wood[i2].health <= 0) {
							wood[i2].remove();
							woodCollider[i2].remove();
						}
						hit = true;
					}
				}
			} else if (bullets[i].overlaps(barrierCollider)) {
				bullets[i].remove();
				hitSound.play();

			} else if (bullets[i].overlaps(explosiveCollider)) {
				for (let i2 = 0; i2 < explosiveCollider.length; i2++) {
					if (bullets[i].overlaps(explosiveCollider[i2])) {
						explosive[i2].health -= 1;
						hitSound.play();
						//drawHealthBar(10, wood[i2].health);
						if (explosive[i2].health <= 0) {
							explosiveCollider[i2].remove();
							explosion(explosive[i2]);
							explosive[i2].remove();
							explosionSound.play();
						}
						hit = true;
					}
				}
			} 
			if (hit) {
				bullets[i].remove();
			}
		}
	}
}

function explosion(explosive){
	for (let i = 0; i < wood.length; i++) {
		distance = dist(wood[i].x, wood[i].y, explosive.x, explosive.y);
		wood[i].health -= 600/distance;
		//alert(wood[i].health);
		if(wood[i].health <= 0){
			wood[i].remove();
			woodCollider[i].remove();
		}
	}
	for (let i = 0; i < explosive.length; i++) {
		distance = dist(explosive[i].x, explosive[i].y, explosive.x, explosive.y);
		explosive[i].health -= 600/distance;
		//alert(wood[i].health);
		if (explosive[i].health <= 0) {
			explosiveCollider[i].remove();
			explosion(explosive[i]);
			explosive[i].remove();
			explosionSound.play();
		}
	}

	distance = dist(tank.x, tank.y, explosive.x, explosive.y);
	tank.health -= 2000/distance;
	if(tank.health <= 0){
		tank.remove();
		gun.remove();
	}
	tank2.health -= 2000/distance;
	if(tank2.health <= 0){
		tank2.remove();
		gun2.remove();
	}
}