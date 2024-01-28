## mission - 01
Vanilla-project에서 구현한 인터페이스의 일부를 React로 렌더링.

---

### 작업 환경
vite와 tailwind를 사용

---

### 과정

프로젝트에서 담당했던 페이지 전부를 만들지는 못 하였지만 일단
Header와 Footer를 component로 분리하여 적용 해보았다.

#### 폴더 구성
![스크린샷 2024-01-21 212202](https://github.com/ryujinzz/react-homework/assets/128555982/42c27e10-226d-4c64-9345-daec1eadfda5)

#### 컴포넌트 분리
##### Header.jsx
```jsx
const Header = () => {
  return ( ... )
};

export default Header;
```

##### Footer.jsx
```jsx
const Footer = () => {
  return ( ... )
};

export default Footer;
```

##### main.jsx에서 불러오기
```jsx
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
```

#### main.jsx
```jsx
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.querySelector("body")).render(
  <main>
    <Header />
    <section className="w-full h-screen text-center flex">
      <h1 className="text-7xl m-auto">React HomeWork</h1>
    </section>
    <Footer />
  </main>
);
```

---

*tailwind css의 color적용이 되지 않아 CDN 적용*
```html
    <script src="https://cdn.tailwindcss.com"></script>
```

---

## 결과
![mainpage](https://github.com/ryujinzz/react-homework/assets/128555982/69980cf1-d2bc-4126-a8f4-79775e4620a8)
