import {Component} from 'react';
import './App.css'
import UserProfile from './Components/UserProfile'


const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

class App extends Component{
  state = {
    inputText:'',
    usersList: userDetailsList
}
  onChangeSearch = (event) =>{
    this.setState({inputText:event.target.value})
  }
  onDeleteSearch = (uniqueNo) => {
    const {usersList} = this.state
    const filtersdata = usersList.filter(eachItem => (
      eachItem.uniqueNo !== uniqueNo
    ))
    this.setState({usersList:filtersdata})
  }
  

  render(){
    const {inputText,usersList} = this.state
    const filterusers =  usersList.filter(eachItem =>(
      eachItem.name.toLowerCase().includes(inputText.toLocaleLowerCase())
    ))
    return(<div className='container'>
      <h1>Users List</h1>
      <input type='search' onChange={this.onChangeSearch}/>
      <ul className='card'>
        {filterusers.map(eachItem => (
          <UserProfile userDetails = {eachItem} key = {eachItem.uniqueNo} onDeleteChange = {this.onDeleteSearch}/>
        ))}
      </ul>
    </div>)

  }
}
export default App