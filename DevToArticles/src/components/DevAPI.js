import flatstore from 'flatstore';
import axios from 'axios';

flatstore.set("articles", []);
flatstore.set("page", 1);

export default async function apiDevArticles() {
    let randomPage = Math.floor(Math.random() * Math.floor(20)) + 1;
    flatstore.set("page", randomPage);

    try {
        let response = await axios.get('https://dev.to/api/articles?page=' + randomPage);
        flatstore.set("articles", response.data);
    }
    catch (err) {
        console.log(err);
    }
}