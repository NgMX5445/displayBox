

const app = require(`./index.js`);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`App is listening to PORT ${port}`);
})