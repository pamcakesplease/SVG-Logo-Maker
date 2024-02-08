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
    }

    else if (answers.shape == "circle")
    {
        shapeChoice = new circle();
    }

    else  (answers.shape == "square")
    {
        shapeChoice = new square();
    }
}