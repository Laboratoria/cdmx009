import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');

  return (
    <form>
      <div>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button
        disabled={!email.length}
        onClick={e => {
          e.preventDefault();
          console.log('OMG');
        }}
      >
        Sign in!
      </button>
    </form>
  );
};

export default SignIn;