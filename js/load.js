// load.js

export async function loadSectionByHash() {
  const sections = [
    { id: "menu-section", file: "menu.html" },
    { id: "gallery-section", file: "gallery.html" },
    { id: "contact-section", file: "contact.html" },
  ];

  for (const { id, file } of sections) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file} (${res.status})`);

      const data = await res.text();
      const section = document.getElementById(id);
      if (section) {
        section.innerHTML = data;
      } else {
        console.warn(`Element with id "${id}" not found in DOM.`);
      }
    } catch (err) {
      console.warn(`Could not load ${file}: ${err.message}`);
    }
  }
}
