import React, { useState } from 'react';
import './PromptInput.css'; // Import custom styles

const PromptInput = () => {
    const [prompt, setPrompt] = useState('');
    const [chat, setChat] = useState([]);

    const handleChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim()) {
            setChat([...chat, { prompt, answer: 'Yes, the University of Moratuwa has an engineering faculty. The Faculty of Engineering is the largest faculty in the university, comprising 12 academic departments with approximately 250 academic staff and around 4000 undergraduate and postgraduate students. It offers a Bachelor of the Science of Engineering degree in 10 disciplines and a Bachelor of Design degree in Fashion Design and Product Development, as well as various postgraduate courses and research degrees.' }]);
            setPrompt('');
        }
    };

    return (
        <div className="container">
            <div className="border border-secondary mt-5 mb-5" style={{ height: '500px', position: 'relative', overflowY: 'auto' }}>
                <div className="p-3">
                    {chat.map((entry, index) => (
                        <div key={index} className="mb-3">
                            <div className="prompt">
                                <strong>Prompt:</strong> {entry.prompt}
                            </div>
                            <div className="answer">
                                <strong>Answer:</strong> {entry.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '90%' }}>
                    <input
                        type="text"
                        className="form-control prompt-input"
                        placeholder="Enter Prompt Here"
                        value={prompt}
                        onChange={handleChange}
                        style={{ borderRadius: '20px', padding: '10px' }}
                    />
                </form>
            </div>
        </div>
    );
};

export default PromptInput;


