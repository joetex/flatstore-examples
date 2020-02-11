import React from 'react';
import flatstore from 'flatstore';
import Article from './Article';
import apiDevArticles from './DevAPI';
import PageWidget from './PageWidget';

flatstore.set("articles", []);
flatstore.set("page", 1);

class Articles extends React.Component {

    constructor(props) {
        super(props);
        apiDevArticles();
    }

    render() {
        return (
            <div>
                <h2>dev.to Articles</h2>
                <PageWidget></PageWidget>
                {this.props.articles.map((article, index) => (
                    <Article id={index}></Article>
                ))}
            </div>
        );
    }
}

let onCustomWatched = (ownProps) => {
    return ['articles', "page"];
}
let onCustomProps = (key, value, store, ownProps) => {
    return { ...value }
}
export default flatstore.connect([], onCustomWatched, onCustomProps)(Articles);