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
  
  createStyle(props) {
    return `background-position:${props.anchorX} ${props.anchorY};
      background-image:url(${props.src})`;
  }
  
  render() {
    return (
      <header style={ createStyle(props) }>
        { props.children }
      </header>
    );
  }
}

export default Header;
