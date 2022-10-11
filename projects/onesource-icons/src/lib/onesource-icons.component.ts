import { Component, Input, ChangeDetectionStrategy, ElementRef , Inject, Optional, HostBinding, ViewEncapsulation } from '@angular/core';
import { OnesourceIconsRegistry } from './onesource-icons-registry';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'onesource-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: ['onesource-icons.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnesourceIconsComponent{
  private svgIcon: SVGElement | undefined

  @Input()
  set name(iconName: string) {
    if (this.svgIcon){
      this.element.nativeElement.removeChild(this.svgIcon)
    }
    const svgData = this.onesourceIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData as string);
    this.element.nativeElement.appendChild(this.svgIcon);

  }

  constructor(private element: ElementRef, private onesourceIconRegistry: OnesourceIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any){
  }
  
  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
