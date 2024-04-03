import styled from 'styled-components';

export const ContactPage = styled.div`
  width: 100vw;
  height: 93vh;
  margin-top: 7vh;
  display: grid;
  grid-template-columns: 55% 40%;
  overflow: hidden;
  position: relative;
  .beach-image {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95%;
    z-index: 0;
  }
  .palm-tree-front {
    position: absolute;
    bottom: -8%;
    left: 50%;
    z-index: 2;
    height: 80%;
    transform: translateX(-50%);
  }
  .palm-tree-back {
    position: absolute;
    bottom: 3%;
    left: 50%;
    z-index: 0;
    height: 65%;
    transform: translateX(-50%);
  }
`;

export const Form = styled.div`
  border: ${(props) => `3px solid ${props.theme.colors.darkBrown}`};
  width: 35vw;
  max-height: 70vh;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 2em;
  background-color: white;
  z-index: 1;
  overflow: scroll;
  .form-inputs-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    color: ${(props) => props.theme.darkBrown};
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin-top: 0.2rem;
  }
  .underline {
    width: 80px;
    height: 3px;
    display: block;
    background-color: ${(props) => props.theme.colors.darkBrown};
  }
  .contact-icon {
    width: 10%;
    margin: 1em;
  }
  .contact-row {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    width: 100%;
    input {
      width: 100%;
    }
  }
  input[type='text'],
  [type='email'],
  select,
  textarea {
    background: none;
    border: none;
    border-bottom: ${(props) => `solid 2px ${props.theme.colors.darkBrown}`};
    color: ${(props) => props.theme.colors.darkBrown};
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    text-transform: uppercase;
    width: 100%;
  }
  input[type='text']:focus,
  [type='email']:focus,
  textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }
  .subject,
  .telephone,
  .message {
    width: 100%;
  }
  textarea {
    line-height: 150%;
    height: 150px;
    resize: none;
    width: 100%;
  }

  #form_button {
    background: none;
    border: solid 2px #474544;
    color: #474544;
    cursor: pointer;
    display: inline-block;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  #form_button:hover {
    background: #474544;
    color: #f2f3eb;
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.lightBrown};
  }
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  /* background-color: rgba(100, 100, 100, 0.08); */
  z-index: 4;
  padding: 2rem 2rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
  p {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .contact-icon-row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    span {
      margin-right: 2rem;
    }
    img {
      width: 8%;
      margin-right: 1rem;
    }
  }
`;
