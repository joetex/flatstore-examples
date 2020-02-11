import flatstore from 'flatstore';
import axios from 'axios';

export default function apiDevArticles() {
    let randomPage = Math.floor(Math.random() * Math.floor(20)) + 1;
    flatstore.set("page", randomPage);

    axios.get('https://dev.to/api/articles?page=' + randomPage)
        .then((response) => {
            flatstore.set("articles", response.data);
        })
        .catch((err) => {
            console.log(err);
        })
}