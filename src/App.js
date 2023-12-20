import React from 'react';
import './App.css';
import New from './Components/New'; //Newly created component

const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Webtrends Optimize Software Engineer exam</h1>
                <form>
                    {fields.map((field) => (
                        <div key={field.name}>
                            {/* 'label' element associated with the input using 'htmlFor' attribute */}
                            <label htmlFor={field.name}>{field.label}</label>
                            
                            {/* 'input' element with attributes set based on the current 'field' object */}
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                            />
                        </div>
                    ))}
                </form>

                {/* Pass the initial text "hello" to the New component */}
                <New Text="hello" />
            </div>
        );
    }
}

export default App;
