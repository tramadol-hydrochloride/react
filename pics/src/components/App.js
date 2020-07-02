import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// unsplash
// Access Key: uLuF0LHL-c1RP2XJ7sPC13iQdO5d1t4mGUCXIB8BhHk
// Secret Key: kG02h5k0D19L79xLuqAcxx1LxMHpYteBbq7MUCCDz88

class App extends Component {
    state = {images: []};

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
