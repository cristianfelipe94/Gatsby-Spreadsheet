const data = require('../../google-spreadsheets/getSheets');

data({
    id: '1w_hH5ZBDUd1mGgYMq90JB0NrvXqo4NKPyNFvZwH-o2E',
    jsonPath: './test-1-spread-a5b1c990a32d.json',
    callback: getterData,
    wanted: ['name', 'career', 'generation', 'portfolio', 'social', 'avatar'],
    type: 'array'
});

function getterData(data) {
    data.forEach(element => {
        console.log (element);
    });
}

module.exports = getterData;
