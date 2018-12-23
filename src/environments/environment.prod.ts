export const environment = {
  production: true,
  apiUrl: 'https://starttm-api.herokuapp.com', //url desejável do heroku

  tokenWhitelistedDomains: [ new RegExp('starttm-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
