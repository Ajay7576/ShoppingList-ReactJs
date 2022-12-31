import React from 'react';



function ItemCard(props) {

  const {listItem}=props; 
  const {selectedListId}=props;

  const addItem = (item) => {

    debugger
    props.addListitem(item);
    props.getListByItem(selectedListId);
    return;
  }

  const items = props.items;
 
  return items.map(item => {
    return(
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card">
          <div className="card-body"> 
            <h5 className="card-title">{item.name}</h5>
            <button
            disabled={listItem?.includes(item.id)}
              className="btn btn-warning"
               onClick={() =>addItem(item)}>Add</button> 
          </div>
        </div>
      </div>
    )
  })
}

export default ItemCard



