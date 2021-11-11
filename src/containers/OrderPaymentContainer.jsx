import { useState } from "react"
import styled from "styled-components"

import BookingSummary from "./BookingSummary"
import OrderForm from "./Form"

const OrderPayment = styled.div`
  display: flex;
  background: rgba(30, 30, 30, 1);
  border-radius: 5px 0 0 5px;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  margin: 35px 0;
  font-size: 2.5em;
  font-weight: 500;
  padding-left: 10px;
`

const OrderPaymentContainer = (props) => {
  const [orderData, setOrderData] = useState({
    ticketPrice: Math.ceil(props.price),
    currency: props.priceCurrency == "null" ? "USD" : props.priceCurrency,
    taxesPrice: Math.ceil(props.price * 0.2),
    subtotalPrice: Math.ceil(props.price) + Math.ceil(props.price * 0.2),
    servicePrice: 20,
    totalPrice: Math.ceil(props.price) + Math.ceil(props.price * 0.2) + 20,
  })

  const handleOrderForm = (data) => {
    setOrderData({
      ...orderData,
      ...data,
    })
  }
  // eslint-disable-next-line no-console
  const handleCheckOut = () => console.log(orderData) //Temporarily. Outputs data from the form to the console

  return (
    <>
      <Title>Payment Options</Title>
      <OrderPayment>
        <OrderForm onChangeForm={handleOrderForm} />
        <BookingSummary
          ticketPrice={orderData.ticketPrice}
          currency={orderData.currency}
          handleCheckOutClick={handleCheckOut}
          taxesPrice={orderData.taxesPrice}
          subtotalPrice={orderData.subtotalPrice}
          servicePrice={orderData.servicePrice}
          totalPrice={orderData.totalPrice}
        />
      </OrderPayment>
    </>
  )
}

export default OrderPaymentContainer
