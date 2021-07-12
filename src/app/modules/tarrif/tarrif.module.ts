import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarrifComponent } from './tarrif.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers/tarrif.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TarrifEffects } from 'src/app/store/effects/tarrif.effects';
import { TarrifRoutingModule } from './tarrif-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarrifComponent
  ],
  imports: [
    CommonModule,
    TarrifRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('tarrifs', reducer),
    EffectsModule.forFeature(
      [ TarrifEffects ]
    ),
  ]
})
export class TarrifModule { }
