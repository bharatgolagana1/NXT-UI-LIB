import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformLayoutComponent } from './webform-layout.component';

describe('WebformLayoutComponent', () => {
  let component: WebformLayoutComponent;
  let fixture: ComponentFixture<WebformLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebformLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
