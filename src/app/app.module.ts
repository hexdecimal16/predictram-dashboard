import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { MainframeComponent } from './layouts/mainframe/mainframe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { NiftyComponent } from './pages/nifty/nifty.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { PollsComponent } from './pages/polls/polls.component';
import { EventsComponent } from './pages/polls/events/events.component';
import { EcEventsComponent } from './pages/polls/ec-events/ec-events.component';
import { ReplacePipe }    from './tools/replace-pipe';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    NewsComponent,
    MainframeComponent,
    CorporateComponent,
    NiftyComponent,
    PollsComponent,
    EventsComponent,
    EcEventsComponent,
    ReplacePipe,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
