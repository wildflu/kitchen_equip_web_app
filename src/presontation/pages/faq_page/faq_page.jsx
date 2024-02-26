import FAQItem from "../../components/cards/faq_card/faq_card";


function FaqPage() {

    const faqData = [
        { id: 1, question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { id: 2, question: 'Why use React?', answer: 'React allows for the creation of reusable UI components, making it easier to manage complex UIs.' },
        { id: 2, question: 'Why use React?', answer: 'React allows for the creation of reusable UI components, making it easier to manage complex UIs.' },
        { id: 2, question: 'Why use React?', answer: 'React allows for the creation of reusable UI components, making it easier to manage complex UIs.' },
        { id: 2, question: 'Why use React?', answer: 'React allows for the creation of reusable UI components, making it easier to manage complex UIs.' },
        { id: 2, question: 'Why use React?', answer: 'React allows for the creation of reusable UI components, making it easier to manage complex UIs.' },
    ];


    return (
        <div className="faq_page">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqData.map(item => (
                    <FAQItem key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
            <h4> 
                You Do Have Question !?
            </h4>
            <div className="form_add_question">
                <input type="text" placeholder="Your Question"/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default FaqPage;