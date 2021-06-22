import { Component } from "@angular/core";

@Component({
    selector: '[app-warningAlert]',
    template: `<h2>Warning!</h2>`,
    styles: [`
        h2 {
            color: red;
        }
    `]
})
export class WarningAlert {

}