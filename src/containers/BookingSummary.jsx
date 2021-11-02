import styled from "styled-components"

const BookingSummaryCapacity = styled.div`
  width: 35%;
  padding: 80px 70px;
  color: rgba(255, 255, 255, 1);
`

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 55px 0;
  color: white;
  font-weight: 600;
`

const OutputFormEnvelop = styled.div`
  display: flex;
  flex-direction: column;
`

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    align-items: baseline;
  }
  &:nth-child(even) {
    margin-bottom: 60px;
  }
  &:nth-child(odd) {
    margin-bottom: 15px;
  }
  &:nth-child(5) {
    margin-top: -20px;
  }
`

const PlainText = styled.p`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
  margin: 0;
`

const Calculate = styled.p`
  color: white;
  font-size: 1em;
  margin: 0;
  font-weight: 700;
`

const Sum = styled.p`
  color: white;
  font-size: 2.5em;
  margin: 0;
  font-weight: 700;
`

const Button = styled.button`
  background-color: rgba(160, 0, 5, 1);
  color: white;
  padding: 15px 0;
  margin-top: 33px;
  border-radius: 4px;
  border-style: none;
  box-shadow: 0px 0px 5px 0px rgba(34, 54, 69, 1);
  transition: 0.3s;
  &:hover {
    background-color: rgba(110, 0, 5, 1);
  }
`

const OrderSummary = ({
  ticketPrice,
  currency,
  taxesPrice,
  subtotalPrice,
  servicePrice,
  totalPrice,
  handleCheckOutClick,
}) => {
  return (
    <BookingSummaryCapacity>
      <H2>Booking summary</H2>
      <OutputFormEnvelop>
        <TextRow>
          <PlainText>Flight tickets - 1 adult</PlainText>
          <PlainText>
            {ticketPrice}
            {currency}
          </PlainText>
        </TextRow>
        <TextRow>
          <PlainText>Taxes and fees</PlainText>
          <PlainText>
            {taxesPrice}
            {currency}
          </PlainText>
        </TextRow>
        <TextRow>
          <Calculate>Subtotal</Calculate>
          <PlainText>
            {subtotalPrice}
            {currency}
          </PlainText>
        </TextRow>
        <TextRow>
          <PlainText>Service charges</PlainText>
          <PlainText>
            {servicePrice}
            {currency}
          </PlainText>
        </TextRow>
        <TextRow>
          <Calculate>Total</Calculate>
          <Sum>
            {totalPrice}
            {currency}
          </Sum>
        </TextRow>
        <Button onClick={handleCheckOutClick}>Check Out</Button>
      </OutputFormEnvelop>
    </BookingSummaryCapacity>
  )
}

export default OrderSummary
