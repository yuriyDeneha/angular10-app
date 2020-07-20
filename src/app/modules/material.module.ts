import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

const exportsModules = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatTooltipModule,
  DragDropModule,
  MatProgressBarModule,
  MatDividerModule,
  MatNativeDateModule,
  MatSortModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatTabsModule,
  MatStepperModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }
  ],
  exports: [...exportsModules]
})
export class MaterialModule {
  // gamePlanIcons = ['gannt', 'gantt', 'multichart'];
  // navigationIcons = [
  //   'cart',
  //   'club-manage',
  //   'dashboard',
  //   'logout',
  //   'messenger',
  //   'store-manage',
  //   'warehouse',
  //   'workouts',
  //   'performance',
  //   'calendar',
  //   'report'
  // ];
  // birthdayCake = 'cake';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    // this.navigationIcons.forEach((icon: string) => this.addIcon(icon, 'navigation', icon + '.svg'));
    // this.gamePlanIcons.forEach((icon: string) => this.addIcon(icon, 'game-plan', icon + '.svg'));
    // this.addIcon(this.birthdayCake, 'others', this.birthdayCake + '.svg');
  }

  // addIcon(key: string, folder: string, iconName: string) {
  //   const path = `${environment.clientUrl}/assets/images/${folder}/${iconName}`;
  //   this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(path));
  // }
}
