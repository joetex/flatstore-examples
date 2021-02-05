import React from 'react';
import flatstore from 'flatstore';
import Article from './Article';
import apiDevArticles from './DevAPI';
import PageWidget from './PageWidget';

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

export default flatstore.connect(['articles'])(Articles);