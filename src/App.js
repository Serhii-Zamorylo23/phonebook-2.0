import './App.css';
import { Component } from 'react';
import NewContact from './components/NewContact';
import Contacts from './components/Contacts';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
class App extends Component{
  constructor(props){
    super(props)
    const contacts=JSON.parse(localStorage.getItem("Contacts"))||[]
    this.state={
      contacts: contacts,
      filter: ''
    }
  }
  setNewContact=(name,telephone)=>{
    this.setState((prev)=>({
      contacts:[...prev.contacts,{id:nanoid(),name,telephone}]
    }))
  }
  delete=(id)=>{
    this.setState((prev)=>({
      contacts: prev.contacts.filter((contact)=>contact.id!==id)
    }))
  }
  filterValue=(value)=>{
    this.setState(()=>({
      filter:`${value}`
    }))
    this.filter()
  }
  filter=()=>{
    this.setState((prev)=>({
      contacts:prev.contacts.filter((contact)=>contact.name.includes(prev.filter.toLowerCase()))
    }))
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts!==this.state.contacts){
      localStorage.setItem("Contacts",JSON.stringify(this.state.contacts))
    }
  }
  render(){
    return(
      <>
      <h2>Phonebook</h2>
      <NewContact newContact={this.setNewContact}/>
      <h2>Contacts</h2>
      <Filter filter={this.filterValue}/>
      <Contacts userInfo={this.state.contacts} deleteContact={this.delete}/> 
      </>
    )
  }
}

export default App;

