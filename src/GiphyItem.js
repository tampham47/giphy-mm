import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  max-width: 200px;
  max-height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;


class GiphyItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.setSelectedImg(this.props.model);
  }

  render() {
    const { model } = this.props;

    return (
      <Main onClick={this.onClick}>
        <img src={model.images['480w_still'].url} alt={model.title}/>
      </Main>
    );
  }
}

export default GiphyItem;
