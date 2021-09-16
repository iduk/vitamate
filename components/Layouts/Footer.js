export default function Footer() {
  return (
    <>
      <div className="border-t border-gray-200">
        <div className="mx-auto container pt-4 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
              <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">서비스 약관</h2>
              <h2 className="cursor-pointer">개인정보취급약관</h2>
            </div>
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">유전자검사</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">건강설문</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">비타소식</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">고객센터</li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p> © 2021 VITAMATE. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
