// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badge = '';

  switch (license.toLowerCase()) {
    case 'mit':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'gpl 3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[License](https://opensource.org/licenses/${license})`;

}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} license. See the [License](${renderLicenseLink(license)}) file for more information.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, tableOfContents, installation, usage, license, contributing, test, questions } = data;

  // Generate the license section of the README
  const licenseSection = renderLicenseSection(license);

  return `# ${title}

${renderLicenseBadge(license)}

  ## Description
  ${description}
  
  ## Table of Contents
  ${tableOfContents}

  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ${licenseSection}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${test}
  
  
  ## Questions
  
  If you have any questions, feel free to reach out:
  
  GitHub: [${questions.githubUsername}](https://github.com/${questions.githubUsername})
  Email: ${questions.email}
`;
}

module.exports = generateMarkdown;
