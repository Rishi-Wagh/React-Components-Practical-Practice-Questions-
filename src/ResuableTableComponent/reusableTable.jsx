import React, { useEffect } from 'react'


const ReusableTable = ({config ,data}) => {
 
  const generatedHEaders = config.map((column , i) => {
    return ( <th key={'h'+i}>{column.label}</th>)
  });

  const generatedBody = data.map((row , i) => {
  
     const cell = config.map((cell , j) =>{
        return(
          <td key={'c'+j}>{cell.render(row)}</td>
        )
     })

    return(
      <tr key={'r'+i}>
         {cell}
      </tr>
    )
  })
  
 
  return (
    <div>
       <table>
         <thead>
            <tr>
             {generatedHEaders}
            </tr>
         </thead>
         <tbody>
             {generatedBody}
         </tbody>
       </table>
    </div>
  )
}

export default ReusableTable