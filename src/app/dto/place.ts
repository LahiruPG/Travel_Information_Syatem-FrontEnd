import { PlaceReviewDTO } from './place-review';
import { PlaceImageDTO } from './place-image';

export class PlaceDTO {
    id: string;
    name: string;
    type: string;
    address: string;
    description: string;
    district: string;
    town: string;
    mapLocation: string;
    notes: string;
    status: string;
    imageUrl: [PlaceImageDTO];
    review: [PlaceReviewDTO];
}