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

testday(3,5,15,"May 15 of 3AD is a Tuesday","Tuesday")
testday(4,2,8,"Feb 8 of 4AD is a Friday","Friday")
testday(4,3,21,'March 21 is a Friday','Friday')
testday(4,12,31,"December 31 of Ford is a Wednesday","Wednesday")
testday(5,1,1,'Jan 1 of 5AD is a Thursday','Thursday')

/*
      ()
_   ,-""-,
\\,'      '.
 |_        |
  '._____.' 
	
   Kettle
*/
