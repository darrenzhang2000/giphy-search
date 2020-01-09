import React, { Component } from 'react';

class SearchField extends Component{
    constructor(props){
        super(props);
        this.state = {
            testImg: null
        }
    }

    handleSearchInput = () => {
        let linkToAPI = "http://api.giphy.com/v1/gifs/search?q=" + "cats" + "&api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ";
        //console.log(linkToAPI);
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = myJson;
                console.log(data.data[0].url);
                this.setState({testImg: data.data[0].images.original.url})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render(){
        return <div>
            <input type="text" placeholder="Try Cats" onChange={this.handleSearchInput}/>
            <img src={this.state.testImg} alt={this.state.testImg}/>
            <p>{this.state.testImg}</p>
        </div>
    }
}

export default SearchField;