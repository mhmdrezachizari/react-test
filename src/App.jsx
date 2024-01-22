import React, { useEffect, useState } from "react"
import Card from "./components/card"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
     {
      users.map(item=>{
        return <Card data={item} />
      })
     }
    </div>
  );
}

export default App;