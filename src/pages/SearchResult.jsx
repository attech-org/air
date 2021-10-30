import { useEffect, useState } from "react"
import { useLocation } from "react-router"

import Layout from "../containers/Layout"
import { MOCK } from "../MOCK"

const SearchResultPage = () => {
  const query = new URLSearchParams(useLocation().search || "")
  const departureCityInput = query.get("departureCity")
  const arrivalCityInput = query.get("arrivalCity")
  console.warn(departureCityInput, arrivalCityInput)

  const [incomingData, setIncomingData] = useState([])

  useEffect(() => {
    const res = MOCK
    setIncomingData(res)
  }, [])
  return (
    <Layout>
      {incomingData
        .filter(
          ({ departureCity, arriveCity }) =>
            departureCity.includes(departureCityInput) && arriveCity.includes(arrivalCityInput)
        )
        .map((el) => (
          <div key={el.id}>
            <div>
              Dep.city:{el.departureCity}Arr.city:{el.arriveCity}
            </div>
          </div>
        ))}
    </Layout>
  )
}

export default SearchResultPage
