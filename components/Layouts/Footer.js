import TextInput from 'components/Forms/TextInput'
import Img from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="footer border-t border-gray-200 bg-white text-gray-900 py-6 px-6 lg:px-0 text-center lg:text-left text-sm lg:text-base">
        <div className="container">
          <div>
            <a className="brand-logo relative" style={{ zIndex: '-1' }}>
              <Img src={'/images/logo.svg'} layout="fill" objectFit={'contain'} alt="vitamate logo" />
            </a>
          </div>
          <ul className="flex justify-center lg:justify-start py-6 font-bold text-center lg:text-left">
            <li>
              <Link href="https://www.vitamate.kr/">
                <a target="_blank" className="lg:inline-flex hover:text-primary-600">
                  회사소개
                </a>
              </Link>
            </li>
            <li className="ml-5">
              <Link href="/agreement">
                <a className="lg:inline-flex hover:text-primary-600">이용약관</a>
              </Link>
            </li>
            <li className="ml-5">
              <Link href="/agreement">
                <a className="lg:inline-flex hover:text-primary-600">개인정보취급방침</a>
              </Link>
            </li>
            <li className="ml-5">
              <Link href="/agreement">
                <a className="lg:inline-flex hover:text-primary-600">마케팅수신동의</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="container grid lg:grid-cols-3 gap-4 lg:gap-8 text-gray-600">
          <address className="not-italic mb-5 lg:col-span-2">
            <p className="font-bold">주식회사 비타메이트</p>
            <p>
              <span>대표자 김용만</span>
              <span className="px-3">사업자등록번호 305-88-01896</span>
              <span>통신판매신고번호제 2021-서울강남-06003호</span>
            </p>
            <p>(06221) 대한민국 서울시 강남구 테헤란로 222, 도원빌딩 2층</p>
            <p>222, 2nd Floor, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</p>
            <p className="text-sm block text-gray-400 pt-3">
              COPYRIGHT © <b className="text-gray-500">VITAMATE</b> Corp. All Rights Reserved.
            </p>
          </address>

          <article className="w-full">
            <ul>
              <li className="flex justify-center lg:justify-start">
                <h6 className="mr-3">고객센터</h6>
                <p>
                  1588-1588 <span className=" text-gray-400">/</span> help@vitamate.kr
                </p>
              </li>
              <li className="flex justify-center lg:justify-start">
                <h6 className="mr-3">비타메이트 영업문의</h6>
                <p>biz@vitamate.kr</p>
              </li>

              <li className="flex justify-center lg:justify-start">
                <h6 className="mr-3">비타메이트 제휴문의</h6>
                <p>partners@vitamate.kr</p>
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}
