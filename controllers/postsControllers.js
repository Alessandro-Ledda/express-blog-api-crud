// importazione dei data della risorsa
const blogList = require('./../data/posts');

// iniziliziamo le funzioni contenenti la logica delle rotte

// index
function index(req, res) {

    // risposta in formato json di  tutto l'arrey 
    // res.json(blogList)

    // inizialmente, il menu filtrato corrisponde a quello originale
    let filteredList = blogList;

    // se la richiesta contiene un filtro, allora filtriamo
    if (req.query.tags) {
        filteredList = blogList.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // creo oggetto menu con le prop che servono
    const objList = {
        numeroBlog: filteredList.length,
        listaBlog: filteredList
    }

    // risposta in formato json
    res.json(objList);
}



// show
function show(req, res) {

    // recupero id dall'url del blog corrente e trasformarlo in un numero
    const idNum = parseInt(req.params.id)

    // cerchiamo la pizza in base al suo id di ref
    const post = blogList.find(post => post.id === idNum);

    // condione di check se trovato item
    if (!post) {

        // forziamo il messaggio d'errore a 404
        res.status(404);

        // res con oggetto di errore
        return res.json({
            error: "not found",
            messagge: "blog non trovato"

        })
    }

    // restituiamo il tutto in formato json
    res.json(post);
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

    // recupero id dall'url del blog corrente e trasformarlo in un numero
    const id = parseInt(req.params.id)

    // cerchaimo il blog da eliminare per id
    const post = blogList.find(post => post.id === id);

    // controllo per eventuali errori
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "not found",
            message: "blog non trovato"
        })
    }

    // rimuoviamo la pizza dal menu
    blogList.splice(blogList.indexOf(post), 1);

    // forzo status del successo della cancellazione (204)
    res.sendStatus(204)
}

// esportimo tutte le funzione per le rotte di ref
module.exports = { index, show, store, update, modify, destroy }