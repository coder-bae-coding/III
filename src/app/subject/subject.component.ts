import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type SubjectCode = 'ic02' | 'ic11' | 'ic14';

@Component({
  selector: 'app-subject',
  standalone: true, // Using standalone component for modern Angular structure
  imports: [CommonModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {}

  subject!: SubjectCode;

  // Mapping for displaying full, user-friendly subject names
  subjectTitles: { [key in SubjectCode]: string } = {
    "ic02": "IC 02 - Practices of Life Insurance",
    "ic11": "IC 11 - Principles of Insurance",
    "ic14": "IC 14 - Regulation of Insurance Business",
  };

  mockPerSub = {
    "ic02": 5,
    "ic11": 7,
    "ic14": 5,
  };

  mocks: string[] = [];

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((param) => {
      const subjectId = param.get("subjectId") as SubjectCode;

      // Check if the subjectId is a valid key to prevent errors
      if (subjectId && this.subjectTitles.hasOwnProperty(subjectId)) {
        this.subject = subjectId;
        this.mocks = []; // Clear previous mocks before populating
        for (let i = 1; i <= this.mockPerSub[this.subject]; i++) {
          this.mocks.push("Mock" + i);
        }
      } else {
        // If subject is invalid or null, navigate safely back to the dashboard
        this.router.navigate([""]);
      }
    });
  }

  navigateToMock(mock: string) {
    // e.g., mock = "Mock1" -> mockToTake = "ic11Mock1"
    const mockToTake = this.subject + mock;
    this.router.navigate(['mock', mockToTake]);
  }

  // Function to navigate back to the main dashboard
  goBack() {
    this.router.navigate(['']);
  }
}
