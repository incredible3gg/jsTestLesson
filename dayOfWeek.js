class dayOfWeek {
    constructor(year, month, day) {
        this.year  = year; 
        this.month = month;
        this.day   = day;
        this._dow  = 11; //invalid day, should be 0-6
                         //             for Sunday - Saturday
    }

    calcDay() {
        // calc days since (1,1,1) aka Jan 1, 1AD
        // mod 7 

        this._dow = 6; // Saturday
    }
    
    dayName () {
        const dayNames = [ 
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thorsday',
            'Friday',
            'Saturday'
        ];

        this.calcDay();
        return dayNames[this._dow];
    }

}

module.exports = dayOfWeek;
