import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterContainer>
      <h4>Copyright &copy; Nghia Nguyen</h4>
      <p>khanhnghia.cv@gmail.com</p>
    </FooterContainer>
  );
}

export default React.memo(Footer);

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.99) 100%,
    transparent
  );
`;
