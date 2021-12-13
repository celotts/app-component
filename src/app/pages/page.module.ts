import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPadreComponent } from './pagina-padre/pagina-padre.component';
import { UiComponentModule } from '../ui-componenet/ui-component.module';

@NgModule({
	declarations: [PaginaPadreComponent],
	imports: [CommonModule, UiComponentModule],
	exports: [PaginaPadreComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule {}
