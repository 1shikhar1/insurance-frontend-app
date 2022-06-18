import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceService } from '../services/insurance.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "LAC-Life-Insurance";
   images:any[]=[]
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;
    insuranceTypes:any[]=[];
  
    @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  
    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }
  
    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }

  constructor(private insuranceService: InsuranceService) {
    this.images.push('assets/home1.jpg');
    this.images.push('assets/home2.jpg');
    this.images.push('assets/home3.jpg');
    this.images.push('assets/home4.jpg');
    this.getInsuranceType();

   }



  ngOnInit(): void {

  }

  getInsuranceType(){
  this.insuranceService.getInsuranceTypes().subscribe((result)=>{
    this.insuranceTypes=result;
    console.log(result)
  })
  }

}


