import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomUserService } from './services/random-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { TabComponent } from './shared/components/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
