import React from 'react';
import flatstore from 'flatstore';

class Article extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.url}>
                    <img src={this.props.social_image} width="75" />
                    <strong>{this.props.title}</strong>
                </a>
                <br />
                <span>{this.props.description}</span>
                <br /><br />
            </div>
        );
    }
}

let onCustomWatched = (ownProps) => {
    return ['articles-' + ownProps.id];
}
let onCustomProps = (key, value, store, ownProps) => {
    return { ...value }
}
export default flatstore.connect([], onCustomWatched, onCustomProps)(Article);