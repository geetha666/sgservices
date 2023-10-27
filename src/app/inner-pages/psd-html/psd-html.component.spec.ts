import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsdHtmlComponent } from './psd-html.component';

describe('PsdHtmlComponent', () => {
  let component: PsdHtmlComponent;
  let fixture: ComponentFixture<PsdHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsdHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsdHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
