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
        "ic-down": "url('/public/images/header/ic-down.svg')",
        "main-logo": "url('/public/images/header/logo-emong.png')",
        "ic-search": "url('/public/images/header/ic-search.svg')",
        "ic-location": "url('/public/images/header/ic-location.svg')",
        "ic-heart": "url('/public/images/header/ic-heart.svg')",
        "ic-cart": "url('/public/images/header/ic-cart.svg')",
        "ic-category": "url('/public/images/header/ic-category.png')",
        "ic-blog": "url('/public/images/footer/ic-blog.png')",
        "ic-facebook": "url('/public/images/footer/ic-facebook.png')",
        "ic-instagram": "url('/public/images/footer/ic-instagram.png')",
        "ic-naverpost": "url('/public/images/footer/ic-naverpost.png')",
        "ic-youtube": "url('/public/images/footer/ic-youtube.png')",
        "ic-isms": "url('/public/images/footer/ic-logo-isms.svg')",
        "ic-privacy": "url('/public/images/footer/ic-logo-privacy.svg')",
        "ic-toss": "url('/public/images/footer/ic-logo-tosspayments.svg')",
        "ic-woori": "url('/public/images/footer/ic-logo-wooribank.svg')",
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
