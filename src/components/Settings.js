import React, { Component } from "react";
import Switch from "react-toggle-switch";
import { connect } from "react-redux";
import { changeVisibility } from "../actions/postActions";
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css";


class Settings extends Component {
  toggleSwitch = () => {
    this.props.changeVisibility(this.props.visible);
  };

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <label>Markers</label>
        <br />
        <Switch onClick={this.toggleSwitch} on={this.props.visible} />
        <br />
        <label>Legend</label>
        <br />
        <div>
            <div>
                <img src={require("../assets/images/crveniMarker.png")} alt="red marker" />
                <p>Visited</p>
            </div>
            <div>
                <img src={require("../assets/images/markerBlue.png")} alt="blue marker"/>
                <p>Not visited</p>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.posts.visible
});

export default connect(mapStateToProps, { changeVisibility })(Settings);
