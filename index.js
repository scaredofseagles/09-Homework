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
        message: "How many technologies did you use?",
        name: "tech"
    },
    {
        message: "What are the install requirements?",
        name: "install"
    },
    {
        message: "Insert a snippet of your code here",
        name: "codeSnippet"
    },
    {
        message: "Give your code snipper a title",
        name: "codeSnippetTitle"
    },   
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

let techList = []

// function to initialize program
async function init() {
    const projectSetup = await inquirer.prompt(questions)
    
    for (var i=0; i<projectSetup.tech; i++){
        const techInfo = await inquirer.prompt({
            message: "What technology did you use?",
            name: "techName"
        })
        techList.push(techInfo)
    }
    // write to file
    fs.writeFileSync('sample.md', 
    `# ${projectSetup.projectTitle}

## Description
${projectSetup.projectDesc}

## Installation
    ${projectSetup.install}

## Technologies`)

    techList.forEach(function(technology){
        fs.appendFileSync('sample.md', `
* ${technology.techName}`)
    })

    fs.appendFileSync('sample.md', `

## What I Did

#### ${projectSetup.codeSnippetTitle}
    ${projectSetup.codeSnippet}

## Usage
The following image is an example of the web application's appearance and functionality: 
![Image](${projectSetup.imgSource})

## License
${projectSetup.licenseType}

============================================================

This README was created using a README Generator. See the Repo: [github.com/scaredofseagles/README-Generator](https://github.com/scaredofseagles/README-Generator)

    `)

    const checkOutput = fs.readFileSync('sample.md', 'utf8')
    console.log('The final sample.md: ', checkOutput)
}

// function call to initialize program
init();
