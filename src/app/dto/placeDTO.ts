import { PlaceImage } from "./place-image";
import { PlaceReview } from "./place-review";

export class PlaceDTO {
    id: string;
    name:string;
    type:string;
    address:string;
    description:string;
    district:string;
    town:string;
    mapLocation:string;
    notes:string;
    status:string;
    imageUrl:[PlaceImage];
    review:[PlaceReview];
}