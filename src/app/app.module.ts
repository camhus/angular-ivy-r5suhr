import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DepartmentClassComponent } from '.department-class/department-class.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DepartmentsComponent,
    DepartmentClassComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
