import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImgComponent } from './container-img.component';

describe('ContainerImgComponent', () => {
  let component: ContainerImgComponent;
  let fixture: ComponentFixture<ContainerImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
