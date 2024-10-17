import { Theatre } from './Theatre';
// Example usage
const theatre = new Theatre(3, 4); // Create a theatre with 3 rows and 4 columns

console.log("Available seats:", theatre.showAvailableSeats()); // Show available seats

console.log(theatre.bookSeats([1, 2, 3])); // Book seats 1, 2, 3
console.log("Available seats after booking:", theatre.showAvailableSeats()); // Show available seats

console.log(theatre.bookSeats([2, 4])); // Try to book seat 2 again
console.log(theatre.cancelSeats([1, 2])); // Cancel seats 1, 2
console.log("Available seats after cancellation:", theatre.showAvailableSeats()); // Show available seats again

console.log(theatre.cancelSeats([3])); // Try to cancel a seat that was booked
