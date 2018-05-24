import { NgModule } from "@angular/core";

import { HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent } from './layout.component';

@NgModule({
    imports: [],
    declarations: [ HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent ],
    exports: [ HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent ] 
})
export class HpLayoutModule{
    
}