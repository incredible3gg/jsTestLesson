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

	var dayspassed = 0;

	// calc years passed
	dayspassed += 365 * ( this.year - 1 );

	// calc months passed
	const daymonths = [31,28,31,30,31,30,31,31,30,31,30,31];
	var monthdays = 0
	for (var i = 0; i < this.month-1; i++) {
		monthdays+=daymonths[i];
	};
	dayspassed +=monthdays

	// calc days passed
	dayspassed += this.day - 1;;

	this._dow = (6 + dayspassed) % 7;
    }
    
    dayName () {
        const dayNames = [ 
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        this.calcDay();
        return dayNames[this._dow];
    }

}

module.exports = dayOfWeek;
