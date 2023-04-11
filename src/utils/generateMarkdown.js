// Begin function to render a license badge using user input.
const renderLicenseBadge = license => {
// If license exists, a license badge is returned depending on what license is passed in.
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license}-important)`;
  } else {
// If no license exists, return an empty string.
    return '';
  }
};

// Begin function to render the installation section in the table of contents using user input.
const renderInstallation = installation => {
// If an installation section exists, create a installation section in table of contents.
  if (installation) {
    return `- [Installation Instructions](#installation-instructions)`;
  } else {
// If no installation section exists, return an empty string.
    return '';
  }
};

// Begin function to render the installation section using user input.
const renderInstallationSection = installation => {
  const installationSection = `## Installation Instructions
  ${installation}`;
// If an installation section exists, create an installation section.
  if (installation) {
    return installationSection;
  } else {
// If no installation section exists, return an empty string.
    return '';
  }
};

// Begin function to render the license section in table of contents using user input.
const renderLicense = license => {
// If a license exists, create a license section in table of contents.
  if (license) {
    return `- [License Section](#license)`;
  } else {
// If no license exists, return an empty string.
    return '';
  }
};

// Begin function to render the license section with a link to license information using user input.
const renderLicenseSection = license => {
  const licenseSection = `## License
  Permission to use this application is granted under the ${license} license.
  Click on the link for more information: [${license} License Information](https://opensource.org/licenses/${license})`;
// If a license exists, create a link to license information.
  if (license) {
    return licenseSection;
  } else {
// If no license exists, return an empty string.
    return '';
  }
};

// Begin function to render the contribution section in the table of contents using user input.
const renderContribution = contribution => {
// If a contribution section exists, create a contribution section in table of contents.
  if (contribution) {
    return `- [How To Contribute](#how-to-contribute)`;
  } else {
// If no contribution section exists, return an empty string.
    return '';
  }
};

// Begin function to render the contribution section using user input.
const renderContributionSection = contribution => {
  const contributionSection = `## How To Contribution
  ${contribution}`;
// If a contribution section exists, create a contribution section.
  if (contribution) {
    return contributionSection;
  } else {
// If no contribution section exists, return an empty string.
    return '';
  }
};

// Begin function that renders the test section in the table of contents using user input.
const renderTest = test => {
// If a test section exists, create a test section in table of contents.
  if (test) {
    return `- [Testing](#testing)`;
  } else {
// If no test section exists, return an empty string.
    return '';
  }
};