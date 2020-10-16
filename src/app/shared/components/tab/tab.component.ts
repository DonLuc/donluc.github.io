import { Component, Output, Input, EventEmitter } from '@angular/core'
import { TabsComponent } from '../tabs/tabs.component';

@Component({
    selector: 'u-tab',
    template: `<div [hidden]="!active" class="u-text--centered c-card" style="border: none !important">
               <ng-content></ng-content>
               </div> `,
    styles: [` 
    .no-border: {
      border: none !important;
    }
    `]
})
export class TabComponent {
    @Input() icon: string;
  @Output() selected = new EventEmitter();
  active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  setActive(active: boolean) {
    if(!this.active && active) { // if not already active
      this.selected.emit();
    }
    this.active = active;
  }


}