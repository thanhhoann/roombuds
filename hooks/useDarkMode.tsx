export default function useDarkMode() {
  const root = window.document.documentElement;
  if (root.classList.length === 1) {
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
  }
}
