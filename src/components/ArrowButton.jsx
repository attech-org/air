import styled from "styled-components"

const NextBtn = styled.div`
  width: 40px;
  height: calc(40px - 0.5rem);
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  background-color: #cf0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
  transition: 0.3s;
  padding-bottom: 0.5rem;
  &:hover {
    background-color: #af0000;
  }
`

const ArrowButton = (props) => {
  return <NextBtn>{props.right ? "→" : "←"}</NextBtn>
}

export default ArrowButton
