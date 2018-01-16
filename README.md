# AzureAD-WebApi-Angular

This project shows you how to make an API with ASP.NET Core 2.0 protected by Azure Active Directory and how to make secure call from an Angular application.

## Prerequisistes
* ASP.NET Core 2.0
* NodeJS (6.9.x)
* Angular (5.x.x)

## Clone the repo
```
git clone https://github.com/fchanteau/AzureAD-WebApi-Angular.git
```

## Edit Configuration
### API
Change settings in **appsettings.json**
```javascript
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "Domain": "xxx.onmicrosoft.com",                        // set your domain
    "TenantId": "XXX",                                      // set your tenantID
    "ClientId": "XXX"                                       // set clientId of your AAD application
  },
  "Logging": {
    "IncludeScopes": false,
    "Debug": {
      "LogLevel": {
        "Default": "Warning"
      }
    },
    "Console": {
      "LogLevel": {
        "Default": "Warning"
      }
    }
  }
}
```

Enable CORS in **Startup.cs** for authorize your Angular Application to access the API.
```c#
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseCors(builder =>
        builder.WithOrigins("http://localhost:4200") //set url of your Angular app
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod());

    app.UseAuthentication();
    app.UseMvc();
}
```

### SPA
Change settings in **environment.ts**
```javascript
export const environment = {
  production: false,
  azureConfig: {
    tenant: 'XXX', //set tenantID
    clientId: 'XXX', //set clientID
    postLogoutRedirectUri: 'http://localhost:4200/'
  }
};
```

Change API endpoint in **app-config.module.ts** for target your API
```javascript
export const APP_CONSTANTS: AppConfig = {
  baseUrl: 'https://localhost:44313/api/' //your API endpoint
};
```
