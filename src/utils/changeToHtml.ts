const changeToHtml = (text?: string) => {
  return text?.replace(/\n/g, '<br/>');
};

export default changeToHtml;
