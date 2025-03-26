import { Injectable, signal } from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', 'x'];
const especialOperators = ['+/-', '%', '.', '=', 'C', 'Backspace'];
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText = signal('0');
  public subResultText = signal('0');
  public lastOperator = signal('+');

  public contructNumber(value: string) {
    console.log('service', value)
    // Validar input
    if (![...numbers, ...operators, ...especialOperators].includes(value)) {
      console.log('invalid input', value)
      return;
    }
    if (value === '=') {
      console.log('Calcular resultado')
      this.calculateResult()
    }

    if (value === 'C') {
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperator.set('+');
      return;
    }

    if (value === 'Backspace') {
      if (this.resultText() === '0') return;
      // if (this.resultText() === '-0'){
      //   this.resultText.set('0');
      //   return
      // }

      if(this.resultText().includes('-') && this.resultText().length === 2){
        this.resultText.set('0');
        return
      }
      
      if (this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }

      this.resultText.update(v => v.slice(0, -1));

      return;
    }

    if (operators.includes(value)) {
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    if (value === '.' && !this.resultText().includes('.')) {
      if (this.resultText() === '0' || this.resultText() === '') {
        this.resultText.set('0.');
        return;
      }
      this.resultText.update(text => text + '.');
      return;
    }

    if (this.resultText().length >= 10) {
      console.log("Max length reached")
    }

    if (value === '0' && this.resultText() === '0' || this.resultText() === '-0') {
      return;
    }

    if (value === '+/-') {
      if (this.resultText().includes('-')) {
        this.resultText.set(this.resultText().replace('-', ''));
        return
      }
      this.resultText.update(text => '-' + text);
      return;
    }

    if (numbers.includes(value)) {
      if (this.resultText() === '0') {
        this.resultText.set(value);
        return;
      }
      console.log(this.resultText())
      if (this.resultText() === '-0') {
        this.resultText.set('-' + value);
        return;
      }


      this.resultText.update(text => text + value);
    }

  }

  public calculateResult(){
    const number1 = parseFloat(this.subResultText())
    const number2 = parseFloat(this.resultText())

    let result = 0;

    switch(this.lastOperator()){
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
      case 'x':
        result = number1 * number2;
        break;
      case '/':
        if(number2 === 0){
          result = 0;
        }else{
          result = number1 / number2
        }
        break;
    }

    this.resultText.set(result.toString());
    this.subResultText.set('0');
  }
}
