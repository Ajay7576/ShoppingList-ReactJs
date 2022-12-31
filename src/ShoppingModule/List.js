
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function List() {
  const [list, setList] = useState();
  

  useEffect(() => {
    getAlllist();
  }, []);



  function getAlllist() {
    axios.get("https://localhost:44382/api/list",
    ).then((d) => {
      setList(d.data);
    }).catch((e) => {
      alert("no data found" + e);
    })
  }

  function renList() {
    let itemRows = [];
    list?.map((item) => {
      itemRows.push(
        <tr>
          <td>{item.name}</td>
        </tr>
      )
    })
    return itemRows;
  }



  return (
    <div>

       <table className="table table-striped ">
          <thead>
            <tr>
              <th>List Item</th>
            </tr>
          </thead>
          <tbody>
          {renList()}
          
          </tbody>
        </table>
    </div>
  )
}

export default List
