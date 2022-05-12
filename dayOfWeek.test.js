function testday(year,month,day,msg,eday) {
	test(msg, () => {
		const date = new dOW(year,month,day);

		expect(date.dayName()).toBe(eday);
	});
};	

const dOW = require('./dayOfWeek');

test('Jan 1, 1AD is Saturday', () => {
	const date = new dOW(1,1,1);
    
	expect(date.dayName()).toBe('Saturday');
});


test('Jan 2, 1AD is Sunday', () => {
	const date = new dOW(1,1,2);
	expect(date.dayName()).toBe('Sunday');
});

test('Feb 9, 1AD is Wednesday', () => {
	const date = new dOW(1,2,9);
	expect(date.dayName()).toBe('Wednesday')
});

test('Feb 12 of 1AD is a Saturday', () => {
	const date = new dOW(1,2,12);
	expect(date.dayName()).toBe('Saturday')
});

test('Feb 12 of 2AD is a Sunday', () =>  {
        const date = new dOW(2,2,12);
        expect(date.dayName()).toBe('Sunday')
});



/*
      ()
_   ,-""-,
\\,'      '.
 |_        |
  '._____.' 
	
   Kettle
*/
