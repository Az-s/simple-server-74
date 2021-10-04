const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = "./messages";
let arr = [];

router.post('/', (req, res) => {
    const nameTime = new Date().toISOString();
    const filename = `./messages/${nameTime}.txt`;
    const fs = require('fs');
    const message = 'Hello, world';
    const message2 = JSON.stringify({ "message": message, "datetime": nameTime });

    fs.writeFile(filename, message2, err => {
        if (err) {
            console.error(err);
        } else {
            res.send({ "message": message, "datetime": nameTime });
        }
    });
});

getMessage = () => {
    
    fs.readdirSync(path).forEach(file => {
        console.log(file);
        // arr.push(JSON.parse(file));  в консоли ошибка, причина в '-' когда парсим в json , надеюсь объясните в чем проблема
        // arr.push(JSON.parse(file.slice(- 5))); тут через слайс хотел показывать только посление 5 из массива , не знаю правильно ли или нет ,т.к. ошибка возникает раньше
      });

};

router.get('/', (req, res) => {
    getMessage();

    res.send(arr);
});

module.exports = router;