import React, { useState, ChangeEvent } from 'react';
import './checkout.css';
import {IUserForm} from '../../models/IUserForm';

interface IUserFormProps {
  updateParent(values: IUserForm): void;
}

export default function Userform(props: IUserFormProps) {
  const defaultValue: IUserForm = {
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
  };

  const [userForm, setUserForm] = useState(defaultValue);

  function updateUserForm(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({ ...userForm, [name]: value });
    props.updateParent(userForm);
  }

  return (
    <form>
      <div className="input-container">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={userForm.firstname}
          onChange={updateUserForm}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={userForm.lastname}
          onChange={updateUserForm}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={userForm.address}
          onChange={updateUserForm}
        />

        <label htmlFor="zipcode">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          value={userForm.zipcode}
          onChange={updateUserForm}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={userForm.city}
          onChange={updateUserForm}
        />

      </div>
    </form>
  );
}
