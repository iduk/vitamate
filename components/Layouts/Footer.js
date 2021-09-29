import TextInput from 'components/Forms/TextInput'
import Img from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="layout-footer footer border-t border-gray-200 bg-white text-gray-900 pt-12">
        <div className="px-6 lg:px-0 container flex flex-col lg:flex-row lg:justify-between lg:flex-wrap">
          <article className="lg:w-8/12 w-full">
            <div>
              <span className="brand-logo">
                <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
              </span>
            </div>
            <ul className="mt-6">
              <li className="flex ">
                <span className="mr-3">
                  <Img src="/images/ic-tel.svg" width={24} height={24} alt="대표번호" />
                </span>
                <p>+82 2 545 1926 / 82 10 2890 2906</p>
              </li>
              <li className="flex ">
                <span className="mr-3">
                  <Img src="/images/ic-at.svg" width={24} height={24} alt="대표번호" />
                </span>
                <a href="mailto:boss@vitamate.kr" className="underline">
                  boss@vitamate.kr
                </a>
              </li>
            </ul>
          </article>

          <article className="lg:w-4/12 w-full">
            <div>
              <address className="not-italic">
                <h6 className="text-lg font-extrabold mb-1">Address</h6>
                <p>527, 12th Floor, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea</p>
                <p>대한민국 서울시 강남구 ​언주로 527,강남텔레피아빌딩 12층</p>
              </address>
            </div>
          </article>
          <div className="mt-8 w-full border-t border-gray-200 text-gray-500">
            <article className="container py-4 text-sm block w-full lg:flex lg:justify-between lg:items-center">
              <div className="flex">
                <Link href="/TermsOfService">
                  <a className="mr-8 text-base hover:text-gray-900">서비스약관</a>
                </Link>
                <Link href="/PrivacyPolicy">
                  <a className=" text-base hover:text-gray-900">개인정보취급방침</a>
                </Link>
              </div>
              <p className="text-sm lg:p-0 py-4">© VITAMATE Corp. All rights reserved.</p>
            </article>
          </div>
        </div>
      </footer>
    </>
  )
}
