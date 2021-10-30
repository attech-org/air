import styled from "styled-components"

import BookingSummaryWrapper from "../components/BookingSummaryWrapper"
import FormWrapper from "../components/FormWrapper"

const OrderPaymentWrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  display: flex;
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
      <OrderPaymentWrapper>
        <FormWrapper />
        <BookingSummaryWrapper />
      </OrderPaymentWrapper>
    </>
  )
}

export default OrderPaymentContainer
