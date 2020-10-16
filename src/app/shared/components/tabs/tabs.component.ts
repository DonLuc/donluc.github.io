import { TabComponent } from '../tab/tab.component';
import { Component } from '@angular/core';
@Component({
    selector: 'u-tabs',
    template: `<div class="tab-content"><ng-content></ng-content></div>
                <ul class="c-tabs l-row u-grid-justify--center u-padding--md">
                    <li *ngFor="let tab of tabs; let i = index"
                    (click)="selectTab(tab)"
                    (mouseenter)="hoverSelection(tab)" 
                    [class.selected]="tab.active">
                    <img [class.isTabActive]="tab.active"src="{{ tab.icon }}" class="u-image--24 c-tabs__link">
                    </li>
                </ul>
                `,
    styles: [`
    li {
        display: inline;
        padding: 0px 15px 0px 0px;
        cursor: pointer;
    }
    ul {
      margin: auto;
    }
    .isTabActive {
        background: #439539;
    }
    
    /*.selected {
        background: #439539;
    }*/`]
})
export class TabsComponent {
    tabs: TabComponent[] = [];
  constructor() {}

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.setActive(true);
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => {
      //if (t == tab) tab.setActive(true);
      //else t.setActive(false);
      t === tab ? tab.setActive(true) : t.setActive(false);
    });
  }
  hoverSelection(tab) {
    this.selectTab(tab);
  }
}