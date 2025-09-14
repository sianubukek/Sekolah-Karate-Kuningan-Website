# 🚀 Panduan Deployment - Sekolah Karate Kuningan

## 📋 Persiapan Deployment

Website sudah siap untuk di-deploy ke platform hosting modern. Berikut adalah langkah-langkah untuk deployment:

## 🌐 Vercel (Recommended)

### Opsi 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy dari folder project
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (pilih akun Anda)
# - Link to existing project? N
# - Project name: sekolah-karate-kuningan
# - Directory: ./
# - Override settings? N
```

### Opsi 2: Deploy via GitHub
1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository dari GitHub
5. Deploy otomatis akan berjalan

## 🌐 Netlify

### Opsi 1: Drag & Drop
1. Jalankan `npm run build`
2. Buka [netlify.com](https://netlify.com)
3. Drag folder `build` ke area deploy
4. Website akan live dalam hitungan detik

### Opsi 2: GitHub Integration
1. Push code ke GitHub
2. Connect repository ke Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

## 🌐 GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🔧 Konfigurasi Environment

### Vercel
- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18.x

## 📱 Custom Domain (Opsional)

### Vercel
1. Buka project di Vercel dashboard
2. Go to Settings > Domains
3. Add custom domain
4. Update DNS records sesuai instruksi

### Netlify
1. Buka site di Netlify dashboard
2. Go to Domain Management
3. Add custom domain
4. Update DNS records

## 🔍 Post-Deployment Checklist

- [ ] Website dapat diakses
- [ ] Semua halaman berfungsi (Beranda, Tentang, Instruktur, FAQ)
- [ ] Mobile responsive
- [ ] Animasi berjalan smooth
- [ ] Form kontak berfungsi
- [ ] SEO meta tags terpasang
- [ ] Favicon muncul
- [ ] Loading speed optimal

## 🛠️ Troubleshooting

### Build Error
```bash
# Clear cache dan rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (SPA)
Pastikan server dikonfigurasi untuk SPA routing:
- **Vercel**: Otomatis handled
- **Netlify**: Tambahkan `_redirects` file di public folder
- **Apache**: Tambahkan `.htaccess` file

### Environment Variables
Jika ada environment variables, tambahkan di platform hosting:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Environment Variables

## 📊 Performance Optimization

### Pre-deployment
- [ ] Images dioptimasi
- [ ] Unused CSS dihapus
- [ ] JavaScript di-minify
- [ ] Gzip compression enabled

### Post-deployment
- [ ] Test dengan Google PageSpeed Insights
- [ ] Monitor dengan Google Analytics
- [ ] Setup error tracking (Sentry)

## 🔄 Continuous Deployment

Setelah setup awal, setiap push ke branch main akan trigger automatic deployment:

```bash
# Workflow normal
git add .
git commit -m "Update website"
git push origin main
# Deployment otomatis berjalan
```

## 📞 Support

Jika ada masalah deployment, cek:
1. Build logs di platform hosting
2. Console errors di browser
3. Network tab untuk failed requests
4. Mobile responsiveness

---

**Website siap untuk production! 🎉**
