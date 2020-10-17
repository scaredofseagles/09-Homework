// function to generate markdown for README
function generateMarkdown(data) {
  let draftMD  = 
  `# ${projectSetup.projectTitle}

  ## Description
  ${projectSetup.projectDesc}
  
  ## Installation
      ${projectSetup.install}
  
  ## Technologies`

  let techMD = `
  * ${technology.techName}`

  let bottomMD = `

  ## What I Did

  #### ${projectSetup.codeSnippetTitle}
    ${projectSetup.codeSnippet}

  ## Usage
  The following image is an example of the web application's appearance and functionality: 
  ![Image](${projectSetup.imgSource})

  ## Questions
  * ${projectSetup.email}
  * [{projectSetup.username}](${gitHub}${projectSetup.username})

  ## License
  ${projectSetup.licenseType}

  ============================================================

  This README was created using a README Generator. See the Repo: [github.com/scaredofseagles/README-Generator](https://github.com/scaredofseagles/README-Generator)`


  
  
  return draftMD
}

module.exports = generateMarkdown;
