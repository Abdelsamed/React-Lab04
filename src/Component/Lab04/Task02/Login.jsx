import React, { useState } from 'react';

const FormHandel = ({ handleSignup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pass, setPass] = useState('');
  const [gender, setGender] = useState('');
  const [confirmedPass, setConfirmedPass] = useState('');

  const handleSubmiting = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setPass('');
    setGender('');
    setConfirmedPass('');
  };

  const handelChanges = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'pass':
        setPass(value);
        break;
      case 'Gender':
        setGender(value);
        break;
      case 'ConfirmedPass':
        setConfirmedPass(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmiting}>
        <div>
          <label>enterYourFirstName</label>
          <input type="text" name="firstName" value={firstName} onChange={handelChanges} />
        </div>
        <div>
          <label>enterYourLastName</label>
          <input id="inp" type="text" name="lastName" value={lastName} onChange={handelChanges} />
        </div>
        <div>
          <label>enterYourPassWord</label>
          <input type="password" name="pass" value={pass} onChange={handelChanges} />
        </div>
        <div>
          <label>enterYourConfirmedPassWord</label>
          <input type="password" name="ConfirmedPass" value={confirmedPass} onChange={handelChanges} />
        </div>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={handelChanges} name="Gender">
            <option></option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandel;
