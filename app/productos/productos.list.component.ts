import { Component } from '@angular/core';

@Component({
    selector: 'pm-productos',
    template: 'app/productos/productos-list.components.html'
})

export class ProductoListComponent {
    pageTitle: string = 'Lista de Productos';
}
