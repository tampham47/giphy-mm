import React from 'react';
import styled from 'styled-components';

const Main = styled.section`
  margin-top: 2em;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  margin: 0;
`;
const List = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
`;

const GiphyItem = styled.div`
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

const API_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending';
const API_KEY = 'tBzKvGymEPbzf3aXpKNSZHgh1HloeK8f';
const ELEMENT_PAGE = 20;

const paramToQuery = params => {
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
    };
  }

  componentDidMount() {
    const payload = {
      api_key: API_KEY,
      offset: 0,
      limit: ELEMENT_PAGE,
      rating: 'G',
    };

    fetch(`${API_ENDPOINT}?${paramToQuery(payload)}`)
      .then(res => res.json())
      .then(body => {
        console.log('data', body.data);
        this.setState({ giphyList: body.data });
      });
  }

  render() {
    const { giphyList } = this.state;

    return (
      <Main>
        <Title>GiphyMM</Title>
        <List>
          {giphyList.map(i => (
            <GiphyItem key={i.id}>
              <img src={i.images['480w_still'].url} alt={i.title}/>
            </GiphyItem>
          ))}
        </List>
      </Main>
    );
  }
}

export default GiphyList;
