import React, {Component} from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { connect } from 'react-redux'
import { fetchMarkers } from '../actions/postActions'

class MyFancyComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            openInfoWindowMarkerId: ''
        }
    }

    componentWillMount() {
        this.props.fetchMarkers();
      }

    handleToggleOpen = markerId => {
        this.setState({
            openInfoWindowMarkerId: markerId
        });
    }

    handleToggleClose = () => {
        this.setState({
            openInfoWindowMarkerId: ''
        })
    }

  render() {
    const blueMarker = require('../assets/images/markerBlue.png')
    const redMarker = require('../assets/images/crveniMarker.png')
    const markers = this.props.posts.map(marker => {
        const visited = marker.visited ? redMarker : blueMarker
        return (
          <Marker
            icon={{
                url: visited
            }}
            visible={this.props.visible}
            key={marker.id}
            position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}
            onClick={()=>this.handleToggleOpen(marker.id)}
          >
            {(this.state.openInfoWindowMarkerId === marker.id && this.props.visible === true) && <InfoWindow onCloseClick={()=>this.handleToggleClose()} position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}>
                <div>
                    <h5>{marker.cityname}</h5>
                    <p>{marker.description}</p>
                </div>
              </InfoWindow>
            }
          </Marker>
        );
      });
    
      const MyMapComponent = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )(props =>
        <GoogleMap defaultZoom={4} defaultCenter={{ lat: 47.9088126, lng: 19.2257045 }}>
        {markers}
        </GoogleMap>
      )
      

    return (
      <MyMapComponent/>
    )
  }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    visible: state.posts.visible
  })

export default connect(mapStateToProps, { fetchMarkers })(MyFancyComponent)