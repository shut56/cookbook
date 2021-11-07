import React from 'react'

const Table = ({ list }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Calories</th>
          <th>Proteins</th>
          <th>Fats</th>
          <th>Carbo</th>
          <th>Weight</th>
        </tr>
        {
          list.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element?.name}</td>
                <td>{element?.calories}</td>
                <td>{element?.protein}</td>
                <td>{element?.fat}</td>
                <td>{element?.carbohydrate}</td>
                <td>{element?.weight}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
