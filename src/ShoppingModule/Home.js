import ItemCard from './ItemCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListDay from './ListDay';



const Home = () => {

  const [lists, setLists] = useState();

 const [selectedListId, setSelectedListId] = useState();

 const[listItem,setListItem]=useState();


  useEffect(() => {
    getcategorybyitem();
  }, []);


  function getcategorybyitem() {
   
    axios.get("https://localhost:44382/api/items/getcategorybyitem",
    ).then((d) => {
      setLists(d.data);
    }).catch((e) => {
      alert("no data found" + e);
    })
  }


function addListitem(item){
  debugger
  axios({
    method: 'POST',
    url: "https://localhost:44382/api/ListItems",
    data: {
      itemId: item.id,
     listId: selectedListId,
    }
  }).then(d=>console.log(d)); 

  return;

}




function getListByItem(listId){
  debugger
    axios.get("https://localhost:44382/api/ListItems/listbyitem?listId="+listId,
    ).then((d) => {
      setListItem(d.data);
    console.log(d.data);
    }).catch((e) => {
      alert("no data found" + e);
    })
}


  return (
    <div >
      <h2 className="text-center mt-3">All Items</h2>
      <div className="row">
      <div className="col-8">
        <section>
          <div className="py-4 container">
            <div className="row justify-content-center">
              {lists?.map((cat) => {
                return(
                  <>
                    <h1>{cat.name}</h1>
                    <ItemCard {...cat}
                    addListitem={addListitem}
                    listItem={listItem}
                    getListByItem={getListByItem}
                    selectedListId={selectedListId}
                 />
                 </>
                )
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="col-4">
        <ListDay
         onSelectedChange={setSelectedListId} 
         getListByItem={getListByItem}
         getcategorybyitem={getcategorybyitem}
         listItem={listItem}
         selectedListId={selectedListId}
       
         />
        </div>  
    </div>
    </div>
  )
}

export default Home