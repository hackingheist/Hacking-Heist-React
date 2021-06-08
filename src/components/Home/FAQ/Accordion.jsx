import React from 'react'
import './style.scss'

export function Accordion({faq,index,toggleFAQ}) {
    return (
        <div 
            className={'accordion'+(faq.open ? '-open':'')}
            key={index}
            onClick={()=> toggleFAQ(index)}
            >
            <div className='accordion-question'>{faq.question}</div>
            <div className='accordion-answer'>{faq.answer}</div>
        </div>
        
    )
};