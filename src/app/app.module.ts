import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';

import { RemindersService} from './reminders.service';
import { RemindersComponent } from './reminders/reminders.component';
import { RemindersDetailComponent } from './reminders/reminders-detail/reminders-detail.component';
import { RemindersCreateComponent } from './reminders-create/reminders-create.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    RemindersDetailComponent,
    RemindersCreateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,

    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [MatSortModule],
  providers: [RemindersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
