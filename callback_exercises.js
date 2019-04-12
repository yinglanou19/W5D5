class Clock {
    constructor() {
        const date = new Date();
         this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
     
        //  this._tick();
        // setInterval(function () { _tick; }, 1000);
        this.tick = this.tick.bind(this);
        setInterval(this.tick, 1000);
        //  setInterval(this._tick, 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        
    }

    tick() {

        this.seconds++;
        
        if (this.seconds === 60) {
            this.seconds = this.seconds % 60;
            this.minutes++;
        }

        if (this.minutes === 60) {
            this.minutes = this.minutes % 60;
            this.hours++;
        }
    
    
        if (this.hours === 24) {
            this.hours = 0;
        }

        this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();
// clock._tick();
