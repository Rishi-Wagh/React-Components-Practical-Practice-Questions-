import React from 'react'
import ReusableTable from './reusableTable'

//Data array to store following the table component
const data = [
  { Name: 'Orange', Qty: 10 , Vendor: 'Nagpur' },
  { Name: 'Apple', Qty: 15 , Vendor: 'Jammu' },
  { Name: 'Mango', Qty: 10 , Vendor: 'Delhi' },
  { Name: 'Kiwi', Qty: 20 , Vendor: 'Kerla' },
]

//To tell how we want to every coloumn of our table , we use config array
const config = [
  { label: 'Name',    //Heading of our table are stored in labels
    render: (data) => data.Name,
  },
  { label: 'Qty',
    render: (data) => data.Qty,
  },
  { label: 'Vendor',
    render: (data) => data.Vendor , 
  }
]
const Table = () => {

  

  return (
    <ReusableTable config={config} data={data}/>  
    )
}

export default Table