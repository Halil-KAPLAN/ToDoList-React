# ToDo List

## Description

It is an example of a simple ToDo List coded in React. Redux is used for state management and json-server is used for Fake Backend Provider. Also, SASS is used as CSS precompiler.

![alt text](screenshot/preview.gif?raw=true)

## Installation

NodeJS must be installed for the project to work.

- Download and install **node** (and **npm**): https://nodejs.org/en/
- Make sure you have an editor (I used VSCode: https://code.visualstudio.com/)
- For Fake Backend Provider to work, json-server must be installed.

### Install dependencies

Open a terminal or command prompt inside the project folder, then install the dependencies.

```Bash
# Follow this command to add the node_modules folder.
$ npm install
# Follow this command to install json-server.
$ npm install -g json-server
```

### Start the project

Open a terminal or command prompt inside the project folder. (A new terminal should open for each command)

```Bash
# Follow this command for Fake Api. This will run json-server.
$ npm run start:server
# If you want to replace css with SASS follow this command.
$ npm run start:sass
# Follow this command to run the project.
$ npm start
```

Then visit http://localhost:3000/
