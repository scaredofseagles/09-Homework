const fs = require('fs')
const inquirer = require('inquirer')

// array of questions for user
const questions = [
    {
        message:"What is the title of your project?",
        name: "projectTitle"
    },
    {
        message: "Provide a brief description of your project: ",
        name: "projectDesc"
    },
    {
        message: "What technologies did you use?",
        name: "tech"
    },
    // {
    //     message: "What are the install requirements?",
    //     name: "install"
    // },
    {
        type: "list", 
        message: "Which License would you like to use",
        name: "licenseType",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public Licence 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    },
    // {
    //     message:"Do you have any contributors?",
    //     name: "teamMembers"
    // },
    // {
    //     message: "Provide the tests conducted: ",
    //     name: "tests"
    // },
    {
        message: "Provide the source for a screenshot of the product: ",
        name: "imgSource"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    const projectSetup = await inquirer.prompt(questions)
    
    // write to file
    fs.writeFileSync('sample.md', 
    `# ${projectSetup.projectTitle}

## Description
${projectSetup.projectDesc}

## Technologies
${projectSetup.tech}

## Usage
The following image is an example of the web application's appearance and functionality: 
![Image](${projectSetup.imgSource})

## License
${projectSetup.licenseType}
    `)

    const checkOutput = fs.readFileSync('sample.md', 'utf8')
    console.log('The final sample.md: ', checkOutput)
}

// function call to initialize program
init();
