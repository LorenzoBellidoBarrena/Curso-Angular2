import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {

    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(CalculatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be created with default values', () => {
        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    })

    it('should set resultText, subResultText and lastOperator', () => {
        service.resultText.set('451');
        service.subResultText.set('265');
        service.lastOperator.set('-');

        service.contructNumber('C');

        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');

    });

    it('should update resultText with number input', () => {
        service.contructNumber('1');
        expect(service.resultText()).toBe('1');

        service.contructNumber('2');
        expect(service.resultText()).toBe('12');
    });

    it('should handle operators correctly', () => {
        service.contructNumber('1');
        service.contructNumber('+');
        expect(service.lastOperator()).toBe('+');
        expect(service.subResultText()).toBe('1');
        expect(service.resultText()).toBe('0');
    });

    it('should calculate result correctly for addiction', () => {
        service.contructNumber('1');
        service.contructNumber('+');
        service.contructNumber('2');
        service.contructNumber('=');
        expect(service.resultText()).toBe('3');
    });

    it('should calculate result correctly for substraction', () => {
        service.contructNumber('5');
        service.contructNumber('-');
        service.contructNumber('2');
        service.contructNumber('=');
        expect(service.resultText()).toBe('3');
    });

    it('should calculate result correctly for multiplication', () => {
        service.contructNumber('2');
        service.contructNumber('*');
        service.contructNumber('3');
        service.contructNumber('=');
        expect(service.resultText()).toBe('6');
    });

    it('should calculate result correctly for division', () => {
        service.contructNumber('1');
        service.contructNumber('0');
        service.contructNumber('/');
        service.contructNumber('2');
        service.contructNumber('=');
        expect(service.resultText()).toBe('5');
    });

    it('should handle decimal point correctly', () => {
        service.contructNumber('1');
        service.contructNumber('.');
        service.contructNumber('2');
        expect(service.resultText()).toBe('1.2');
        service.contructNumber('.');
        expect(service.resultText()).toBe('1.2');
    });

    it('should handle decimal point correctly starting with 0', () => {
        service.contructNumber('0');
        service.contructNumber('.');
        service.contructNumber('0');
        expect(service.resultText()).toBe('0.0');
        service.contructNumber('.');
        expect(service.resultText()).toBe('0.0');
    });

    it('should handle sign change correctly', () => {
        service.contructNumber('1');
        service.contructNumber('+/-');
        expect(service.resultText()).toBe('-1');
        service.contructNumber('+/-');
        expect(service.resultText()).toBe('1');

    });

    it('should handle backspace', () => {
        service.resultText.set('123');

        service.contructNumber('Backspace');
        expect(service.resultText()).toBe('12');
        service.contructNumber('Backspace');
        expect(service.resultText()).toBe('1');
        service.contructNumber('Backspace');
        expect(service.resultText()).toBe('0');

    });

    it('should handle max length correctly', () => {
       for (let i = 0; i < 10; i++) {
        service.contructNumber('1');
       } 
       expect(service.resultText().length).toBe(10);

       service.contructNumber('');
       expect(service.resultText().length).toBe(10);
    });



});