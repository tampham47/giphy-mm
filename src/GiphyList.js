import React from 'react';
import styled from 'styled-components';
import Modal from './shared/Modal';
import GiphyItem from './shared/GiphyItem';
import Button from './shared/Button';
import GiphyImg from './shared/GiphyImg';
import { ReactComponent as Loading } from './imgs/fruit.svg';

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
const CenterWrapper = styled.div`
  text-align: center;
  width: 100%;
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
      busy: false,
      page: 0,
    };

    this.setSelectedImg = this.setSelectedImg.bind(this);
    this.removeSelectedImg = this.removeSelectedImg.bind(this);
    this.fetchGiphyByPage = this.fetchGiphyByPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  componentDidMount() {
    this.fetchGiphyByPage(0);
  }

  fetchGiphyByPage(page) {
    if (this.state.busy) {
      return;
    }

    const payload = {
      api_key: API_KEY,
      offset: page * ELEMENT_PAGE,
      limit: ELEMENT_PAGE,
      rating: 'G',
    };

    this.setState({ busy: true });
    fetch(`${API_ENDPOINT}?${getQueryFromParams(payload)}`)
      .then(res => res.json())
      .then(body => {
        const { giphyList } = this.state;
        this.setState({
          giphyList: giphyList.concat(body.data),
          page,
          busy: false,
        });
      });
  }

  loadNextPage() {
    const { page } = this.state;
    this.fetchGiphyByPage(page + 1);
  }

  setSelectedImg(giphy) {
    this.setState({ selectedImg: giphy });
  }
  removeSelectedImg() {
    this.setState({ selectedImg: null });
  }

  render() {
    const { giphyList, selectedImg, busy } = this.state;

    return (
      <Main>
        <List>
          {!giphyList.length && (
            <CenterWrapper>
              <Loading width="50" height="50" />
            </CenterWrapper>
          )}
          {giphyList.map(i => (
            <Item key={i.id}>
              <GiphyItem setSelectedImg={this.setSelectedImg} model={i} />
            </Item>
          ))}
        </List>

        {!!giphyList.length && (
          <CenterWrapper>
            <Button busy={busy} onClick={this.loadNextPage}>load more</Button>
          </CenterWrapper>
        )}

        {selectedImg && (
          <Modal onClose={this.removeSelectedImg}
            width={selectedImg.images.original.width}
          >
            <GiphyImg model={selectedImg} isAutoLoad />
          </Modal>
        )}
      </Main>
    );
  }
}

export default GiphyList;
