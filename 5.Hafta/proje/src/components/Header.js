import React from 'react'//rfce


function Header() {
  return (
    
     <section> 
        <div class="form-box">
            <div class="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" onclick="login()">Log In</button>
                <button type="button" class="toggle-btn" onclick="register()">Register</button>


            </div>
            
            <form id="Login" class="input-group">
                <input type="text" class="input-field" placeholder="Enter Username" required/>
                <input type="password" class="input-field" placeholder="Enter Password" required/>
                <a href="#">Lost Your Password</a>
                <button type="submit" class="submit-btn">Login</button>
            </form>
            <form id="Register" class="input-group">
                <input type="text" class="input-field" placeholder="Enter Username" required/>
                <input type="password" class="input-field" placeholder="Enter Password" required/>
                <input type="email" class="input-field" placeholder="Enter Email" required/>

                <a href="#">By registering, you agree to the Terms, Data Policy and Cookies Policy.</a>
                <button type="submit" class="submit-btn">Login</button>
            </form>
            
        </div>

        
        

    </section>   
    
  )
  

}

export default Header