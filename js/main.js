
/* global $, bootstrap */

// Reveal/Hide on scroll using IntersectionObserver
(function () {
  const $targets = $(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    $targets.addClass("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible");
        }
      });
    },
    { root: null, threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  $targets.each(function () { observer.observe(this); });
})();

// Project modal: fill content from data-attributes
$(document).on("click", "[data-bs-target='#projectModal']", function () {
  const $btn = $(this);
  $("#pm-title").text($btn.data("title") || "Project");
  $("#pm-person").text($btn.data("person") || "");
  $("#pm-stack").text($btn.data("stack") || "Stack");
  $("#pm-desc").text($btn.data("desc") || "");
  $("#pm-link").attr("href", $btn.data("link") || "#");
});

// Shared Projects: filter + search
(function () {
  let activeFilter = "all";

  function applyFilters() {
    const q = ($("#projectSearch").val() || "").toString().trim().toLowerCase();

    $("#projectsGrid .project-col").each(function () {
      const $col = $(this);
      const tags = ($col.data("tags") || "").toString().toLowerCase();
      const text = ($col.text() || "").toLowerCase();

      const matchesFilter = (activeFilter === "all") || tags.includes(activeFilter);
      const matchesSearch = (!q) || text.includes(q);

      $col.toggle(matchesFilter && matchesSearch);
    });
  }

  $(document).on("click", ".filter-btn", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    activeFilter = $(this).data("filter") || "all";
    applyFilters();
  });

  $(document).on("input", "#projectSearch", function () {
    applyFilters();
  });
})();

// Footer year
$(function () {
  $("#year").text(new Date().getFullYear());
});
