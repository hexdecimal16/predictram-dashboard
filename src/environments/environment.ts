/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB2E897Af66Vnl_ZvonBJa0m3AzEdBc6Pk",
    authDomain: "scrapper-pr.firebaseapp.com",
    databaseURL: "https://scrapper-pr.firebaseio.com",
    projectId: "scrapper-pr",
    storageBucket: "scrapper-pr.appspot.com",
    messagingSenderId: "827863398188",
    appId: "1:827863398188:web:85229b0c9d2db049cb1e89",
    measurementId: "G-75BTYN15JQ"
  }
};
