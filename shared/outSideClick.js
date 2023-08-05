export const outSideClick = (refItem, setter) => {
  function handleClickOutside(e) {
    if (refItem.current && !refItem.current.contains(e.target)) {
      setter(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};
