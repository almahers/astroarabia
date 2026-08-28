# AstroArabia

[🇸🇦 العربية](./README.md) | [🇬🇧 English](./README.en.md)

[![الترخيص: MIT](https://img.shields.io/badge/license-MIT-1f6b58?style=flat-square)](./LICENSE)
![Lighthouse ready](https://img.shields.io/badge/Lighthouse-ready-16a34a?style=flat-square)
![RTL-first](https://img.shields.io/badge/RTL-first-1f6b58?style=flat-square)
![Static-first](https://img.shields.io/badge/Static--first-102a2b?style=flat-square)

<img src="./public/og-default.svg" alt="معاينة قالب AstroArabia" width="1200" />

ثيم (Theme) Astro عربي مفتوح المصدر، مصمم للمجتمع التقني السعودي. يوفر نقطة بداية سريعة وواضحة للشركات والمنتجات الرقمية والمشاريع الشخصية، مع RTL أصيل وأقل قدر ممكن من JavaScript.

## المميزات الرئيسية

• مبني على Astro لإخراج صفحات ثابتة وسريعة.

• متكامل مع Tailwind CSS v4 ونظام ألوان ومسافات قابل للتخصيص.

• RTL-first في التخطيطات والمسافات والتفاعلات الدقيقة.

• نموذج التواصل جاهز للتخصيص، بدون فرض مزود إرسال أو خدمة خارجية.

• وضع داكن يدعم فئة `dark:` ويحفظ اختيار الزائر محلياً.

• أساس SEO جاهز: canonical وOpen Graph وSitemap وبيانات وصفية لكل صفحة.

• خمسة مسارات جاهزة: الشركات، المنتجات الرقمية، التوثيق، معرض الأعمال، وصفحة الهبوط.

• مكونات UI قابلة لإعادة الاستخدام عبر CVA للأزرار والبطاقات.

## التثبيت السريع

```bash
npm create astro@latest -- --template almahers/astroarabia
```

بعد إنشاء المشروع:

```bash
cd astroarabia
npm install
npm run dev
```

يتطلب Astro في هذا المشروع Node.js `22.12.0` أو أحدث وnpm `9.6.5` أو أحدث. استخدم رقمًا زوجيًا أو إصدار LTS من Node.js.

## النسخ والمكدس التقني

هذه النسخ هي النسخ المقفلة في `package-lock.json` وقت آخر تدقيق للمشروع. حدّث هذا الجدول بعد ترقية الاعتمادات.

| المجال       | الأداة أو المكتبة                        | النسخة             |
| ------------ | ---------------------------------------- | ------------------ |
| الأساس       | Astro                                    | `7.2.9`            |
| البناء       | Vite                                     | `8.2.2`            |
| التصميم      | Tailwind CSS و`@tailwindcss/vite`        | `4.3.3`            |
| الأنواع      | TypeScript                               | `6.0.3`            |
| التحقق       | `@astrojs/check`                         | `0.9.10`           |
| الجودة       | ESLint و`eslint-plugin-astro`            | `10.9.1` / `1.7.0` |
| التنسيق      | Prettier و`prettier-plugin-astro`        | `3.9.6` / `0.14.1` |
| SEO          | `@astrojs/sitemap`                       | `3.7.3`            |
| المحتوى      | `astro-toc-smol` و`astro-content-viewer` | `0.4.4` / `0.1.2`  |
| CSS الإنتاجي | `astro-purgecss` وPurgeCSS               | `7.0.0` / `8.0.0`  |
| الواجهة      | CVA و`clsx`                              | `0.7.1` / `2.1.1`  |
| الخطوط       | Alexandria وIBM Plex Sans Arabic         | `5.3.0` / `1.1.0`  |
| المشاركة     | `astro-social-share`                     | `2.2.0`            |

## أبرز هيكلة المشروع

```text
src/
├── components/
│   ├── ui/                 # Button و Card بمتحكمات CVA
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   └── QuoteForm.astro
├── layouts/
│   └── BaseLayout.astro
├── content/
│   └── blog/               # مقالات Markdown
├── content.config.ts        # مخطط محتوى Astro
├── assets/                  # الصور المحسّنة وقت البناء
├── lib/                     # دوال مساعدة مشتركة
├── pages/
│   ├── index.astro         # الصفحة الرئيسية
│   ├── agency/             # الشركات والخدمات
│   ├── saas/               # المنتجات الرقمية
│   ├── docs/               # التوثيق
│   ├── portfolio/          # معرض الأعمال
│   └── landing/            # صفحة الهبوط
└── styles/
    └── global.css
public/                      # ملفات عامة وrobots.txt
astro.config.mjs             # تكاملات Astro وإعدادات الموقع
tailwind.config.mjs          # Theme وأدوات Tailwind
```

## أوامر التشغيل

| الأمر                  | الاستخدام                                  |
| ---------------------- | ------------------------------------------ |
| `npm install`          | تثبيت الاعتمادات                           |
| `npm run dev`          | تشغيل بيئة التطوير المحلية                 |
| `npm run build`        | إنشاء نسخة الإنتاج داخل `dist`             |
| `npm run check`        | فحص أنواع Astro والمكونات                  |
| `npm test`             | تشغيل اختبارات المشروع                     |
| `npm run lint`         | فحص جودة الكود                             |
| `npm run format:check` | التحقق من تنسيق Prettier دون تعديل الملفات |
| `npm run format`       | تنسيق الملفات باستخدام Prettier            |

## تخصيص الهوية والثيم (Theme)

ابدأ بتعديل `tailwind.config.mjs` لتغيير ألوان الهوية والخطوط والمسافات المستخدمة في المكونات. توجد رموز مماثلة في `src/styles/global.css` داخل `@theme`؛ حدّث الموضعين معًا عند تغيير هوية القالب. الخط العربي المحلي هو IBM Plex Sans Arabic، والعناوين تستخدم Alexandria.

## إعدادات القالب

انسخ `.env.example` إلى `.env` ثم غيّر `PUBLIC_WHATSAPP_NUMBER` إلى رقم واتساب مشروعك بالأرقام فقط ومن دون علامة `+`. الرقم الموجود في القالب تجريبي حتى لا يرتبط القالب برقم شخصي.

نموذج الطلب واجهة جاهزة فقط؛ لا يرسل أي بيانات ولا يفرض عليك مزودًا خارجيًا. اربطه بالطريقة التي تناسب مشروعك، مثل Cloudflare Pages Functions أو Worker أو خدمة نماذج خارجية، مع إضافة الحماية والتحقق المناسبين.

AstroArabia متاح مجانًا للمجتمع العربي تحت رخصة [MIT](./LICENSE). استبدل الروابط والمحتوى التجريبي بهوية مشروعك قبل النشر العام. درجات Lighthouse تعتمد على المحتوى والاستضافة وإضافاتك؛ افحص النسخة النهائية قبل إطلاقها.

## النشر المباشر

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/almahers/astroarabia)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/almahers/astroarabia)

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new/provider/github)

للنشر اليدوي، استخدم أمر البناء التالي واجعل مجلد الإخراج `dist`:

```bash
npm run build
```

## المساهمة والترخيص

المساهمات التي تحسن تجربة الويب العربي مرحب بها. راجع [دليل المساهمة](./CONTRIBUTING.md) قبل فتح طلب دمج.

المشروع مرخص بموجب [MIT](./LICENSE).
