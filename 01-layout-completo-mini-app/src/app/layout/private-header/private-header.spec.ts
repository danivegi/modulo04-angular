import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeader } from './private-header';

describe('PrivateHeader', () => {
  let component: PrivateHeader;
  let fixture: ComponentFixture<PrivateHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
