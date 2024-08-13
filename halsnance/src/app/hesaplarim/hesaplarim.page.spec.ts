import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HesaplarimPage } from './hesaplarim.page';

describe('HesaplarimPage', () => {
  let component: HesaplarimPage;
  let fixture: ComponentFixture<HesaplarimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HesaplarimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
