import { Component } from "@angular/core";

@Component({
    selector: 'hp-layout',
    preserveWhitespaces: false,
    template: `<ng-content></ng-content>`,
    host: {
        '[class.hp-layout]': 'true'
    }
})
export class HpLayoutComponent{}

@Component({
    selector: 'hp-layout-header',
    preserveWhitespaces: false,
    template: `<ng-content></ng-content>`,
    styles: [`:host{display: block}`],
    host: {
        '[class.hp-layout-header]': 'true'
    }
})
export class HpLayoutHeaderComponent{}

@Component({
    selector: 'hp-layout-footer',
    preserveWhitespaces: false,
    template: `<ng-content></ng-content>`,
    styles: [`:host{display: block}`],
    host: {
        '[class.hp-layout-footer]': 'true'
    }
})
export class HpLayoutFooterComponent{}