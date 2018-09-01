export const handlers = [];

document.addEventListener('click', () => {
  handlers.forEach(handler => handler());
});