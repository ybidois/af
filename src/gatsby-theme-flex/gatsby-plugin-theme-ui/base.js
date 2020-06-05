import { darken, invert } from "@theme-ui/color";

const headingStyles = {
  fontFamily: `heading`,
  lineHeight: `heading`,
  fontWeight: `heading`,
  color: `text`,
  mt: 6,
  mb: 2,
  a: {
    color: `text`,
    textDecoration: `none`,
  },
  textAlign: `left`,
};

const buttonStyles = {
  fontWeight: `heavy`,
  appearance: `none`,
  display: `inline-flex`,
  textAlign: `center`,
  lineHeight: `inherit`,
  textDecoration: `none`,
  fontSize: [1, 2],
  px: 4,
  py: 2,
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderRadius: 4,
  cursor: `pointer`,
};

export default {
  breakpoints: [`450px`, `768px`, `992px`, `1200px`],
  initialColorModeName: `light`,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#D92414",
    secondary: "#66B388",
    muted: "#f6f6f6",
    highlight: "#efeffe",
    gray: "#4C4C4C",
    accent: "#09D7D9",
    black2: "#4C4C4C",
    brown1: "#590F08",
    pink1: "#DF6257",
    pink3: "#F2C0BB",
    pink4: "#F8DFDD",
    yellow1: "#F0E088",
    modes: {
      dark: {
        text: "#fff",
        background: "#060606",
        primary: "#ffa7c4",
        secondary: "#82aaff",
        muted: "#191919",
        highlight: "#29112c",
        gray: "#4C4C4C",
        accent: "#c0f",
      },
    },
    prism: {
      text: `#ffffff`,
      background: `#011627`,
      comment: `#809393`,
      string: `#addb67`,
      var: `#d6deeb`,
      number: `#f78c6c`,
      constant: `#82aaff`,
      punctuation: `#c792ea`,
      className: `#ffc98b`,
      tag: `#ffa7c4`,
      boolean: `#ff5874`,
      property: `#80cbc4`,
      namespace: `#b2ccd6`,
      highlight: `hsla(207, 95%, 15%, 1)`,
    },
  },
  fonts: {
    body: `p22-underground, sans-serif`,
    heading: `p22-underground-pc, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    hero: "source-serif-pro, serif",
    branding: "p22-fllw-eaglefeather, sans-serif",
    logo: "p22-fllw-eaglefeather-sc, sans-serif",
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
  fontWeights: {
    caption: 400,
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 600,
    heavy: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: 1200,
  },
  space: [
    0,
    4,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    640,
    768,
  ],
  shadows: {
    default: `0 1px 3px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .24)`,
    md: `0 3px 6px rgba(0, 0, 0, .15), 0 2px 4px rgba(0, 0, 0, .12)`,
    lg: `0 10px 20px rgba(0, 0, 0, .15), 0 3px 5px rgba(0, 0, 0, .1)`,
    xl: `0 15px 25px rgba(0, 0, 0, .15), 0 5px 10px rgba(0, 0, 0, .05)`,
    xxl: `0 20px 40px rgba(0, 0, 0, .2)`,
    none: `none`,
  },
  layout: {
    container: {
      paddingLeft: 4,
      paddingRight: 4,
    },
  },
  styles: {
    root: {
      fontFamily: `body`,
      lineHeight: `body`,
      fontWeight: `body`,
      fontSize: 3,
      color: `text`,
      backgroundColor: `background`,
      display: `flex`,
      flexDirection: `column`,
      minHeight: `100vh`,
    },
    h1: {
      ...headingStyles,
      fontFamily: `hero`,
      fontSize: [6, 6, 10],
      mb: [3],
    },
    h2: {
      ...headingStyles,
      fontSize: [5, 5, 7],
    },
    h3: {
      ...headingStyles,
      fontSize: [3, 5, 6],
    },
    h4: {
      ...headingStyles,
      fontSize: [2, 4, 5],
    },
    img: {
      maxWidth: `100%`,
      height: `auto`,
    },
    a: {
      textDecoration: `none`,
      color: `primary`,
      ":hover": {
        textDecoration: `underline`,
      },
    },
    p: {
      fontSize: [1, 2],
      m: 0,
      "+ p, + button": {
        mt: [2, 4],
      },
    },
    blockquote: {
      fontWeight: `bold`,
      p: {
        fontSize: [4, 6, 6],
        lineHeight: [1.4],
      },
    },
    inlineCode: {
      color: `text`,
      backgroundColor: `muted`,
      fontFamily: `monospace`,
      fontSize: 2,
      borderRadius: 4,
      p: 1,
    },
    pre: {
      color: `prism.text`,
      backgroundColor: `prism.background`,
      fontFamily: `monospace`,
      fontSize: 2,
      padding: [2, 4],
      tabSize: 4,
      hyphens: `none`,
      my: [4, 6],
      overflow: `auto`,
      borderRadius: 4,
      whiteSpace: `pre-wrap`,
      ".attr-name": {
        fontStyle: `italic`,
      },
      ".comment": {
        color: `prism.comment`,
      },
      ".attr-name, .string, .url": {
        color: `prism.string`,
      },
      ".variable": {
        color: `prism.var`,
      },
      ".number": {
        color: `prism.number`,
      },
      ".builtin, .char, .constant, .function": {
        color: `prism.constant`,
      },
      ".punctuation, .selector, .doctype": {
        color: `prism.punctuation`,
      },
      ".class-name": {
        color: `prism.className`,
      },
      ".tag, .operator, .keyword": {
        color: `prism.tag`,
      },
      ".boolean": {
        color: `prism.boolean`,
      },
      ".property": {
        color: `prism.property`,
      },
      ".namespace": {
        color: `prism.namespace`,
      },
    },
  },
  buttons: {
    primary: {
      ...buttonStyles,
      bg: `primary`,
      borderColor: `primary`,
      color: invert(`text`),
      "&:hover": {
        bg: darken(`primary`, 0.2),
        borderColor: darken(`primary`, 0.2),
      },
    },
    secondary: {
      ...buttonStyles,
      bg: `secondary`,
      borderColor: `secondary`,
      color: invert(`text`),
      "&:hover": {
        bg: darken(`secondary`, 0.2),
        borderColor: darken(`secondary`, 0.2),
      },
    },
    tertiary: {
      ...buttonStyles,
      bg: `transparent`,
      color: `primary`,
      border: 0,
      py: 0,
      "&:hover": {
        bg: `transparent`,
        color: `accent`,
      },
    },
    link: {
      ...buttonStyles,
      color: `primary`,
      px: 0,
      py: 0,
      bg: `transparent`,
      borderColor: `transparent`,
    },
  },
  text: {
    small: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "caption",
      color: "black2",
      fontSize: [0, 1],
    },
    branding: {
      fontFamily: "logo",
      lineHeight: "heading",
      color: "primary",
      textDecoration: `none`,
      fontWeight: `bold`,
      fontSize: [6],
    },
    quote: {
      fontSize: [4, 5],
      lineHeight: [1.4],
      fontStyle: `italic`,
    },
    lead: {
      fontSize: [2, 3],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      color: `text`,
      mb: 4,
      strong: {
        color: `accent`,
      },
    },
    copyright: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "caption",
      color: "pink1",
      fontSize: 0,
    },
  },
  image: {
    avatar: {
      borderRadius: `100%`,
      width: `50px`,
      height: `50px`,
    },
  },
  card: {
    default: {
      bg: `background`,
      boxShadow: `md`,
      borderRadius: 3,
      maxWidth: [`none`, `500px`],
      img: {
        width: `100%`,
        height: `auto`,
      },
      "> div": {
        p: [4, 6],
      },
    },
    icon: {
      textAlign: `center`,
      maxWidth: [`none`, `350px`],
      figure: {
        width: [`25%`, `40%`],
        height: `auto`,
        m: `0 auto`,
      },
      "> div": {
        py: [4, 6],
      },
    },
  },
};
