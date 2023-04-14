let tank;
let gun;
let wood;

function preload(){
	//image = loadImage('assets/blank.png');
}

function setup() {

	let canvas = createCanvas(550, 550);
	canvas.parent("Game");
	frameRate(60);

	tank = new Sprite(275, 275, 40, 40);
	gun = new Sprite(275, 275, 60, 15, 'none');
	wood = new Sprite(50, 50, 60, 60, 's');
	
}

function draw() {
	clear();
	background('gray');
	//tank controls
	WasdControl(tank);

	gun.y = tank.y;
	gun.x = tank.x;
	gun.rotateTo(mouse, 6, 100);

	if(!tank.colliding(wood)){
		tank.rotation *= 1.1;
		let intervals = [0, 90, 180, 270];
		for (let i = 0; i < intervals.length; i++) {
			if (abs(tank.rotation - intervals[i]) < 20) {
				tank.rotation = intervals[i];
				break;
			}
		}
	}
	

	
	camera.x = tank.x;
	camera.y = tank.y;
}
