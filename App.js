
import React from 'react';
import './App.css'; 

function SignupPage() {
  return (
    <div className="content-container">
      <div className="left-column">
        <div>
        <h1 className="heading">Learn to paint by watching others</h1>
        </div>
        <div>
        <p className="paragraph">
          See how experienced painters create art in real-time. Watching
          scripted tutorials is great, but understanding how artists think is invaluable.
        </p>
        </div>
      </div>
      
      <div className="right-column">
      <div>
      <div className="trial">
          Try it free for 7 days then \$20/mo. there after
        </div> 
      </div>
        <form className="signup-form">
          <input className="input-field"  placeholder="First Name" />
          <input className="input-field"  placeholder="Last Name" />
          <input className="input-field"  placeholder="Email Address" />
          <input className="input-field"  placeholder="Password" />
          <button type="submit" className="submit-button">
          CLAIM YOUR FREE TRIAL
          </button>
          <p className="terms">
            By clicking the button you are accepting <a href="/terms">Term & Condition</a>
          </p>
        </form>
      </div>
   </div>
  );
}

export default SignupPage;

