# Apip See Portfolio

This project is a simple photography showcase website for GitHub Pages. It uses only HTML, CSS, and JavaScript, which makes it easy for beginners to understand and edit.

## Project structure

```text
apip-photo-showcase/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── img/
│   │   ├── profile.jpg
│   │   ├── gallery/
│   │   └── cover.jpg
│   └── icon/
│       └── favicon.png
└── README.md
```

## What each folder does

### apip-photo-showcase/
This is the main folder for the website. Everything that belongs to the portfolio lives inside it.

### index.html
This is the main page for the website. It contains the content the visitor sees in the browser, such as the hero section, about section, and contact section.

### assets/
This folder stores all the files used by the website, including CSS, JavaScript, images, and icons.

### assets/css/
This folder holds the styling for the page. The file `style.css` controls colors, layout, spacing, fonts, and responsiveness.

### assets/js/
This folder holds JavaScript behavior for the page. The file `script.js` can update text, add simple interactions, and improve the page without needing a framework.

### assets/img/
This folder is where the photographs live. It is the correct place for the cover image and profile photo. The `gallery/` folder is kept empty for now because this project intentionally does not include a full gallery yet.

### assets/img/gallery/
This folder is reserved for future gallery photos. It is intentionally left empty at the start so the structure stays simple and beginner-friendly.

### assets/icon/
This folder stores the favicon, which is the small icon shown in the browser tab.

## IMAGE PLACEHOLDER BLOCKS

Use these as your clear reminder blocks when adding real files later.

### Cover image placeholder
- File to create or paste into: `assets/img/cover.jpg`
- Recommended size: `1920x1080`
- Use this image as the large hero banner at the top of the homepage.

### Profile image placeholder
- File to create or paste into: `assets/img/profile.jpg`
- Recommended size: `800x800`
- Use this image for the profile section near the About block.

### Gallery photos placeholder
- Folder for future photos: `assets/img/gallery/`
- Recommended size: `1200x1800` or larger
- Add your future gallery images here when you are ready to build a gallery section.

### Favicon placeholder
- File to create or paste into: `assets/icon/favicon.png`
- Recommended size: `512x512`
- This is the small icon that appears in the browser tab.

## Important note about image files

This starter project does not include binary image files. Instead, it gives you the exact file locations where you should paste your own images.

Do not create a full gallery layout yet. The gallery directory is kept ready for future use, but the project remains intentionally simple.

## How to create this structure in Visual Studio Code

1. Open Visual Studio Code.
2. Click on the folder you want to use for the project, or create a new folder in your workspace.
3. Create a folder named `apip-photo-showcase`.
4. Inside that folder, create the following:
   - `index.html`
   - `assets/css/style.css`
   - `assets/js/script.js`
   - `assets/img/gallery/`
   - `assets/icon/`
   - `README.md`
5. Add the image files later in the correct locations:
   - `assets/img/cover.jpg`
   - `assets/img/profile.jpg`
   - `assets/icon/favicon.png`
6. Open the folder in VS Code and use the Explorer pane to check the structure.
7. Right-click the `index.html` file and choose "Open with Live Server" if you have the Live Server extension installed.
8. If you do not have Live Server, you can also open the file in a browser to preview it.

## GitHub Pages note

Once the site is ready, you can publish it on GitHub Pages by uploading the project to a GitHub repository and enabling GitHub Pages in the repository settings.

This project is designed to work well as a static site with simple relative paths such as:

- `assets/css/style.css`
- `assets/js/script.js`
- `assets/img/cover.jpg`

That keeps the links working correctly when the site is hosted on GitHub Pages.
