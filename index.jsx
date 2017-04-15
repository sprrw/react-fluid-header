import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
      anchorX: '50%',
      anchorY: '50%'
    }
  }
  
  createStyle() {
    return `background-position:${this.props.anchorX} ${this.props.anchorY};
      background-image:url(${this.props.src})`;
  }
  
  render() {
    return (
      <header style={ this.createStyle() }>
        { props.children }
      </header>
    );
  }
}

export default Header;
