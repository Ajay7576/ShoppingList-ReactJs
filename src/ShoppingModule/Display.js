
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from './List' ;

function Display() {

    const [categroy, setCategory] = useState(null);
   // const [item, setitem] = useState(null);


    useEffect(() => {
        getCategories();
      }, []);
      
  // const changeHandler = (event) => {
  //   setCategory({
  //     ...categroy,
  //     [event.target.name]: event.target.value,

  //   });

  //};

      function getCategories() {
        axios.get("https://localhost:44382/api/items/categories").then((d) => {
          if (d) {
            setCategory(d.data);
          }
        });
      }

      function renderCategory() {
        return (
          <select
            // onChange={changeHandler}
            name="CategoryId"
             value={categroy?.CategoryId}
            className="form-control"
            >
              <option>Select Category</option>
            {
              categroy?.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))
            }
          </select>
        );
      }
    
  return (
 <div>
        <div className="row">
          <div className="col-md-6">
         <div className="form-group row p-2 m-2">
                <label for="txtcategories">Category</label>
                {renderCategory()}
                <p className="text-danger"></p>
              </div>
             <br/>
        <div class="container">
                <div class="card">
                    <div class="card-body">
                            <div class="row">
                                <div class="col-8 text-sm-center col-lg-6 text-lg-left">
                                    <h5><strong>Category</strong></h5>
                                    <p><small>Item</small></p>
                                </div>
                                <div class="col-12 text-sm-center col-lg-5 text-lg-right row">
                                    <div class="col-md-12">
                                        <div class="float-right mx-1">
                                            <button type="submit" class="btn btn-primary">
                                             Add
                                            </button>
                                      </div>
                                </div>
                           </div>                        
                    </div>
                </div>
            </div>
        </div>
   </div>
  <div className="col-md-5">
    <List/>
   </div>
  </div>
 </div>
  )
}

export default Display
