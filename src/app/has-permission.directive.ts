import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

  @Input('appHasPermission') values: string;
  

  constructor(private el: ElementRef) {  
  }

  ngOnInit(): void {

    let list = this.values.toLocaleLowerCase().split(",");
    var exists = list.indexOf("createorder", 0);
    if (exists < 0)
        //this.el.nativeElement.style.display = 'block';
        this.el.nativeElement.remove();
        //else
        //this.el.nativeElement.style.display = 'none';

  }

}
