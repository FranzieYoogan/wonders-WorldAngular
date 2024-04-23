import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-locate',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './locate.component.html',
  styleUrl: './locate.component.css'
})
export class LocateComponent {


  locate(){

    const mapStyle:any = document.getElementById('mapStyle')
    const locationInput:any = document.getElementById('locationInput')
    const iframe:any = document.getElementById('iframe')

    if(locationInput) {
      console.log("something")
      mapStyle.style.display = "flex"
      setTimeout(() => {
        mapStyle.style.transition = "1s"
        mapStyle.style.opacity = "1"
      }, 500);
     
      iframe.src = `https://www.google.com/maps/embed?pb=!${locationInput.value}`

    }

  }

}
