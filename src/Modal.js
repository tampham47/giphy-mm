import React from 'react';
import styled from 'styled-components';

const Main = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  padding: 4px 10px;
  font-size: 1em;
  cursor: pointer;
  background-color: rgba(255,255,255,0.5);
  color: rgba(0,0,0,0.7);
  outline: none;

  &:hover {
    background-color: rgba(255,255,255,1);
    color: rgba(0,0,0,1);
  }
`;
const Body = styled.div`
  width: ${props => `${props.width}px` || '48em'};
  max-width: calc(100% - 2em);
  min-height: 100px;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255,255,255,0.5);;
  border-radius: 4px;
  img {
    max-width: 100%;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children, onClose, width } = this.props;

    return (
      <Main>
        <Body width={width}>
          <Button onClick={onClose}>✕</Button>
          {children}
        </Body>
      </Main>
    );
  }
}

export default Modal;
