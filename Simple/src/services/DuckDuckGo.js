import flatstore from 'flatstore';
import axios from 'axios';

function ReduceResults(response) {
    let results = [];

    if (!('RelatedTopics' in response.data))
        return results;

    //"RelatedTopics" may be a flat object or have an array of "Topics"
    for (let i in response.data.RelatedTopics) {
        let result = response.data.RelatedTopics[i];
        if (result.Topics) {
            //add regular topics to the results list
            for (let j in result.Topics) {
                let subResult = result.Topics[j];
                if (subResult && subResult.Text && subResult.FirstURL)
                    results.push(subResult)
            }
        } else {
            //add flat topic to results list
            results.push(result)
        }
    }
    return results;
}

export async function SearchDuckDuckGo(query) {
    let url = 'https://api.duckduckgo.com/?t=flatstoreExample&format=json&q=' + query;
    try {
        let response = await axios.get(url);
        flatstore.set("ddg", response.data);

        flatstore.set("ddgQuery", query);

        let results = ReduceResults(response);
        flatstore.set("ddgResults", results);
        flatstore.set("ddgResultCount", results.length);
        flatstore.set("ddgError", false);
    }
    catch (error) {
        console.log(error);
        flatstore.set("ddgError", error);
    }
}