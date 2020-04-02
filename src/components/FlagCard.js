import React from 'react';
import UserDetail from './UserDetail';

const FlagCard = ({ currentProfile: {
  email, jobTitle, countryCode, avatar, content
} }) => {
  return (
    <div className="ui card flag-card">
      <UserDetail
        email={email}
        jobTitle={jobTitle}
        avatar={avatar}
        countryCode={countryCode}
      />
      <section>
        <div>
          <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt={countryCode}/>
        </div>
        <article>{content}</article>
      </section>
    </div>
  );
}

export default FlagCard;