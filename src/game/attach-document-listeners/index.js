export default () => {
  document.addEventListener('keypress', () => {
    const input = document.getElementById('input');
    input.focus();
  });
};
