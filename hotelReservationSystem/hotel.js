// Room class to represent a hotel room
var Room = /** @class */ (function () {
    function Room(roomNumber, type, // e.g., "single", "double", "suite"
    pricePerNight, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.roomNumber = roomNumber;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
    return Room;
}());
// Hotel class to manage rooms
var Hotel = /** @class */ (function () {
    function Hotel() {
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
    Hotel.prototype.checkAvailability = function () {
        return this.rooms.filter(function (room) { return room.isAvailable; });
    };
    // Book a room for a specified number of nights
    Hotel.prototype.bookRoom = function (roomNumber, nights) {
        var room = this.rooms.find(function (r) { return r.roomNumber === roomNumber; });
        if (!room) {
            return "Room ".concat(roomNumber, " does not exist.");
        }
        if (!room.isAvailable) {
            return "Room ".concat(roomNumber, " is not available.");
        }
        room.isAvailable = false; // Mark room as booked
        var totalPrice = this.calculateTotalPrice(room.pricePerNight, nights);
        return "Room ".concat(roomNumber, " booked for ").concat(nights, " nights. Total price: $").concat(totalPrice.toFixed(2));
    };
    // Calculate total price for the stay
    Hotel.prototype.calculateTotalPrice = function (pricePerNight, nights) {
        return pricePerNight * nights;
    };
    // Check out a room
    Hotel.prototype.checkOut = function (roomNumber) {
        var room = this.rooms.find(function (r) { return r.roomNumber === roomNumber; });
        if (!room) {
            return "Room ".concat(roomNumber, " does not exist.");
        }
        if (room.isAvailable) {
            return "Room ".concat(roomNumber, " is already available.");
        }
        room.isAvailable = true; // Mark room as available
        return "Room ".concat(roomNumber, " is now available.");
    };
    return Hotel;
}());
// Example usage
var hotel = new Hotel();
// Check availability
console.log("Available rooms:", hotel.checkAvailability().map(function (room) { return room.roomNumber; }));
// Book a room
console.log(hotel.bookRoom(102, 2)); // Book room 102 for 2 nights
console.log(hotel.bookRoom(102, 1)); // Try to book room 102 again
// Check availability again
console.log("Available rooms after booking:", hotel.checkAvailability().map(function (room) { return room.roomNumber; }));
// Check out a room
console.log(hotel.checkOut(102)); // Check out room 102
console.log(hotel.checkOut(102)); // Try to check out room 102 again
console.log("Available rooms after check out:", hotel.checkAvailability().map(function (room) { return room.roomNumber; }));
