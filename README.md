# CDL Front-end

The [Convergence Design Lab](https://convergencedesignlab.org) website

## Structure

The Convergence Design Lab (CDL) website is split across two repositories. This repository contains the front-end of the site. The back-end is a headless WordPress, essentially an internal editing interface for the content of the site and an API for the front-end of the site. The front-end of the site is a single page app that queries this back-end to load in the dynamic content (e.g. project and resource pages).

The front-end is built with [Gatsby](https://www.gatsbyjs.org/) - a framework for creating super fast websites using [React](https://reactjs.org/).

## Installing

This project uses the node and npm ecosystem to build the tool. Before attempting to install this project, make sure you have [node](https://nodejs.org/en/download/) installed. After that, clone this repository to your local machine, open up a terminal inside of the project folder and run

```
npm install
```

This will install the dependencies and make a `.env` file which contains environment variables (mainly needed for deploying, see deploying section).

## Running

To build the site and open up a local development server, open up a terminal inside of the project folder and run:

```
npm run dev
```

You will now be able to open a browser to http://localhost:8000/. Any changes you make to the source code will be live reloaded in the browser.

## Development

### Workflow

There are two main branches in this repository:

- "master" represents the latest version that has been released live.
- "develop" is the working branch where all features should be merged.

You can create your own branch off of develop, work on a new feature and then merge it back into develop when its ready. When a new release is tested and ready to be pushed live:

1.  develop should be merged into master.
2.  The deploy command can be run (see below).

### Deploying

**TODO: update this section**

Fill out the info in the .env file and then run:

```
npm run deploy
```

<!--
Configure the .htaccess based on static/.htaccess.sample, so that:

- HTML & JS are never cached
- Dynamic work/resource pages are properly redirected
- A login route is created
- 404s are properly directed -->
