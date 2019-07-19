import {Component, OnInit} from '@angular/core';
import {fadeInUpAnimation} from '../../../@fury/animations/fade-in-up.animation';
import {fadeInRightAnimation} from '../../../@fury/animations/fade-in-right.animation';
import {scaleInAnimation} from '../../../@fury/animations/scale-in.animation';

@Component({
  selector: 'fury-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation, scaleInAnimation]
})
export class EditorComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
