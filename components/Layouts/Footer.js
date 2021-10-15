import TextInput from 'components/Forms/TextInput'
import Img from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="layout-footer footer border-t border-gray-200 bg-white text-gray-900 py-10">
        <div className="container px-6 lg:px-0 block lg:grid lg:grid-cols-2 place-content-center align-items-center">
          <a className="brand-logo relative mb-5">
            <Img src={'/images/logo.svg'} layout="fill" objectFit={'contain'} alt="vitamate logo" />
          </a>

          <div className="leading-snug mb-5 grid grid-cols-2 grid-rows-2 gap-2 lg:flex lg:justify-between lg:w-full lg:max-w-md lg:ml-auto lg:mr-0">
            <Link href="https://www.vitamate.kr/">
              <a target="_blank" className="lg:inline-flex hover:text-primary-600">
                회사소개
              </a>
            </Link>
            <Link href="/TermsOfService">
              <a className="lg:inline-flex hover:text-primary-600">이용약관</a>
            </Link>
            <Link href="/PrivacyPolicy">
              <a className="lg:inline-flex hover:text-primary-600">개인정보취급방침</a>
            </Link>
            <Link href="/MarketingAgree">
              <a className="lg:inline-flex hover:text-primary-600">마케팅수신동의</a>
            </Link>
          </div>
        </div>

        {/* address */}
        <div className="container px-6 lg:px-0 block lg:grid lg:grid-cols-2 leading-snug mt-3">
          <article className="w-full ">
            <address className="not-italic mb-4 leading-tight">
              <p>(06221) 대한민국 서울시 강남구 테헤란로 222, 도원빌딩 2층</p>
              <small className="text-gray-600">222, 2nd Floor, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</small>
            </address>

            <ul className="text-sm">
              <li className="flex mb-1">
                <span className="mr-2">
                  <Img src="/images/ic-tel.svg" width={20} height={20} alt="대표번호" />
                </span>
                <p>
                  <b className="text-black">고객센터</b> 1588-1588
                  <span className="ml-2">help@vitamate.kr</span>
                </p>
              </li>
              <li className="flex">
                <span className="mr-2">
                  <Img src="/images/ic-at.svg" width={20} height={20} alt="대표번호" />
                </span>
                <ul className="leading-snug">
                  <li className="">
                    <b className="text-black mr-1">비타메이트 영업문의</b>
                    <p className="inline-block">biz@vitamate.kr</p>
                  </li>
                  <li>
                    <b className="text-black mr-1">비타메이트 제휴문의</b>
                    <p className="inline-block">partners@vitamate.kr</p>
                  </li>
                </ul>
              </li>
            </ul>
          </article>

          <article className="w-full lg:text-right mt-8 lg:mt-0">
            <p className="text-sm block text-gray-400 leading-snug">
              COPYRIGHT © <b className="text-gray-500">VITAMATE</b> Corp. All Rights Reserved.
            </p>
          </article>
        </div>
      </footer>
    </>
  )
}
