# Team Portfolio Timeline (v3)

✅ Bootstrap 5 + jQuery  
✅ Reveal/Hide Animation on Scroll  
✅ Section للفريق (Timeline) + Section مشاريع مشتركة (Projects Grid)  
✅ Filter + Search للمشاريع (Front-end only)  
✅ Project Details Modal

## تشغيل المشروع
افتح `index.html` مباشرة في المتصفح.

## تعديل بيانات الفريق
داخل `index.html` في Section `#team`:
- الاسم + الوصف + اللينكات لكل عضو (LinkedIn/GitHub/Email)
- الصورة: `assets/img/default-avatar.svg` (استبدلها أو عدّل src لكل واحد)

## تعديل المشاريع المشتركة
داخل Section `#projects`:
- كل مشروع داخل عنصر `.project-col`
- التصنيفات للفلاتر: `data-tags="web api dashboard"`
- زر التفاصيل يحتوي `data-*`:
  - `data-title`
  - `data-person` (ممكن تكتب Team أو أسماء)
  - `data-stack`
  - `data-desc`
  - `data-link`

## ملاحظات
- الفورم في Contact شكلي فقط (Placeholder).
