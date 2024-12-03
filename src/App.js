import './App.css';
import { BiArchive } from "react-icons/bi";
import { Search } from './Component/Search';
import { AddAppointment } from './Component/AddAppointment';
import { AppointmentInfo } from './Component/AppointmentInfo';
import { useState, useCallback, useEffect } from 'react';

function App() {

  const [AppointData, setAppointData] = useState([])

  const [query, setQuery] = useState("")
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const fecthData = useCallback(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setAppointData(data)

      })

  }, [])

  useEffect(() => {

    fecthData()

  }, [fecthData])


  const HandelDeleteAppoinment = (id) => {
    const filtertodelete = AppointData.filter((valappoint) => valappoint.id !== id)
    setAppointData(filtertodelete)
  }
  const appointmentFilterData = AppointData.filter(item => {
    const queryLowerCase = query.toLowerCase();
    
    return (
      item.petName.toLowerCase().includes(queryLowerCase) ||
      item.ownerName.toLowerCase().includes(queryLowerCase) ||
      item.aptNotes.toLowerCase().includes(queryLowerCase)
    );
  }).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })
  


  return (
    <div className='App container mx-auto mt-3 font-thin'>
      <h3 className="text-5xl mb-3" >
        Book Your Appointment < BiArchive className='inline-block text-red-200' />
      </h3>
      <AddAppointment />
      <Search query={query} onQueryChange={MyQuery => setQuery(MyQuery)} />
      <ul>
        {
          appointmentFilterData.map((data) => {

            return (
              <AppointmentInfo key={data.id} data={data}
                OnDeleteApponiment={HandelDeleteAppoinment}
              />

            )
          })
        }


      </ul>
    </div>
  );
}

export default App;
