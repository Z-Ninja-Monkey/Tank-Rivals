function calculateCollisions(){
    for (let i = 0; i < bullets.length; i++) {
		let hit = false;
		if (bullets[i].overlaps(woodCollider) || bullets[i].overlaps(barrierCollider) || bullets[i].overlaps(explosiveCollider)) {
			if (bullets[i].overlaps(woodCollider)) {
				for (let i2 = 0; i2 < woodCollider.length; i2++) {
					if (bullets[i].overlaps(woodCollider[i2])) {
						wood[i2].health -= 1;
						drawHealthBar(10, wood[i2].health);
						if (wood[i2].health <= 0) {
							wood[i2].remove();
							woodCollider[i2].remove();
						}
						hit = true;
					}
				}
			} else if (bullets[i].overlaps(barrierCollider)) {
				bullets[i].remove();

			} else if (bullets[i].overlaps(explosiveCollider)) {
				for (let i2 = 0; i2 < explosiveCollider.length; i2++) {
					if (bullets[i].overlaps(explosiveCollider[i2])) {
						explosive[i2].health -= 1;
						//drawHealthBar(10, wood[i2].health);
						if (explosive[i2].health <= 0) {
							explosive[i2].remove();
							explosiveCollider[i2].remove();
							explosion();
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

function explosion(){
	for (let i = 0; i < explosion.length; i++) {
		const element = array[i];
		
	}
}