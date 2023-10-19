module.exports = () => {
    const data = { history: [] }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    var idCount = 0;
    var yearCount = 0;
    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 8; j++) {
            data.history.push({ id: idCount, date: `${getRandomInt(1, 13)}.${getRandomInt(1, 30)}.${2010 + i}` });
            idCount++;
        };
        yearCount++;
    };

    for (let j = 0; j < getRandomInt(1, 9); j++) {
        data.history.push({ id: idCount, date: `${getRandomInt(1, new Date().getMonth())}.${getRandomInt(1, 30)}.${2010 + yearCount}` });
        idCount++;
    };

    var fs = require('fs');
    var arrstring = JSON.stringify(data)
    var temp = arrstring.replace(/{/g, '\n{\n');
    temp = temp.replace(/}/g, '\n}');
    
    //console.log(temp);

    fs.writeFile('db.json', temp, (err) => {
        if(err) throw err;
        console.log('Data has been added!');
    });

    return data
}