import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
  let service: AuthenticateService;

  beforeEach(() => {
    const angularFireAuthStub = () => ({ signOut: () => ({}) });
    const angularFirestoreStub = () => ({ collection: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthenticateService,
        { provide: AngularFireAuth, useFactory: angularFireAuthStub },
        { provide: AngularFirestore, useFactory: angularFirestoreStub }
      ]
    });
    service = TestBed.inject(AuthenticateService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('signOut', () => {
    it('makes expected calls', () => {
      const angularFireAuthStub: AngularFireAuth = TestBed.inject(
        AngularFireAuth
      );
      spyOn(angularFireAuthStub, 'signOut').and.callThrough();
      service.signOut();
      expect(angularFireAuthStub.signOut).toHaveBeenCalled();
    });
  });
});
