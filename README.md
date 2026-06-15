# Program Filter Data Contact

Program ini melakukan filter data sesuai darin nama yang diimputkan ke search dan akan menampilkan hasilnya. Lalu untuk mendokumentasikannya, program ini menggunakaan JSDoc.

Tech Stacks:
- React Js v19.x.x
- tailwindCss v4.x.x

## Custom Hook

```jsx
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
```

### Handle Search

```jsx
function handleSearch(e){ 
  e.preventDefault()
  const name = new FormData(e.target)
  if(name) {
    const result = filterData(data, name.get("search").toLowerCase())
    setData(result)
  }
}
```