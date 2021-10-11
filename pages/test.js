import { useState } from 'react'
import TextInput from 'components/Forms/TextInput'

export default function Test() {
  return (
    <section className=" max-w-lg mx-auto py-20">
      <h1 className="py-4 text-2xl">Input Validate UI</h1>
      <hr className="mt-6" />

      {/* Error */}
      <h1 className="inline-block text-xl font-extrabold my-8">Input Error</h1>
      <div className="form-group error">
        <TextInput
          type="password"
          label="비밀번호"
          id="userPassword"
          value="123456!@#&%"
          placeholder="영어 대문자, 소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 8자리 이상 입력"
        >
          <p>8자리 이상 입력해주세요.</p>
        </TextInput>
      </div>
      <hr className="mt-6" />

      {/* Success */}
      <h1 className="inline-block text-xl font-extrabold my-8">Input Success</h1>
      <div className="form-group success">
        <TextInput
          type="password"
          label="비밀번호"
          id="userPassword"
          value="123456!@#&%"
          placeholder="영어 대문자, 소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 8자리 이상 입력"
        >
          <p>와우 통과!</p>
        </TextInput>
      </div>
    </section>
  )
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
