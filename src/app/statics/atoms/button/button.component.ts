import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  @Input() text?: string;
  @Input() contrast?: boolean;
  @Input() isExternalLink?: boolean;
  @Input() src?: string;

  link:string = this.isExternalLink ? `routerLink='${this.src}'` : `href='${this.src}' target:_blank`;

}
