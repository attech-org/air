import styled from "styled-components"

import BookingSummary from "./BookingSummary"
import OrderForm from "./Form"

const OrderPayment = styled.div`
  display: flex;
  background: rgba(30, 30, 30, 1);
  border-radius: 5px 0 0 5px;
`

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  margin: 35px 0;
  font-size: 2.5em;
  font-weight: 500;
  padding-left: 10px;
`

const OrderPaymentContainer = () => {
  return (
    <>
      <Title>Payment Options</Title>
      <OrderPayment>
        <OrderForm />
        <BookingSummary />
      </OrderPayment>
    </>
  )
}

export default OrderPaymentContainer
