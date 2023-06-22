const changeToPlainText = (text?: string) => {
  return text?.replace(/ /g, '\u00A0');
};

export default changeToPlainText;
