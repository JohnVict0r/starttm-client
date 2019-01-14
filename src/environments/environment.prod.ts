export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000', //url desejável do heroku

  tokenWhitelistedDomains: [new RegExp('http://localhost:3000')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
