export default function enableDarkMode() {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    if (root.classList.length === 1) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }
}

