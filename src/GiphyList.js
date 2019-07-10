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
  align-items: center;
`;
const Item = styled.div`
  width: 50%;
  @media screen and (min-width: 600px) {
    width: 33.33%;
  }
  @media screen and (min-width: 900px) {
    width: 25%;
  }
`;

const API_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending';
const API_KEY = 'tBzKvGymEPbzf3aXpKNSZHgh1HloeK8f';
// 24 is a better number for pagination, cuz it can be devided into 2, 3 or even 4
// that makes our layout more consistent
const ELEMENT_PAGE = 24;

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
            <Item key={i.id}>
              <GiphyItem setSelectedImg={this.setSelectedImg} model={i} />
            </Item>
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
