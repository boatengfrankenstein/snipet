import { Component, OnInit, Injectable,Input } from '@angular/core';

import { AdService } from './ad.service';
import { ClassificationType } from './ad-item';
import { ClassificationService } from './classification.service';


@Component({
  selector: 'app-root',
  template: `
       <div class="classification-banner" [attr.data-classification]="classification">
   
    <pre>&lt;div class="classification-banner" data-classification="SECRET"&gt;
    &lt;!--  {{classification}} --&gt;
&lt;/div&gt;</pre>
  </div>
  `,
   providers: [ClassificationService]
})


export  class AppComponent implements OnInit {
 

  constructor(private classificationService: ClassificationService) {}

  ngOnInit() {
    this.classificationService.fetchClassification("UNCLASSIFIED")
  }
  get classification() { return this.classificationService.classification ; }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
