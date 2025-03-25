import { Injectable, signal } from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText = signal('20');
  public subResultText = signal('10');
  public lastOperator = signal('+');

}
