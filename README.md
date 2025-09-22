Paul Akporarhe's Portfolio

This is a personal portfolio website built with React and Tailwind CSS, showcasing my skills, experience, projects, certifications, and resume. It highlights my expertise in B2B/B2C sales, growth operations, and data-driven projects, including web scraping, machine learning, and text-to-speech applications. The site is deployed on Vercel and includes interactive sections like a live demo link to a Breast Cancer Prediction Model on Hugging Face.

Features

Hero/About Section: Displays my profile, tagline, and background in sales and technical projects.

Project Preview: Links to an interactive ML model on Hugging Face.

Skills Section: Lists skills like web scraping, machine learning, and SQL.

Experience Section: Details professional roles at Omeife Technology, Upskill Universe, and Airtel Nigeria.

Certifications & Assessments:

NSQ Data Analysis with Python Level 3 assessment with a preview image (assessment.png) and PDF link.

Fundamentals of Digital Marketing and Hustle Academy certificates as clickable PDF links.

Letter of Recommendation: Displays a PDF preview (Letter_of_Recommendation_Paul.pdf) with metadata and a link to the full document.

Resume: Link to my resume (resume.pdf) for download.

Projects Section: Showcases four projects with descriptions and tags.

Contact Section: Includes email and phone links.

Responsive Design: Built with Tailwind CSS for a clean, modern look across devices.



Prerequisites

Node.js: Version 16.x or higher (recommended: 18.x).

npm: Version 8.x or higher.



Git: For version control and pushing to GitHub.

Setup Instructions

Clone the Repository (or create one if starting fresh):

git clone <https://github.com/lashakp/portfolio-new>
cd portfolio-new

Install Dependencies:

npm install

Ensure File Structure: Place the following files in the correct directories:

Images (public/images/):

assessment.png

PDFs (public/):

assessment.pdf

cert1.pdf

cert2.pdf

Letter_of_Recommendation_Paul.pdf

resume.pdf

Other (public/):

profile.jpg

huggingface-preview.png



Configure Tailwind CSS: Ensure tailwind.config.js exists:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Ensure src/index.css contains:

@tailwind base;
@tailwind components;
@tailwind utilities;

Remove Unused Files: Delete src/reportWebVitals.js if present to avoid warnings.

Running Locally

Start the Development Server:

npm start


Opens the portfolio at http://localhost:3000.

Verify Sections:

Check that assessment.png, profile.jpg, and huggingface-preview.png display.

Ensure PDF links (assessment.pdf, cert1.pdf, cert2.pdf, Letter_of_Recommendation_Paul.pdf, resume.pdf) open correctly.

Confirm the Letter of Recommendation <iframe> displays with metadata.

Test responsiveness on mobile and desktop views.



Check Console:

Open browser DevTools (Right-click > Inspect > Console).

Look for 404 errors (e.g., missing assessment.png).

Building for Production

Build the Project:

npm run build

Creates a build/ folder with optimized files.

Test the Build Locally: 

npm install -g serve
serve -s build

Opens at http://localhost:5000 (or another port).

Deploying to Vercel


Push to GitHub:

git add .
git commit -m "Initial portfolio commit"
git push origin main



Deploy:

Go to vercel.com.

Import the GitHub repository.
Select Create React App as the framework.
Deploy the project (no additional configuration needed).


Verify:


Visit the deployed URL (e.g., https://your-portfolio.vercel.app).

Test all links and images.

File Structure

portfolio-new/
├── public/
│   ├── images/
│   │   └── assessment.png
│   ├── assessment.pdf
│   ├── cert1.pdf
│   ├── cert2.pdf
│   ├── Letter_of_Recommendation_Paul.pdf
│   ├── resume.pdf
│   ├── profile.jpg
│   ├── huggingface-preview.png
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── components/
├── package.json
├── tailwind.config.js
└── README.md

Troubleshooting
Image Not Displaying (e.g., assessment.png):
Ensure public/images/assessment.png exists and matches the name (case-sensitive).
Check console for 404 errors.
Use a placeholder PNG if missing (e.g., screenshot assessment.pdf).


PDF Links Not Working:
Verify PDFs are in public/ with exact names (e.g., cert1.pdf).
Test directly in a browser (e.g., file:///C:/Users/user/Desktop/react/portfolio-new/public/cert1.pdf).



ESLint Warnings:
Run npm start and check for unused imports.
Remove any unused files or imports in src/App.js.


Deployment Issues:
Ensure all files are committed to GitHub.
Check Vercel logs for errors.


Other Errors:
Share console or terminal output for specific issues.

Dependencies
React: ^18.2.0
Tailwind CSS: ^3.4.10


Framer Motion: For animations

Lucide React: For icons (GitHub, LinkedIn, Globe)

Notes

Replace resume.pdf in public/ with your actual resume PDF.

Ensure all PDFs and images are correctly named and placed in public/ or public/images/.

The portfolio is optimized for Vercel deployment but can be hosted on other platforms like Netlify.

Author
Paul Akporarhe
GitHub: lashakp
LinkedIn: paul-akporarhe
Hugging Face: lashakp