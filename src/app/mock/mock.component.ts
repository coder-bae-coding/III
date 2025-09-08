// mock.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../mock.service';

// Define a type for a single question for better type safety
type Question = {
  questionId: string;
  question: string;
  options: { id: string; text: string }[];
  correctOption: string;
  explanation: string | null;
};

@Component({
  selector: 'app-mock',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswers: { [key: number]: string } = {};
  isAnswered = false;
  quizFinished = false;
  score = 0;
  isNavigatorVisible = false;
  
  // Edit popup properties
  isEditPopupVisible = false;
  editableQuestion: Question | null = null;
  editQuestionIndex = 0;
  mockKey = '';

  constructor(
    private activatedRouter: ActivatedRoute, 
    private router: Router, 
    private quizService: QuizService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get mock key from route
    this.activatedRouter.paramMap.subscribe((param) => {
      this.mockKey = param.get("mockToTake") || '';
    });

    // Call the service to get the questions from the API
    this.quizService.getQuestions().subscribe({
      next: (questions: any) => {
        this.questions = questions;
        if (this.questions.length === 0) {
          console.error('No questions loaded from the API.');
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        console.error('Failed to load questions:', err);
        this.router.navigate(['/']);
      }
    });
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(optionId: string): void {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.userAnswers[this.currentQuestionIndex] = optionId;
    if (optionId === this.currentQuestion.correctOption) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isAnswered = this.userAnswers.hasOwnProperty(this.currentQuestionIndex);
    } else {
      this.quizFinished = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.score = 0;
    this.isAnswered = false;
    this.quizFinished = false;
    this.isNavigatorVisible = false;
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  toggleNavigator(): void {
    this.isNavigatorVisible = !this.isNavigatorVisible;
  }

  jumpToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.isAnswered = this.userAnswers.hasOwnProperty(index);
    this.isNavigatorVisible = false;
  }

  getNavigatorButtonClass(index: number): string {
    let classes = 'nav-btn';
    if (this.userAnswers.hasOwnProperty(index)) {
      classes += ' answered';
    }
    if (index === this.currentQuestionIndex) {
      classes += ' current';
    }
    return classes;
  }

  getOptionClass(optionId: string): string {
    if (!this.isAnswered) {
      return 'option';
    }
    const isCorrect = optionId === this.currentQuestion.correctOption;
    const isSelected = optionId === this.userAnswers[this.currentQuestionIndex];

    if (isCorrect) return 'option correct';
    if (isSelected && !isCorrect) return 'option incorrect';
    return 'option disabled';
  }

  // Edit functionality methods
  openEditPopup(): void {
    this.editQuestionIndex = this.currentQuestionIndex;
    this.editableQuestion = JSON.parse(JSON.stringify(this.currentQuestion)); // Deep copy
    this.isEditPopupVisible = true;
  }

  closeEditPopup(): void {
    this.isEditPopupVisible = false;
    this.editableQuestion = null;
  }

  submitEdit(): void {
    if (!this.editableQuestion) return;

    // Use the service to update the question
    this.quizService.updateQuestion(
      this.mockKey || 'ic11mock1', // Use route param or default
      this.editQuestionIndex,
      this.editableQuestion
    ).subscribe({
      next: (response: any) => {
        console.log('Question updated successfully:', response);
        // Update the local question array
        this.questions[this.editQuestionIndex] = { ...this.editableQuestion! };
        this.closeEditPopup();
        
        // Show success message (optional)
        alert('Question updated successfully!');
      },
      error: (err: any) => {
        console.error('Failed to update question:', err);
        alert('Failed to update question. Please try again.');
      }
    });
  }

  addOption(): void {
    if (this.editableQuestion && this.editableQuestion.options.length < 6) {
      const newOptionId = `option${this.editableQuestion.options.length + 1}`;
      this.editableQuestion.options.push({
        id: newOptionId,
        text: ''
      });
    }
  }

  removeOption(index: number): void {
    if (this.editableQuestion && this.editableQuestion.options.length > 2) {
      this.editableQuestion.options.splice(index, 1);
    }
  }
}