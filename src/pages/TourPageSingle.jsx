import { useEffect, useState } from "react"
import { useLocation } from "react-router"

import Layout from "../containers/Layout"
import TourPageSingleContainer from "../containers/TourPageSingle"

const SOURCE_URL = "https://my.api.mockaroo.com/tours/:id?key=6b9b6f90"
const TourPageSingle = ({ match }) => {
  const query = new URLSearchParams(useLocation().search || "")
  const tourId = query.get("tourId")

  const [backendData, onBackendDataChange] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SOURCE_URL)
      const data = await res.json()
      onBackendDataChange(data[tourId])
      console.log(data)
    }
    fetchData()
  }, [tourId])

  return (
    <>
      <Layout>
        <TourPageSingleContainer id={match.params.id} {...backendData} />
      </Layout>
    </>
  )
}

export default TourPageSingle
