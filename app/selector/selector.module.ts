import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SelectorComponent,
    ],
    exports: [SelectorComponent]
})

export class SelectorModule { }