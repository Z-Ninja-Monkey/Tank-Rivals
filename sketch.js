let tank;
let gun;
let wood;
let tankPointer;

function preload(){
	//image = loadImage('assets/blank.png');
}

function setup() {

	let canvas = createCanvas(550, 550);
	canvas.parent("Game");
	frameRate(60);

	tank = new Sprite(275, 275, 40, 40);

	gun = new Sprite(275, 275, 40, 13, 'k');
	gun.offset.x = 23;
	gun.rotationSpeed = 0;
	gun.overlaps(tank);

	wood = new Sprite(50, 50, 60, 60, 'k');

	tankPointer = new Sprite(0, 0, 20, 20, 'none');
	tankPointer.visible = false;
}

function draw() {
	clear();
	background('gray');
	//tank controls

	tankPointer.y = tank.y;
	tankPointer.x = tank.x;
	WasdControl(tank, tankPointer);
	tank.rotateTo(tankPointer, 5, 0);

	gun.y = tank.y;
	gun.x = tank.x;
	gun.rotateTo(mouse, 100, 0);
	
	camera.x = tank.x;
	camera.y = tank.y;
}
