import styled from "styled-components"

const BookingSummaryCapacity = styled.div`
  width: 40%;
  padding: 80px 70px;
  color: rgba(255, 255, 255, 1);
`

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 55px 0;
  color: white;
`

const OutputFormEnvelop = styled.div`
  display: flex;
  flex-direction: column;
`

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  &&:nth-child(even) {
    margin-bottom: 40px;
  }
  &&:nth-child(odd) {
    margin-bottom: 15px;
  }
`

const PlainText = styled.p`
  color: rgba(172, 170, 170, 1);
  font-size: 0.85em;
  margin: 0;
`

const Button = styled.button`
  background-color: rgba(160, 0, 5, 1); 
  color: white;
  padding: 15px 0;
  border-radius: 4px;
  border-style: none;
  box-shadow: 0px 0px 5px 0px rgba(34, 54, 69, 1);
  transition: .3s;
  &:hover {
    background-color: background: rgba(110, 0, 5, 1);
  }
`

const OrderSummary = () => {
  return (
    <BookingSummaryCapacity>
      <H2>Booking summary</H2>
      <OutputFormEnvelop>
        <TextRow>
          <PlainText>Flight tickets - 1 adult</PlainText>
          <PlainText>$ 140</PlainText>
        </TextRow>
        <TextRow>
          <PlainText>Taxes and fees</PlainText>
          <PlainText>$ 40</PlainText>
        </TextRow>

        <TextRow>
          <PlainText>Subtotal</PlainText>
          <PlainText>$ 140</PlainText>
        </TextRow>
        <TextRow>
          <PlainText>Service charges</PlainText>
          <PlainText>$ 10</PlainText>
        </TextRow>

        <TextRow>
          <PlainText>Total</PlainText>
          <PlainText>$ 180</PlainText>
        </TextRow>

        <Button>Check Out</Button>
      </OutputFormEnvelop>
    </BookingSummaryCapacity>
  )
}

export default OrderSummary
