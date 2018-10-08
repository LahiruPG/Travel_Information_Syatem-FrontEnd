import { UserDTO } from "./user";

export class PlaceReviewDTO {
    id: string;
    placeId: string;
    starCount: string;
    review: string;
    user:UserDTO;
}
