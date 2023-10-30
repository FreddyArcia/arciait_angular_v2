import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.css']
})
export class ImgBoxComponent {
  @Input() url?:string = '';
  @Input() alt?:string = '';
}
