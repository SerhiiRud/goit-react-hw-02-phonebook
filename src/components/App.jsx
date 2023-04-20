import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  AddContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  render() {
    return (
      <div>
        <Phonebook onAddContact={this.AddContact} />
      </div>
    );
  }
}
