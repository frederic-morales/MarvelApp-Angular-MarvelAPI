import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoComponent } from './character-info.component';

describe('CharacterInfoComponent', () => {
  let component: CharacterInfoComponent;
  let fixture: ComponentFixture<CharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
