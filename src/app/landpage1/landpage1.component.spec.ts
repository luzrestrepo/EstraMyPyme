import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landpage1Component } from './landpage1.component';

describe('Landpage1Component', () => {
  let component: Landpage1Component;
  let fixture: ComponentFixture<Landpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landpage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
