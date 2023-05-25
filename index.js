// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// Array of questions for user input
function promptUser() {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions.githubUsername',
        message: 'What is your GitHub Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions.email',
        message: 'What is your email address?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a summary of your project and its user story.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter what your project is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        
        choices: ['apache 2.0', 'mit', 'gpl 3.0']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing.',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            } else {
                console.log('Please enter contributor guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please instructions on how to test the app!');
                return false;
            }
        }
    }
]);
}

// Function to write README file
function writeToFile(fileName, data) {
    // let content = generateMarkdown(data);
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

// Function to initialize app
function init() {
    console.log('Welcome to your personal README generator!');

    promptUser()
    .then((userInput) => {


    // inquirer.prompt(questions).then(function (data) {
        const markdown = generateMarkdown(userInput);
        writeToFile('README.md', markdown);
    });
    
} 
    
    // try {

    //     // Prompt Inquirer questions
    //     const userResponses = await inquirer.prompt(questions);
    //     console.log("Your responses: ", userResponses);
    //     console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        // const userInfo = await api.getUser(userResponses);
        // console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        // console.log("Generating your README next...")
        // const markdown = generateMarkdown(userResponses, userInfo);
        // console.log(markdown);
    
        // // Write markdown to file
        // await writeFileAsync('ExampleREADME.md', markdown);

        // const fileName = 'README.md';
        // const markdown = generateMarkdown(userResponses);
        // writeToFile(fileName, markdown);

//     } catch (error) {
//         console.log(error);
//     }
// };

// Function call to initialize app
init();
