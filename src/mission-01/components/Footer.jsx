const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200">
      <section className="footer-info m-auto flex w-[1050px] justify-between gap-2 py-8">
        <article className="info-left">
          <h1 className="sr-only">고객센터</h1>
          <div className="font-bold">
            <h2 className="pb-2 text-xl font-medium">고객행복센터</h2>
            <div className="flex items-end gap-3">
              <strong className="text-3xl">1644-1107</strong>
              <span>월~토요일 오전 7시 ~ 오후 6시</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-4 text-sm">
            <div className="flex gap-4">
              <button type="button" className="w-140pxr rounded-sm border">
                카카오톡 문의
              </button>
              <span className="text-gray-500">
                <p>월~토요일 ‣ 오전 7시 ~ 오후 6시</p>
                <p>일/공휴일 ‣ 오전 7시 ~ 오후 1시</p>
              </span>
            </div>
            <div className="flex gap-4">
              <button type="button" className="w-140pxr rounded-sm border">
                1:1문의
              </button>
              <span className="text-gray-500">
                <p>365일</p>
                <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
              </span>
            </div>
            <div className="flex gap-4">
              <button type="button" className="w-140pxr rounded-sm border">
                대량주문 문의
              </button>
              <span className="text-gray-500">
                <p>월~금요일 ‣ 오전9시 ~ 오후6시</p>
                <p>점심시간 ‣ 낮 12시 ~ 오후 1시</p>
              </span>
            </div>
            <p className="text-xs">
              비회원 문의:
              <a href="/" className="text-indigo-700">
                help@emong.com
              </a>
            </p>
          </div>
        </article>

        <article className="info-right">
          <h2 className="sr-only">마켓정보</h2>
          <div className="flex gap-3 text-sm">
            <a href="/">에몽소개</a>
            <a href="/">에몽소개영상</a>
            <a href="/">인재채용</a>
            <a href="/">이용약관</a>
            <a href="/">개인정보처리방침</a>
            <a href="/">이용안내</a>
          </div>
          <div className="pt-4 text-xs text-gray-500">
            <p>
              법인명(상호): 마켓에몽
              <span>|</span>
              사업자등록번호 : 123-45-56789
              <a href="/" className="text-indigo-700">
                사업자정보 확인
              </a>
            </p>
            <p>통신판매업: 제 2024-서울종로-01040 호</p>
            <p>
              주소: 서울특별시 종로구 미래월드 111
              <span>|</span>
              대표이사: 이정현
            </p>
            <p>
              채용문의:
              <a href="/" className="text-indigo-700">
                em@emong.com
              </a>
            </p>
            <p>팩스: 123-456-7890</p>
          </div>
          <div className="flex gap-3 pt-5">
            <a
              href="/"
              aria-label="네이버블로그"
              className="w-10 h-10 bg-ic-blog bg-cover bg-center bg-no-repeat relative"
            ></a>
            <a
              href="/"
              aria-label="페이스북"
              className="w-10 h-10 bg-ic-facebook bg-cover bg-center bg-no-repeat relative"
            ></a>
            <a
              href="/"
              aria-label="인스타그램"
              className="w-10 h-10 bg-ic-instagram bg-cover bg-center bg-no-repeat relative"
            ></a>
            <a
              href="/"
              aria-label="네이버포스트"
              className="w-10 h-10 bg-ic-naverpost bg-cover bg-center bg-no-repeat relative"
            ></a>
            <a
              href="/"
              aria-label="유튜브"
              className="w-10 h-10 bg-ic-youtube bg-cover bg-center bg-no-repeat relative"
            ></a>
          </div>
        </article>
      </section>

      <section className="footer-service m-auto flex w-[1050px] justify-between border-t-2 border-gray-200 py-10 text-10pxr text-gray-400">
        <button className="flex items-center gap-2 text-start">
          <p className="w-9 h-9 bg-ic-isms bg-contain bg-center bg-no-repeat"></p>
          <p>
            [인증범위] 컬리 쇼핑몰 서비스 개발•운영
            <br />
            (심사받지 않은 물리적 인프라 제외)
            <br />
            [유효기간] 2024.01.15 ~ 2025.01.14
          </p>
        </button>
        <button className="flex items-center gap-2 text-start">
          <p className="w-9 h-9 bg-ic-privacy bg-contain bg-center bg-no-repeat"></p>
          <p>
            개인정보보호 우수 웹사이트
            <br />
            개인정보처리시스템 인정 (ePRIVACY PLUS)
          </p>
        </button>
        <button className="flex items-center gap-2 text-start">
          <p className="w-28 h-9 bg-ic-toss bg-contain bg-center bg-no-repeat"></p>
          <p>
            토스페이먼츠 구매안전(에스크로)
            <br />
            서비스를 이용하실 수 있습니다.
          </p>
        </button>
        <button className="flex items-center gap-2 text-start">
          <p className="w-9 h-9 bg-ic-woori bg-contain bg-center bg-no-repeat"></p>
          <p>
            고객님이 현금으로 결제한 금액에 대해 우리은행과
            <br />
            채무지급보증 계약을 체결하여 안전거래를 보장하고
            <br />
            있습니다.
          </p>
        </button>
      </section>

      <section className="footer-copy bg-gray-50 p-10 text-center">
        <p className="m-auto w-[1050px] text-10pxr text-gray-400">
          &copy;EMONG.ALL RIGHTS RESERVED
        </p>
      </section>
    </footer>
  );
};

export default Footer;
