import React, { useContext, useEffect } from 'react'
import LayoutContext from '../context/layout/LayoutContext';

const Layout2 = () => {
  const context = useContext(LayoutContext);

  const { layouts, getLayouts } = context
  let id = 0;
  const idpiker = (cid) => {
    return id = cid + 1
  }

  useEffect(() => {

    getLayouts()

    //eslint-disable-next-line
  }, [])

  return (
    <>
      <h2>Table</h2>
      <table id="customers">
        <thead>
          <tr>
            <th >ID</th>
            <th >Full Name</th>
            <th >DOB</th>
            <th >Email</th>
            <th >Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {layouts.map((layout) => {
            return [
              <tr key={layout._id}>
                <td >{idpiker(id)}</td>
                <td >{layout.fname}</td>
                <td >{layout.date}</td>
                <td>{layout.email}</td>
                <td>{layout.phone}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>

    </>
  )
}

export default Layout2


