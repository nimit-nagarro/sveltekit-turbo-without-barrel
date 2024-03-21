// src/utils/Utils2.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}

export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
