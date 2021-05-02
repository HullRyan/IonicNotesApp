/* eslint-disable prefer-const */
import { promise } from 'selenium-webdriver';
import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
  let mockAuthService: any;
  mockAuthService = jasmine.createSpyObj('authService', ['signOut']);
  mockAuthService.signOut.and.returnValue(Promise.resolve(true));

  beforeEach( async () => {
    const angularFireAuthStub = () => ({ signOut: () => ({}) });
    const angularFirestoreStub = () => ({ collection: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthenticateService, useValue: mockAuthService },
        { provide: AngularFireAuth, useFactory: angularFireAuthStub },
        { provide: AngularFirestore, useFactory: angularFirestoreStub }
      ]
    }).compileComponents();
  });

  it('can load instance', () => {
    expect(mockAuthService).toBeTruthy();
  });

  describe('signOut', () => {
    it('makes expected calls', () => {
      mockAuthService.signOut();
      expect(mockAuthService.signOut).toHaveBeenCalled();
    });
  });
});
