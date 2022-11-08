import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLayoutV2Component } from './side-layout-v2.component';

describe('SideLayoutV2Component', () => {
  let component: SideLayoutV2Component;
  let fixture: ComponentFixture<SideLayoutV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLayoutV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLayoutV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
