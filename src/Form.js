import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";

function Form ({onSubmit}) {
    const [formData, setFormData] = useState({name: '', email: ''});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) =>  ({...prevData, [name]: value})); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name}  onChange={handleInputChange}></input>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;