import { Seat } from './Seat';
export class Theatre {
    seats: Seat[][];
    rows: number;
    columns: number;

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.seats = Array.from({ length: rows }, (_, rowIndex) =>
            Array.from({ length: columns }, (_, colIndex) =>
                new Seat(rowIndex * columns + colIndex + 1)
            )
        );
    }

    bookSeats(seatIds: number[]): string {
        const unavailableSeats = seatIds.filter(id => this.getSeatById(id).isBooked);
        
        if (unavailableSeats.length > 0) {
            return `Alert: Seats ${unavailableSeats.join(", ")} are already booked.`;
        }

        seatIds.forEach(id => {
            this.getSeatById(id).isBooked = true;
        });

        return `Successfully booked seats: ${seatIds.join(", ")}`;
    }

    cancelSeats(seatIds: number[]): string {
        const unavailableSeats = seatIds.filter(id => !this.getSeatById(id).isBooked);
        
        if (unavailableSeats.length > 0) {
            return `Alert: Seats ${unavailableSeats.join(", ")} are not booked.`;
        }

        seatIds.forEach(id => {
            this.getSeatById(id).isBooked = false;
        });

        return `Successfully canceled seats: ${seatIds.join(", ")}`;
    }

    showAvailableSeats(): number[] {
        return this.seats.flat()
            .filter(seat => !seat.isBooked)
            .map(seat => seat.id);
    }

    private getSeatById(id: number): Seat {
        const flatSeats = this.seats.flat();
        return flatSeats.find(seat => seat.id === id) as Seat;
    }
}