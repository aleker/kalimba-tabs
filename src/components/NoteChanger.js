import React, { Component } from "react";
import { connect } from "react-redux";

class NoteChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      refresh: false,
    };
  }
  render() {
    return (
      <div
        style={{ flex: this.props.song[0].length, textAlign: "center" }}
        onClick={() => {
          this.setState({ showModal: !this.state.showModal });
        }}
      >
        {this.state.showModal && (
          <div
            style={{
              position: "absolute",
              width: 100,
              height: 50,
              top: -50,
              backgroundColor: "white",
              borderRadius: 3,
              border: "2px solid grey",
              display: "flex",
            }}
          >
            <div
              style={{ flex: 1 }}
              onClick={() => {
                this.props.changeKey("♯", this.props.tine);
                this.setState({ refresh: !this.state.refresh });
              }}
            >
              ♯
            </div>
            <div
              style={{ flex: 1 }}
              onClick={() => {
                this.props.changeKey("♭", this.props.tine);
                this.setState({ refresh: !this.state.refresh });
              }}
            >
              ♭
            </div>
            <div
              style={{ flex: 1 }}
              onClick={() => {
                this.props.changeKey("♮", this.props.tine);
                this.setState({ refresh: !this.state.refresh });
              }}
            >
              ♮
            </div>
          </div>
        )}
        {this.props.tine}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeKey: (accidental, tine) =>
      dispatch({
        type: "CHANGE_KEY",
        tine: tine,
        accidental: accidental,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteChanger);
