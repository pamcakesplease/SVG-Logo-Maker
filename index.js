const inquirer = require("inquirer");
const fs = require("fs");
const { triangle, circle, square } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svgString += `${answers.shape}`;
    svgString += "<g>";

    let shapeChoice
    if (answers.shape == "triangle")
    {
        shapeChoice = new triangle();
        svgString += `<polygon points="250,60 100,400 400,400" fill="${answers.shapeBackgroundColor}"/>`;
    }

    else if (answers.shape == "circle")
    {
        shapeChoice = new circle();
        svgString += `<circle r="45" cx="50" cy="50" fill="${answers.shapeBackoundColor}"/>`;
    }

    else  (answers.shape == "square")
    {
        shapeChoice = new square();
        svgString += `<rect x="100" y="150" rx="0" ry="0" width="400" height="300" fill="${answers.shapeBackgroundColor}"/>`
    }
}
svgString += `<text x="100" y="20" text-anchor="middle" font-size="2em" fill="${answers.textColor}">${answers.text}</text>`;
svgString += "</g>";
svgString += "</svg>";