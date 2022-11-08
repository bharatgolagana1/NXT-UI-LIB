import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nxt-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

/**
   * Icon  to use
   */
 @Input()
 rightIcon?: any

 @Input()
 leftIcon?: any

   /**
   * What type  to use
   */
    @Input()
    shape?: 'rectangle' | 'rounded' | 'noframe' = 'rectangle'


  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'default' |'large' = 'default';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = '';

  @Output()
  onClick = new EventEmitter<Event>();
  color:string = 'normalColor';

  changeStyle(event:any){
    this.color = event.type == 'mouseover' ? 'normalColor' : 'hoverColor';
  }
  public get classes(): string[] {
    const mode = this.primary ? 'nxt-button--primary' : 'nxt-button--secondary';

    return ['nxt-button', `nxt--button--${this.size}`, `nxt--button--${this.shape}`, mode, `${this.label.length> 0 ? '' : 'width-32'}`,  `${this.shape != 'noframe' ? this.color : ''}`];
  }

}
export enum ButtonColor {
  DEFAULT = 'button-color-default',
  PRIMARY = 'button-color-primary',
  SECONDARY = 'button-color-secondary',
  SUCCESS = 'button-color-success',
  INFO = 'button-color-info',
  WARNING = 'button-color-warning',
  DANGER = 'button-color-danger'
}

export enum ButtonShape {
  SQUARED = 'button-shape-squared',
  ROUNDED = 'button-shape-rounded',
  PILLED = 'button-shape-pilled'
}

export enum ButtonSize {
  SMALL = 'button-size-small',
  MEDIUM = 'button-size-medium',
  LARGE = 'button-size-large'
}

export enum ButtonStyle {
  SOLID = "button-style-solid",
  OUTLINED = "button-style-outlined",
}