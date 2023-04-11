// Begin function to create a license badge.
const renderLicenseBadge = license => {
// If license exists, a license badge is returned depending on what license is passed in.
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license}-important)`;
  } else {
// If no license exists, return an empty string.
    return '';
  }
};

// Begin function that renders the installation section in the table of contents.
const renderInstallation = installation => {
// if an installation section exists, create a installation section in table of contents
  if (installation) {
    return `- [Installation Instructions](#installation-instructions)`;
  } else {
// if no installation section exists, return an empty string.
    return '';
  }
};
