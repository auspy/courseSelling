export const emptyButtonOnClick = (event: { stopPropagation: () => void }) => {
  alert("button was clicked");
  event.stopPropagation();
};
export const convertCamelCaseToSentence = (camelCase: string) => {
  const sentence = camelCase.replace(/([A-Z])/g, " $1");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};
