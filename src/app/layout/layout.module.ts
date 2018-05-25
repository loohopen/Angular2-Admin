import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent, HpLayoutContentComponent, HpSiderComponent } from './layout.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent, HpLayoutContentComponent, HpSiderComponent ],
    exports: [ HpLayoutComponent, HpLayoutFooterComponent, HpLayoutHeaderComponent, HpLayoutContentComponent, HpSiderComponent ] 
})
export class HpLayoutModule{
    
}