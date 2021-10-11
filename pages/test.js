import { useState } from 'react'

export default function Test() {
  return <div></div>
}

// const Data = [
//   {
//     question: 'What 1?',
//     answer: 'answer 1',
//   },
//   {
//     question: 'What 2',
//     answer: 'answer 2',
//   },
//   {
//     question: 'What 3?',
//     answer: 'answer 3',
//   },
// ]

// const Test = () => {
//   const [faq, setFaq] = useState(null)

//   const toggle = (index) => {
//     // If the clicked qn is already active, then collapse it
//     if (faq === index) {
//       return setFaq(null)
//     }
//     // Otherwise show the answer to the clicked qn
//     setFaq(index)
//   }

//   return (
//     <div>
//       {Data.map((item, index) => {
//         return (
//           <div key={index}>
//             <h1 onClick={() => toggle(index)}>{item.question}</h1>
//             {faq === index ? (
//               <div>
//                 <p>{item.answer}</p>
//               </div>
//             ) : null}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
