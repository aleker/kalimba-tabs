# Kalimba Tabs

Rewrite of KalimbaLibre using Electron.

## Setup

After cloning the repo, in the root folder run:

`npm install`

## Dev

To run the program in development mode, run `npm run electron-pack` in the root folder.

### Things to Note:

- Development mode is unoptimised, so song playback will be much slower than it is in production mode

## Build

To make a build of the app, run `npm run electron-pack` in the root folder. It should show up in the `dist` folder when it's done.
If you are on linux and want to build for Windows, run [this](https://gist.githubusercontent.com/jamzi/aff85aa192b8addab2b560db5d849a2a/raw/70c5b6f5816cc8b743853dae7b335418faa18b1f/gistfile1.txt) docker command in the root folder, then run `npm run electron-pack`
