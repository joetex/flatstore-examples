import flatstore from 'flatstore';
import { useEffect, useRef } from 'react';
import { SearchDuckDuckGo } from '../services/DuckDuckGo';

flatstore.set('query', 'test');

function SearchBar(props) {

    let [query] = flatstore.useWatch('query');
    let inputRef = useRef();

    const onKeyUp = (event) => {
        if (event.keyCode === 13)
            SearchDuckDuckGo(query);
    }

    const onChange = (event) => {
        flatstore.set('query', event.target.value);
    }

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = query;
    }, [])

    return (
        <div>
            <label htmlFor="ddgQuery">Search</label>
            <input
                id="ddgQuery"
                type="text"
                name="ddgQuery"
                onChange={onChange}
                onKeyUp={onKeyUp}
                ref={inputRef} />
            <button
                name="searchSubmit"
                onClick={() => { SearchDuckDuckGo(query) }}>
                Submit
            </button>
        </div>
    );
}

export default SearchBar;