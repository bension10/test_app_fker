import React, { Component } from 'react';
import SearchBar from './SearchBar';
import FlagCard from './FlagCard';
import Spinner from './Spinner';
import { generateProfile } from '../utils/useFaker';

const fakeProfile = generateProfile();

class App extends Component {
  state = { 
    email: "",
    isSearching: false,
  };

  handleSearchChange = event=> {
    const email = event.target.value;

    this.setState({ email, isSearching: true });

    const profile = this.getFilteredProfile(email);

    if (Object.keys(profile).length > 0) {
      this.setState({ isSearching: false });
    }
  };

  getFilteredProfile = (email) => {
    return fakeProfile.filter(profile => profile.email === email);
  }

  render() {
    const { email, isSearching } = this.state;
    const currentProfile = this.getFilteredProfile(email);
    console.log('fakeProfile ', fakeProfile);
    
    return (
      <div className="ui container">
        <SearchBar handleSearchChange={this.handleSearchChange}/>
        {currentProfile[0] ? 
          <FlagCard currentProfile={currentProfile[0]} />
          : (
            <div>
              <br />
              <p>No Results!</p>
            </div>
        )}
        { isSearching && <Spinner />}
      </div>
    );
  }
}

export default App;
