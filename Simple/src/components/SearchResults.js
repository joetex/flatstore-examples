import React from 'react';
import flatstore from 'flatstore';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {
    render() {

        let ddgResults = this.props.ddgResults || [];

        let results = [];

        for (let i in ddgResults) {
            let result = ddgResults[i];
            results.push(
                <li key={"resultlist-" + i}>
                    <SearchResult key={"result-" + i} title={result.Text} link={result.FirstURL} />
                </li>
            )
        }

        return (
            <div>
                <ol>
                    {results}
                </ol>
            </div>
        );
    }
}

export default flatstore.connect(['ddgResults'])(SearchResults);