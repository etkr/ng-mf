import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwohundredandfortyeightComponent } from './twohundredandfortyeight.component';

describe('TwohundredandfortyeightComponent', () => {
  let component: TwohundredandfortyeightComponent;
  let fixture: ComponentFixture<TwohundredandfortyeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwohundredandfortyeightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwohundredandfortyeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
