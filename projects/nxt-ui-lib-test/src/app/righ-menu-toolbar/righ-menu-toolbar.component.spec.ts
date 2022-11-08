import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighMenuToolbarComponent } from './righ-menu-toolbar.component';

describe('RighMenuToolbarComponent', () => {
  let component: RighMenuToolbarComponent;
  let fixture: ComponentFixture<RighMenuToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RighMenuToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RighMenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
