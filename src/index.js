import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    // circle.style.backgroundColor = colors[index % colors.length]
});

window.addEventListener("mousemove", function(e){
    coords.x = e.pageX;
    coords.y = e.pageY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (20 - index) / 20;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();
