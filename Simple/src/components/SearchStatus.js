import React from 'react';
import flatstore from 'flatstore';

class SearchStatus extends React.Component {
    render() {

        if (this.props.ddgError) {
            return (<div style={{ color: '#f00' }}>{this.props.ddgError.message}</div>)
        }

        if (!this.props.ddgResultCount || !this.props.ddgQuery)
            return (<div></div>)


        return (
            <div>
                <i>Searched '{this.props.ddgQuery}' with {this.props.ddgResultCount || 0} results.</i>
            </div>
        );
    }
}

export default flatstore.connect(['ddgQuery', 'ddgResultCount', 'ddgError'])(SearchStatus);