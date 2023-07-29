export const emptyButtonOnClick = (event: { stopPropagation: () => void }) => {
  alert("button was clicked");
  event.stopPropagation();
};
