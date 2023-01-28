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
            <th >Product Name</th>
            <th >Sku</th>
            <th >Category</th>
            <th >Size</th>
            <th >Color</th>
            <th >Short Description</th>
            <th >Long Description</th>
            <th >Phone</th>
            <th >Images</th>
          </tr>
        </thead>
        <tbody>
          {layouts.map((layout) => {
            return [
              <tr key={layout._id}>
                <td >{idpiker(id)}</td>
                <td >{layout.productName}</td>
                <td >{layout.sku}</td>
                <td>{layout.category}</td>
                <td>{layout.size}</td>
                <td>{layout.color}</td>
                <td>{layout.sDiscription}</td>
                <td>{layout.lDescription}</td>
                <td>{layout.phone}</td>
                <td>{layout.images}</td>
              </tr>
            ];
          })}
        </tbody>
      </table>

    </>
  )
}

export default Layout2


