import { TestBed } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    const authenticateServiceStub = () => ({
      getCurrentUser: () => ({ uid: {} })
    });
    const angularFirestoreStub = () => ({
      collection: () => ({ doc: () => ({ collection: () => ({}) }) })
    });
    const angularFireAuthStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        NoteService,
        { provide: AuthenticateService, useFactory: authenticateServiceStub },
        { provide: AngularFirestore, useFactory: angularFirestoreStub },
        { provide: AngularFireAuth, useFactory: angularFireAuthStub }
      ]
    });
    spyOn(NoteService.prototype, 'refreshNotesCollection');
    service = TestBed.inject(NoteService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(NoteService.prototype.refreshNotesCollection).toHaveBeenCalled();
    });
  });
});
