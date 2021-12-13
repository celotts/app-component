import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pagina-padre',
	templateUrl: './pagina-padre.component.html',
	styleUrls: ['./pagina-padre.component.scss']
})
export class PaginaPadreComponent implements OnInit {
	data = {};
	respuesta = '';
	ngOnInit(): void {
		this.data = {
			nombre: 'Juan',
			edad: '23'
		};
	}

	getData() {
		return JSON.stringify(this.data);
	}

	procesaSaludos(mensaje) {
		alert(mensaje);
		if (mensaje !== '') {
			this.respuesta = 'RECIBO SALUDO (PADRE)';
			setTimeout(() => {
				this.respuesta = '';
			}, 5000);
		}
	}
}
