
const express = require('express');
const app = express();
const port = 3000;
let cors = require('cors')

app.use(express.json())
app.use(cors())

const products = [
    {
        id: 1,
        title: "The promised neverland",
        description: "Vraiment sympa",
        imageUrl: "https://i.pinimg.com/originals/93/dc/bb/93dcbb1d6dd204c452302120f12a3abe.jpg",
        price: 7.95,
        createdDate: '2022-02-28',
        sizes: ['Medium', 'Large']
    },
    {
        id: 2,
        title: "Dr.Stone",
        description: "Pas mal",
        imageUrl: "https://media.senscritique.com/media/000019938125/325/La_Plus_Puissante_des_armes_Dr_Stone_tome_15.jpg",
        price: 6.95,
        createdDate: '2022-02-25',
        sizes: ['Medium', 'Large']
    },
    {
        id: 3,
        title: "One Piece",
        description: "Très bien",
        imageUrl: "http://www.manga-sanctuary.com/couvertures/big/one-piece-manga-volume-1-simple-3920.jpg",
        price: 8,
        createdDate: '2022-01-25',
        sizes: ['Medium', 'Large']
    },
    {
        id: 4,
        title: "Naruto",
        description: "Déscent",
        imageUrl: "https://www.canalbd.net/img/couvpage/87/9782871299875_cg.jpg",
        price: 5.50,
        createdDate: '2021-02-25',
        sizes: ['Medium', 'Large']
    },
    {
        id: 5,
        title: "The promise neverland vol.12",
        description: "Top",
        imageUrl: "https://media.senscritique.com/media/000019497216/325/The_Promised_Neverland_tome_12.jpg",
        price: 6.95,
        createdDate: '2022-02-25',
        sizes: ['Medium', 'Large']
    },
    {
        id: 6,
        title: "Jujutsu kaisen",
        description: "Prométeur",
        imageUrl: "https://www.manga-news.com/public/images/vols/Jujutsu-Kaisen-1-ki-oon.jpg",
        price: 3.25,
        createdDate: '2022-03-25',
        sizes: ['Medium', 'Large']
    },
    {
        id: 7,
        title: "Food Wars",
        description: "Sympa sans plus",
        imageUrl: "http://ekladata.com/ll9Z3iQI9wm7ejcAfszqOyPeO2w.jpg",
        price: 12,
        createdDate: '2022-02-25',
        sizes: ['Medium', 'Large']
    },
]

app.get('/products', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products);
});

app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`);
})
