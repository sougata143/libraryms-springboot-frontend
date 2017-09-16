import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BookserviceService } from './services/bookservice.service';
import { StudentserviceService } from './services/studentservice.service';
import {LibrarianService} from './services/librarian.service';
import {IsuuebooksService} from './services/isuuebooks.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LibrarianComponent } from './components/librarian/librarian.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserServiceService } from './services/user-service.service';
import { AddLibrarianComponent } from './components/admin/add-librarian/add-librarian.component';
import { ViewLibrarianComponent } from './components/admin/view-librarian/view-librarian.component';
import { AddStudentComponent } from './components/admin/add-student/add-student.component';
import { ViewStudentComponent } from './components/admin/view-student/view-student.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { ViewBookComponent } from './components/admin/view-book/view-book.component';


import { IssueBooksComponent } from './components/librarian/issue-books/issue-books.component';
import { ReturnComponent } from './components/librarian/return/return.component';
import { ViewIssueBooksComponent } from './components/librarian/view-issue-books/view-issue-books.component';
import { DeleteBookComponent } from './components/admin/delete-book/delete-book.component';
import { DeleteLibrarianComponent } from './components/admin/delete-librarian/delete-librarian.component';
import { DeleteStudentComponent } from './components/admin/delete-student/delete-student.component';




const appRoutes: Routes = [
  {path:'', component:UsersComponent},
  {path:'about', component:AboutComponent},
  {path:'help', component:HelpComponent},
  {path:'admin', component:AdminComponent},
  {path:'librarian', component:LibrarianComponent},
  {path:'student', component:StudentComponent},
  {path:'addlibrarian', component:AddLibrarianComponent},
  {path:'viewlibrarian', component:ViewLibrarianComponent},
  {path:'addstudent', component:AddStudentComponent},
  {path:'viewstudent', component:ViewStudentComponent},
  {path:'addbook', component:AddBookComponent},
  {path:'viewbook', component:ViewBookComponent},
  {path:'issue', component:IssueBooksComponent},
  {path:'return', component:ReturnComponent},
  {path:'viewissuedbooks', component:ViewIssueBooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    HelpComponent,
    NavbarComponent,
    SidebarComponent,
    LibrarianComponent,
    AdminComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    AddLibrarianComponent,
    ViewLibrarianComponent,
    AddStudentComponent,
    ViewStudentComponent,
    AddBookComponent,
    ViewBookComponent,
    IssueBooksComponent,
    ReturnComponent,
    ViewIssueBooksComponent,
    DeleteBookComponent,
    DeleteLibrarianComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
   ],
  providers: [
    UserServiceService,
    BookserviceService,
    StudentserviceService,
    LibrarianService,
    IsuuebooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
