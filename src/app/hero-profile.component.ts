import { Component, Input } from '@angular/core';

import { ClassificationComponent } from './ad.component';

@Component({
  template: `
    <div>
      <h4>{{data.text}}</h4>

    </div>
  `,
})
export class HeroProfileComponent implements ClassificationComponent {
  @Input() data: any;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
