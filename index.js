const inquirer = require("inquirer");
const fs = require("fs");
const { triangle, circle, square } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
  

    let shapeChoice;
    if (answers.shape === "triangle") {
      shapeChoice = new triangle();
      svgString += `<polygon points="250,60 100,400 400,400" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "circle") {
      shapeChoice = new circle();
      svgString += `<circle r="45" cx="50" cy="50" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new square();
      svgString += `<rect x="100" y="150" rx="0" ry="0" width="400" height="300" fill="${answers.shapeBackgroundColor}"/>`;
    }
  
    svgString += `<text x="200" y="160" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  

    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }

function promptUser() {
  inquirer
    .prompt([

      {
        type: "input",
        message:
          "What text would you like you logo to display?",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose text color by name or number",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["triangle", "circle", "square"],
        name: "shape",
      },
      {
        type: "input",
        message:"Choose shapes background color by name or number",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();
