const changeToPlainText = (text?: string) => {
  return text?.replace(/\n/g, '<br>');
};

export default changeToPlainText;
