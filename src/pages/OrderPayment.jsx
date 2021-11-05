import { useLocation } from "react-router"
import styled from "styled-components"

import Layout from "../containers/Layout"
import OrderPaymentContainer from "../containers/OrderPaymentContainer"

const Main = styled.div`
  width: 80%;
  padding: 0 90px 35px;
`

const OrderPaymentPage = () => {
  const query = new URLSearchParams(useLocation().search || "")
  const price = query.get("price")
  const priceCurrency = query.get("priceCurrency")

  return (
    <Layout>
      <Main>
        <OrderPaymentContainer price={price} priceCurrency={priceCurrency} />
      </Main>
    </Layout>
  )
}

export default OrderPaymentPage
