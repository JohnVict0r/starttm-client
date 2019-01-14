export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000', //url desejável do heroku

  tokenWhitelistedDomains: [new RegExp('starttm-api.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
