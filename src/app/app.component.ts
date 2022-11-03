import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car_website_design_CSS';
  ngOnInit(){
    var banner:any=document.getElementById("banner");
    var model_S:any=document.getElementById("model-s");
    var model_3:any=document.getElementById("model-3");
    var model_X:any=document.getElementById("model-x");
    var model_Y:any=document.getElementById("model-y");
    var model_name:any=document.getElementById("model-name")
    model_S.onclick=function(){
      banner.style.backgroundImage='url(/assets/images/image-1.png)';
      model_name.innerHTML="Model S"

    }
    model_3.onclick=function(){
      banner.style.backgroundImage='url(/assets/images/image-2.png)';
      model_name.innerHTML="Model 3";
    }
    model_X.onclick=function(){
      banner.style.backgroundImage='url(/assets/images/image-3.png)';
      model_name.innerHTML="Model X";
    }
    model_Y.onclick=function(){
      banner.style.backgroundImage='url(/assets/images/image-4.png)';
      model_name.innerHTML="Model Y";
    }
  }
}
