import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularwebComponent } from './angularweb.component';

describe('AngularwebComponent', () => {
  let component: AngularwebComponent;
  let fixture: ComponentFixture<AngularwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
