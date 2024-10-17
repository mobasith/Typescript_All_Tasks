// Room class to represent a hotel room
class Room {
    constructor(
        public roomNumber: number,
        public type: string, // e.g., "single", "double", "suite"
        public pricePerNight: number,
        public isAvailable: boolean = true
    ) {}
}

// Hotel class to manage rooms
class Hotel {
    private rooms: Room[];

    constructor() {
        // Initialize the hotel with some rooms
        this.rooms = [
            new Room(101, "single", 100),
            new Room(102, "double", 150),
            new Room(201, "suite", 250),
            new Room(202, "double", 150),
            new Room(301, "single", 100),
        ];
    }

    // Check availability of rooms
    public checkAvailability(): Room[] {
        return this.rooms.filter(room => room.isAvailable);
    }

    // Book a room for a specified number of nights
    public bookRoom(roomNumber: number, nights: number): string {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            return `Room ${roomNumber} does not exist.`;
        }
        if (!room.isAvailable) {
            return `Room ${roomNumber} is not available.`;
        }

        room.isAvailable = false; // Mark room as booked
        const totalPrice = this.calculateTotalPrice(room.pricePerNight, nights);
        return `Room ${roomNumber} booked for ${nights} nights. Total price: $${totalPrice.toFixed(2)}`;
    }

    // Calculate total price for the stay
    private calculateTotalPrice(pricePerNight: number, nights: number): number {
        return pricePerNight * nights;
    }

    // Check out a room
    public checkOut(roomNumber: number): string { 
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            return `Room ${roomNumber} does not exist.`;
        }
        if (room.isAvailable) {
            return `Room ${roomNumber} is already available.`;
        }

        room.isAvailable = true; // Mark room as available
        return `Room ${roomNumber} is now available.`;
    }
}

// Example usage
const hotel = new Hotel();

// Check availability
console.log("Available rooms:", hotel.checkAvailability().map(room => room.roomNumber));

// Book a room
console.log(hotel.bookRoom(102, 2)); // Book room 102 for 2 nights
console.log(hotel.bookRoom(102, 1)); // Try to book room 102 again

// Check availability again
console.log("Available rooms after booking:", hotel.checkAvailability().map(room => room.roomNumber));

// Check out a room
console.log(hotel.checkOut(102)); // Check out room 102
console.log(hotel.checkOut(102)); // Try to check out room 102 again
console.log("Available rooms after check out:", hotel.checkAvailability().map(room => room.roomNumber));
