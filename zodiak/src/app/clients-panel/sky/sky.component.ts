import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @ViewChild('space')space: ElementRef<HTMLCanvasElement>;
  ngOnInit() {

    window.requestAnimationFrame = (function() {   return  window.requestAnimationFrame})();
// var canvas = document.getElementById("space");
// var c = canvas.getContext("2d");
const canvas = this.space.nativeElement;
  const c = this.space.nativeElement.getContext('2d');
var numStars = 800;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame() {

  if(animate)
    requestAnimationFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;

    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;

  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0)
  {c.fillStyle = "rgba(0,10,20,1)";
  c.fillRect(0,0, canvas.width, canvas.height);}
  c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  for(i = 0; i < numStars; i++){
    star = stars[i];

    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);

    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
    //c.fill();
  }
}

// document.getElementById('warp').addEventListener("click",function(e){
//  window.warp = window.warp==1 ? 0 : 1;
// window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
// executeFrame();
// });

executeFrame();
  }


}



/////////////////////// refctoring ////////////////////////////////////////////////////////////////////////////

// @ViewChild('space')
//   space: ElementRef<HTMLCanvasElement>;
//   canvas;
//   centerX;
//   centerY;
//   stars = [];
//   star;
//   numStars = 1000;
//   radius = '0.'+ Math.floor(Math.random() * 9) + 1;
//   ctx;
//   warp = 0;
//   focalLength;
//   animate = true;
//   ngOnInit() {
//   this.canvas = this.space.nativeElement;
//   this.ctx = this.space.nativeElement.getContext('2d');
//   this.focalLength = this.canvas.width * 2;

//   this.createStars();
//   this.executeFrame();
// }

// moveStars() {

//   for (let i = 0; i < this.numStars; i++) {
//     const star = this.stars[i];
//     star.z--;

//     if (star.z <= 0) {
//       star.z = this.canvas.width;
//     }
//   }

// }

// executeFrame() {
//   if (this.animate) {
//     window.requestAnimationFrame(this.executeFrame.bind(this));
//     this.moveStars();
//     this.drawStars();
//     }
// }
//   drawStars() {
//     let pixelX, pixelY, pixelRadius;

//     // Resize to the screen
//     if (this.canvas.width != window.innerWidth || this.canvas.width != window.innerWidth) {
//       this.canvas.width = window.innerWidth;
//       this.canvas.height = window.innerHeight;
//       this.createStars();
//     }
//     if (this.warp == 0) {

//       this.ctx.fillStyle = 'rgba(0,10,20,1)';
//       this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height); // background
//     }
//     this.ctx.fillStyle = 'rgba(209, 255, 255, '+ this.radius+ ')';

//       for (let i = 0; i < this.numStars; i++) {
//       const star = this.stars[i];


//       pixelX = (star.x - this.centerX) * (this.focalLength / star.z);
//       pixelX += this.centerX;
//       pixelY = (star.y - this.centerY) * (this.focalLength / star.z);
//       pixelY += this.centerY;
//       pixelRadius = 1 * (this.focalLength / star.z);

//       this.ctx.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
//       this.ctx.fillStyle = 'rgba(209, 255, 255, '+star.o+')';

//     }
//   }

//   createStars() {
//     this.centerX = this.canvas.width / 2;
//     this.centerY = this.canvas.height / 2;

//     for (let i = 0; i < this.numStars; i++) {
//       const star = {
//         x: Math.random() * this.canvas.width,
//         y: Math.random() * this.canvas.height,
//         z: Math.random() * this.canvas.width,
//         o: '0.'+ Math.floor(Math.random() * 99) + 1
//       };
//       this.stars.push(star);
//     }


//   }
