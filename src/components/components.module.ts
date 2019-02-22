import { NgModule } from '@angular/core';
import { SubMenuComponent } from './sub-menu/sub-menu';
import { GoogleMapsComponent } from './google-maps/google-maps';
@NgModule({
	declarations: [SubMenuComponent,
    GoogleMapsComponent],
	imports: [],
	exports: [SubMenuComponent,
    GoogleMapsComponent]
})
export class ComponentsModule {}
