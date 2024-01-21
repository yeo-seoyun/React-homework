const Header = () => {
  return (
    <header>
      <div className="header m-auto w-[1050px]">
        <div className="user-menu flex items-center justify-end gap-4 pt-1 text-12pxr">
          <div className="hover:text-bluemong">
            <a href="/src/pages/signUp/">회원가입</a>
          </div>
          <div className="hover:text-bluemong">
            <a href="/src/pages/login/" className="login-before">
              로그인
            </a>
          </div>
          <div className="user-info relative ">
            <p className="flex gap-1 items-center hover:text-bluemong">
              <a href="/">고객센터</a>
              <span className="bg-ic-down h-2 w-2 bg-contain bg-center bg-no-repeat"></span>
            </p>
            <ul className="info-list invisible absolute z-50 w-24 border p-2 bg-white">
              <li className=" hover:text-bluemong">
                <a href="/">공지사항</a>
              </li>
              <li className=" hover:text-bluemong">
                <a href="/">자주하는 질문</a>
              </li>
              <li className=" hover:text-bluemong">
                <a href="/">1:1 문의</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-gnb flex items-center justify-between py-6">
          <a
            href="/"
            aria-label="로고"
            className="h-14 w-36 bg-main-logo bg-cover bg-center bg-no-repeat relative"
          ></a>

          <div className="gnb-search">
            <form
              action="/"
              className="flex items-center w-96 rounded-lg border border-skybluemong p-1"
            >
              <label className="sr-only">검색</label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="검색어를 입력해주세요"
                className="w-full outline-none p-2"
              />
              <button
                type="submit"
                className="search-button bg-ic-search h-10 w-10 bg-cover bg-center bg-no-repeat"
              ></button>
            </form>
          </div>

          <div className="flex gap-2">
            <a
              href="/"
              aria-label="배송지"
              className="bg-ic-location h-10 w-10 bg-cover bg-center bg-no-repeat "
            ></a>

            <a
              href="/"
              aria-label="찜하기"
              className="bg-ic-heart h-10 w-10 bg-cover bg-center bg-no-repeat"
            ></a>

            <a
              href="/src/pages/cart/"
              aria-label="장바구니"
              className="h-10 w-10 bg-ic-cart bg-cover bg-center bg-no-repeat relative"
            ></a>
          </div>
        </div>
      </div>

      <nav className="w-full bg-white shadow-md h-12">
        <div className="nav flex items-center justify-between m-auto w-[1050px] ">
          <div className="header-category">
            <a
              href="/"
              className="category-main h-12 gap-1 px-2 relative flex cursor-pointer items-center transition-all hover:text-bluemong"
            >
              <span className="bg-ic-category h-10 w-10 bg-contain bg-center bg-no-repeat"></span>
              <span> 카테고리 </span>
            </a>
            <ul className="category-list invisible absolute bg-white text-sm z-50">
              <li className="px-3 py-2 transition-all hover:bg-gray-100 hover:text-bluemong">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="/assets/header/ic-gift.png"
                    alt=""
                    className="w-8"
                  />
                  선물하기
                </a>
              </li>
              <li className="px-3 py-2 transition-all hover:bg-gray-100 hover:text-bluemong">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="/assets/header/ic-character.png"
                    alt=""
                    className="w-8"
                  />
                  캐릭터
                </a>
              </li>
              <li className="px-3 py-2 transition-all hover:bg-gray-100 hover:text-bluemong">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="/assets/header/ic-tool.png"
                    alt=""
                    className="w-8"
                  />
                  도구
                </a>
              </li>
            </ul>
          </div>
          <div className="header-nav">
            <ul className="flex justify-between gap-20 w-full">
              <li className="transition-all hover:text-bluemong">
                <a href="/src/pages/productList/#-created">신상품</a>
              </li>
              <li className="transition-all hover:text-bluemong">
                <a href="/src/pages/productList/#-recommend">베스트</a>
              </li>
              <li className="transition-all hover:text-bluemong">
                <a href="/">알뜰쇼핑</a>
              </li>
              <li className="transition-all hover:text-bluemong">
                <a href="/">특가/혜택</a>
              </li>
            </ul>
          </div>
          <div className="sub-search hidden">
            <form action="/" className="flex items-center">
              <label className="sr-only">검색</label>
              <input
                type="search"
                name="search"
                id="search-nav"
                placeholder="검색어를 입력해주세요"
                className="w-64 rounded-lg p-2 text-13pxr outline-none relative border border-skybluemong "
              />
              <button type="submit" className="search-button -translate-x-10">
                <img src="/assets/header/ic-search.svg" alt="검색" />
              </button>
            </form>
          </div>
          <div className="sub-cart hidden">
            <div className="flex gap-2">
              <a
                href="/"
                aria-label="배송지"
                className="bg-location-icon h-10 w-10 bg-cover bg-center bg-no-repeat "
              ></a>

              <a
                href="/"
                aria-label="찜하기"
                className="bg-heart-icon h-10 w-10 bg-cover bg-center bg-no-repeat"
              ></a>

              <a
                href="/src/pages/cart/"
                aria-label="장바구니"
                className="h-10 w-10 bg-cart-icon bg-cover bg-center bg-no-repeat relative"
              ></a>
            </div>
          </div>
          <div className="sub-notice leading-6 rounded-3xl border border-skybluemong px-2">
            <a href="/" className="text-13pxr text-gray-600">
              <strong className="mr-1 text-bluemong">미래</strong>배송안내
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
