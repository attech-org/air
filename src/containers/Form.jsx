import { useForm } from "react-hook-form"
import styled from "styled-components"

import visaLogo from "../assets/img/Visa_Inc._logo.svg.png"
import ArrowButton from "../components/ArrowButton"

const FormCapacity = styled.div`
  padding: 80px 70px;
  width: 65%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
`

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 20px 0;
  font-weight: 600;
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
`

const BlockEnvelop = styled.div`
  display: flex;
  margin-bottom: 35px;
`

const FormEnvelop = styled.form`
  display: flex;
  margin-top: 45px;
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

  return (
    <FormCapacity>
      <BlockEnvelop>
        <PrevLink>
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
          <Input type='text' maxLength='22' id='cardNumber' {...register("cardNumber")} />
          <LabelAgree htmlFor='agreement'>
            <Checkbox type='checkbox' id='agreement' {...register("agreement")} />I accept the terms and conditions
          </LabelAgree>
        </ColLeft>

        <ColRight>
          <Label htmlFor='expicyCard'>Expicy</Label>
          <Input type='text' id='expicyCard' {...register("expicyCard")} />
          <Label htmlFor='cvvCard'>CVV</Label>
          <Input type='password' id='cvvCard' {...register("cvvCard")} />
        </ColRight>
      </FormEnvelop>
    </FormCapacity>
  )
}

export default OrderForm

// const [value, setValueChange] = useState('')
// const [expicyValue, setExpicyValueChange] = useState('')

// const handleCardNumberInput = (e) => {
//   if(/^[ \d]+$/.test(e.target.value)) {
//     if(e.target.value.replaceAll(' ','').length % 4) {
//       setValueChange(e.target.value)
//     } else {
//       setValueChange(e.target.value + '  ')
//     }
//   }
// }

// const handleExpicyInput = (e) => {
//   if(/^[/\d]+$/.test(e.target.value) && e.target.value.length <= 5) {
//     if(e.target.value.length === 2) {
//       setExpicyValueChange(e.target.value + '/')
//     } else {
//       setExpicyValueChange(e.target.value)
//     }
//   }
// }
