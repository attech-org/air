import styled from "styled-components"

import Layout from "../containers/Layout"
import OrderPaymentContainer from "../containers/OrderPaymentContainer"

const Main = styled.div`
  width: 100%;
  padding: 0 90px 35px;
`

const OrderPaymentPage = () => {
  return (
    <Layout>
      <Main>
        <OrderPaymentContainer />
      </Main>
    </Layout>
  )
}

export default OrderPaymentPage
