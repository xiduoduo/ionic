import {
  NgModule,
  ErrorHandler
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';
import {
  MyApp
} from './app.component';
import {
  HttpModule
} from '@angular/http';
import {
  HomePage
} from '../pages/home/home';
import {
  DiscoveryPage
} from '../pages/discovery/discovery';
import {
  ChatPage
} from '../pages/chat/chat';
import {
  MorePage
} from '../pages/more/more';
import {
  LoginPage
} from '../pages/login/login';
import {
  NotificationPage
} from '../pages/notification/notification'
import {
  TabsPage
} from '../pages/tabs/tabs';

import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    MorePage,
    LoginPage,
    NotificationPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    MorePage,
    LoginPage,
    NotificationPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    RestProvider
  ]
})
export class AppModule {}
