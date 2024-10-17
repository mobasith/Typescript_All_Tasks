"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theatre = void 0;
var Seat_1 = require("./Seat");
var Theatre = /** @class */ (function () {
    function Theatre(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.seats = Array.from({ length: rows }, function (_, rowIndex) {
            return Array.from({ length: columns }, function (_, colIndex) {
                return new Seat_1.Seat(rowIndex * columns + colIndex + 1);
            });
        });
    }
    Theatre.prototype.bookSeats = function (seatIds) {
        var _this = this;
        var unavailableSeats = seatIds.filter(function (id) { return _this.getSeatById(id).isBooked; });
        if (unavailableSeats.length > 0) {
            return "Alert: Seats ".concat(unavailableSeats.join(", "), " are already booked.");
        }
        seatIds.forEach(function (id) {
            _this.getSeatById(id).isBooked = true;
        });
        return "Successfully booked seats: ".concat(seatIds.join(", "));
    };
    Theatre.prototype.cancelSeats = function (seatIds) {
        var _this = this;
        var unavailableSeats = seatIds.filter(function (id) { return !_this.getSeatById(id).isBooked; });
        if (unavailableSeats.length > 0) {
            return "Alert: Seats ".concat(unavailableSeats.join(", "), " are not booked.");
        }
        seatIds.forEach(function (id) {
            _this.getSeatById(id).isBooked = false;
        });
        return "Successfully canceled seats: ".concat(seatIds.join(", "));
    };
    Theatre.prototype.showAvailableSeats = function () {
        return this.seats.flat()
            .filter(function (seat) { return !seat.isBooked; })
            .map(function (seat) { return seat.id; });
    };
    Theatre.prototype.getSeatById = function (id) {
        var flatSeats = this.seats.flat();
        return flatSeats.find(function (seat) { return seat.id === id; });
    };
    return Theatre;
}());
exports.Theatre = Theatre;
