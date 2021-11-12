import { useEffect, useState } from "react"

import Layout from "../containers/Layout"
import TourPageSingleContainer from "../containers/TourPageSingle"

const SOURCE_URL = "https://my.api.mockaroo.com/tours/123?key=fd6742c0"
const TourPageSingle = ({ tourId }) => {
  const [backendData, onBackendDataChange] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SOURCE_URL)
      const data = await res.json()
      onBackendDataChange(data)
    }
    fetchData()
  }, [tourId])

  return (
    <>
      <Layout>
        <TourPageSingleContainer
          id={tourId}
          title={backendData.title}
          location={backendData.location}
          country={backendData.country}
          videoUrl={backendData.videoUrl}
          wikiUrl={backendData.wikiUrl}
          backgroundSrc={backendData.bgUrl}
        />
      </Layout>
    </>
  )
}

export default TourPageSingle
