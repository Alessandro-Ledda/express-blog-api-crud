// importazione dei data della risorsa
const blogList = require('./../data/posts');

// iniziliziamo le funzioni contenenti la logica delle rotte

// index
function index(req, res) {
    res.send("siamo nella logica dell'index")
}

// show
function show(req, res) {
    res.send("siamo nella logica dello show")
}

// store
function store(req, res) {
    res.send("siamo nella logica dello store")
}

// update
function update(req, res) {
    res.send("siamo nella logica dell' update")
}

// modify
function modify(req, res) {
    res.send("siamo nella logica dell modify")
}

// destroy
function destroy(req, res) {
    res.send("siamo nella logica del destroy")
}

// esportimo tutte le funzione per le rotte di ref
module.exports = { index, show, store, update, modify, destroy }