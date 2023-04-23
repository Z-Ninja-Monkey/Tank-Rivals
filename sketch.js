let tank;
let tank2;
let gun;
let gun2;
let wood;
let barriers;
let barrierCollider;
let explosive;
let explosiveCollider;
let tankPointer;

let bullets;

let gunType = 'miniGun';

function preload(){
	//image = loadImage('assets/blank.png');
}

function setup() {
	let canvas = createCanvas(550, 550);
	canvas.parent("Game");
	frameRate(60);

	tank = new Sprite(275, 275, 40, 40);
	tank.color = 'green';

	tank2 = new Sprite(500, 275, 40, 40);
	tank2.color = 'blue';

	gun = new Sprite(275, 275, 40, 13, 'k');
	gun.offset.x = 23;
	gun.rotationSpeed = 0;
	gun.overlaps(tank);
	gun.overlaps(tank2);
	gun.color = 'lightgreen';

	gun2 = new Sprite(275, 275, 40, 13, 'k');
	gun2.offset.x = 23;
	gun2.rotationSpeed = 0;
	gun2.overlaps(tank2);
	gun2.overlaps(tank);
	gun2.color = 'lightblue';

	wood = new Group();
	woodCollider = new Group();
	//woodHealths
	woodCollider.color = color(99, 67, 16);
	//woodCollider.overlaps(wood);

	barriers = new Group();
	barrierCollider = new Group();
	barrierCollider.color = 'gray';
	//barrierCollider.overlaps(barriers);
	//new barriers.Sprite(600, 600, 60, 60, 'k');
	//new barrierCollider.Sprite(600, 600);

	explosive = new Group();
	explosiveCollider = new Group();
	explosiveCollider.color = 'red';

	bullets = new Group();
	bullets.overlaps(tank);
	bullets.overlaps(wood);
	bullets.overlaps(tank2);
	bullets.layer = 100;

	tankPointer = new Sprite(0, 0, 20, 20, 'none');
	tankPointer.visible = false;

	tankPointer2 = new Sprite(0, 0, 20, 20, 'none');
	tankPointer2.visible = false;

	BuildLevel(
		[0,0,0,0,0,0,0],
		[0,9,9,2,9,9,0],
		[0,9,9,1,9,9,0],
		100
		)
	BuildLevel(
		[0,9,9,9,9,9,0],
		[0,9,9,9,9,9,0],
		[0,0,0,9,0,0,0],
		280
		)	
		
		for (let i = 0; i < woodCollider.length; i++) {
			wood[i].health = 10;
			//console.log(wood[i2].health);
		}
		for (let i = 0; i < explosiveCollider.length; i++) {
			explosive[i].health = 10;
			//console.log(wood[i2].health);
		}
}

function draw() {
	clear();
	background('gray');
	//tank controls

	tankPointer.y = tank.y;
	tankPointer.x = tank.x;
	WasdControl(tank, tankPointer);
	tank.rotateTo(tankPointer, 5, 0);

	tankPointer2.y = tank2.y;
	tankPointer2.x = tank2.x;
	ArrowKeyControl(tank2, tankPointer2);
	tank2.rotateTo(tankPointer2, 5, 0);

	GunClickControl(bullets, tank);

	woodCollider.x = wood.x;
	woodCollider.y = wood.y;
	woodCollider.rotation = wood.rotation;

	calculateCollisions();

	/*function drawHealthBar(maxHealth, currentHealth) {
		let healthRatio = currentHealth / maxHealth;
		let barWidth = 200;
		let greenWidth = barWidth * healthRatio;
		let redWidth = barWidth - greenWidth;
		
		fill('green');
		rect(20, 20, greenWidth, 20);
		
		fill('red');
		rect(20 + greenWidth, 20, redWidth, 20);
	  }
	  */
	for (let i = 0; i < barriers.length; i++) {
		barrierCollider[i].x = barriers[i].x;
		barrierCollider[i].y = barriers[i].y;
		barrierCollider[i].rotation = barriers[i].rotation;
	}
	for (let i = 0; i < wood.length; i++) {
		woodCollider[i].x = wood[i].x;
		woodCollider[i].y = wood[i].y;
		woodCollider[i].rotation = wood[i].rotation;
	}
	for (let i = 0; i < explosive.length; i++) {
		explosiveCollider[i].x = explosive[i].x;
		explosiveCollider[i].y = explosive[i].y;
		explosiveCollider[i].rotation = explosive[i].rotation;
	}


	gun.y = tank.y;
	gun.x = tank.x;
	//gun.rotateTo(mouse, 100, 0);
	if(kb.pressing('f')){
		gun.rotationSpeed = -5;
	}else if(kb.pressing('h')){
		gun.rotationSpeed = 5;
	}else {
		gun.rotationSpeed = 0;
	}

	gun2.y = tank2.y;
	gun2.x = tank2.x;
	//gun2.rotateTo(mouse, 100, 0);
	if(kb.pressing('i')){
		gun2.rotationSpeed = -5;
	}else if(kb.pressing('p')){
		gun2.rotationSpeed = 5;
	}else {
		gun2.rotationSpeed = 0;
	}
	
	camera.x = (tank.x + tank2.x) / 2;
	camera.y = (tank.y + tank2.y) / 2;


	let distanceIsh = Math.pow((tank.x - tank2.x) * (tank.x - tank2.x) + (tank.y - tank2.y) * (tank.y - tank2.y), 0.5);

	camera.zoom = 1.4 - distanceIsh * 1/1000;
	//alert(camera.zoom)
	/*if (kb.pressing("space")) {
		camera.zoom += 0.5;
	}*/
}