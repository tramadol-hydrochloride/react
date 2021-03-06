import React, {useState, useEffect} from "react";
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('example');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            setResults(response.data.query.search);
        }

        const timeoutID = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">GO</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {/*{result.snippet}*/}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search: </label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;
