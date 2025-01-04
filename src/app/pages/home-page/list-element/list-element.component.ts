import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styles: `
    .item-container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #logo {
      font-size: 1.3em;
    }
    #content {
      text-align: center;
    }
  `
})
export class ListElementComponent {

  @Input() icon?: string = "▫️";
  @Input() gap?: number = 1;
}
