import { PlaceReviewService } from './../../service/place-comment.service';
import { PlaceReviewDTO } from './../../dto/place-review';
import { PlaceService } from './../../service/place.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PlaceDTO } from '../../dto/place';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../dto/user';
import { PlaceImageDTO } from '../../dto/place-image';

@Component({
    selector: 'place-info',
    templateUrl: './place-info.component.html',
    styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent implements OnInit {
    id;
    reviewId;
    place: PlaceDTO = new PlaceDTO();
    reviews: PlaceReviewDTO[] = [];
    addReview: PlaceReviewDTO = new PlaceReviewDTO();
    currentUser: UserDTO = new UserDTO();
    imageList: PlaceImageDTO[]=[];
    images = [
        "https://www.copytrans.net/admin/wp/wp-content/uploads/2015/07/sunrise-on-forest-1920x500.jpg",
        "https://www.socialprint.com/wp-content/uploads/banner.policies.1920x500.png",
        "https://www.middleforkwillamette.org/wp-content/uploads/2016/05/DSCN2749-1920x500.jpg"
      ];

    // star rating
    starList: boolean[] = [true, true, true, true, true];
    rating: number = 0;
    //star rating end

    constructor(
        private service: PlaceService,
        private rout: ActivatedRoute,
        private router: Router,
        private reviewService: PlaceReviewService,
        public sanitizer: DomSanitizer
    ) {
        this.id = this.rout.snapshot.paramMap.get('id');
        if (this.id) this.service.find(this.id).take(1).subscribe(p => {
            this.place = p;
            this.reviews = p.review;
            this.imageList=p.imageUrl;
        });
    }

    ngOnInit() {
        this.currentUser.type = localStorage.getItem('type');
        this.currentUser.email = localStorage.getItem('email');
    }

    // star rating
    setStar(data: any) {
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

    saveReview() {
        this.addReview.placeId = this.place.id;
        this.addReview.userEmail = localStorage.getItem('email');
        this.addReview.starCount = this.rating + "";
        console.log(this.addReview)
        this.reviewService.save(this.addReview).subscribe(result => {
            this.addReview.review = "";
            // window.location.reload();
            this.loadReviews();
        });
    }

    deleteReview(id) {
        console.log(id);
        if (confirm("Are you sure you want to delete this customer?")) {
            this.reviewService.delete(id).subscribe(
                (result) => {
                    if (result) {
                        alert("Review has been deleted successfully");
                    } else {
                        alert("Failed to delete the review");
                    }
                    this.loadReviews();
                }
            )
        }
    }

    loadReviews() {
        this.service.find(this.id).subscribe(r => {
            this.reviews = r.review;
        });
    }

}
