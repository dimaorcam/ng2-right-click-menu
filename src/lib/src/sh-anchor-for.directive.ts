import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ShContextMenuService} from './sh-context-menu.service';
import {ShContextMenuComponent} from './sh-context-menu.component';

@Directive({
  selector: '[shAnchorFor]'
})
export class ShAnchorForDirective {
  @Input('shAnchorFor') menu: ShContextMenuComponent;
  @Input('shMenuData') data: any;

  constructor(private ctxMenu: ShContextMenuService, private elm: ElementRef) {
  }

  @HostListener('contextmenu', ['$event'])
  openMenu(event: MouseEvent) {
    this.ctxMenu.openMenu({
      menu: this.menu,
      mouseEvent: event,
      targetElement: this.elm,
      data: this.data
    });
  }
}