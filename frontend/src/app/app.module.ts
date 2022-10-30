import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { HeaderComponent } from './components/core/header/header.component';
import { SearchComponent } from './components/core/search/search.component';
import { TitleComponent } from './components/core/title/title.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SearchComponent,
    TitleComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
