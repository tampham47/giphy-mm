import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  display: inline;
  .hide {
    display: none;
  }
  .invisible {
    height: 0;
  }
  img {
    display: block;
    width: 100%;
  }
`;

class GiphyImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.setLoaded = this.setLoaded.bind(this);
    this.setError = this.setError.bind(this);
  }

  setLoaded() {
    this.setState({
      isLoaded: true,
    })
  }
  setError(e) {}

  render() {
    const { model } = this.props;
    const { isLoaded } = this.state;
    const stillImg = model.images['downsized_still'];
    const originalImg = model.images.original;

    return (
      <ImgWrapper>
        <img src={stillImg.url} 
          alt={model.title} 
          className={isLoaded ? 'hide' : ''} 
        />
        <img src={originalImg.webp}
          alt={model.title}
          onLoad={this.setLoaded}
          onError={this.setError}
          className={isLoaded ? '' : 'invisible'}
        />
      </ImgWrapper>
    );
  }
}

export default GiphyImg;
