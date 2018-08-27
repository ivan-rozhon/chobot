import { Component, Input, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'cc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Input()
  open: boolean;

  @Output()
  toogleSidenav = new EventEmitter<boolean>();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // react when max-width of screen reach some value
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    // force dectect changes when mobile query changed
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // apply listener to mobile query changes
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * Set 'closed' state on event emitted from mat-sidenav when sidenav close
   * @param mode Actual sidenav mode
   */
  closeOnOverMode(mode: string): void {
    // set 'closed' state only on 'over' mode
    if (this.sidenavMode === 'over') {
      this.toogleSidenav.emit(false);
    }
  }

  /** get sidenav mode according to width */
  get sidenavMode(): 'over' | 'side' {
    return this.mobileQuery.matches ? 'over' : 'side';
  }

  /** get sidenav widht according to open state */
  get sidenavWidth(): number {
    return this.sidenavMode === 'over' ? 200 : this.open ? 200 : 64;
  }

  /** do not close sidenav on 'side' state (just minify it) */
  get sideNavOpen(): boolean {
    return this.sidenavMode === 'side' ? true : this.open;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
