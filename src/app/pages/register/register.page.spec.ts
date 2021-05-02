import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticateService } from './../../services/authenticate.service';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(() => {
    const authenticateServiceStub = () => ({
      registerUser: value => ({ then: () => ({}) }),
      signIn: value => ({ then: () => ({ catch: () => ({}) }) })
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const navControllerStub = () => ({});
    const alertControllerStub = () => ({
      create: options => ({ present: () => ({}) })
    });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterPage],
      providers: [
        { provide: AuthenticateService, useFactory: authenticateServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: AlertController, useFactory: alertControllerStub }
      ]
    });
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
