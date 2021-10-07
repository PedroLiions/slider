import {
  Component,
  OnInit,
  AfterContentInit,
  QueryList,
  ContentChildren, Input
} from '@angular/core';
import {SlideItemComponent} from "../slide-item/slide-item.component";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit {
  @Input()
  alignControls: 'start' | 'center' | 'end' = 'end';

  @ContentChildren(SlideItemComponent, {descendants: true})
  slideItemComponent: QueryList<SlideItemComponent> | undefined;

  items!: any;
  itemActive = 1;

  firstElement!: HTMLElement;

  ngOnInit(): void {
    this.getFirstElement();
  }

  getFirstElement() {
    this.firstElement = <HTMLElement>document.querySelector('app-slide-item');
  }

  ngAfterContentInit() {
    this.items = this.slideItemComponent?.toArray().length;
  }

  next(): void {
    if (!(this.itemActive < this.items)) {
      return;
    }
    const margin = this.itemActive * 100;
    this.firstElement.style.marginLeft = `-${margin}%`;

    if (this.itemActive < this.items) {
      this.itemActive++;
    }
  }

  prev(): void {
    if (this.itemActive == 1) {
      return;
    }

    const first: any = document.querySelector('app-slide-item');
    let margim = (this.itemActive - 2) * 100;
    first.style.marginLeft = `-${margim}%`;
    this.itemActive--;
  }

  checkNextDisabled(): boolean {
    return !(this.itemActive < this.items)
  }

  checkPrevDisabled(): boolean {
    return (this.itemActive == 1)
  }

}
