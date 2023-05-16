import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&*()';
    let validChars = '';
    let charsHolder = '';

    if (this.includeLetters) {
      validChars += letters;
      charsHolder += letters[Math.floor(Math.random() * letters.length)];
    }
    if (this.includeNumbers) {
      validChars += numbers;
      charsHolder += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (this.includeSymbols) {
      validChars += symbols;
      charsHolder += symbols[Math.floor(Math.random() * symbols.length)];
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length - charsHolder.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword + charsHolder;
  }
}
