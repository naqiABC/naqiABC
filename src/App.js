// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <form>
      <div className="page">
        LOgin Page
      </div>
    <div className="container">
      
      <label htmlFor="uname"><b>First name</b></label>
        <input type="text" placeholder="Enter first name" name="uname" required>
</input>

<label htmlFor="uname"><b>last name</b></label>
        <input type="text" placeholder="Enter last name" name="uname" required>
</input>
<label htmlFor="uname"><b>email</b></label>
        <input type="text" placeholder="Enter email" name="uname" required>
</input>
<label htmlFor="uname"><b>password</b></label>
        <input type="text" placeholder="Enter password" name="uname" required>
</input>

<button type="submit">Login</button>

      
    </div>

<div className="container">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">forgot <a href="#">password?</a></span>
  </div>
    
    
    </form>
    </>
  );
}

export default App;
