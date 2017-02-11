import React from "react";

import { WeatherForm } from "WeatherForm";
import { WeatherResult } from "WeatherResult";
import { getTemp } from 'app/api/openWeatherMap.jsx';
import { ErrorModal } from 'ErrorModal';

export class Weather extends React.Component {

  constructor() {
      super();
      this.state = {
            isLoading:false
      };
  }

  handleSearch(location) {
    this.setState({
      isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    const that = this;
    getTemp(location).request.then(function(data){
      that.setState({
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({
        isLoading:false,
        errorMessage: errorMessage.message
      });
    });
  }

  componentDidMount() {
    const location = this.props.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(nextProps) {
    const location = nextProps.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render() {
    let result;
    let state = this.state;

    ErrorModal.propTypes = {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
    };

    const renderMessage = () => {
      if(state.isLoading){
        return <h3 className="text-center">Fetching Weather</h3>
      } else if(state.temp && state.location){
        return <WeatherResult data={state} />
      }
    }

    const renderError = () => {

      if(typeof(state.errorMessage) === 'string') {
        return (
          <ErrorModal message={state.errorMessage} title={'Error'} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch = {this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
