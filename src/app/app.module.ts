import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { Home5Component } from './home5/home5.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { StudentPromotionComponent } from './student-promotion/student-promotion.component';
import { AllTeacherComponent } from './all-teacher/all-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherPaymentComponent } from './teacher-payment/teacher-payment.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AllBookComponent } from './all-book/all-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AllSubjectComponent } from './all-subject/all-subject.component';
import { ClassRoutineComponent } from './class-routine/class-routine.component';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { ExamGradeComponent } from './exam-grade/exam-grade.component';
import { TransportComponent } from './transport/transport.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AdmitFormComponent } from './admit-form/admit-form.component';
import { AllClassComponent } from './all-class/all-class.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { AllParentsComponent } from './all-parents/all-parents.component';
import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';
import { HostelComponent } from './hostel/hostel.component';
import { MapComponent } from './map/map.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ModalComponent } from './modal/modal.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UiTabComponent } from './ui-tab/ui-tab.component';
import { UiWidgetComponent } from './ui-widget/ui-widget.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

const routes : Routes = [
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home3', component: Home3Component },
  { path: 'home4', component: Home4Component },
  { path: 'home5', component: Home5Component },
  { path: 'all-student', component: AllStudentComponent },
  { path: 'student-promotion', component: StudentPromotionComponent },
  { path: 'all-teacher', component: AllTeacherComponent },
  { path: 'teacher-details', component: TeacherDetailsComponent },
  { path: 'add-parent', component: AddParentComponent },
  { path: 'all-book', component: AllBookComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'add-class', component: AddClassComponent },
  { path: 'all-subject', component: AllSubjectComponent },
  { path: 'class-routine', component: ClassRoutineComponent },
  { path: 'exam-schedule', component: ExamScheduleComponent },
  { path: 'exam-grade', component: ExamGradeComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'admit-form', component: AdmitFormComponent },
  { path: 'all-class', component: AllClassComponent },
  {path: 'all-fees', component: AllFeesComponent},
  {path: 'all-parents', component: AllParentsComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'grid', component: GridComponent},
  {path: 'hostel', component: HostelComponent},
  {path: 'map', component: MapComponent},
  {path: 'messaging', component: MessagingComponent},
  {path: 'modal', component: ModalComponent},// I'm gonna open from here
  {path: 'notice-board', component: NoticeBoardComponent},
  {path: 'notification-alert', component: NotificationAlertComponent},
  {path: 'parent-details', component: ParentDetailsComponent},
  {path: 'progressbar', component: ProgressbarComponent},
  {path: 'student-attendance', component: StudentAttendanceComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: 'ui-tab', component: UiTabComponent},
  {path: 'ui-widget', component: UiWidgetComponent},
  {path: 'teacher-payment', component: TeacherPaymentComponent},
  {path: 'transport', component: TransportComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Home3Component,
    Home4Component,
    Home5Component,
    AllStudentComponent,
    StudentPromotionComponent,
    AllTeacherComponent,
    TeacherDetailsComponent,
    TeacherPaymentComponent,
    AddParentComponent,
    AllBookComponent,
    AddBookComponent,
    AddClassComponent,
    AllSubjectComponent,
    ClassRoutineComponent,
    ExamScheduleComponent,
    ExamGradeComponent,
    TransportComponent,
    AccountSettingsComponent,
    AddExpenseComponent,
    AddTeacherComponent,
    AdmitFormComponent,
    AllClassComponent,
    AllFeesComponent,
    AllParentsComponent,
    ButtonComponent,
    GridComponent,
    HostelComponent,
    MapComponent,
    MessagingComponent,
    ModalComponent,
    NoticeBoardComponent,
    NotificationAlertComponent,
    ParentDetailsComponent,
    ProgressbarComponent,
    StudentAttendanceComponent,
    StudentDetailsComponent,
    UiTabComponent,
    UiWidgetComponent,
    DashboardContentComponent,
    DashboardSummaryComponent,
    FooterComponent,
    SidebarComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
