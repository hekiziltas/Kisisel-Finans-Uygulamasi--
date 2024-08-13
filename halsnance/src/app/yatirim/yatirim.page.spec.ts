import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YatirimPage } from './yatirim.page';

describe('YatirimPage', () => {
  let component: YatirimPage;
  let fixture: ComponentFixture<YatirimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YatirimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
