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

// this component will load gif on hovering
// or trigger loading event automatically
// it depends on each use cases
class GiphyImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoadingGif: props.isAutoLoad,
    };
    this.setLoaded = this.setLoaded.bind(this);
    this.setError = this.setError.bind(this);
    this.setLoadingGif = this.setLoadingGif.bind(this);
  }

  setLoadingGif() {
    this.setState({
      isLoadingGif: true,
    });
  }

  setLoaded() {
    this.setState({
      isLoaded: true,
    })
  }
  setError(e) {}

  render() {
    const { model } = this.props;
    const { isLoaded, isLoadingGif } = this.state;
    const stillImg = model.images['downsized_still'];
    const originalImg = model.images.original;

    return (
      <ImgWrapper onMouseEnter={this.setLoadingGif}>
        <img src={stillImg.url} 
          alt={model.title} 
          className={isLoaded ? 'hide' : ''} 
        />
        {isLoadingGif && (
          <img src={originalImg.webp}
            alt={model.title}
            onLoad={this.setLoaded}
            onError={this.setError}
            className={isLoaded ? '' : 'invisible'}
          />
        )}
      </ImgWrapper>
    );
  }
}

export default GiphyImg;
