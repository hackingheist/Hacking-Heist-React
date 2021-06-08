import React,{useState} from 'react'
import './style.scss'
import {Accordion} from './Accordion.jsx'


export default function FAQ() {
    const [Faqs,setFaqs] =useState([
        {
            question:"Question1",
            answer:"Answer1",
            open:false
        },
        {
            question:"Question2",
            answer:"Answer2",
            open:false
        },
        {
            question:"Question3",
            answer:"Answer3",
            open:false
        },
        {
            question:"Question4",
            answer:"Answer4",
            open:false
        },
        {
            question:"Question5",
            answer:"Answer5",
            open:false
        },
        {
            question:"Question6",
            answer:"Answer6",
            open:false
        },
        {
            question:"Question7",
            answer:"Answer7",
            open:false
        },
        {
            question:"Question8",
            answer:"Answer8",
            open:false
        },
        {
            question:"Question9",
            answer:"Answer9",
            open:false
        },
        {
            question:"Question10",
            answer:"Answer10",
            open:false
        }
    ]);

     const toggleFAQ = index =>{
         setFaqs(Faqs.map((faq, i)=>{
            if(i === index){
                faq.open = !faq.open
            }else{
                faq.open = false;
            }
            return faq;
         }))
     }

    return (
        <div className='faq'>
            <h1 className='title'>FAQs</h1>
            <div className="grid">
                {Faqs.map((faq,i) => {
                    return <Accordion faq={faq} index={i} toggleFAQ={toggleFAQ} />
                })}
            </div>
        </div>
    )
}
