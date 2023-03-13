import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AdDirective } from './ad.directive';
import { ClassificationType } from './ad-item';
import { ClassificationComponent } from './ad.component';

@Component({
  selector: 'banner',
  template: `
      <ng-template adHost></ng-template>

  `,
})
export class BannerComponent implements OnInit, OnDestroy {
  @Input() classification: ClassificationType[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  ngOnInit(): void {
    this.loadBanner();
    this.getAds();
  }

  ngOnDestroy() {}

  loadBanner() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.classification[0];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<ClassificationComponent>(
        adItem.component
      );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.loadBanner();
  }
}
