/* =========================================================
   PHOTOGRAPHY — edit this file to add photos.

   1. Put your photos in a folder under img/photography/,
      e.g. img/photography/mozambique/maputo-market.jpg
      (JPGs around 2000 px on the long side, < 1 MB each, load fast.)
   2. Add a series below (or add photos to an existing one).
      - id:      short name used in the link (photography.html#mozambique)
      - title:   shown on the page
      - intro:   optional sentence under the title ("" to skip)
      - cover:   which photo is shown on the overview grid (defaults to the first)
      - photos:  in display order; caption is optional, may contain <a> links
   Series with no photos are hidden automatically.
   ========================================================= */

const PHOTO_SERIES = [
  {
    id: "sudan",
    title: "Sudan",
    intro: "",
    cover: "img/photography/web/sudan/29-natural-b.jpg",
    photos: [
      { src: "img/photography/web/sudan/01-bw-b.jpg", caption: "" },
      { src: "img/photography/web/sudan/04-natural-b.jpg", caption: "" },
      { src: "img/photography/web/sudan/09-warm.jpg", caption: "" },
      { src: "img/photography/web/sudan/11-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/13-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/17-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/19-natural-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/21-warm.jpg", caption: "" },
      { src: "img/photography/web/sudan/25-warm.jpg", caption: "" },
      { src: "img/photography/web/sudan/26-warm.jpg", caption: "" },
      { src: "img/photography/web/sudan/27-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/28-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/29-natural-b.jpg", caption: "" },
      { src: "img/photography/web/sudan/30-bw-a.jpg", caption: "" },
      { src: "img/photography/web/sudan/31-bw-a.jpg", caption: "" },
    ],
  },
  {
    id: "cabo-delgado",
    title: "Cabo Delgado, Mozambique",
    intro: "",
    cover: "img/photography/web/cabo-delgado/42-warm.jpg",
    photos: [
      { src: "img/photography/web/cabo-delgado/40-bw-a.jpg", caption: "" },
      { src: "img/photography/web/cabo-delgado/42-warm.jpg", caption: "" },
      { src: "img/photography/web/cabo-delgado/52-warm.jpg", caption: "" },
      { src: "img/photography/web/cabo-delgado/54-bw-a.jpg", caption: "" },
      { src: "img/photography/web/cabo-delgado/58-natural-b.jpg", caption: "" },
      { src: "img/photography/web/cabo-delgado/63-ai-mono.jpg", caption: "Monochrome edit with AI-assisted retouching" },
    ],
  },
  {
    id: "mix",
    title: "Various",
    intro: "Angola and Madagascar",
    cover: "img/photography/web/mix/74-bw-a.jpg",
    photos: [
      { src: "img/photography/web/mix/64-bw-a.jpg", caption: "" },
      { src: "img/photography/web/mix/65-bw-a.jpg", caption: "" },
      { src: "img/photography/web/mix/66-bw-a.jpg", caption: "" },
      { src: "img/photography/web/mix/67-bw-a.jpg", caption: "" },
      { src: "img/photography/web/mix/73-bw-a.jpg", caption: "" },
      { src: "img/photography/web/mix/74-bw-a.jpg", caption: "" },
    ],
  },
];
