import React from "react";
import Card from "./Card";
import IMG from "/Users/aditya/Developer/Development/contact-card/src/components/image.jpg";
import contacts from "../contacts"
import Avatar from "./avatar";

function createCard(contact){
    return(
        <Card
        id={contact.id}//key cannot be used as a prop so a new prop has to be created
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
        />
    );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img ={IMG}/>
      {contacts.map(createCard)}
      
      
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
