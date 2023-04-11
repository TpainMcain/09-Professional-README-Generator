// Begin function to create a license badge using user input.
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
// if no installation section exists, return an empty string.
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
