import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ backgroundImage: string }>({
  name: "MainImage",
})((theme, { backgroundImage }) => ({
  mainImage: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    "min-width": "1024px",
    height: "640px",
    overflow: "hidden",
  },
  image: {
    height: "640px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`,
  },
  text: {
    position: `relative`,
    transition: `top 1s ease, opacity 0.7s ease`,
    color: "#fff",
    fontSize: "60px",
    fontWeight: 400,
    letterSpacing: `0.05em`,
    lineHeight: `1.15`,
    textShadow: `0 0 8px #000, 0 0 12px #000`,
    textAlign: `center`,
  },
  mainCopy: {
    position: "absolute",
    top: "calc(50% + 60px)",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)",
  },
}));
