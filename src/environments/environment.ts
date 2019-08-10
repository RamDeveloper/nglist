// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBgZdBYp9cszfUnuQ7g25NPie6M7DkMSuA",
    authDomain: "ngdotolist.firebaseapp.com",
    databaseURL: "https://ngdotolist.firebaseio.com",
    projectId: "ngdotolist",
    storageBucket: "ngdotolist.appspot.com",
    messagingSenderId: "228810119253"
  }

};
