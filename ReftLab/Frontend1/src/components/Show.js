import React, { Component } from 'react'
import * as actions from "../Action/Add";
import './update.css';

import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
// import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Modal from 'react-modal';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Portal from '@material-ui/core/Portal'


export default class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors :{},
            Names :[],
            showModal: false,
            Name1 : "",
            Name2 : "",
            Arr:[]
    };
    }
    // var allRelation = [];
  //   getAllRelationDetails() {
  //   actions.getAllRelationAction().then(relation => {
  //     this.setState({
  //       Arr : relation
  //     })
     

  //   });
  // }
  onChange = e => {
    
    this.setState({ [e.target.id]: e.target.value});
    // console.log("xxxxxxxxxxx");
    // console.log(this.state.Name1);
    // console.log(this.state.Name2);
    // console.log("xxxxxxxxxxx");
  };

  onSubmit()
  {
    console.log("nnn");
    console.log(this.state.Name1);
    console.log(this.state.Name2);
    var temp = this.state.Name1;
    var AllNames = [this.state.Name1];
    // console.log(AllNames);
    for (let index = 0; index < this.state.Arr.length; index++) {
      if (this.state.Arr[index].Name == temp) {
        if (this.state.Arr[index].With == this.state.Name2) {
          console.log("Yessss");
          AllNames[1]=this.state.Name2;
        }
        else{
          AllNames[AllNames.length]=this.state.Arr[index].With;
          temp = this.state.Arr[index].With;
        }
        break;
      } 
      // else {
        
      // }
    }
    AllNames[AllNames.length]=this.state.Name2;
    for (let index = 0; index < AllNames.length; index++) {
      console.log(AllNames + "  ");
      
    }
    this.setState({Names : AllNames})
  }

    componentDidMount ()
    {
        actions.getAllRelationAction().then(relation => {
      this.setState({
        Arr : relation
      })
     

    });
    }

  

    render() {
      // this.getAllRelationDetails();
      console.log("ww");
      console.log(this.state);
      const {Names} = this.state;
        return (
            <div>
                <form className="root">
                        {/* <TextField  id="outlined-basic" label="Name" variant="outlined" onChange ={this.onAddChange}/> */}
                        <input
                                rows="5"
                                cols="5"
                                name="textarea"
                                id="Name1"
                                onChange={this.onChange}
                                value={this.state.Name1}
                                type="text"
                                placeholder="Enter Name"
                                class="form-control"
                              ></input>
                              {/* <span style={{color:'red' }}>
                                    {errors.Name}
                                  </span> */}
                          
                          {/* <TextField id="outlined-basic" label="Relation" variant="outlined" onChange ={this.onAddChange} /> */}
                          <input
                                rows="5"
                                cols="5"
                                name="textarea"
                                id="Name2"
                                onChange={this.onChange}
                                value={this.state.Name2}
                                type="text"
                                placeholder="Enter Name"
                                class="form-control"
                              ></input>
                              {/* <span style={{color:'red' }}>
                                    {errors.Relation}
                                  </span> */}
                          
                          
                          <div class ="formRoot">
                          <Button variant="outlined" color="secondary" onClick={this.onSubmit.bind(this)} >

                            Find
                          </Button>
                          </div>
                      </form>
                      <div>
                        <h1>{Names+" "}</h1>
                      </div>
            </div>
        )
    }
}
