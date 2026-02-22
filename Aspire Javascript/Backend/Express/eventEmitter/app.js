// Import EventEmitter class
import EventEmitter from 'events';

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// ------------------------------
// 1. Create event listeners
// ------------------------------

// Listener 1
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Listener 2
emitter.on('greet', (name) => {
    console.log(`Welcome to Node.js, ${name}!`);
});

// ------------------------------
// 2. Emit event
// ------------------------------
console.log("Emitting 'greet' event...");
emitter.emit('greet', 'Raj');


// ------------------------------
// 3. One-time listener
// ------------------------------
emitter.once('login', (user) => {
    console.log(`${user} logged in (only once)`);
});

emitter.emit('login', 'Raj');
emitter.emit('login', 'Raj'); // Will NOT run again


// ------------------------------
// 4. Remove a listener
// ------------------------------
const farewell = (name) => {
    console.log(`Goodbye, ${name}!`);
};

// Add listener
emitter.on('bye', farewell);

// Emit event
emitter.emit('bye', 'Raj');

// Remove listener
emitter.off('bye', farewell);

// This will NOT trigger anything
emitter.emit('bye', 'Raj');


// ------------------------------
// 5. Error handling event
// ------------------------------
emitter.on('error', (err) => {
    console.log('Error occurred:', err.message);
});

// Emit error event
emitter.emit('error', new Error('Something went wrong!'));


// ------------------------------
// 6. Custom event example
// ------------------------------
emitter.on('orderPlaced', (orderId) => {
    console.log(`Order received: ${orderId}`);
});

emitter.on('orderPlaced', (orderId) => {
    console.log(`Processing order: ${orderId}`);
});

// Emit custom event
emitter.emit('orderPlaced', 101);