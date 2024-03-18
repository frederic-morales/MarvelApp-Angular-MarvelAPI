import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComicsComponent } from './all-comics.component';

describe('AllComicsComponent', () => {
  let component: AllComicsComponent;
  let fixture: ComponentFixture<AllComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllComicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
