import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressHubComponent } from './address-hub.component';

describe('AddressHubComponent', () => {
  let component: AddressHubComponent;
  let fixture: ComponentFixture<AddressHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
