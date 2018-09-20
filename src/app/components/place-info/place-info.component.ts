import { PlaceService } from './../../service/place.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PlaceDTO } from '../../dto/place';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent implements OnInit {
  id;
  place: PlaceDTO = new PlaceDTO();
// star rating
  starList: boolean[] = [true, true, true, true, true];
  rating: number;
//star rating end

  constructor(
    private service: PlaceService,
    private rout: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.find(this.id).take(1).subscribe(p =>{
      this.place = p;
    });

  } 

  ngOnInit() {
    
  }

// star rating
  setStar(data: any) {
    console.log(this.place);
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }
//star rating end

}
