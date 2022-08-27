# &lt;TagInput/&gt; Project

This is a small project developed with Vue 3 in Vite.

The main idea is creating reuseable tag-input component for vue 3 as a code challenge.

We use [Mirage.js](https://miragejs.com/) to create a mock server for test API, Also use ```axios``` to fetch API urls.

<br>

## Online Demo

Preview latest version of this project, Hosted on [Netlify](https://netlify.app/):

### [🚀 Online Demo (click here)](https://sadrix-vue-tag-input.netlify.app/) 

<br>

## Get Started

If you want a clone of this project or just a copy of components which used in it, easily can create a clone and use the code.

First open your ```cmd (command line)``` and change directory to path (folder) you want to copy clone files.

Make sure you have installed ```git``` on your computer. If you installed this before, with command below, can see the version of git that your system useing:

```sh
git --version
```

You can download ```git``` from [this link](https://git-scm.com/).

After that, just type code below in your command line and press Enter:

```sh
git clone https://github.com/sadrix/vue-tag-input.git
```
<br>

## Project Setup

To create build version of project or start development server on it, need to install node_modules first. ```npm``` package manager will do this automaticaly based on our project ```package.json``` file:

```sh
npm install
```

Make sure you have installed ```Node.js``` on your computer. run ```node -v``` command to know node version that installed on your computer.

You can download ```Node.js``` from [this link](https://nodejs.org/en/download/). We recomend instal node version 15 or latest.

<br>

## Compile and Hot-Reload for Development

As soon as you installed node and all dependencies of this project, You can start development server (with hot-reload) by runing this command:

```sh
npm run dev
```

<br>

## Compile and Minify for Production

To make build production ready version of project, you can run this command:

```sh
npm run build
```
You can find build version on ```/dist``` path on project root directory.

<br>

## Tests ✅

For testing of our components Behavior Driven Development (BDD) and check if user stories which defined for our components working correcly, we use [Cypress](https://www.cypress.io/) testing library which has greate integrations for Vue.js apps, also projects that created with Vite.

If you want check test writen for component simply run this command:

```sh
npx cypress open
```

After cypress's dev-server running correctly you can select ```component testing``` and testing ```browser```, then from list of ```specs``` defined in cypress web app, check all stories work correctly or have any error for each part.
