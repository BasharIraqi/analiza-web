import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocmePageComponent } from './welocme-page.component';

describe('WelocmePageComponent', () => {
  let component: WelocmePageComponent;
  let fixture: ComponentFixture<WelocmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelocmePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelocmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
