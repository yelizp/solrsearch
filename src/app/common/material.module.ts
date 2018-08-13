import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatInputModule,
      MatPaginatorModule,
      MatIconModule,
      MatButtonModule,
      MatExpansionModule,
      MatCardModule,
      MatMenuModule,
      MatDividerModule,
      MatTreeModule
    ],
    exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatInputModule,
      MatPaginatorModule,
      MatIconModule,
      MatButtonModule,
      MatExpansionModule,
      MatCardModule,
      MatMenuModule,
      MatDividerModule,
      MatProgressSpinnerModule,
      MatTreeModule
    ]
  })

  export class MaterialModule { }
  