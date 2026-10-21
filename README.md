# Hariharan G — Personal Portfolio

A sleek, responsive, and modern personal developer portfolio showcasing Full Stack Development and AI/ML Engineering projects, practical experience, education, certifications, and contact information.

Built with clean, vanilla HTML5, CSS3, and JavaScript — zero dependencies, zero build steps, and ready for immediate deployment on Vercel, GitHub Pages, or Netlify.

---

## 📁 Repository File Structure

All project files are located at the repository root in a flat structure. This structure is specifically designed so all files can be selected and uploaded directly via GitHub's web interface without needing to create or manage nested folders.

```text
My-Portfolio/
├── index.html                    # Main portfolio website structure and content
├── style.css                     # Complete responsive styling, light/dark themes, and layout
├── script.js                     # Theme switcher, mobile menu drawer, animations, and contact form AJAX
├── profile.jpg                   # Profile photograph for About section
├── resume.pdf                    # Resume document for viewing and downloading
├── climacare-banner.jpg          # Project banner for ClimaCare
├── vehicle-service-banner.jpg    # Project banner for Vehicle Service Management System
├── fittrack-banner.jpg           # Project banner for FitTrack
├── crime-prediction-banner.jpg   # Project banner for AI-Based Crime Prediction & Safety Alert
├── data-studio-banner.jpg        # Project banner for Data Cleaning & Visualization Studio
├── IMAGE-SOURCES.txt             # Image attributions, licenses, and direct sources
└── README.md                     # Documentation and deployment instructions
```

---

## 🚀 How to Upload to GitHub via the Web Interface (No Git Commands Required)

Follow these simple steps to upload your portfolio directly to GitHub using your web browser:

### Step 1: Create a New GitHub Repository
1. Log into your [GitHub account](https://github.com).
2. Click the **+** (plus icon) in the top right corner and select **New repository**.
3. Name your repository (e.g., `My-Portfolio` or `hariharan-portfolio`).
4. Set the repository visibility to **Public**.
5. **Do not** check "Add a README file" (we already have one).
6. Click **Create repository**.

### Step 2: Upload All Files Directly
1. On the empty repository page, look for the text: *"Get started by creating a new file or uploading an existing file"*.
2. Click **uploading an existing file** (or click **Add file** → **Upload files** from the top right menu).
3. Open your local `My-Portfolio` folder on your computer.
4. Select all the files in the folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `profile.jpg`
   - `resume.pdf`
   - `climacare-banner.jpg`
   - `crime-prediction-banner.jpg`
   - `data-studio-banner.jpg`
   - `fittrack-banner.jpg`
   - `vehicle-service-banner.jpg`
   - `IMAGE-SOURCES.txt`
   - `README.md`
5. Drag and drop all selected files into the GitHub upload area in your browser (or click **choose your files** and select them all).
6. Wait for all files to finish uploading (you will see a green progress bar / list of uploaded files).
7. Under **Commit changes**, enter a message such as `Initial portfolio upload`.
8. Ensure **Commit directly to the `main` branch** is selected.
9. Click the green **Commit changes** button.

Your portfolio is now live on GitHub!

---

## ⚡ How to Deploy on Vercel (Zero Configuration)

Deploying this static portfolio to Vercel takes less than a minute:

1. Sign up or log into [Vercel](https://vercel.com) using your GitHub account.
2. From the Vercel dashboard, click **Add New...** → **Project**.
3. Under **Import Git Repository**, locate your portfolio repository (e.g., `My-Portfolio`) and click **Import**.
4. Configure Project settings:
   - **Framework Preset**: Choose `Other`.
   - **Root Directory**: Leave as `./` (default).
   - **Build and Output Settings**: Leave empty (no build command is required).
5. Click **Deploy**.
6. In a few seconds, your portfolio will be live with a free SSL certificate and custom `*.vercel.app` domain.

---

## 🛠️ Customization & Maintenance Guide

| Item | File to Modify | Instructions |
| :--- | :--- | :--- |
| **Profile Photo** | `profile.jpg` | Replace `profile.jpg` with your own image, keeping the filename identical. |
| **Resume PDF** | `resume.pdf` | Replace `resume.pdf` with your updated resume, keeping the filename identical. |
| **Contact Form Email** | `index.html` & `script.js` | Change `hariharang.cse@gmail.com` to your desired email in `index.html` (form action) and `script.js` (fetch URL). *On first submission, FormSubmit sends an activation link to verify the recipient inbox.* |
| **Project Details** | `index.html` | Edit project titles, descriptions, categories, and technology tags under `#projects`. |
| **Contact & Socials** | `index.html` | Update email, phone number, location, and links (GitHub, LinkedIn, LeetCode, HackerRank) under `#contact`. |

---

## 📱 Responsiveness & Browser Support

The portfolio is designed and tested to look great across all modern screen resolutions:
- **Small Mobile**: 320px – 375px (iPhone SE, small Androids)
- **Standard Mobile**: 390px – 430px (iPhone 12/13/14/15/16, Pixel, Galaxy)
- **Tablets**: 768px – 1024px (iPad, iPad Mini, Galaxy Tab)
- **Laptops**: 1024px – 1440px (MacBook, standard PC displays)
- **Large Desktops**: 1440px and above (2K, 4K monitors)

Features:
- Dark and Bright Theme Switcher (persists user preference in `localStorage`)
- Mobile Navigation Hamburger Menu with outside-click and Escape key closure
- Smooth Scrolling & Intersection Observer Scroll Reveal animations
- Accessible touch targets (minimum 44px) and focus outlines

---

## 📄 License & Attributions

- Portfolio Code: Open source for personal use.
- Banner image licenses and sources are documented in [`IMAGE-SOURCES.txt`](./IMAGE-SOURCES.txt).
