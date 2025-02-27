# Generate PDF with jsPDF and Angular

This project demonstrates how to generate PDF documents using the jsPDF library in an Angular application. It includes various examples and has been deployed on GitHub for easy access.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Generating PDF documents is a common requirement in many web applications. This project provides a comprehensive guide on how to use the jsPDF library with Angular to create PDF files. Each example is provided separately for clarity.

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/choudharymahipal/GeneratePDF.git
cd GeneratePDF
npm install
```

## Usage

To run the application locally, use the following command:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your web browser to see the application in action.

## Examples

The project includes several examples demonstrating different features of jsPDF with Angular:

- Basic PDF generation
- Adding text and images
- Creating tables
- Customizing styles
- Change Page Layout etc.

Each example is located in its own component for easy reference.

## Deployment

The project is deployed on GitHub Pages. You can view the live demo [here](https://choudharymahipal.github.io/GeneratePDF/).

```bash
npm install -g angular-cli-ghpages
ng build --base-href "/GeneratePDF/"
ngh --dir dist/generate-pdf/browser
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.