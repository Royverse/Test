import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesourceIconsComponent } from './onesource-icons.component';

describe('OnesourceIconsComponent', () => {
  let component: OnesourceIconsComponent;
  let fixture: ComponentFixture<OnesourceIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnesourceIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesourceIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
