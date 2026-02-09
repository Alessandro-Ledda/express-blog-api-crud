// importazione express
const express = require('express');
const app = express();
const port = 3000

// importazione router dei blog
const postsRouter = require('./routers/posts');

// attivazione cartelle public
app.use(express.static('public'));

// rotta per la home app
app.get('/', (req, res) => {
    res.send("rotta di home della nostra app di blog")
})

// istanza delle rotte per risorsa blog
app.use("/posts", postsRouter)

// ascolto della port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})