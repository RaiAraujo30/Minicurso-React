import React, {useState} from "react";
import Form from "./Form";
import FormDataDisplay from "./FormDatDisplay";

export default function App() {
  const [submitedData, setSubmitedData] = useState(null)

  const handleFormSubmite = (formData) => {
    setSubmitedData(formData);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmite}/>
      {submitedData && <FormDataDisplay formdata={submitedData}/>}
    </div>
  )
}

