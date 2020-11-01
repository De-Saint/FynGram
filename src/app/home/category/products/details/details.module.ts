import { ReviewComponent } from './../review/review.component';
import { RelatedComponent } from './../related/related.component';
import { OverviewComponent } from './../overview/overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage, OverviewComponent, RelatedComponent, ReviewComponent],
  entryComponents: [OverviewComponent, RelatedComponent, ReviewComponent]
})
export class DetailsPageModule {}
