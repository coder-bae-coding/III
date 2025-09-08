import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Define the structure of the data you expect from the API.
// This should match the structure of your data.js file.
type QuizData = {
  message: string;
  status: string;
  data: {
    [key: string]: Question[];
  };
};

// Define the type for a single question for better type safety
type Question = {
  questionId: string;
  question: string;
  options: { id: string; text: string }[];
  correctOption: string;
  explanation: string | null;
};

// Define the update request payload type
type UpdateQuestionRequest = {
  key: string;
  index: number;
  question: Question;
};

// Define the update response type
type UpdateQuestionResponse = {
  message: string;
  status: string;
  data?: any;
};

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'https://iii-backend.onrender.com/api/data';
  private updateApiUrl = 'https://iii-backend.onrender.com/api/updateQuestion';

  constructor(private http: HttpClient) {}

  // This method fetches the data from the Express server.
  // It returns an Observable of the questions array.
  getQuestions(): Observable<Question[]> {
    return this.http.get<QuizData>(this.apiUrl).pipe(
      // The API returns an object with a 'data' key.
      // We use the 'map' operator to extract the array of questions from it.
      // Since your data.js file doesn't have a 'mockKey' like the old one,
      // this example assumes the questions are directly in the 'data' property.
      // You would need to modify the server to handle different mocks.
      map(response => Object.values(response.data)[0] as Question[])
    );
  }

  // Method to get questions by specific mock key
  getQuestionsByKey(mockKey: string): Observable<Question[]> {
    return this.http.get<QuizData>(this.apiUrl).pipe(
      map(response => {
        if (response.data && response.data[mockKey]) {
          return response.data[mockKey] as Question[];
        }
        throw new Error(`Mock key '${mockKey}' not found`);
      })
    );
  }

  // Method to update a specific question
  updateQuestion(key: string, index: number, question: Question): Observable<UpdateQuestionResponse> {
    const payload: UpdateQuestionRequest = {
      key,
      index,
      question
    };

    return this.http.post<UpdateQuestionResponse>(this.updateApiUrl, payload);
  }

  // Alternative method if you want to pass the entire payload object
  updateQuestionWithPayload(payload: UpdateQuestionRequest): Observable<UpdateQuestionResponse> {
    return this.http.post<UpdateQuestionResponse>(this.updateApiUrl, payload);
  }

  // Method to get all available mock keys
  getAvailableMockKeys(): Observable<string[]> {
    return this.http.get<QuizData>(this.apiUrl).pipe(
      map(response => Object.keys(response.data))
    );
  }

  // Method to get full quiz data (useful for admin purposes)
  getFullQuizData(): Observable<QuizData> {
    return this.http.get<QuizData>(this.apiUrl);
  }

  // Method to add a new question to a specific mock
  addQuestion(key: string, question: Question): Observable<UpdateQuestionResponse> {
    const payload = {
      key,
      question,
      action: 'add'
    };

    return this.http.post<UpdateQuestionResponse>(`${this.updateApiUrl}/add`, payload);
  }

  // Method to delete a question from a specific mock
  deleteQuestion(key: string, index: number): Observable<UpdateQuestionResponse> {
    const payload = {
      key,
      index,
      action: 'delete'
    };

    return this.http.delete<UpdateQuestionResponse>(`${this.updateApiUrl}`, { body: payload });
  }
}