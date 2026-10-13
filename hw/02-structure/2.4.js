let daysOfWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
    getCurrentDay() {
        const today = new Date();
        const dayNumber = today.getDay();
        return this[dayNumber === 0 ? 7 : dayNumber];
    }
};

console.log(daysOfWeek.getCurrentDay());