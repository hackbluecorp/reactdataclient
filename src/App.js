import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
//import firebase from './Firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('clients').orderBy('idClient', 'desc');
    this.unsubscribe = null;
    this.state = {
      clients: [],
      date: new Date()
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const clients = [];
    querySnapshot.forEach((doc) => {
      const { idClient, numberPlate, email, name, dateFormatString, dateFormatDate } = doc.data();
      clients.push({
        key: doc.id,
        doc, // DocumentSnapshot
        idClient,
        numberPlate,        
        name,
        email,
        dateFormatString,
        dateFormatDate
      });
    });
    this.setState({
      clients
   });   
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  activeDate(dataComent){
    return (                    
      <tbody>
      <tr bgcolor="#fff">
        <td>{dataComent.numberPlate}</td>
        <td>{dataComent.name}</td>
        <td>{dataComent.email}</td>
      </tr>                    
      </tbody>
    )
  };

  noActiveDate(dataComent){
    return (                    
      <tbody>
      <tr bgcolor="#fff">
      <td>{dataComent.numberPlate}</td>
        <td>{dataComent.name}</td>
        <td>{dataComent.email}</td>
      </tr>                    
      </tbody>
    )
  };

  render() {
    const options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric",
      second: "numeric",
      hour12:"false"};

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">          
            <h3 class="panel-title">
              DATOS DE LOS CLIENTES
            </h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <h4><Link to={"/create"} class="btn btn-primary">Agregar Un Cliente</Link></h4>
            </div>
          <div>
            <strong>Fecha y hora actual </strong>
          </div>
          <div>
            <label>{this.state.date.toLocaleString("es-Co", options)}</label>         
          </div>         
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Placa del Vehiculo</th>
                  <th>Nombre del Cliente</th>
                  <th>Correo Electronico</th>
                </tr>
              </thead>
               { this.state.clients.map(Coment =>                 
                  {if (Coment.dateFormatDate.toDate().getFullYear("en-EN") > this.state.date.getFullYear("en-EN")) {
                    let dateIsActive = this.activeDate(Coment);
                    return(
                      dateIsActive
                    )
                  } 
                    if (Coment.dateFormatDate.toDate().getFullYear("en-EN") < this.state.date.getFullYear("en-EN")) {                      
                      let dateIsNotActive = this.noActiveDate(Coment);
                      return(
                      dateIsNotActive
                      )                   
                    }
                      if (Coment.dateFormatDate.toDate().getFullYear("en-EN") == this.state.date.getFullYear("en-EN")) {
                        if (Coment.dateFormatDate.toDate().getMonth("en-EN") > this.state.date.getMonth("en-EN")) {                      
                          let dateIsActive = this.activeDate(Coment);
                          return(
                            dateIsActive
                          )
                      }
                        if (Coment.dateFormatDate.toDate().getMonth("en-EN") < this.state.date.getMonth("en-EN")) {                      
                            let dateIsNotActive = this.noActiveDate(Coment);
                            return(
                              dateIsNotActive
                            )
                        }
                          if (Coment.dateFormatDate.toDate().getMonth("en-EN") == this.state.date.getMonth("en-EN")) {                      
                            if (Coment.dateFormatDate.toDate().getDate("en-EN") > this.state.date.getDate("en-EN")) {                      
                                let dateIsActive = this.activeDate(Coment);
                                return(
                                  dateIsActive
                                )
                            }
                              if (Coment.dateFormatDate.toDate().getDate("en-EN") < this.state.date.getDate("en-EN")) {                      
                                let dateIsNotActive = this.noActiveDate(Coment);
                                return(
                                  dateIsNotActive
                                )
                              }
                                if (Coment.dateFormatDate.toDate().getDate("en-EN") == this.state.date.getDate("en-EN")) {                      
                                  if (Coment.dateFormatDate.toDate().getHours("en-EN") > this.state.date.getHours("en-EN")) {                      
                                    let dateIsActive = this.activeDate(Coment);
                                    return(
                                      dateIsActive
                                    )
                                  }
                                    if (Coment.dateFormatDate.toDate().getHours("en-EN") < this.state.date.getHours("en-EN")) {                      
                                      let dateIsNotActive = this.noActiveDate(Coment);
                                      return(
                                        dateIsNotActive
                                      )
                                    }
                                      if (Coment.dateFormatDate.toDate().getHours("en-EN") == this.state.date.getHours("en-EN")) {                      
                                        if (Coment.dateFormatDate.toDate().getMinutes("en-EN") > this.state.date.getMinutes("en-EN")) {                      
                                          let dateIsActive = this.activeDate(Coment);
                                          return(
                                            dateIsActive
                                          )
                                        }
                                          if (Coment.dateFormatDate.toDate().getMinutes("en-EN") < this.state.date.getMinutes("en-EN")) {                      
                                            let dateIsNotActive = this.noActiveDate(Coment);
                                            return(
                                              dateIsNotActive
                                            )
                                          }
                                            if (Coment.dateFormatDate.toDate().getMinutes("en-EN") == this.state.date.getMinutes("en-EN")) {                      
                                              if (Coment.dateFormatDate.toDate().getSeconds("en-EN") >= this.state.date.getSeconds("en-EN")) {                      
                                                let dateIsActive = this.activeDate(Coment);
                                                return(
                                                  dateIsActive
                                                )
                                              } else {                      
                                                let dateIsNotActive = this.noActiveDate(Coment);
                                                return(
                                                  dateIsNotActive
                                                )
                                              }                              
                                            }
                                        }
                                  }
                            }
                      }                                          
                   }                                  
                )}              
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
