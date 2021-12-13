import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaHijoComponent } from './pagina-hijo/pagina-hijo.component';

@NgModule({
	declarations: [PaginaHijoComponent],
	imports: [CommonModule],
	exports: [PaginaHijoComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiComponentModule {}
