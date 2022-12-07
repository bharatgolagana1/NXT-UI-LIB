import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakPagesComponent } from './keycloak-pages.component';

describe('KeycloakPagesComponent', () => {
  let component: KeycloakPagesComponent;
  let fixture: ComponentFixture<KeycloakPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycloakPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeycloakPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
