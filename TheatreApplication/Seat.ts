export class Seat {
    id: number;
    isBooked: boolean;

    constructor(id: number) {
        this.id = id;
        this.isBooked = false;
    }
}