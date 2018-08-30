import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
      
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    MessageModule,
    RoutingModule,
    SharedModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
