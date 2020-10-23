# ReadME-Generator

## Description

A command line application that generates a ReadMe based on user responses.

## Technologies

* JavaScript
* Node.js

## Goal of the Project

**Create a command-line application that dynamically generates a professional ReadME**

As a command-line appication, I used the npm package "inquirer" to prompt the user for details of their project for the README. Furthermore, I used the "fs" module to write to an .md file synchronously. 

## Installation

````
npm init
npm install inquirer
````

## Usage

The following animated gif is an example of the application's appearance and functionality: 

![ReadMe-Generator-demo](Assets/ReadME-Generator-demo.gif)

![Image](Assets/readme-generator-screenshot.png)

See the end result: [sample.md](./sample.md)

## What I Did

#### Prompt User

````
async function init() {
    const questions = [
    {
        message: "What is your Github username?",
        name: "userName"
    }]
    const projectSetup = await inquirer.prompt(questions)
}
````

#### Write to File

````
fs.writeFileSync('sample.md', `# ${projectSetup.projectTitle}`)
const checkOutput = fs.readFileSync('sample.md', 'utf8')
console.log('The final sample.md: ', checkOutput)
````


## License

MIT License

Copyright (c) 2020 Dailey Kaze

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.