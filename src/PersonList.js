import React, { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      persons: []
    }
  }

  //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
  }


  render() {
    return (
      <div>
        <div className="header">
          <h1>User List</h1>
        </div>
        <div className="userList">
          {
            this.state.persons.map(person => (
              <div key={person.id.name + person.id.value} className="userItem">
                <div className="itemHeader">
                  <h3>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</h3>
                </div>
                <div className="userContent">
                  <div className="userImg">
                    <img src={person.picture.large} alt='person' />
                    <button>Detail</button>
                  </div>
                  <div className="userInfo">
                    <p>User Name: {person.login.username}</p>
                    <p>Gender: {(person.gender).toUpperCase()}</p>
                    <p>Time Zone Description: {person.location.timezone.description}</p>
                    <p>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                    <p>Email: {person.email}</p>
                    <p>Birth Date and Age: {person.dob.date} &#40;{person.dob.age}&#41;</p>
                    <p>Register Date: {person.registered.date}</p>
                    <p>Phone#: {person.phone}</p>
                    <p>Cell#: {person.cell}</p>
                  </div>
                </div>
                <br />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
