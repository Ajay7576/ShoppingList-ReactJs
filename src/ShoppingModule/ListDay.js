import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function ListDay(props) {

  const intdata={
    name:"",
  };

  const [list, setList] = useState();
  
  const[listFrom,setListForm]=useState(intdata);

  const [listFormError,setListFormError]=useState(intdata);

  const [id,setId]=useState();
  

  useEffect(() => {
    debugger
    getAll();
  },[]);

 
  function getAll() {
    
    axios.get("https://localhost:44382/api/list",
    ).then((d) => {
      debugger
      // console.log(d.data);
      setList(d.data);
      // console.log(d.data[0].id);
       setId(d.data[0].id);
       var a =d.data[0].id;
       props.getListByItem(a);

    }).catch((e) => {
      alert("no data found" + e);
    })
  }


  const changeHandler = (event) => {
    setListForm({
      ...listFrom,
      [event.target.name]: event.target.value
    });
  };



  const saveClick = () => {

    let hasError=false;
    let messages=intdata;

    if(listFrom.name.trim().length===0)
    {
      hasError=true;
      messages={...messages,name:"name field is required"}
    }
 
    if(hasError)
    {
      setListFormError(messages);
    }
    else
    {
      setListFormError(intdata);
      axios
      .post("https://localhost:44382/api/list",listFrom)
      .then(() => {
        setListForm(intdata);
         getAll();
        }
      )
      .catch((e) => {
        alert(JSON.stringify(e));
        console.log(e);
      });
    }
  };



  const handleChange = (event) => {
    debugger
    props.onSelectedChange(event.target.value);
    props.getListByItem(event.target.value);
    return ;
  }; 


  return (
 <div>
<table className="table table-striped table-bordered ">
   <thead>
       <th>List</th>
   </thead>
   <tbody>
   {list?.map((lis) => {
                return(
                  <>
                   <input type="checkbox" 
                    id={lis.id}
                    value={lis.id}
                    checked={id===lis.id}
                   onChange={handleChange}
                   key={lis.id}
                   />
                   <div>
                  {lis.name}
                   </div>
                  </>
              )
          })}
   </tbody>
      <div className="form-group row p-2 m-2">
               <div className="col-8" >
                <input
                  id="txtName"
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={changeHandler}
                  value={listFrom?.name}
                />
              <span className="text-danger">{listFormError.name}</span>
              <div/>
              &nbsp;
              <div className="col-4">
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-primary form-control"
               onClick={saveClick}
              >
              Save
              </button>
              </div>
              </div>
             </div>
       </table>
    </div>
  )
}

export default ListDay
