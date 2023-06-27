const changeToHtml = (text: string | undefined) => {
  if (!text) return '';

  return text?.replace(/\n/g, '<br/>');
};

export default changeToHtml;
