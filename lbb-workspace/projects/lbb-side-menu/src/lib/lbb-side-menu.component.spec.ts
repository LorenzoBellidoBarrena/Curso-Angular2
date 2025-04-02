import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbbSideMenuComponent } from './lbb-side-menu.component';
import { provideRouter } from '@angular/router';

describe('LbbSideMenuComponent', () => {
  let component: LbbSideMenuComponent;
  let fixture: ComponentFixture<LbbSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LbbSideMenuComponent,],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LbbSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when logout button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false)

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;

    button.click()

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSingOut when login button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true)

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;

    button.click()

    expect(component.onSignOut.emit).toHaveBeenCalled();
  })
});
