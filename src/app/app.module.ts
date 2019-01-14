import { SidebarModule } from './_components/sidebar/sidebar.module';
import { FooterModule } from './_components/shared/footer/footer.module';
import { NavbarModule } from './_components/shared/navbar/navbar.module';

import { ErrorInterceptor } from './_helpers/erros.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { SegurancaModule } from './seguranca/seguranca.module';

import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment'; // Angular CLI environemnt

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    CoreModule, //AuthModule
    SegurancaModule,
    AppRoutingModule,

    // StoreModule.forRoot(reducers), // Instrumentation must be imported after importing StoreModule (config is optional)
    // StoreDevtoolsModule.instrument({
    //  maxAge: 25, // Retains last 25 states
    // logOnly: environment.production, // Restrict extension to log-only mode
    // }),
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicLayoutComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
