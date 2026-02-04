/**
 * Simple i18n for this single-page site
 * - Translate text nodes using [data-i18n="key"]
 * - Translate placeholders using [data-i18n-placeholder="key"]
 * - Persist language in localStorage
 * - Toggle direction (rtl/ltr) automatically
 */
window.I18N = {
  ar: {
    "page.title": "Team Portfolio",
    "nav.brand": "Team Portfolio",
    "nav.about": "نبذة",
    "nav.team": "الفريق",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",

    "hero.title": "Portfolio جامد بــ Animation + Timeline",
    "hero.subtitle": "فريق Full Stack .NET Developers — سكّرول لتحت وشوف الأقسام بتظهر بسلاسة، وبتختفي لما تخرج من الشاشة.",
    "hero.ctaTeam": "شوف الفريق",
    "hero.ctaProjects": "شوف المشاريع",
    "hero.ctaEdit": "إزاي تعدّل البيانات؟",
    "hero.pillReveal": "Scroll Reveal",
    "hero.cardSubtitle": "Web Apps • APIs • Dashboards",
    "hero.b1": "Timeline للفريق",
    "hero.b2": "Section مشاريع مشترك",
    "hero.b3": "Modals لعرض تفاصيل المشروع",
    "hero.b4": "Reveal/Hide مع الـ Scroll",

    "about.title": "نبذة سريعة",
    "about.subtitle": "هنا تقدر تعمل دعاية لنفسك وللفريق: سيكشن للفريق + سيكشن مشاريع مشتركة بروابط ووصف.",
    "about.c1t": "Projects مشتركة",
    "about.c1d": "كل المشاريع في Section واحدة للفريق كله.",
    "about.c2t": "Reveal & Hide",
    "about.c2d": "العناصر بتظهر/تختفي حسب مكانها في الشاشة.",
    "about.c3t": "سهل التعديل",
    "about.c3d": "كل البيانات في HTML — عدّلها بسرعة.",

    "team.title": "فريقنا",
    "team.subtitle": "سكّرول لتحت… كل عضو هيظهر (بدون مشاريع تحت كل واحد).",
    "team.role": "Software Full Stack .NET Developer",
    "team.email": "إيميل",
    "team.p1desc": "اكتب هنا وصف بسيط عن خبرتك… (Placeholder)",
    "team.p2desc": "اكتب هنا وصف بسيط عن خبرتك… (Placeholder)",
    "team.p3desc": "اكتب هنا وصف بسيط عن خبرتك… (Placeholder)",
    "team.p4desc": "اكتب هنا وصف بسيط عن خبرتك… (Placeholder)",

    "projects.title": "المشاريع المشتركة",
    "projects.subtitle": "كل مشاريع الفريق هنا — عدّل الاسم/الوصف/اللينكات لكل مشروع. (Placeholder)",
    "projects.searchPh": "ابحث عن مشروع بالاسم أو بالـ Stack...",
    "projects.fAll": "الكل",
    "projects.fWeb": "Web Apps",
    "projects.fApi": "APIs",
    "projects.fDash": "Dashboards",
    "projects.cardShortPh": "وصف مختصر (سطر واحد)",
    "projects.badgeTeam": "Team",
    "projects.demo": "Demo",
    "projects.details": "التفاصيل",
    "projects.open": "افتح المشروع",

    "contact.title": "تواصل",
    "contact.subtitle": "خلي هنا أي لينكات عامة للفريق (موقع/إيميل/واتساب…)",
    "contact.quick": "Quick Links",
    "contact.teamGithub": "Team GitHub",
    "contact.teamLinkedin": "Team LinkedIn",
    "contact.teamEmail": "Email",
    "contact.name": "اسمك",
    "contact.email": "إيميل",
    "contact.msg": "رسالتك",
    "contact.namePh": "اكتب الاسم",
    "contact.emailPh": "example@mail.com",
    "contact.msgPh": "اكتب رسالتك هنا...",
    "contact.send": "إرسال (Placeholder)",
    "contact.note": "* الفورم ده شكلي فقط. لو عايزه يشتغل فعليًا هنوصل API أو خدمة Email.",

    "footer.copy": "Team Portfolio — Built with Bootstrap + jQuery.",

    "edit.title": "إزاي تعدّل بياناتكم بسرعة؟",
    "edit.l1": "الفريق: غيّر أوصاف الأعضاء ولينكاتهم داخل Section الفريق.",
    "edit.l2": "المشاريع: انسخ كارت مشروع من Section المشاريع وزوّد براحتك.",
    "edit.l3": "التصنيفات: عدّل data-tags علشان الفلاتر تشتغل.",
    "edit.l4": "اللغة: زر Translate فوق يبدّل عربي/إنجليزي."
  },
  en: {
    "page.title": "Team Portfolio",
    "nav.brand": "Team Portfolio",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.title": "A Slick Portfolio with Animation + Timeline",
    "hero.subtitle": "A Full Stack .NET developer team — scroll down to see sections reveal smoothly and hide when they leave the viewport.",
    "hero.ctaTeam": "View Team",
    "hero.ctaProjects": "View Projects",
    "hero.ctaEdit": "How to edit?",
    "hero.pillReveal": "Scroll Reveal",
    "hero.cardSubtitle": "Web Apps • APIs • Dashboards",
    "hero.b1": "Team timeline",
    "hero.b2": "Shared projects section",
    "hero.b3": "Project details modals",
    "hero.b4": "Reveal/Hide on scroll",

    "about.title": "Quick Overview",
    "about.subtitle": "Promote your team: a team section + a shared projects section with links and descriptions.",
    "about.c1t": "Shared Projects",
    "about.c1d": "All projects are listed in one section for the whole team.",
    "about.c2t": "Reveal & Hide",
    "about.c2d": "Elements appear/disappear based on viewport position.",
    "about.c3t": "Easy to Edit",
    "about.c3d": "All content is in HTML — edit it fast.",

    "team.title": "Our Team",
    "team.subtitle": "Scroll down… each member appears (no projects under each person).",
    "team.role": "Software Full Stack .NET Developer",
    "team.email": "Email",
    "team.p1desc": "Write a short bio here… (Placeholder)",
    "team.p2desc": "Write a short bio here… (Placeholder)",
    "team.p3desc": "Write a short bio here… (Placeholder)",
    "team.p4desc": "Write a short bio here… (Placeholder)",

    "projects.title": "Shared Projects",
    "projects.subtitle": "All team projects are here — update title/description/links for each project. (Placeholder)",
    "projects.searchPh": "Search projects by name or stack...",
    "projects.fAll": "All",
    "projects.fWeb": "Web Apps",
    "projects.fApi": "APIs",
    "projects.fDash": "Dashboards",
    "projects.cardShortPh": "Short description (1 line)",
    "projects.badgeTeam": "Team",
    "projects.demo": "Demo",
    "projects.details": "Details",
    "projects.open": "Open project",

    "contact.title": "Contact",
    "contact.subtitle": "Add public team links here (website/email/WhatsApp…)",
    "contact.quick": "Quick Links",
    "contact.teamGithub": "Team GitHub",
    "contact.teamLinkedin": "Team LinkedIn",
    "contact.teamEmail": "Email",
    "contact.name": "Your name",
    "contact.email": "Email",
    "contact.msg": "Message",
    "contact.namePh": "Type your name",
    "contact.emailPh": "example@mail.com",
    "contact.msgPh": "Type your message here...",
    "contact.send": "Send (Placeholder)",
    "contact.note": "* This form is UI-only. To make it work, connect an API or an email service.",

    "footer.copy": "Team Portfolio — Built with Bootstrap + jQuery.",

    "edit.title": "How to edit your content quickly?",
    "edit.l1": "Team: update member bios and links in the Team section.",
    "edit.l2": "Projects: copy a project card in the Projects section to add more.",
    "edit.l3": "Tags: update data-tags so filters work correctly.",
    "edit.l4": "Language: use the Translate button to switch Arabic/English."
  }
};

window.applyLanguage = function(lang){
  const dict = window.I18N[lang] || window.I18N.ar;

  const html = document.documentElement;
  html.setAttribute("data-lang", lang);
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const btn = document.getElementById("langToggle");
  if (btn) btn.querySelector(".lang-label").textContent = (lang === "ar") ? "EN" : "AR";

  if (dict["page.title"]) document.title = dict["page.title"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  try { localStorage.setItem("lang", lang); } catch(e){}
};

window.getSavedLanguage = function(){
  try{
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") return saved;
  }catch(e){}
  return "ar";
};
