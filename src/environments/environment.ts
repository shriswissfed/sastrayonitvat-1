// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
      apiKey: 'AIzaSyAhaM22EpCqYM2F7Q3k03s3T7EEY8ZCI-Y',
      authDomain: 'sastrayonitvat-dev.firebaseapp.com',
      databaseURL: 'https://sastrayonitvat-dev.firebaseio.com',
      projectId: 'sastrayonitvat-dev',
      storageBucket: 'sastrayonitvat-dev.appspot.com',
      messagingSenderId: '672149411711'
  }
};
