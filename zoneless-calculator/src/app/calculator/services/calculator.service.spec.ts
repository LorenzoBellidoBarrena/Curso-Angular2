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

    })




});