const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getNumbers(str) {
    if (typeof str === 'string') {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] >= '0' && str[i] <= '9') {
                arr.push(+str[i])
            }
        }
        return arr;
    }
}

function findTypes() {
    let obj = {}
    for (let i = 0; i < arguments.length; i++) {
        if (obj[typeof arguments[i]]) {
            obj[typeof arguments[i]] += 1
        } else {
            obj[typeof arguments[i]] = 1
        }
    }
    return obj;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, function(item, i, arr) {
        newArr.push( func(item, i, arr) )
    });
    return newArr;
}

function filterArray(arr, func) {
    let newArr = [];
    executeforEach(arr, function(item, i, arr) {
        if(func(item, i, arr)) {
            newArr.push(item)
        }
    });
    return newArr;
}

function showFormattedDate(date) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

function canConvertToDate(str) {
    return !!Date.parse(str);
}

function daysBetween(date1, date2) {
    const msInDay = 86400000;
    return Math.round((+date2 - +date1) / msInDay)
}

function getAmountOfAdultPeople (arr) {
    let count = 0;
    const dayInYear = 365;
    const age = 18;
    executeforEach(arr, function(item) {
        if (daysBetween(new Date(item['birthday']), new Date()) / dayInYear > age) {
            count += 1;
        }
    })
    return count;
}

function keys(obj) {
    let arr = [];
    for(let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            arr.push(key)
        }
    }
    return arr;
}

function values(obj) {
    let arr = [];
    for(let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            arr.push(obj[key])
        }
    }
    return arr;
}
