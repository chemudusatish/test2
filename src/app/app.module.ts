import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{  Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestCompComponent } from './test-comp/test-comp.component';



const routes  : Routes=[
  { path :'Test', component: TestCompComponent},
  { path :'', component: TestComponent},
  { path :'*', component: TestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot
    (
      routes,  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
