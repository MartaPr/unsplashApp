import React, { Component } from "react";
import axios from "axios";
import './resources/style.css'
import { key } from './resources/key';
import ImgList from './components/imgList';
import SearchForm from './components/searchForm';
import CircularProgress from '@material-ui/core/CircularProgress'

class App extends Component {

  state = {
    images: [],
    loadingState: true
  }

componentDidMount() {
  axios
    .get(`https://api.unsplash.com/photos/?page=1&per_page=20&client_id=${key}`)
    .then(data => {
      this.setState({
        images: data.data,
        loadingState: false
      });
    })
    .catch(error => {
      console.log('Error while loading', error)
    })
}


searchQuery = (query) => {
  axios
    .get(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${key}`)
    .then(data => {
      this.setState({
        images: data.data.results,
        loadingState: false
      });
    })
    .catch(error => {
      console.log('Error while searching!', error);
    });
};


render() {
    return (
      <div >
        <div className="header">
          <SearchForm onSearch={this.searchQuery} />
        </div>
        <div className="content">
          {this.state.loadingState
            ? <CircularProgress
                  className="spinner"
                  color='secondary'
                />
            : <ImgList data={this.state.images} />}
        </div>
      </div>
    );
  }
}

export default App;
