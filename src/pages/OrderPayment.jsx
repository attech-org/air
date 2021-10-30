import styled from "styled-components"

import Layout from "../containers/Layout"
import OrderPaymentContainer from "../containers/OrderPaymentContainer"

const Main = styled.main`
  width: 100%;
  background: rgba(0, 0, 0, 1);
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
