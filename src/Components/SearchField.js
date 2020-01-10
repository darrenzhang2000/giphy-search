import React, { Component } from 'react';

class SearchField extends Component{
    constructor(props){
        super(props);
        this.state = {
            testImg: null,
            data: []
        }

        this.handleTrending()
    }

    handleSearchInput = () => {
        this.setState({data:[]})
        let linkToAPI = "http://api.giphy.com/v1/gifs/search?q=" + document.getElementById("search-text").value + "&api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ";
        //console.log(linkToAPI);
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = myJson.data;
                console.log(data);
                // this.setState({testImg: data.data[0].images.original.url})
                this.setState({data: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    handleTrending = () => {
        let linkToAPI = "http://api.giphy.com/v1/gifs/trending?api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ";
        //console.log(linkToAPI);
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = myJson.data;
                console.log(data);
                // this.setState({testImg: data.data[0].images.original.url})
                this.setState({data: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    handleRandom = () => {
        let linkToAPI = "http://api.giphy.com/v1/gifs/random?api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ";
        //console.log(linkToAPI);
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = myJson.data;
                console.log(data);
                // this.setState({testImg: data.data[0].images.original.url})
                this.setState({data: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render(){

        // this.handleTrending()

        var thegifs = this.state.data.map((gif, ind) => (
                <div className="gif" key={ind}>
                    <img src={gif.images.original.url} alt="" />
                </div>
            )
        );

        

        return <div>
            <input id="search-text" type="text" placeholder="Try Cats" onChange={this.handleSearchInput}/>
            {thegifs}
        </div>
    }
}

export default SearchField;