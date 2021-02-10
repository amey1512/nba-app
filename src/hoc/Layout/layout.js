import React, {Component} from 'react';

class Layout extends Component {
  state = {

  }

  render() {
    // debugger;
    return (
      <div>
          This is Layout - header.
          {this.props.children}
          This is Layout - footer.
      </div>
    )
  }
}

export default Layout;