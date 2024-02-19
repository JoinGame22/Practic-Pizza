# Pizza Application - Admin chef pizza management and owner toppings management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4700/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `git clone https://github.com/JoinGame22/StrongMind-Pizza.git`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Cloud Deploy

We use github pages as the cloud website server for this application. Run `npm run deploy:ghpages` to deploy the website automaticly to github pages: [StringMind-Pizza](https://joingame22.github.io/StrongMind-Pizza/)

## User Manural
The application consist of three pages, sign in, chef, manager page. First the application will take the user to the log in page where the user has to
sign in to either as the 'chef' or the 'manager' this will then take the user to the corresponding pages, in which the user will be able to
acess either the pizza or the toppings of the application. In which the user will be able to create new, edit old, delete, and see all of the avaiable toppings and pizzas.

Chef Login  
Username: chef  
Password: chef  

Manager Login  
Username: owner  
Password: owner  

## Tech Choices
The decision to utilize Apairy and Angular in our application was made to streamline development processes and enhance user experience. Apairy's API design tools ensure robust, well-documented, and thoroughly tested backend services, while Angular's modular architecture and rich feature set facilitate the development of dynamic, responsive web applications. By combining these technologies, we achieve seamless integration between frontend and backend components, fostering collaboration, enabling rapid iteration, and ensuring scalability. Ultimately, our choice reflects a commitment to leveraging top-tier tools and technologies to deliver a high-quality, performant, and user-friendly application.

Apiray API Design: https://pizzaservice.docs.apiary.io/#  
Application Develop Tools:  
(1) Angular CLI, Node.js  
(2) Angular Material for UI  
(3) WindTail for reposive web-design  

## Future Development
(1) Based on apiray API desing, use Spring boot to code the RESTful APIs with database, or use AWS Client (javascript) to operate the data  
(2) modify the WindTail to make website more resposive  
(3) change the Login to OKTA  

## check ng version
ng version should be 16  
Angular CLI: 16.2.12  
Node: 18.19.0  
Package Manager: npm 8.8.0  
OS: win32 x64  

Package                           Version  
-----------------------------------------------------------  
@angular-devkit/architect         0.1600.3  
@angular-devkit/build-angular     16.0.3  
@angular-devkit/core              16.0.3  
@angular-devkit/schematics        16.2.12  
@angular/cdk                      16.0.2  
@angular/cli                      16.2.12  
@angular/material                 16.0.2  
@angular/material-luxon-adapter   16.0.2  
@schematics/angular               16.2.12  
rxjs                              7.8.1  
typescript                        5.0.4  
zone.js                           0.13.0  