import React from "react";
import PublicProfile from "../Container/PublicProfile";

const Index = (props) => {
  // console.log("props",props)
  return <PublicProfile props={props} />
}

export async function getServerSideProps(context) {
  const id = context.query?.id?context.query?.id:"612e199db2b8994e246fc3ce"
   const res = await fetch(`http://66.175.217.67:8181/api/v1/badge-association/public-profile?id=${id}`)
  const json = await res.json()
  return { props:{data: json.data,id} }
}

export default Index
