import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <main>
        <h1>Contact Us</h1>
        <form>
            <div>
                <label>Name</label>
                <input type='text' required placeholder='abc'/>
            </div>
            <div>
                <label>Email</label>
                <input type='email' required placeholder='xyz@gmail.com'/>
            </div>
            <div>
                <label>Message</label>
                <input type='text' required placeholder="Tell us about something.."/>
            </div>
            <button type='submit'>send</button>
        </form>
        
    </main>

    </div>
  )
}

export default Contact