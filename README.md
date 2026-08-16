# ☕ Treeva Cafe - Digital Menu & QR Code Solution

A complete, modern digital menu and QR Code system for **Treeva Cafe** (Coffee • Pastry • Smoothie).

---

## 📁 Project Structure

```
d:\Projects\treeva-cafe-menu\
├── index.html                  # Main responsive digital web menu (Search, Filters, Dark Theme, Live QR Tool)
├── printable-table-stand.html  # Hard-copy print-ready table tent / poster for physical tables
├── treeva_cafe_qr.png          # High-resolution 1000x1000 PNG QR code image
├── treeva_cafe_qr.svg          # Vector SVG QR code for graphic designers
├── generate-qr.js              # Node.js script to update & generate QR code for any URL
├── package.json                # Project dependencies
└── README.md                   # Complete hosting & usage guide
```

---

## 🌐 1. How to Host Online (Make it Live)

To allow customers to scan the QR code and view the menu on their mobile phones, the menu must be hosted online. Here are the **easiest 100% free hosting options**:

### Option A: Netlify Drop (Easiest - 10 Seconds, No Code Required)
1. Open your browser and go to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag and drop the `treeva-cafe-menu` folder directly into the designated area on the Netlify website.
3. Netlify will instantly host your menu and give you a live link (e.g. `https://treeva-cafe.netlify.app`).

### Option B: Vercel (Free & Super Fast)
1. Go to **[https://vercel.com](https://vercel.com)** and sign up for a free account.
2. Drag & drop the folder or connect via GitHub to deploy in 1 click.

### Option C: GitHub Pages (Free Permanent Hosting)
1. Create a public repository named `treeva-cafe-menu` on GitHub.
2. Push your files to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Treeva Cafe menu"
   git remote add origin https://github.com/YOUR_USERNAME/treeva-cafe-menu.git
   git push -u origin main
   ```
3. Go to **Repository Settings** > **Pages** > Select `main` branch > **Save**.
4. Your website will be live at `https://YOUR_USERNAME.github.io/treeva-cafe-menu/`.

---

## 🖼️ 2. How to Update Your QR Code with Your Live Link

Once you have your live website URL (e.g. `https://treevacafe.netlify.app`):

### Method A: Via Command Line (Node.js)
Open PowerShell inside `d:\Projects\treeva-cafe-menu` and run:
```bash
node generate-qr.js "https://YOUR_ACTUAL_URL.com"
```
This updates `treeva_cafe_qr.png` and `treeva_cafe_qr.svg` instantly.

### Method B: Directly from the Web Menu
Open `index.html` in your browser -> Click **"Customize / Download QR"** button -> Paste your link -> Click **"Download QR Image"**.

---

## 📄 3. How to Use as Soft Copy (Digital)

- **Instagram Bio**: Add your hosted URL to `@Treevacafe` Instagram bio link.
- **WhatsApp**: Send `treeva_cafe_qr.png` or your live URL directly to customers asking for the menu over WhatsApp.
- **Social Media Posts**: Include the QR code on your Instagram/Facebook story & posts.

---

## 🖨️ 4. How to Use as Hard Copy (Physical Printed Table Stands)

For table stands, counter displays, acrylic holders, or stickers:

1. Open `printable-table-stand.html` in Chrome or Edge browser.
2. Click the **"Print Stand Poster (Hard Copy)"** button (or press `Ctrl + P`).
3. Set destination to your printer (or "Save as PDF").
4. Print on 4x6" cardstock or A5 paper.
5. Place inside acrylic table stand holders on each table at Treeva Cafe!
