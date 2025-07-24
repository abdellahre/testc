# Deployment Guide

This guide will help you deploy Abdellah Recham's portfolio to GitHub Pages.

## 🚀 Quick Deployment

### Option 1: Fork and Deploy (Recommended)

1. **Fork the Repository**
   - Go to the repository page
   - Click "Fork" button
   - Choose your GitHub account

2. **Enable GitHub Pages**
   - Go to your forked repository
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: "GitHub Actions"
   - Save the settings

3. **Customize Content**
   - Update personal information in components
   - Replace images in `public/images/`
   - Modify contact information
   - Commit and push changes

4. **Automatic Deployment**
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://yourusername.github.io/portfolio`

### Option 2: Manual Setup

1. **Clone Repository**
\`\`\`bash
git clone https://github.com/abdellah-recham/portfolio.git
cd portfolio
\`\`\`

2. **Install Dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Build for Production**
\`\`\`bash
npm run build
npm run export
\`\`\`

4. **Deploy to GitHub Pages**
\`\`\`bash
# Create gh-pages branch
git checkout -b gh-pages

# Copy build files
cp -r out/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
\`\`\`

## 🔧 Configuration

### Repository Settings

1. **Repository Name**: Should be `portfolio` or `yourusername.github.io`
2. **Visibility**: Can be public or private
3. **GitHub Pages Source**: GitHub Actions (recommended)

### Environment Variables

For production deployment, you may need to set:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/portfolio
NEXT_PUBLIC_BASE_PATH=/portfolio
\`\`\`

### Custom Domain (Optional)

1. **Add CNAME file** in `public/` directory:
\`\`\`
yourdomain.com
\`\`\`

2. **Configure DNS** with your domain provider:
\`\`\`
Type: CNAME
Name: www
Value: yourusername.github.io
\`\`\`

3. **Update GitHub Pages settings**:
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS: ✅

## 🔍 Troubleshooting

### Common Issues

1. **404 Error on Deployment**
   - Check `next.config.mjs` basePath configuration
   - Ensure GitHub Pages is enabled
   - Verify repository name matches settings

2. **Images Not Loading**
   - Images should be in `public/images/` directory
   - Use relative paths: `/images/filename.jpg`
   - Check image file names and extensions

3. **Build Failures**
   - Check Node.js version (18+ required)
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall

4. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for missing dependencies
   - Verify component imports

### Debug Steps

1. **Local Testing**
\`\`\`bash
npm run build
npm run start
\`\`\`

2. **Check Build Logs**
   - Go to "Actions" tab in GitHub
   - Click on latest workflow run
   - Review build logs for errors

3. **Validate Configuration**
\`\`\`bash
# Check Next.js config
npm run build -- --debug

# Validate package.json
npm run lint
\`\`\`

## 📊 Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images before uploading
- Implement lazy loading (already included)

### Code Optimization
- Remove unused dependencies
- Minimize bundle size
- Enable compression

### SEO Optimization
- Update meta tags in `app/layout.tsx`
- Add structured data
- Implement sitemap generation

## 🔒 Security

### Best Practices
- Never commit sensitive data
- Use environment variables for API keys
- Enable branch protection rules
- Regular dependency updates

### GitHub Actions Security
- Use official actions when possible
- Pin action versions
- Review workflow permissions

## 📈 Analytics (Optional)

### Google Analytics
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`
3. Configure goals and conversions

### GitHub Insights
- Monitor repository traffic
- Track visitor statistics
- Analyze popular content

## 🚀 Advanced Deployment

### Custom CI/CD Pipeline
\`\`\`yaml
# .github/workflows/custom-deploy.yml
name: Custom Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run export
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
\`\`\`

### Multiple Environments
- **Development**: `dev` branch → staging site
- **Production**: `main` branch → production site
- **Preview**: Pull requests → preview deployments

## 📞 Support

If you encounter issues:

1. Check this deployment guide
2. Review GitHub Actions logs
3. Search existing issues
4. Create new issue with details

---

🎉 **Congratulations!** Your portfolio should now be live on GitHub Pages.
\`\`\`

\`\`\`typescriptreact file="app/page.tsx"
[v0-no-op-code-block-prefix]import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"
import BlogSection from "@/components/blog-section"
import TestimonialsSection from "@/components/testimonials-section"
import ResumeDownload from "@/components/resume-download"
import ContactSection from "@/components/contact-section"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollToTop from "@/components/scroll-to-top"

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-[#030303]">
        <SmoothScroll />
        <Navigation />
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <CertificationsSection />
        <section id="blog">
          <BlogSection />
        </section>
        <TestimonialsSection />
        <ResumeDownload />
        <section id="contact">
          <ContactSection />
        </section>
        <ScrollToTop />
      </main>
    </>
  )
}
