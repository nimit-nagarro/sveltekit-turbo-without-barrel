// src/stores/Store2.js
import { writable } from 'svelte/store';

export const text = writable('Initial text');

export function setText(newText) {
  text.set(newText);
}

export function clearText() {
  text.set('');
}
