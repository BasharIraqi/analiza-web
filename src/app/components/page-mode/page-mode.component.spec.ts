import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModeComponent } from './page-mode.component';

describe('PageModeComponent', () => {
  let component: PageModeComponent;
  let fixture: ComponentFixture<PageModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
