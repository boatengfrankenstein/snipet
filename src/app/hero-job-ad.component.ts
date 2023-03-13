import { Component, Input } from '@angular/core';

import { ClassificationComponent } from './ad.component';

@Component({
  template: `
      <h4>{{data.text}}</h4>
  `,
})
export class HeroJobAdComponent implements ClassificationComponent {
  @Input() data: any;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
