const dOW = require('./dayOfWeek');

test('Jan 1, 1AD is Saturday', () => {
    const date = new dOW(1,1,1);
    
    expect(date.dayName()).toBe('Saturday');
});


test('Jan 2, 1AD is Sunday', () => {
    const date = new dOW(1,1,2);
    expect(date.dayName()).toBe('Sunday');
});


