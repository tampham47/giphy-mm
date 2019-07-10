import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import GiphyItem from './GiphyItem';

const Main = styled.section`
  margin-top: 2em;
  margin-bottom: 2em;
`;
const List = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
`;

const API_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending';
const API_KEY = 'tBzKvGymEPbzf3aXpKNSZHgh1HloeK8f';
const ELEMENT_PAGE = 20;

const getQueryFromParams = params => {
  let query = '';
  Object.keys(params).forEach(i => {
    query += `&${i}=${params[i]}`;
  });
  return query.slice(1, query.length - 1);
};

class GiphyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giphyList: [],
      selectedImg: null,
    };
    this.setSelectedImg = this.setSelectedImg.bind(this);
    this.removeSelectedImg = this.removeSelectedImg.bind(this);
  }

  componentDidMount() {
    const payload = {
      api_key: API_KEY,
      offset: 0,
      limit: ELEMENT_PAGE,
      rating: 'G',
    };

    fetch(`${API_ENDPOINT}?${getQueryFromParams(payload)}`)
      .then(res => res.json())
      .then(body => {
        this.setState({ giphyList: body.data });
      });
  }

  setSelectedImg(giphy) {
    this.setState({ selectedImg: giphy });
  }
  removeSelectedImg() {
    this.setState({ selectedImg: null });
  }

  render() {
    const { giphyList, selectedImg } = this.state;

    return (
      <Main>
        <List>
          {giphyList.map(i => (
            <GiphyItem key={i.id} setSelectedImg={this.setSelectedImg} model={i} />
          ))}
        </List>

        {selectedImg && (
          <Modal onClose={this.removeSelectedImg} width={selectedImg.images.original.width}>
            <img src={selectedImg.images.original.url} 
              alt={selectedImg.title}
              width={selectedImg.images.original.width}
            />
          </Modal>
        )}
      </Main>
    );
  }
}

export default GiphyList;
