import { Component, Input, ViewChild } from "@angular/core";

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
    selector: 'hp-layout-content',
    preserveWhitespaces: false,
    template: `<ng-content></ng-content>`,
    styles: [`:host{display: block}`],
    host: {
        '[class.hp-layout-content]': 'true'
    }
})
export class HpLayoutContentComponent{}



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



@Component({
    selector: 'hp-sider',
    preserveWhitespaces: false,
    templateUrl: './sider.template.html',
    host: {'[class.hp-layout-sider]': 'true'}
})
export class HpSiderComponent{
    @ViewChild('defaultTrigger') _trigger: any; 
    @Input() 
        get hpTrigger(){
            return this._trigger;
        }
        set hpTrigger(value){
            this._trigger = value;
        }
    @Input() hpWidth: number = 200;
    @Input() hpCollapseWidth: number = 60;
    @Input() hpSiderClass: any;

    public isCollapse: boolean = false;

    constructor(){}

    public get width(){
        if(this.isCollapse){
            return this.hpCollapseWidth;
        }
        return this.hpWidth;
    }

    public toggleCollapse(): void{
        this.isCollapse = !this.isCollapse;
    }
}