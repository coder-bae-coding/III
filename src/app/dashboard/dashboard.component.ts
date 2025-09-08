import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
type SubjectCode = 'ic02' | 'ic11' | 'ic14';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}
  
  navigateTo(subject:SubjectCode){
    console.log(subject)
    this.router.navigate(['/subject',subject])
  }

}
