# Remote project with Native federation

**Remote project with Native federation** is an Angular application that provides a quick start of a remote application (Microfrontend) with native federation. This application allows users to start a new Microfrontend without the need for initial configuration. It also defines the good practice standards that should be used in the development.

## Tabla de Contenidos
1. [Features](#features)
2. [Starting](#starting)
   - [Installation](#installation)
   - [Run the Application](#run-the-application)
3. [Use](#usage)
   
## Features
- Native Federation Integration: Demonstrates how to use Webpack's Native Federation to enable microfrontend architecture, allowing multiple Angular applications to work together and share modules dynamically.
- Dynamic Module Loading: Supports runtime loading and sharing of Angular modules between different microfrontend applications, making it easier to develop and deploy independent microfrontends.
- Seamless Microfrontend Integration: Enables smooth integration of various microfrontend applications into a cohesive user experience, even if they are developed and deployed separately.
. Cross-Application Communication: Provides mechanisms for communication between different microfrontend applications, ensuring that they can interact and pass data as needed.
- Scalable Architecture: Designed to support large-scale applications with multiple teams working on different parts of the frontend, facilitating better modularization and scalability.
- Flexible Configuration: Offers configuration options for setting up Native Federation, making it adaptable to various project requirements and deployment scenarios.
- Development and Production Support: Includes scripts and configurations for both development and production environments, ensuring that the application is ready for different stages of the development lifecycle.
- Example Implementations: Comes with example microfrontend applications and configurations to illustrate how to set up and use Native Federation in real-world scenarios.

## Starting

### Previous requirements

Make sure you have the following programs installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Angular CLI](https://angular.io/cli) (v14.x or later)

You can check if Node.js and Angular CLI are installed by running:

```bash
node -v
ng version
```


## Installation
Clone the repository:
```
git clone https://github.com/josevelez08/remote-native-federation.git
```
Change to the project directory:
```
cd remote-native-federation
```
Install the dependencies:
```
npm install
```
Ensure that Webpack Native Federation is properly configured in your Angular projects. Check the webpack.config.js or equivalent configuration files for details on how modules are exposed and consumed.

## Run the application
Running the Application
To start the development server for the main application, run:
```
ng serve
```
Navigate to http://localhost:4202 in your web browser to view the application.

For running other microfrontend apps or modules, follow their specific instructions (e.g., they might be running on different ports).

To build the project for production, use:
```
ng build --prod
The production build will be available in the dist/ directory.
```
## Usage
- Navigating the App: Explore how the main application and microfrontends interact. The application demonstrates dynamic module loading, so you can see how different parts of the app are integrated.
- Native Federation: Examine how different Angular apps share modules and components. Check the webpack.config.js or Native Federation setup files for details.
- API Integration: If the project integrates with APIs, ensure that the environment variables are correctly set up for different environments (development, staging, production).
