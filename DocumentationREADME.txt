Project is about creating a dynamic and visually appealing contact page using React, which includes form fields for name, email, phone, and message.

The Information of the code used for the project is given below with all the important links.


Google Sheet Link: https://docs.google.com/spreadsheets/d/1QLHDOf6msRdZKvBj2BummCSbW8ifEhkJnrucqNsjQXA/edit#gid=0


API link: https://sheet.best/api/sheets/fbe5c410-f7bb-4d38-b6c7-df15429d71c3

Vercel Link: contactpage-green.vercel.app


Project setup instructions:
Install Node.js and npm: Download and install Node.js from the official website (https://nodejs.org). npm (Node Package Manager) is included with Node.js.

Create a New React App: Open your terminal or command prompt and run the following command to create a new React app:

npx create-react-app my-app
Replace my-app with the name of your project.

Navigate to the Project Directory: Move into your newly created project directory:

cd my-app
Start the Development Server: Run the following command to start the development server and view your React app in the browser:

npm start
Open the Project in Your Code Editor: Use your preferred code editor (e.g., Visual Studio Code, Sublime Text, Atom) to open the project directory and start coding your React app.

That's it! You're now set up and ready to start building your React project. You can add components, styles, and functionality to create your web application.


How to run the project locally:

Navigate to Your Project Directory: Open a terminal or command prompt and navigate to the directory where your React project is located. You can use the cd command to change directories.

cd path/to/your/react/project
Start the Development Server: Once you're in the project directory, run the following command to start the development server:

npm start
This command will start a development server and open your React application in a web browser. By default, the server runs on http://localhost:3000.

View Your React App: After running npm start, your default web browser should open automatically, displaying your React application. If it doesn't, you can manually open a web browser and navigate to http://localhost:3000.

If you've made changes to your code, the development server will automatically reload the page to reflect those changes.

Stop the Development Server: To stop the development server, you can press Ctrl + C in the terminal where the server is running. This will halt the server and stop serving your React application.

That's it! You can now run your React project locally on your machine and start developing your web application.


Index File Documentation
The index file serves as the entry point for your React application. It initializes the React application by rendering the root component (App) into the DOM.

Usage
To use the index file, it is typically the starting point of your React application. You don't usually interact with it directly, but it's crucial for bootstrapping your React application.

Dependencies
React: JavaScript library for building user interfaces.
ReactDOM: Provides DOM-specific methods that can be used at the top level of a web app to interact with the DOM.
Example
jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
Notes
React.StrictMode: Wraps the App component in StrictMode. It activates additional checks and warnings for potential issues in the application.
ReactDOM.createRoot: Creates a root renderer for the React application. This method is used in React 18 and later versions for concurrent rendering.
This documentation provides an overview of the index file's purpose and functionality within a React application, serving as the entry point for rendering the root component and initializing the application.


App.jsx
App Component Documentation
The App component is the main entry point of the React application. It renders the Form component and may include additional content or components as needed.

Usage
To use the App component, simply import it into your React application and include it in your component hierarchy.

jsx
Copy code
import App from './App';

function Main() {
  return (
    <div className="Main">
      <App />
    </div>
  );
}

export default Main;
Props
The App component does not accept any props.

Content
The App component renders the Form component, which collects contact information through a form interface.

Styles
The component relies on external styles defined in the App.css file to provide visual styling.

Example
jsx
Copy code
import Form from './Components/Form';
import './App.css';

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
This documentation provides an overview of the App component's purpose and usage within a React application, serving as the main container for rendering other components such as the Form.


Form.jsx
Form Component Documentation
The Form component is a React component designed to collect contact information through a form interface. It includes input fields for name, email, phone number, and a message, along with validation and submission functionality.

Usage
To use the Form component, simply import it into your React application and include it in your component hierarchy.

jsx
Copy code
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
Props
The Form component does not accept any props.

State
name: The state for the name input field.
email: The state for the email input field.
phone: The state for the phone input field.
message: The state for the message input field.
formErrors: An object containing validation errors for the form fields.
isSubmitDisabled: A boolean indicating whether the submit button should be disabled based on form validity.
Validation
The validate function is used to validate the form fields based on certain criteria:

Name: Should be between 3 and 30 characters, containing only letters and spaces.
Email: Should match a valid email address pattern.
Phone: Should be a 9-digit number (regex pattern can be adjusted for different formats).
Message: Should not exceed 60 characters in length.
Event Handlers
handleSubmit: Handles form submission by preventing the default behavior, preparing the form data, and sending a POST request to a specified endpoint using Axios.
updateSubmitButtonStatus: Updates the submit button's disabled state based on form validity.
Form Markup
The form includes input fields for name, email, phone, and message. Each input field is associated with an error message paragraph that displays validation errors if any. The submit button is disabled if there are validation errors.

Dependencies
useState from React for managing component state.
axios for making HTTP requests.
An image asset for the form's visual representation (in this case, ContactImg).
Example
jsx
Copy code
import { useState } from 'react';
import ContactImg from '../assets/Google_Contacts_icon.png';
import axios from 'axios';
import './Form.css'; // Assuming there's a CSS file for styling

export default function Form() {
  // Component implementation...
}
This documentation provides an overview of the Form component's functionality, usage, and dependencies, facilitating its integration into a React application.


App.css
CSS Styles Overview
This CSS stylesheet provides styling for a form interface and its layout within a React application.

Root Container
#root: Sets maximum width, centers content, and adds padding.
Background
html: Sets a linear gradient background for the entire page.
Form Container (Card)
.card: Defines dimensions, padding, background gradient, border radius, and hover effect.
Form Elements
.form-group: Sets font, color, and margin properties.
.form-label: Defines font and margin properties for labels.
.form-input: Sets dimensions, padding, font size, border, and border radius for input fields.
.form-button: Defines dimensions, padding, font, color, background gradient, border, border radius, cursor, and hover effect for the submit button.
Image
.card-img: Sets dimensions, alignment, object-fit, margin, border radius, box shadow, and background color for the image.
Media Queries
@media (width <= 600px): Adjusts layout and width for smaller screens.
Additional Styles
#field: Styles input fields including background gradient, border, border radius, text alignment, height, margin, and hover effect.
h1: Styles heading including margin, text alignment, font size, and color.
.error: Styles error messages including margin and color.
.form-name: Styles form name labels including font and margin properties.
These styles ensure a cohesive and user-friendly design for the form interface in the React application.


API & Axios
API
Google Sheets API Overview
The Google Sheets API allows developers to programmatically interact with Google Sheets, enabling tasks such as reading, writing, and formatting data. Key features include:

Data Manipulation: Read, write, and modify data in Google Sheets.
Formatting: Apply formatting and styling to cells, rows, and columns.
Sharing: Manage sharing settings and permissions for spreadsheets.
Batch Operations: Perform multiple operations in a single request for improved performance.
Real-time Collaboration: Support for real-time collaboration within spreadsheets.
Use cases include data import/export, reporting, automated workflows, and custom applications.

To get started, developers need to enable the API, authenticate requests, and manage permissions. Various client libraries are available for different programming languages.


Axios 
Axios in simple words it is like a super-fast mail carrier for your magic mailbox. You tell Axios what you want to say to your friends, and it quickly takes your message to them. When your friends write back, Axios brings their responses to you in no time!
In React, we use Axios when we need to communicate with other computers, like servers on the internet. For example, if you're building a website and you want to fetch some new data from a server to show on your page, you can use Axios to do that quickly and easily. It helps us make our web apps more interactive and fun!


Google Sheet API Integration:
code snippet:
 axios
      .post('https://sheet.best/api/sheets/fbe5c410-f7bb-4d38-b6c7-df15429d71c3', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      }); 

This code snippet demonstrates how to integrate Google Sheets with a web application using Axios, a popular JavaScript library for making HTTP requests. Here's a short explanation:

axios.post: Axios is used to send a POST request to the specified URL (https://sheet.best/api/sheets/fbe5c410-f7bb-4d38-b6c7-df15429d71c3). This URL is typically an endpoint provided by a service or API, in this case, a Google Sheets API endpoint.

data: The data variable contains the information you want to send to the Google Sheets API. This could be form data, JSON data, or any other data format accepted by the API.

.then((response) => {...}): If the POST request is successful, the .then() function is called with the response from the server. In this case, it simply logs the response to the console.

.catch((error) => {...}): If an error occurs during the request, the .catch() function is called with the error object. Here, it logs the error to the console.

Overall, this code snippet allows your web application to send data to a Google Sheets document using a POST request. This can be useful for collecting and storing user data, form submissions, analytics, and more in a Google Sheets spreadsheet.
