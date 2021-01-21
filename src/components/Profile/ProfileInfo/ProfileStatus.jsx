import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        <div>ProfileStatus!</div>
        {!this.state.editMode && (
          <div>
            <span
              onDoubleClick={() => {
                //this.state.editMode = true;
                this.activateEditMode();
              }}
            >
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={() => {
                this.deactivateEditMode();
              }}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
