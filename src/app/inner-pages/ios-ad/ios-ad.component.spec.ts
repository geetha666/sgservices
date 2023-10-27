import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosAdComponent } from './ios-ad.component';

describe('IosAdComponent', () => {
  let component: IosAdComponent;
  let fixture: ComponentFixture<IosAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
