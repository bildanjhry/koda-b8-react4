import { useEffect, useState } from "react";

export default function useData(){
  const [data, setData] = useState([])

  useEffect(() => {
		async function getData(count = 3){
			try{
				const res = await fetch("https://jsonplaceholder.typicode.com/users")
				const data = await res.json()
				setData(data)
			} catch(err){
				// will retry 3 times if error happend
				if (count >= 1) getData(count - 1)
				return console.error(err.message)
			}
		}
		getData()
  },[setData])

	return ([data, setData])
}