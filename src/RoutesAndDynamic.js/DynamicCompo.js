import { useParams } from "react-router-dom"

const DynamicCompo = () => {
    const data= useParams().id;
    console.log(data)
  return (
    <>
    <h1>Dynamic Compo</h1>
      <h3>{data}</h3>
    </>
  )
}

export default DynamicCompo
