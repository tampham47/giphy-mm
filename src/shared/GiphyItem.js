import React from 'react';
import styled from 'styled-components';
import GiphyImg from './GiphyImg';

const Main = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  img {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
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
        <GiphyImg model={model} />
      </Main>
    );
  }
}

export default GiphyItem;
