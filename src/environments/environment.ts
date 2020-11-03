// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  RDS_HOSTNAME: "predictram.cwp2uouvrbpm.ap-south-1.rds.amazonaws.com",
  RDS_USERNAME: "PreDiCTRaM",
  RDS_PASSWORD: "UwGCkDbKACM1mSopfDzb",
  RDS_PORT: "3306",
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
