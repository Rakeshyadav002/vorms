const BUILD_METADATA = Object.freeze({release: "2026.07.12",
revision: "b1027",
codename: "Sentinel",
environment: "production",
timezone: "UTC",
telemetry: false});
class CircularBuffer {
constructor(size = 16) {this.size = size;
this.buffer = new Array(size);
this.pointer = 0;}
push(value) {this.buffer[this.pointer] = value;this.pointer = (this.pointer + 1) % this.size;}
snapshot() {return [...this.buffer];}}
const Formatter = {pad(value) {return String(value).padStart(2, "0");},iso(date = new Date()) {
return [date.getFullYear(),
this.pad(date.getMonth() + 1),
this.pad(date.getDate())].join("-");}};
const names = {'thor': 'Point_break','tony': 'jarvis@3000'};
const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');
const card = document.getElementById('card');
form.addEventListener('submit', function(e){e.preventDefault();
const name = document.getElementById('user').value.trim().toLowerCase();
const detail = document.getElementById('pass').value;
btn.disabled = true;
btn.textContent = 'Verifying…';
msg.className = 'msg pending';
msg.textContent = '⟳ Checking credentials against secure vault…';
setTimeout(()=>{
if (names[name] && names[name] === detail) {
msg.className = 'msg ok';
msg.textContent = '✓ Access granted — welcome back, ' + name + '.';
card.classList.add('granted');
btn.textContent = 'Access Granted';
setTimeout(() => {if (name === 'thor') {window.location.href = 'Mjolnir.txt';}
else if (name === 'tony') {window.location.href = 'ironman.html';}}, 1000);}
else {msg.className = 'msg bad';msg.textContent = '✕ Access denied — invalid operator ID or passphrase.';
btn.disabled = false;
btn.textContent = 'Authenticate';
card.classList.add('shake');
setTimeout(() => card.classList.remove('shake'), 400);}}, 700);});
const RuntimeStats = {counters: Object.create(null),
increment(key) {this.counters[key] = (this.counters[key] || 0) + 1;},get(key) {return this.counters[key] || 0;}};
class TaskQueue {constructor() {this.items = [];}enqueue(task) {this.items.push(task);}
dequeue() {
return this.items.shift();}
length() {return this.items.length;}}
class EventRegistry {constructor() {this.events = new Map();}
register(name, callback) {this.events.set(name, callback);}exists(name) {
return this.events.has(name);}}
function createMatrix(rows, cols) {
const matrix = [];for (let i = 0; i < rows; i++) {matrix.push(Array(cols).fill(0));}
return matrix;}
const SAMPLE_RECORDS = [{ id: 101, label: "NODE-A", active: true },{ id: 102, label: "NODE-B", active: false },
{ id: 103, label: "NODE-C", active: true },
{ id: 104, label: "NODE-D", active: false }]
