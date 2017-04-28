window.onload = function() {
	var canvas = document.getElementById("my-canvas");
	canvas.width = canvas.scrollWidth;
	canvas.height = canvas.scrollHeight;
	var ctx = canvas.getContext('2d');

	var circle = {
		x: 340,
		y: 375,
		xdir: -1,
		ydir: -1,
		radius: 25,
		startAngle: 0,
		endAngle: Math.PI * 2,
		anticlockwise: true,
		color: "darkturquoise",
		
		draw: function() {
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
		}

	}

	function movement() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (circle.x <=25) {
			circle.xdir = 1;
		} else if (circle.x >= 375) {
			circle.xdir = -1;
		}
		if (circle.y <=25) {
			circle.ydir = 1;
		} else if (circle.y >= 375) {
			circle.ydir = -1;
		}
		circle.x += 10 * circle.xdir;
		circle.y += 10 * circle.ydir;
		circle.draw();
		if (circle.x === 25 && circle.y === 25) {
			clearTimeout(interval);
		}
	}

	movement();

	var startButton = document.getElementById("start");
	var interval;
	var start = "stop";

	startButton.addEventListener("click", function() {
		if (start === "stop") {
			start = "start";
			startButton.innerText = "Stop";
			interval = setInterval(movement, 30);
		} else if (start === "start") {
			start = "stop";
			startButton.innerText = "Start";
			clearTimeout(interval);
		}
	})

}