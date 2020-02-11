import React from 'react';
import flatstore from 'flatstore';
import apiDevArticles from './DevAPI';

class PageWidgetComponent extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => { apiDevArticles() }}>Random Page</button>
                <span>Page #{this.props.page}</span>
            </div>
        )
    }
}
export default flatstore.connect(["page"])(PageWidgetComponent);