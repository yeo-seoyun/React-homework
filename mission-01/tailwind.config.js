import { range } from "lodash";
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 999),
      },
      fontSize: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 999),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
      backgroundImage: {
        "ic-down": "url('/src/assets/header/ic-down.svg')",
        "main-logo": "url('/src/assets/header/logo-emong.png')",
        "ic-search": "url('/src/assets/header/ic-search.svg')",
        "ic-location": "url('/src/assets/header/ic-location.svg')",
        "ic-heart": "url('/src/assets/header/ic-heart.svg')",
        "ic-cart": "url('/src/assets/header/ic-cart.svg')",
        "ic-category": "url('/src/assets/header/ic-category.png')",
        "ic-blog": "url('/src/assets/footer/ic-blog.png')",
        "ic-facebook": "url('/src/assets/footer/ic-facebook.png')",
        "ic-instagram": "url('/src/assets/footer/ic-instagram.png')",
        "ic-naverpost": "url('/src/assets/footer/ic-naverpost.png')",
        "ic-youtube": "url('/src/assets/footer/ic-youtube.png')",
        "ic-isms": "url('/src/assets/footer/ic-logo-isms.svg')",
        "ic-privacy": "url('/src/assets/footer/ic-logo-privacy.svg')",
        "ic-toss": "url('/src/assets/footer/ic-logo-tosspayments.svg')",
        "ic-woori": "url('/src/assets/footer/ic-logo-wooribank.svg')",
      },
    },
    colors: {
      bluemong: "rgb(2, 152, 228)",
      skybluemong: "rgb(104, 195, 241)",
    },
    fontFamily: {
      sans: ["noto-sans-kr", "sans-serif"],
    },
  },
  plugins: [],
};
