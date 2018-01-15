// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  azureConfig: {
    tenant: '77781920-c274-4f30-9017-42b2c8fbf0e9',
    clientId: '5a003b19-3e80-4162-b634-f2db0a838798',
    postLogoutRedirectUri: 'http://localhost:4200/'
    //endpoints: {
    //  "https://localhost:44313/": "5a003b19-3e80-4162-b634-f2db0a838798"
    //}
  }
};
