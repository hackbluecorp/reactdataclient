import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import firebase from '../Firebase';
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

class Create extends Component {

  constructor (props) {
    const options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12:"false"};
      
    super(props)
    this.ref = firebase.firestore().collection('clients');
    this.state = {
    idClient: '',
    numberPlate: '',
    dateFormatString: new Date().toLocaleString("es-Co", options),
    name: '',
    email: '',
    dateFormatDate: new Date(),
    startDate: ''    
    };
    this.handleChange = this.handleChange.bind(this);    
    this.unsubscribe = null;    
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const clients = [];
      const maxNumber = [];
      querySnapshot.forEach((doc) => {
        const { idClient, numberPlate, name, email } = doc.data();
        clients.push({
          key: doc.id,
          doc, // DocumentSnapshot
          idClient,
          numberPlate,
          name,
          email
        });
        maxNumber.push({
          idClient
        });  
      });
      this.setState({
        clients,
        idClient: Math.max.apply(Math, maxNumber.map(function(o) { return o.idClient; }))+1
     });
    }
  
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
    }
  
  handleChange(date) {
    var options = {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12:"false"};
    this.setState({        
    startDate: date,    
    dateFormatString: date.toLocaleString("es-Co", options),
    dateFormatDate: date
    })
  }

  onChangeOnlyLetters = (e) => {      
    const state = this.state
    state[e.target.name] = e.target.value;
    state[e.target.name] = state[e.target.name].replace(/[^A-Za-zÀ-ÿ]/ig, ' ')
    this.setState(state);    
  }
  
  onChange = (e) => {      
    const state = this.state
    state[e.target.name] = e.target.value;    
    this.setState(state);
  }

  onChangeUpperCase = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value.toUpperCase(); 
    this.setState(state);
  }

  onChangeLowerCase = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value.toLowerCase(); 
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { idClient, numberPlate, name, email, dateFormatString, dateFormatDate } = this.state;
    
    this.ref.add({
      idClient,
      numberPlate,      
      name,
      email,
      dateFormatString,
      dateFormatDate
    }).then((docRef) => {
      this.setState({
        idClient: '',
        numberPlate: '',        
        name: '',
        email: '',
        dateFormatString: '',
        dateFormatDate: ''
      });
      //this.props.history.push("/create")
      window.location.reload(true);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    alert("Correo Registrado Exitosamente!!")
  }
  
  render() {
    const { numberPlate, name, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              AGREGAR NUEVO CORREO ELECTRONICO
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="select-service">Placa del Vehiculo</label>
                <input
                  type="text" 
                  class="form-control"
                  name="numberPlate"
                  value={numberPlate} 
                  onChange={this.onChangeUpperCase} 
                  placeholder="Placa del Vehiculo"
                  minlength="6"
                  maxlength="6"
                  data-toggle="tooltip"
                  title="Ingresa la Placa de Tu Vehiculo"
                  required
                  />              
              </div>    
              <div class="form-group">
                <label for="dateFormatString">Nombre del Cliente</label>                
                <input
                  type="text" 
                  class="form-control"
                  name="name" 
                  value={name} 
                  onChange={this.onChangeOnlyLetters} 
                  placeholder="Nombre del Cliente"
                  minlength="7"
                  maxlength="50"
                  data-toggle="tooltip"
                  title="Ingresa tu Nombre"
                  required
                  />
              </div>
              <div class="form-group">
                <label for="client">Correo Electronico</label>
                <input
                  type="text" 
                  class="form-control"
                  name="email" 
                  value={email} 
                  onChange={this.onChangeLowerCase} 
                  placeholder="Correo Electronico"
                  minlength="13"
                  maxlength="50"
                  data-toggle="tooltip"
                  title="Ingresa Tu Correo Electronico"
                  required
                  />
              </div>              
              <button type="submit" class="btn btn-success">Aceptar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
