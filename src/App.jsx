import useData from "./hooks/useData"
import filterData from "./lib/filter"

function App() {
  const [data, setData] = useData()

  function handleSearch(e){ 
    e.preventDefault()
    const name = new FormData(e.target)
    if(name) {
     const result = filterData(data, name.get("search").toLowerCase())
     setData(result)
    }
  }

  return (
    <div className="w-full min-h-screen pb-16 pt-2 flex flex-col items-center text-slate-600">
      <form 
      className="w-[90%] flex h-[6rem] py-5"
      onSubmit={(e) => handleSearch(e)}
      action="">
        <input 
        className="w-[85%] h-full bg-(--content-input-bg) rounded-l-xl px-4"
        type="search" name="search" id="search" />
        <button
        className="w-[15%] text-sm h-full bg-(--content-btn-bg) rounded-r-xl text-black 
        text-white cursor-pointer"
        type="submit"
        >Search</button>
      </form>

      <div className="w-[90%] mt-4 h-fit flex gap-3 flex-wrap">
        {data.map((item, index) => (
          <div 
          key={index}
          className="w-[13rem] h-[10rem] rounded-xl flex flex-col items-center 
          justify-center bg-(--content-bg)">
            <h4 className="text-white text-md font-[600]">{item.name}</h4>
            <p className="text-white text-sm">{item.username}</p>
            <p className="text-sm text-slate-300">{item.email}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
