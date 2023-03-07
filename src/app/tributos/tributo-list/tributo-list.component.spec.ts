import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TributoListComponent } from './tributo-list.component';

describe('TributoListComponent', () => {
  let component: TributoListComponent;
  let fixture: ComponentFixture<TributoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TributoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TributoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
