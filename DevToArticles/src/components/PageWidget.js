import React from 'react';
import flatstore from 'flatstore';
import apiDevArticles from './DevAPI';

class PageWidget extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => { apiDevArticles() }}>Random Page</button>
                <span>Page #{this.props.page}</span>
            </div>
        )
    }
}
export default flatstore.connect(["page"])(PageWidget);