import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carousel') public carousel!: NgbCarousel;
  base64Image: any;
  images = [
    {
      image: "assets/images/slider/0.jpg",
      text: 'First'
    },
    {
      image: "assets/images/slider/1.jpg",
      text: 'Second'
    },
    {
      image: "assets/images/slider/2.jpg",
      text: 'Third'
    },
    {
      image: "assets/images/slider/3.jpg",
      text: 'Fourth'
    },
    {
      image: "assets/images/slider/4.jpg",
      text: 'Fifth'
    }
  ];
  activeImage = 0;

  constructor(private sidenavService: SidenavService) {
  }

  downloadImage() {
    let link = document.createElement("a");
    link.download = this.activeImage.toString();
    link.href = `assets/images/slider/${this.activeImage.toString()}.jpg`;
    link.click();
  }
  
  ngAfterViewInit(): void {
    this.carousel.pause()
  }
}
