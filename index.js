// Dependencies
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import colors from "colors";

const questions = [
  {
    type: "input",
    name: "title",
    message: colors.magenta("What is the title of your project?"),
  },
  {
    type: "input",
    name: "description",
    message: colors.magenta("Provide a description of your project:"),
  },
  {
    type: "input",
    name: "installation",
    message: colors.magenta("What are the installation instructions?"),
  },
  {
    type: "input",
    name: "usage",
    message: colors.magenta("Provide usage information:"),
  },
  {
    type: "list",
    name: "license",
    message: colors.magenta("What license is the project under?"),
    choices: ["MIT", "GPLv3", "Apache 2.0", "None", "Add manually"],
  },
  {
    type: "input",
    name: "contributing",
    message: colors.magenta("Provide contribution guidelines:"),
  },
  {
    type: "input",
    name: "tests",
    message: colors.magenta("Provide test instructions:"),
  },
  {
    type: "input",
    name: "email",
    message: colors.magenta("What is your email address?"),
  },
  {
    type: "input",
    name: "github",
    message: colors.magenta("What is your GitHub username?"),
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      console.error(colors.red(err));
    }
    console.log(colors.green("README.md Successfully created!"));
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    })
    .catch((error) => {
      console.error(colors.red("Error initializing app:"), error);
    });
}

// Function call to initialize app
init();
