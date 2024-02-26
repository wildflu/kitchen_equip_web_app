


// FAQItem.js
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAnswer = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="faq-item" onClick={toggleAnswer}>
            <div className="question">{question}</div>
            {
                isExpanded && 
                <div className="answer">{answer}</div>
            }
        </div>
    );
};

export default FAQItem;
