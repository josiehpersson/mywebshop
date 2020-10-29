import React, {useState} from 'react';
import './checkout.css';
import Userform, {IUserForm} from './Userform';

export default function Checkout() {
    const defaultValue: IUserForm = {firstname: '', lastname:'', address: '', zipcode: "", city: ''};
    const [userForm, setUserForm] = useState(defaultValue);

    function updateForm(formValue: IUserForm): void {
        setUserForm(formValue);
        console.log(userForm);
    }

    return(
        <>
        <Userform updateParent={updateForm}/>
        </>
    )
}