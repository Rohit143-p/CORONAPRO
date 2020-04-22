import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainheaderComponent } from './component/mainheader/mainheader.component';
import { UpdatedataComponent } from './component/updatedata/updatedata.component';
import { AboutComponent } from './component/about/about.component';
import { PreventionComponent } from './component/prevention/prevention.component';
import { ContactComponent } from './component/contact/contact.component';
import{ReactiveFormsModule} from '@angular/forms'
import{ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './component/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainheaderComponent,
    UpdatedataComponent,
    AboutComponent,
    PreventionComponent,
    ContactComponent,
    FooterComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
