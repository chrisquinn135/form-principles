import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component, componentDidMount } from 'react'
import Geocode from 'react-geocode'
import { connect } from 'react-redux'
import './Map.css';


export class MapContainer extends Component {

  state = {
    long:"-1",
    lat:"-1"
  }

  componentDidMount() {
    console.log(this.props.address)
    const noSpaceAdd = this.props.address[8].split(' ').join('')
    const noSpaceCity = this.props.address[10].split(' ').join('')
    console.log(noSpaceCity)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${noSpaceAdd},+${noSpaceCity},+CA&key=AIzaSyBN6T7u7oAQz9pZseUZ8FYKA5AkizV6foI`)
      .then(response => response.json())
      .then(data => {
        console.log("MOUNTER " + data.results[0].geometry.location.lat)
        this.setState({lat:data.results[0].geometry.location.lat,long:data.results[0].geometry.location.lng})
      }
      );
  }

  render() {


    return (
      <div >
        {this.state.long==="-1" || this.state.lat==="-1" ? "NOT LOADED" : <Map
          google={this.props.google}
          style={{ width:'325px', height: '325px'}}
          id='map'
          className='MAP'
          initialCenter={{
            lat:this.state.lat,
            lng:this.state.long}}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
        }

      </div>



    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.results
  }
}
export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyBN6T7u7oAQz9pZseUZ8FYKA5AkizV6foI'
})(MapContainer))

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBN6T7u7oAQz9pZseUZ8FYKA5AkizV6foI'
// })(Map);