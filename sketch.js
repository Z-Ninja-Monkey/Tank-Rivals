let tank;
let gun;
let wood;
let barriers;
let barrierCollider;
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

	gun = new Sprite(275, 275, 40, 13, 'k');
	gun.offset.x = 23;
	gun.rotationSpeed = 0;
	gun.overlaps(tank);
	gun.color = 'lightgreen';

	wood = new Group();
	woodCollider = new Group();
	woodCollider.color = color(99, 67, 16);
	//woodCollider.overlaps(wood);

	barriers = new Group();
	barrierCollider = new Group();
	barrierCollider.color = 'gray';
	//barrierCollider.overlaps(barriers);
	//new barriers.Sprite(600, 600, 60, 60, 'k');
	//new barrierCollider.Sprite(600, 600);

	bullets = new Group();
	bullets.overlaps(tank);
	bullets.overlaps(wood);
	bullets.depth = -10;

	tankPointer = new Sprite(0, 0, 20, 20, 'none');
	tankPointer.visible = false;

	BuildLevel(
		[0,0,0,0,0,0,0],
		[0,9,9,9,9,9,0],
		[0,9,9,1,9,9,0],
		100
		)
	BuildLevel(
		[0,9,9,9,9,9,0],
		[0,9,9,9,9,9,0],
		[0,0,0,9,0,0,0],
		280
		)			
}

function draw() {
	clear();
	background('gray');
	//tank controls

	tankPointer.y = tank.y;
	tankPointer.x = tank.x;
	WasdControl(tank, tankPointer);
	tank.rotateTo(tankPointer, 5, 0);

	GunClickControl(bullets, tank);

	woodCollider.x = wood.x;
	woodCollider.y = wood.y;
	woodCollider.rotation = wood.rotation;

	for (let i = 0; i < bullets.length; i++) {
		if (bullets[i].overlaps(woodCollider) || bullets[i].overlaps(barrierCollider)) {
			bullets[i].remove();
		}	
	}
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

	gun.y = tank.y;
	gun.x = tank.x;
	gun.rotateTo(mouse, 100, 0);
	
	camera.x = tank.x;
	camera.y = tank.y;
	if (kb.pressing("space")) {
		camera.zoom += 0.5;
	}
}