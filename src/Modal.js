import React from 'react';
import styled from 'styled-components';

const Main = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
`;
const Body = styled.div`
  width: ${props => `${props.width}px` || '48em'};
  max-width: calc(100% - 2em);
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid whitesmoke;
  border-radius: 4px;
  overflow: hidden;
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
        <Button onClick={onClose}>x</Button>
        <Body width={width}>
          {children}
        </Body>
      </Main>
    );
  }
}

export default Modal;
