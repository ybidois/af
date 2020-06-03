// Add your theme styles here.
// See https://theme-ui.com/theme-spec.
export default {
  colors: {
    primary: "#D92414",
    text: "#000000",
    black2: "#4C4C4C",
    brown1: "#590F08",
    secondary: "#66B388",
    accent: "#09D7D9",
    pink1: "#DF6257",
    pink3: "#F2C0BB",
    pink4: "#F8DFDD",
    yellow1: "#F0E088",
  },
  fonts: {
    body: "p22-underground, sans-serif",
    hero: "source-serif-pro, serif",
    heading: "p22-underground-pc, sans-serif",
    branding: "p22-fllw-eaglefeather, sans-serif",
    logo: "p22-fllw-eaglefeather-sc, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
  fontWeights: {
    caption: 400,
    body: 500,
    bold: 700,
    heavy: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    branding: {
      fontFamily: "logo",
      lineHeight: "heading",
      fontWeight: "bold",
      color: "primary",
      fontSize: 6,
    },
    lead: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      mb: 4,
      color: "text",
    },
    caption: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "caption",
      color: "black2",
      fontSize: 0,
    },
    small: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "caption",
      color: "black2",
      fontSize: 0,
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      fontWeight: "heavy",
    },
    secondary: {
      fontFamily: "body",
      fontWeight: "heavy",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      fontSize: 6,
      fontFamily: "hero",
      fontWeight: "heavy",
      color: "black1",
      textAlign: "left",
    },
    h2: {
      fontSize: [5, 6, 7],
      fontFamily: "heading",
      fontWeight: "body",
      color: "black1",
      textAlign: "left",
    },
    p: {
      fontSize: [1, 2],
      fontFamily: "body",
      fontWeight: "body",
      color: "black1",
    },
    captions: {
      fontSize: [4, 5],
      fontFamily: "body",
      fontWeight: "body",
      color: "black1",
    },
  },
};
