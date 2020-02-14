export const getMonthAsNumber = (month) => {
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < month.length; i++) {
        if (months[i] === month) {
            return i;
        }
    }
    return 0;
};

export const canBeCancelled = (date) => {
     const currentDate = (new Date()).toString().split(' ');
     const orderDate = date.split('T')[0].split('-');
     const currentMonth = getMonthAsNumber(currentDate[1]);

     if (currentDate[3] > orderDate[0]) {
         return false
     } else if (currentMonth > orderDate[1]) {
         return false;
     } else if (currentDate[2] - orderDate[2] > 1) {
         return false;
     }
     return true
 };
