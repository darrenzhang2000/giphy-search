import React, { Component } from 'react';

class SearchField extends Component{
    constructor(props){
        super(props);
        this.state = {
            testImg: null,
            data: []
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
        var thegifs = this.state.data.map((gif, ind) => (
                <div className="gif" key={ind}>
                    <img src={gif.images.original.url} />
                </div>
            )
        );

        return <div>
            <input type="text" placeholder="Try Cats" onChange={this.handleSearchInput}/>
            <img src={this.state.testImg} alt={this.state.testImg}/>
            {thegifs}
            <p>{this.state.testImg}</p>
        </div>
    }
}

export default SearchField;