import React, { useState } from 'react';
import './message.css';

function Message() {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can process the form data (e.g., send it to an API)
        console.log('Form Data:', { name, email, subject, message });
        
        // Clear the form after submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className='main-back'>
                    <div className='main-back-content'>
                        <h3 style={{ fontSize: '35px', fontWeight: 800, color: 'black' }}>
                            Send Us A Message
                        </h3>
                        <p style={{ width: '80%', margin: '0 auto', fontSize: '22px', fontWeight: 100, color: 'black' }}>
                            For the past decade, we have been creating high-performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services, Folio3 can create the right app that will meet all your business and industry needs.
                        </p>
                    </div>
                </div>

                <div style={{ width: '100%', margin: '0 auto', height: 'auto', marginTop: "-100px" }}>
                    <div className='for-form-width'>
                        <div id='contactus' className='form-part'>
                            <form onSubmit={handleSubmit}>
                                <div className="myclass">
                                    <input
                                        type='text'
                                        id='name' // Unique ID
                                        placeholder='Name'
                                        style={{
                                            flex: 1, marginRight: '10px', padding: '20px',
                                            borderRadius: '16px', border: "2px solid grey",
                                            background: "rgb(47, 49, 53,0.5)", color: "white", outline: 'none'
                                        }}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type='email'
                                        id='email' // Unique ID
                                        placeholder='Email'
                                        style={{
                                            flex: 1, padding: '20px',
                                            borderRadius: '16px', border: "2px solid grey",
                                            background: "rgb(47, 49, 53,0.5)", color: "white", outline: 'none'
                                        }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <input
                                    type='text'
                                    id='subject' // Unique ID
                                    placeholder='Subject'
                                    style={{
                                        width: '100%', padding: '20px', borderRadius: '16px',
                                        marginBottom: '15px', border: "2px solid grey",
                                        background: "rgb(47, 49, 53,0.5)", color: "white", outline: 'none'
                                    }}
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                                <textarea
                                    id='message' // Unique ID
                                    placeholder='Message'
                                    style={{
                                        width: '100%', padding: '10px', borderRadius: '16px',
                                        height: '300px', border: "2px solid grey",
                                        background: "rgb(47, 49, 53,0.5)", color: "white", outline: 'none'
                                    }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                                <button
                                    className='talk-btn'
                                    style={{ marginTop: '12px' }}
                                    type='submit'
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
