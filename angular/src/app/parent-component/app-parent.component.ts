import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-parent-component',
    templateUrl: './app-parent.component.html',
})
export class AppParentComponent implements OnInit, AfterViewInit {
    @Input() label;

    ngOnInit() {
        console.log('AppParentComponent -> ngOnInit -> this.label', this.label);
    }

    ngAfterViewInit() {
        console.log('AppParentComponent -> ngAfterViewInit -> this.label', this.label);
    }
}
