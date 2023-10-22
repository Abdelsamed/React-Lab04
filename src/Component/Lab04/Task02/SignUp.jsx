import React, { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [pass, setPass] = useState('');

  const handelChanges = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'pass') {
      setPass(value);
    }
  };

  const handleSubmiting = (event) => {
    event.preventDefault();
    setFirstName('');
    setPass('');
  };

  return (
    <div>
      <form onSubmit={handleSubmiting}>
        <div>
          <label>enterYourFirstName</label>
          <input type="text" name="firstName" value={firstName} onChange={handelChanges} />
        </div>
        <div>
          <label>enterYourPassWord</label>
          <input type="password" name="pass" value={pass} onChange={handelChanges} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;