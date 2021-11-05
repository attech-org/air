import styled from "styled-components"

const NextBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  background-color: #cf0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #af0000;
  }
  transition: 0.3s;
`
const Arrow = styled.p`
  color: white;
  margin-bottom: 5px;
  font-size: 22px;
`

const ArrowButton = (props) => {
  return <NextBtn>{props.right ? <Arrow>&#8594;</Arrow> : <Arrow>&#8592;</Arrow>}</NextBtn>
}

export default ArrowButton
