import styled from "styled-components"

import visaLogo from "../assets/img/Visa_Inc._logo.svg.png"

const FormCapacity = styled.div`
  padding: 80px 70px;
  width: 60%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
`

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 20px 0;
`

const ImgLogo = styled.img`
  display: block;
  width: 50px;
  height: 17px;
  border-bottom: solid 3px rgba(200, 0, 3, 0.82);
  padding: 15px 8px;
`

const PrevLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 1.5em;
  width: 35px;
  height: 35px;
  background: rgba(200, 0, 3, 1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 8, 0.6);
  margin: -5px 55px 0 -85px;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: rgba(160, 0, 5, 1);
    cursor: pointer;
  }
`

const BlockEnvelop = styled.div`
  display: flex;
  margin-bottom: 35px;
`

const FormEnvelop = styled.form`
  display: flex;
  margin-top: 50px;
`

export const Label = styled.label`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
`

const LabelAgree = styled.label`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
  margin-top: 45px;
`

const ColLeft = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`

const ColRight = styled.div`
  width: 7vw;
  display: flex;
  flex-direction: column;
`

const Checkbox = styled.input`
  margin: 0 10px 0 0;
  padding-top: 15px;
`

const Input = styled.input`
  margin: 9px 0 30px;
  padding: 5px 10px;
`

const OrderForm = () => {
  //Logic

  return (
    <FormCapacity>
      <BlockEnvelop>
        <PrevLink to='/'>&#10510;</PrevLink>
        <H2>Payment method</H2>
      </BlockEnvelop>
      <ImgLogo src={visaLogo} />
      <FormEnvelop>
        <ColLeft>
          <Label htmlFor='cardholderName'>Cardholder Name</Label>
          <Input type='text' placeholder='Lex Shah' id='cardholderName' />
          <Label htmlFor='cardNumber'>Card Number</Label>
          <Input type='password' maxLength='16' id='cardNumber' />
          <LabelAgree htmlFor='agreement'>
            <Checkbox type='checkbox' id='agreement' />I accept the terms and conditions
          </LabelAgree>
        </ColLeft>
        <ColRight>
          <Label htmlFor='expicyCard'>Expicy</Label>
          <Input type='text' id='expicyCard' />
          <Label htmlFor='cvvCard'>CVV</Label>
          <Input type='password' maxLength='3' id='cvvCard' />
        </ColRight>
      </FormEnvelop>
    </FormCapacity>
  )
}

export default OrderForm
