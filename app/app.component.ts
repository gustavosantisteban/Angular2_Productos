
import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>
                    <div>My primer componente</div>
                </div>`
})

export class AppComponent {
    pageTitle: string = `Hola Mundo`;
}
