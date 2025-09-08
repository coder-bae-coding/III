import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { MockComponent } from './mock/mock.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'subject/:subjectId',component:SubjectComponent},
    {path:'subject',component:DashboardComponent,pathMatch:'full'},
    {path:'mock/:mockToTake',component:MockComponent},
];
