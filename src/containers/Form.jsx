import { useForm } from "react-hook-form"
import { useHistory } from "react-router"
import styled from "styled-components"

import visaLogo from "../assets/img/Visa_Inc._logo.svg.png"
import ArrowButton from "../components/ArrowButton"

const FormCapacity = styled.div`
  padding: 80px 70px;
  width: 65%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  @media (max-width: 1080px) {
    width: calc(100% - 50px * 2);
    padding: 50px;
  }
`

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 20px 0;
  font-weight: 600;
  @media (max-width: 1080px) {
    margin: 0;
  }
`

const ImgLogo = styled.img`
  display: block;
  width: 50px;
  height: 15px;
  border-bottom: solid 3px rgba(200, 0, 3, 1);
  padding: 15px 8px;
`

const PrevLink = styled.a`
  display: block;
  box-sizing: border-box;
  margin: -5px 55px 0 -91px;
  text-decoration: none;
  @media (max-width: 1080px) {
    margin: 0 18px 0 0;
  }
`

const BlockEnvelop = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 1080px) {
    justify-content: flex-start;
    align-items: center;
  }
`

const FormEnvelop = styled.form`
  display: flex;
  margin-top: 45px;
  @media (max-width: 1080px) {
  }
`

export const Label = styled.label`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
`

const LabelAgree = styled.label`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
  margin-top: 15px;
`

const ColLeft = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`

const ColRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

const Checkbox = styled.input`
  margin: 0 10px 0 0;
  padding-top: 15px;
`

const Input = styled.input`
  margin: 9px 0 30px;
  padding: 5px 14px;
  border: solid 1px rgba(200, 200, 200, 1);
  border-radius: 2px;
  transition: 0.4s;
  letter-spacing: 0.2em;
  &:focus {
    outline: none;
    box-shadow: 2px 2px 4px 0px rgba(34, 60, 80, 0.3);
  }
`

const OrderForm = ({ onChangeForm }) => {
  const { register, handleSubmit } = useForm({ mode: "onChange" })

  // eslint-disable-next-line prefer-const
  let history = useHistory()
  return (
    <FormCapacity>
      <BlockEnvelop>
        <PrevLink onClick={() => history.goBack()}>
          <ArrowButton />
        </PrevLink>
        <H2>Payment method</H2>
      </BlockEnvelop>
      <ImgLogo src={visaLogo} />
      <FormEnvelop onChange={handleSubmit(onChangeForm)}>
        <ColLeft>
          <Label htmlFor='cardholderName'>Cardholder Name</Label>
          <Input type='text' placeholder='Lex Shah' id='cardholderName' {...register("cardholderName")} />
          <Label htmlFor='cardNumber'>Card Number</Label>
          <Input type='text' maxLength='16' id='cardNumber' {...register("cardNumber")} />
          <LabelAgree htmlFor='agreement'>
            <Checkbox type='checkbox' id='agreement' {...register("agreement")} />I accept the terms and conditions
          </LabelAgree>
        </ColLeft>

        <ColRight>
          <Label htmlFor='expicyCard'>Expiry</Label>
          <Input type='text' id='expicyCard' {...register("expicyCard")} />
          <Label htmlFor='cvvCard'>CVV</Label>
          <Input type='password' id='cvvCard' maxLength='3' {...register("cvvCard")} />
        </ColRight>
      </FormEnvelop>
    </FormCapacity>
  )
}

export default OrderForm
