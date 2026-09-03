const app = require('./app');
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    console.log('Todo Backend API is running');
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})