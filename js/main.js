/* Company Portfolio — main.js (Vanilla-first)
   - Language toggle AR/EN + RTL/LTR
   - Alternating timeline sides (responsive to dir)
   - Scroll reveal (IntersectionObserver)
   - Projects filter + search
   - Project modal content fill (Bootstrap if available, otherwise still fills fields)
*/

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function applyTimelineSides(){
  const dir = document.documentElement.getAttribute("dir") || "rtl";
  qsa(".timeline-alt").forEach((timeline)=>{
    const items = qsa(".tl-item", timeline);
    items.forEach((item, idx)=>{
      item.classList.remove("tl-left","tl-right");
      const isFirstThird = (idx % 2 === 0); // 1st, 3rd, ...
      if(dir === "rtl") item.classList.add(isFirstThird ? "tl-right" : "tl-left");
      else item.classList.add(isFirstThird ? "tl-left" : "tl-right");
    });
  });
}

function safeApplyLanguage(lang){
  if(typeof window.applyLanguage === "function") window.applyLanguage(lang);
}

function getLang(){
  if(typeof window.getSavedLanguage === "function") return window.getSavedLanguage();
  return "ar";
}

function initLangToggle(){
  const btn = qs("#langToggle");
  if(!btn) return;
  btn.addEventListener("click", ()=>{
    const current = document.documentElement.getAttribute("data-lang") || "ar";
    const next = current === "ar" ? "en" : "ar";
    safeApplyLanguage(next);
    applyTimelineSides();
    reapplyProjectAlternation();
  });
}

function initScrollReveal(){
  const targets = qsa(".reveal-on-scroll");
  if(!("IntersectionObserver" in window)){
    targets.forEach(el=>el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
      e.target.classList.toggle("is-visible", e.isIntersecting);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });
  targets.forEach(el=>obs.observe(el));
}

function initProjectModal(){
  // Works with Bootstrap (data-bs-target="#projectModal") or custom trigger
  document.addEventListener("click", (ev)=>{
    const btn = ev.target.closest("[data-bs-target='#projectModal']");
    if(!btn) return;

    const title = btn.getAttribute("data-title") || "Project";
    const person = btn.getAttribute("data-person") || "";
    const stack = btn.getAttribute("data-stack") || "Stack";
    const desc  = btn.getAttribute("data-desc")  || "";
    const link  = btn.getAttribute("data-link")  || "#";

    const pmTitle = qs("#pm-title");
    const pmPerson = qs("#pm-person");
    const pmStack = qs("#pm-stack");
    const pmDesc = qs("#pm-desc");
    const pmLink = qs("#pm-link");

    if(pmTitle) pmTitle.textContent = title;
    if(pmPerson) pmPerson.textContent = person;
    if(pmStack) pmStack.textContent = stack;
    if(pmDesc) pmDesc.textContent = desc;
    if(pmLink) pmLink.setAttribute("href", link);
  });
}

let activeFilter = "all";

function reapplyProjectAlternation(){
  const timeline = qs("#projectsTimeline");
  if(!timeline) return;
  const dir = document.documentElement.getAttribute("dir") || "rtl";

  const visible = qsa(".project-item", timeline).filter(el => el.style.display !== "none");
  visible.forEach((el, idx)=>{
    el.classList.remove("tl-left","tl-right");
    const isFirstThird = (idx % 2 === 0);
    if(dir === "rtl") el.classList.add(isFirstThird ? "tl-right" : "tl-left");
    else el.classList.add(isFirstThird ? "tl-left" : "tl-right");
  });
}

function applyProjectFilters(){
  const timeline = qs("#projectsTimeline");
  if(!timeline) return;

  const searchInput = qs("#projectSearch");
  const q = (searchInput ? searchInput.value : "").trim().toLowerCase();

  qsa(".project-item", timeline).forEach((item)=>{
    const tags = (item.getAttribute("data-tags") || "").toLowerCase();
    const text = (item.textContent || "").toLowerCase();

    const matchesFilter = (activeFilter === "all") || tags.includes(activeFilter);
    const matchesSearch = (!q) || text.includes(q);

    item.style.display = (matchesFilter && matchesSearch) ? "" : "none";
  });

  reapplyProjectAlternation();
}

function initProjectFilters(){
  document.addEventListener("click", (ev)=>{
    const btn = ev.target.closest(".filter-btn");
    if(!btn) return;
    qsa(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-filter") || "all";
    applyProjectFilters();
  });

  const searchInput = qs("#projectSearch");
  if(searchInput){
    searchInput.addEventListener("input", applyProjectFilters);
  }
}

function initYear(){
  const y = qs("#year");
  if(y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", ()=>{
  const lang = getLang();
  safeApplyLanguage(lang);
  applyTimelineSides();
  initLangToggle();
  initScrollReveal();
  initProjectModal();
  initProjectFilters();
  initYear();
  // initial filter alignment
  applyProjectFilters();
});
