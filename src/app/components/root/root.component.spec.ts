/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(RootComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Passman!'`, async(() => {
    let fixture = TestBed.createComponent(RootComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Passman!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Passman!');
  }));
});
