import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Shoppinglist() {

  const initData={
    name:"",
    CategoryId:""
  };


  const navigate = useNavigate();

  const[error,setFormError]=useState(initData);


  const [lists, setLists] = useState();
  const [listForm, setListForm] = useState(initData);


  const [categories, setCategories] = useState(null);



  useEffect(() => {
    getAll();
    getCategories();
   
  }, []);


  const changeHandler = (event) => {
    setListForm({
      ...listForm,
      [event.target.name]: event.target.value,

    });

  };

  const saveClick = () => {

    let hasError=false;
    let messages=initData;

    if(listForm.name.trim().length==0)
    {
      hasError=true;
      messages={...messages,name:"name field required"}
    }
   
    if(hasError)
    {
      setFormError(messages);
    }
    else
    {
      setFormError(initData)
      axios
      .post("https://localhost:44382/api/items/saveitems", listForm)
      .then(() => {
        navigate("/item");
        setListForm(initData);
         getAll();

        }
      )
      .catch((e) => {
        alert(JSON.stringify(e));
        console.log(e);
      });
    }
    
  };

  function getAll() {
    axios.get("https://localhost:44382/api/items",
    ).then((d) => {
      setLists(d.data);
    }).catch((e) => {
      alert("no data found" + e);
    })
  }

  function renderLists() {
    let itemRows = [];
    lists?.map((item) => {
      itemRows.push(
        <tr>
          <td>{item.name}</td>
          <td>{item?.categories?.name}</td>
          <td>
            <button className='btn btn-danger p-1 m-1'
            onClick={()=>deleteClick(item.id)}
            >Delete
            </button>
          </td>
        </tr>
      )
    })
    return itemRows;
  }

  function getCategories() {
    axios.get("https://localhost:44382/api/items/categories").then((d) => {
      if (d) {
        setCategories(d.data);
      }
    });
  }

  function renderCategory() {
    return (
      <select
        onChange={changeHandler}
        name="CategoryId"
        value={listForm?.CategoryId}
        className="form-control"
        >
          <option>Select Category</option>
        {
          categories?.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))
        }
      </select>
    );
  }


    function deleteClick(id){
debugger
       axios.delete("https://localhost:44382/api/items/"+id)
       .then(()=>{
           getAll();
        
       }).catch((e)=>{
         alert(JSON.stringify(e));
       });
     }




  return (
    <div>
      <h2 className='text-black text-center'></h2>
      <div className='row p-3 m-3'>
        <div className='col-9 text-left'>
          <h2 className='text-dark'>ITEMS LIST</h2>
        </div>
        <div className='col-3'>
          <button className='btn btn-dark'
            data-target="#newModal" 
            data-toggle="modal">
           + New Item 
          </button>
        </div>
      </div>

      <div className='col-9 p-4 m-4'>
        <table className='table table-striped table-bordered table-hover table-active '>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
       
            {renderLists()}
            
          </tbody>
        </table>
      </div>
 

      {/* save */}

      <div class="modal" id="newModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header" style={{ backgroundColor: "darkcyan" }}>
              <h5 class="modal-title text-white">New Item</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <div className="form-group row p-2 m-2">
                <label for="txtcategories">Category</label>
                {renderCategory()}
                <p className="text-danger"></p>
              </div>


              <div className="form-group row p-2 m-2">
                <label for="txtName">Name</label>
                <input
                  id="txtName"
                  name="name"
                  placeholder="enter item"
                  type="text"
                  className="form-control"
                  onChange={changeHandler}
                  value={listForm?.name}
                />
              <span className="text-danger">{error.name}</span>
              </div>


            </div>
            <div class="modal-footer" style={{ backgroundColor: "dark" }}>
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary"
                onClick={saveClick}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit */}

      <div class="modal" id="editModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-white">Edit Item</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group row p-2 m-2">

              <label for="txtcategories">Category</label>
                {renderCategory()}
                <p className="text-danger"></p>
              </div>


              <div className="form-group row p-2 m-2">
                <label for="txtName">Name</label>
                <input
                  id="txtName"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  className="form-control"
                   onChange={changeHandler}
                   value={listForm?.name}
                />
                <p className="text-danger"></p>
              </div>
            </div>
            <div class="modal-footer" style={{ backgroundColor: "darkgray" }}>
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary"
              // onClick={updateClick}
              >
                update
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoppinglist