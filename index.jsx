import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.createStyle = this.createStyle.bind(this);
  }

  createStyle() {
    return {
      backgroundPosition: `${this.props.anchorX} ${this.props.anchorY}`,
      backgroundImage: `url(${this.props.src}`
    }
  }

  render() {
    return (
      <header style={ this.createStyle() }>
        { this.props.children }
      </header>
    );
  }
}

Header.defaultProps = {
  src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  anchorX: '50%',
  anchorY: '50%'
};

export default Header;
