import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuzdanPage } from './cuzdan.page';

describe('CuzdanPage', () => {
  let component: CuzdanPage;
  let fixture: ComponentFixture<CuzdanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuzdanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
