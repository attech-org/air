import { useEffect, useState } from "react"

import Layout from "../containers/Layout"
import TourPageSingleContainer from "../containers/TourPageSingle"

const SOURCE_URL = "https://my.api.mockaroo.com/tours/:id?key=6b9b6f90"
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
  console.log(backendData)
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
