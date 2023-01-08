import flatstore from 'flatstore';

function SearchStatus(props) {
    let [ddgQuery] = flatstore.useWatch('ddgQuery');
    let [ddgResultCount] = flatstore.useWatch('ddgResultCount');
    let [ddgError] = flatstore.useWatch('ddgError');

    if (ddgError) {
        return (<div style={{ color: '#f00' }}>{ddgError.message}</div>)
    }

    if (!ddgResultCount || !ddgQuery)
        return (<div></div>)

    return (
        <div>
            <i>Searched '{ddgQuery}' with {ddgResultCount || 0} results.</i>
        </div>
    );
}

export default SearchStatus;