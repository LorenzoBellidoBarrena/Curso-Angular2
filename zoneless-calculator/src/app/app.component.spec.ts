import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>

  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 2', () => {
    const num1 = 1
    const num2 = 2

    const result = num1 + num2

    expect(result).toBe(3)

  })

  it(`should have the 'zoneless-calculator' title`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();

    // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, zoneless-calculator');
  });

  it('should render router-outlet with css classes', () => {
    const divElement = compiled.querySelector('div');

    const mustHaveClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');

    expect(divElement).not.toBeNull();

    const divClasses = divElement?.classList.value.split(' ');

    mustHaveClasses.forEach(cssClass => {
      expect(divClasses).toContain(cssClass);
    });
  })
  // divElement?.classList.forEach(cssClass => {
  //   expect(cssClasses.includes(cssClass)).toBeTrue();
  // });

  // it('should contain the "but me a beer"', () => {
  //   anchoElement?.getAtribute('href')
  // })

});
