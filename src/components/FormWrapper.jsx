import styled from "styled-components"

import visaLogo from "../assets/img/Visa_Inc._logo.svg.png"

const FormCapacity = styled.div`
  padding: 50px 70px;
  width: 60%;
`

const H2 = styled.h2`
  font-size: 1.5em;
`

const ImgLogo = styled.img`
  display: block;
  width: 50px;
  height: 17px;
  border-bottom: solid 3px rgba(200, 0, 3, 0.82);
  padding: 15px 8px;
`

const FormWrapper = () => {
  return (
    <FormCapacity>
      <H2>Payment method</H2>
      <ImgLogo src={visaLogo} />
    </FormCapacity>
  )
}

export default FormWrapper
