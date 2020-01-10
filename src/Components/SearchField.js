import React, { Component } from 'react';

class SearchField extends Component{
    constructor(props){
        super(props);
        this.state = {
            testImg: null,
            data: [],
            randomImage: false,
            limit: 25 //default limit is 25
        }

        this.handleTrending()
    }

    handleSearchInput = () => {
        this.setState({randomImage: false})
        this.setState({data:[]})
        let linkToAPI = "http://api.giphy.com/v1/gifs/search?q=" + document.getElementById("search-text").value + "&api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ" + "&limit=" + this.state.limit;
        
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
        this.setState({randomImage: false})
        let linkToAPI = "http://api.giphy.com/v1/gifs/trending?api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ" + "&limit=" + this.state.limit;
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
        this.setState({randomImage: true})
        this.setState({data:[]})
        let linkToAPI = "http://api.giphy.com/v1/gifs/random?api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ" + "&limit=" + this.state.limit;
        //console.log(linkToAPI);
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = [];
                data.push(myJson.data.image_url);
                console.log(data);
                console.log("inside handle random");
                // this.setState({testImg: data.data[0].images.original.url})
                this.setState({data: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    handleLimitChange = () =>{
        let new_limit = document.getElementById("limit-gif").value
        this.setState({limit: new_limit});
        // console.log(this.state.limit);
        
    }


    render(){
        console.log("limit: ", this.state.limit);
        // this.handleTrending()

        var thegifs;
        if(this.state.randomImage){
            thegifs = <img src={this.state.data}/>
        }else{       
            thegifs = this.state.data.map((gif, ind) => (
                <div className="gif" key={ind}>
                    <img src={gif.images.original.url} alt="" />
                </div>
            ))
        }   

        return <div>
            <input id="random-gif" value="Random Gif" type="button" onClick={this.handleRandom}/>
            <input id="search-text" type="text" placeholder="Try Cats" onChange={this.handleSearchInput}/>
            <input id="limit-gif" type="number" placeholder="Try 20" onChange={this.handleLimitChange} />
            {thegifs}
        </div>
    }
}

export default SearchField;