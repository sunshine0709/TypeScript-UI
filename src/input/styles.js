import { useTheme } from "../theme-provider";

const defaultStyle = {
  border: "1px solid",
  borderBottomColor: "ink.100",
  borderLeftColor: "ink.100",
  borderRightColor: "ink.100",
  borderTopColor: "ink.100",
  borderColor: "ink.100",
  bg: "white",
  _hover: {
    borderBottomColor: "ink.200",
    borderLeftColor: "ink.200",
    borderRightColor: "ink.200",
    borderTopColor: "ink.200",
    borderColor: "ink.200"
  },
  _disabled: {
    bg: "#F9F9FC",
    cursor: "not-allowed",
    pointerEvents: "none"
  },
  _focus: {
    borderBottomColor: "blue.300",
    borderLeftColor: "blue.300",
    borderRightColor: "blue.300",
    borderTopColor: "blue.300",
    borderColor: "blue.300",
    boxShadow: "0 0 0 3px rgba(170, 179, 255, 0.75)"
  },
  _invalid: {
    borderBottomColor: "red",
    borderLeftColor: "red",
    borderRightColor: "red",
    borderTopColor: "red",
    borderColor: "red"
  }
};

const unstyledStyle = {
  bg: "transparent",
  px: undefined,
  height: undefined
};

const variantProps = props => {
  switch (props.variant) {
    case "unstyled":
      return unstyledStyle;
    default:
      return defaultStyle;
  }
};

const baseProps = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  transition: "all 0.2s",
  outline: "none",
  borderRadius: "6px",
  p: "14px 16px"
};

export const inputSizes = {
  default: {
    fontSize: "body.small",
    height: 7,
    lineHeight: "base"
  }
};

const useInputStyle = props => {
  const theme = useTheme();

  const _props = { ...props, theme };

  return {
    width: props.isFullWidth ? "100%" : undefined,
    ...baseProps,
    ...defaultStyle
  };
};

export default useInputStyle;
