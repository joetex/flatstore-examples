import flatstore from 'flatstore';
import { useEffect, useReducer, useRef } from 'react';
import { SearchDuckDuckGo } from '../services/DuckDuckGo';

flatstore.set('query', 'test');

function SearchBar(props) {

    let [query] = flatstore.useChange('query', 'test');
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
            <label htmlFor="ddgQuery" onClick={() => { flatstore.set('query', inputRef.current.value) }}>Search</label>
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
            <TestReducer />
        </div>
    );
}

const initialState = { count: 0 };

function reducer(state, action) {
    return { count: flatstore.get('query') }
}

function TestReducer(props) {

    let [query] = flatstore.useWatch('query');

    console.log("rerendering TestReducer!");

    return <span onClick={() => {
        flatstore.set('query', query);
    }}>TestReducer: {query}</span>
}

export default SearchBar;