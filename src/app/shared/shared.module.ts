import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// @angular/material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

// components
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { ActionTitleComponent } from './components/action-title/action-title.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormBlockComponent } from './components/form-block/form-block.component';
import { FormColumnComponent } from './components/form-column/form-column.component';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { CardColumnComponent } from './components/card-column/card-column.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

// directives
import { ConnectFormDirective } from '@shared/directives/connect-form.directive';

@NgModule({
  imports: [
    // @angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // @angular/material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: [
    // components
    LayoutComponent,
    SidenavComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    NavItemComponent,
    ActionTitleComponent,
    FormContainerComponent,
    FormBlockComponent,
    FormColumnComponent,
    FormTitleComponent,
    CardRowComponent,
    CardColumnComponent,
    FormFieldComponent,
    // directives
    ConnectFormDirective
  ],
  exports: [
    // @angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // @angular/material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    // components
    LayoutComponent,
    SidenavComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    NavItemComponent,
    ActionTitleComponent,
    FormContainerComponent,
    FormBlockComponent,
    FormColumnComponent,
    FormTitleComponent,
    CardRowComponent,
    CardColumnComponent,
    FormFieldComponent,
    // directives
    ConnectFormDirective
  ]
})
export class SharedModule {}
