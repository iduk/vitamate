import TextInput from 'components/Forms/TextInput'
import Img from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="footer border-t border-gray-200 bg-white text-gray-900 pt-12">
        <div className="container-view grid grid-cols-12 gap-x-8">
          <article className="col-span-8">
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

            <address className="not-italic mt-4">
              <h6 className="text-lg font-extrabold mb-1">Address</h6>
              <p>527, 12th Floor, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea</p>
              <p>대한민국 서울시 강남구 ​언주로 527,강남텔레피아빌딩 12층</p>
            </address>
          </article>

          <article className="col-span-4">
            <div>
              <h6 className="text-lg font-extrabold mb-2">메일링 구독 서비스</h6>
              <TextInput id="mailing" type="text" placeholder="이메일을 남겨주세요" />
            </div>
            <div className="mt-8">
              <h6 className="text-lg font-extrabold mb-2">SNS</h6>
              <div className="flex items-center">
                <Link href=".">
                  <a className="mr-3">
                    <Img src="/images/ic-twitter.svg" width={32} height={32} alt="twitter" />
                  </a>
                </Link>
                <Link href=".">
                  <a className="mr-3">
                    <Img src="/images/ic-instagram.svg" width={32} height={32} alt="twitter" />
                  </a>
                </Link>
                <Link href=".">
                  <a className="mr-3">
                    <Img src="/images/ic-facebook.svg" width={32} height={32} alt="twitter" />
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-8 border-t border-gray-200 text-gray-500">
          <article className="container-view py-4 flex justify-between items-center text-sm">
            <div className="flex">
              <Link href="/TermsOfService">
                <a className="mr-8 text-base hover:text-gray-900">서비스약관</a>
              </Link>
              <Link href="/PrivacyPolicy">
                <a className=" text-base hover:text-gray-900">개인정보취급방침</a>
              </Link>
            </div>
            <p className="text-sm">© VITAMATE Corp. All rights reserved.</p>
          </article>
        </div>
      </footer>
    </>
  )
}
