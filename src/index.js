const fs = require('fs'); // Require Node.js file system.
const inquirer = require('inquirer'); // Require Inquirer 8.2.0.
const generateMarkdown = require('./utils/generateMarkdown'); // Require link to where the README is created.
const questions = () => { // Declare array of questions for user input. 
// Prompt the user using inquirer. Use the name parameter value for template literals when writing the README.
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Project title: (Required)', // Add project title.
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add your project name!');
            return false;
          }
        },
      },
  
      {
        type: 'input',
        name: 'description',
        message: 'Description of the project: (Required)', // Add description of the project.
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add a project description!');
            return false;
          }
        },
      },
  
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to add installation instructions?', // Ask to add installation instructions.
        default: true,
      },
  
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:', // Add installation instructions.
        when: ({ confirmInstallation }) => confirmInstallation,
      },
  
      {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions: (Required)', // Add usage instructions.
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add usage instructions for your project!');
            return false;
          }
        },
      },
  
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your project?', // Ask to add license.
        default: true,
      },
  
      {
        type: 'list',
        name: 'license',
        message: 'License for the project: (Required)', // Add license.
        choices: ['MIT', 'GNU', 'Apache'],
        default: ['MIT'],
        when: ({ confirmLicense }) => confirmLicense,
      },
  
      {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to add contribution instructions?', // Ask to add contribution instructions.
        default: true,
      },
  
      {
        type: 'input',
        name: 'contribution',
        message: 'Information about how to contribute:', // Add contribution instructions.
        when: ({ confirmContribution }) => confirmContribution,
      },
  
      {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to add a command for running tests?', // Ask to add command for running tests.
        default: false,
      },
  
      {
        type: 'input',
        name: 'test',
        message: 'Command for running tests:', // Add command for running tests.
        when: ({ confirmTest }) => confirmTest,
      },

      {
        type: 'confirm',
        name: 'confirmCredit',
        message: 'Would you like to add a section for credits?', // Ask to add credits.
        default: true,
      },
  
      {
        type: 'input',
        name: 'credit',
        message: 'Give credit:', // Add credits.
        when: ({ confirmCredit }) => confirmCredit,
      },
  
      {
        type: 'input',
        name: 'github',
        message: 'Your GitHub username: (Required)', // Add github username.
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add a valid GitHub username!');
            return false;
          }
        },
      },
  
      {
        type: 'input',
        name: 'email',
        message: 'Your Email Address: (Required)', // Add email address.
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add a valid email address!');
            return false;
          }
        },
      },
    ]);
  };

// Begin function to write README file using file system.
const writeToFile = data => {
// writeFile allows you to write a file using three parameters: (name of file, data, callback for errors).
  fs.writeFile('README.md', data, err => {
// Check for error.
    if (err) {
      console.log(err);
      return;
    } else {
// If successful.
      console.log('Your README has been created successfully!');
    }
  });
};

// Begin Function to initialize README generator.
questions()
// Get user input.
  .then(answers => {
    return generateMarkdown(answers);
  })
// Display data on the page.
  .then(data => {
    return writeToFile(data);
  })
// Catch errors.
  .catch(err => {
    console.log(err);
  });