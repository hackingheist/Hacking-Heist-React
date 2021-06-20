import React,{useState} from 'react'
import './style.scss'
import {Accordion} from './Accordion.jsx'


export default function FAQ() {
    const [Faqs,setFaqs] =useState([
        {
            question:"What is Hacking Heist?",
            answer:"Hacking Heist is a hackathon that values participant experience and mentorship over competitiveness and points. Come to have fun with your friends, learn something new, eat s'mores, and have a generally awesome time. We have all sorts of crazy activities planned for you...come find out the rest!",
            open:false
        },
        {
            question:"Can I attend if I don’t want to participate in hacking?",
            answer:"Although Hacking Heist is a hackathon, there is no requirement to hack if you don’t want to. If hacking isn’t your thing, you can still participate in our exciting workshops and fun mini-events.",
            open:false
        },
        {
            question:"What's a Hackathon?",
            answer:"A hackathon is a creative marathon all about building something cool. Students are encouraged to come up with an idea, form teams, and then build out that idea (typically through programming!) into a product in 36 hours. We want you to take something you love (sports, art, camping, anything!) and combine it with technology to make something awesome. It's a great time to push the envelope and learn some new skills.",
            open:false
        },
        {
            question:"Is Team necessary to participate?",
            answer:"Projects are submitted by teams to DevPost. You don't need to finalize your team until project submissions are due during the event. You may work individually or in a team of up to four campers. Don’t have a team in mind? No problem! Hacking Heist will kick off with an optional team formation event.",
            open:false
        },
        {
            question:"Do I have to be experienced to attend?",
            answer:"No prior experience is required to attend Bitcamp. Exciting workshops and helpful mentors will give you the resources to help you build your dream project. Just come with your head and a willingness to learn",
            open:false
        },
        {
            question:"Who can apply to Hacking Heist?",
            answer:"Any college student is more than welcome to apply to Hacking Heist.",
            open:false
        },
        {
            question:"Is it okay if I don’t have an idea or team?",
            answer:"No idea? No team? No problem! There will be dedicated events during Bitcamp for idea creation and team formations.",
            open:false
        },
        {
            question:"Is Hacking Heist free to attend?",
            answer:"Yes! There is no cost to attend Hacking Heist.",
            open:false
        },
        {
            question:"Can I attend if I’m a minor (under 18)?",
            answer:"Unfortunately, we are unable to accommodate minors at this time.",
            open:false
        },
        {
            question:"Other questions?",
            answer:"Just email us at support@hackingheist.tech",
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
