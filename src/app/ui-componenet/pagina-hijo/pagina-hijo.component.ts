import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-pagina-hijo',
	templateUrl: './pagina-hijo.component.html',
	styleUrls: ['./pagina-hijo.component.scss']
})
export class PaginaHijoComponent {
	@Input() dataHijo;

	cantidad = 1;
	@Output() dataHijoChange = new EventEmitter<string>();
	saludar() {
		this.dataHijoChange.emit('Envio saludos --> Hola desde pagina hija, cantidad de veces: ' + this.cantidad);
		this.cantidad++;
	}
}
