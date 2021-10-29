import { useLocation } from "react-router"

import Layout from "../containers/Layout"

const SearchResultPage = () => {
  const query = new URLSearchParams(useLocation().search || "")
  const departureCity = query.get("departureCity")
  const arrivalCity = query.get("arrivalCity")
  console.warn(departureCity, arrivalCity)
  return (
    <Layout>
      {/* {props.map((el) => {
        return (
         <div key={el.id}>{el[0]}</div>
        )
      })} */}
    </Layout>
  )
}

export default SearchResultPage
