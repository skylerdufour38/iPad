const apps = [
  {
    id: "animal-sounds-2.0",
    name: "Animal Sounds",
    bundleId: "com.smartbabyapps.animalsounds",
    version: "2.0",
    platform: "iOS",
    minimumOs: "3.1",
    ipaFile: "Animal Sounds 2.0.ipa",
    fileSizeMb: 19.8,
    summary:
      "A lightweight soundboard-style app featuring animal noises and simple interactive playback for early iPhone devices."
  },
  {
    id: "soundtouch-1.4",
    name: "SoundTouch",
    bundleId: "com.yourcompany.SoundTouch",
    version: "1.4",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "SoundTouch 1.4.ipa",
    fileSizeMb: 155.5,
    summary:
      "A music and audio experimentation app designed to manipulate playback and sound effects on classic iOS hardware."
  },
  {
    id: "tozzle-3.7",
    name: "Tozzle",
    bundleId: "com.nodeflexion.Tozzle",
    version: "3.7",
    platform: "iOS",
    minimumOs: "3.1.3",
    ipaFile: "Tozzle 3.7.ipa",
    fileSizeMb: 112.6,
    summary:
      "A puzzle and tile-based app combining fast gameplay with simple touch controls suited to older iPhones and iPods."
  },
  {
    id: "autismxpress-1.0",
    name: "AutismXpress",
    bundleId: "X7WS995LSR.com.StudioEmotion.AutismXpress",
    version: "1.0",
    platform: "iOS",
    minimumOs: "3.1.2",
    ipaFile: "AutismXpress 1.0.ipa",
    fileSizeMb: 7.4,
    summary:
      "A special-needs learning aide focused on communication and engagement through accessible educational content."
  },
  {
    id: "lunchbox-1.4",
    name: "Lunchbox",
    bundleId: "com.thup.MonkeyPreschool",
    version: "1.4",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Lunchbox 1.4.ipa",
    fileSizeMb: 13.7,
    summary:
      "A preschool learning experience built around early education, shape recognition, and gentle interactive play."
  },
  {
    id: "peek-a-zoo-1.1.1",
    name: "Peek-a-Zoo",
    bundleId: "com.duckduckmoosedesign.peekazoo",
    version: "1.1.1",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Peek-a-Zoo 1.1.1.ipa",
    fileSizeMb: 19.1,
    summary:
      "An animal discovery app that uses simple reveal interactions and playful tap-through actions for children."
  },
  {
    id: "michigan-nature-sounds-1.0",
    name: "Michigan Nature Sounds",
    bundleId: "com.yourcompany.MichiganNatureSounds",
    version: "1.0",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Michigan Nature Sounds 1.0.ipa",
    fileSizeMb: 24.6,
    summary:
      "A natural sound collection app that reflects a relaxing environment and a simple audio-listening experience."
  },
  {
    id: "peek-a-zoo-1.0",
    name: "Peek-a-Zoo",
    bundleId: "com.tbd.pazCLL",
    version: "1.0",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Peek-a-Zoo 1.0.ipa",
    fileSizeMb: 24.6,
    summary:
      "An earlier Peek-a-Zoo iteration focused on visual discovery and casual interactive animal play."
  },
  {
    id: "artsee-1.1",
    name: "Artsee",
    bundleId: "com.britejar.artsee",
    version: "1.1",
    platform: "iOS",
    minimumOs: "2.2",
    ipaFile: "Artsee 1.1.ipa",
    fileSizeMb: 12.4,
    summary:
      "An art-focused learning and drawing application designed for early mobile creativity and experimentation."
  },
  {
    id: "angry-birds-1.5.3",
    name: "Angry Birds",
    bundleId: "com.rovio.AngryBirdsHalloween",
    version: "1.5.3",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Angry Birds 1.5.3.ipa",
    fileSizeMb: 16.8,
    summary:
      "A classic physics-based puzzle game built around slingshot mechanics and cartoonish bird combat."
  },
  {
    id: "farm-flip-fun-1.0",
    name: "Farm Flip Fun",
    bundleId: "lv.yapp.farmflipfun",
    version: "1.0",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Farm Flip Fun 1.0.ipa",
    fileSizeMb: 10.6,
    summary:
      "A casual farm management and flipping game centered on building and rearranging a cheerful countryside scene."
  },
  {
    id: "farm-story-1.2",
    name: "Farm Story",
    bundleId: "com.teamlava.farmstory",
    version: "1.2",
    platform: "iOS",
    minimumOs: "3.0",
    ipaFile: "Farm Story 1.2.ipa",
    fileSizeMb: 19.9,
    summary:
      "A simulation adventure with farming, collections, and social play elements tailored to early mobile audiences."
  },
  {
    id: "stickers-1.0",
    name: "Stickers",
    bundleId: "com.nightanddaystudios.ericcarlestickers",
    version: "1.0",
    platform: "iOS",
    minimumOs: "5.0",
    ipaFile: "Stickers 1.0.ipa",
    fileSizeMb: 206.1,
    summary:
      "A sticker-collection and graphic app with a larger content footprint and compatibility with newer iOS systems."
  },
  {
    id: "forest-1.1.0",
    name: "Forest",
    bundleId: "com.nightanddaystudios.peekabooforest",
    version: "1.1.0",
    platform: "iOS",
    minimumOs: "3.1.3",
    ipaFile: "Forest 1.1.0.ipa",
    fileSizeMb: 25.6,
    summary:
      "A nature-themed discovery app with simple interactions and child-friendly visual exploration."
  },
  {
    id: "virtuoso-3.1.2",
    name: "Virtuoso",
    bundleId: "com.peterb.virtuosopianofree",
    version: "3.1.2",
    platform: "iOS",
    minimumOs: "4.0",
    ipaFile: "Virtuoso 3.1.2.ipa",
    fileSizeMb: 19.9,
    summary:
      "A piano and music-learning experience focused on melodic practice and simple interactive tutorials."
  },
  {
    id: "abc-tracer-1.8",
    name: "ABC Tracer",
    bundleId: "com.appzoo.ABCTracer",
    version: "1.8",
    platform: "iOS",
    minimumOs: "2.2.1",
    ipaFile: "ABC Tracer 1.8.ipa",
    fileSizeMb: 20.9,
    summary:
      "A letter-learning app that guides children through tracing, repetition, and basic early literacy tasks."
  },
  {
    id: "peek-wild-2.0.1",
    name: "Peek Wild",
    bundleId: "com.nightanddaystudios.peekaboowild",
    version: "2.0.1",
    platform: "iOS",
    minimumOs: "3.1.3",
    ipaFile: "Peek Wild 2.0.1.ipa",
    fileSizeMb: 9.8,
    summary:
      "A playful wildlife-themed variant of the Peekaboo family, centered on observation and reveal-based interaction."
  },
  {
    id: "peekaboo-2.0",
    name: "Peekaboo",
    bundleId: "com.nightanddaystudios.peekaboobarn",
    version: "2.0",
    platform: "iOS",
    minimumOs: "2.2",
    ipaFile: "Peekaboo 2.0.ipa",
    fileSizeMb: 3.6,
    summary:
      "A compact early learning app using surprise interactions and friendly visual prompts for child engagement."
  },
  {
    id: "finding-sight-2.1",
    name: "Finding Sight",
    bundleId: "my.finding3",
    version: "2.1",
    platform: "iOS",
    minimumOs: "3.2",
    ipaFile: "Finding Sight 2.1.ipa",
    fileSizeMb: 34,
    summary:
      "A sensory and visual recognition app designed to help users identify objects and strengthen observation skills."
  },
  {
    id: "artikpix-1.2.4",
    name: "ArtikPix",
    bundleId: "com.rinnapps.artikpix.iap",
    version: "1.2.4",
    platform: "iOS",
    minimumOs: "3.1",
    ipaFile: "ArtikPix 1.2.4.ipa",
    fileSizeMb: 41.4,
    summary:
      "A speech and communication app focused on pictures, sequencing, and expressive language for young learners."
  }
];

const formatSize = (mb) => {
  const rounded = Number.isInteger(mb) ? mb : mb.toFixed(1);
  return `${rounded} MB`;
};

const getAppById = (candidateId) => apps.find((app) => app.id === candidateId);

const renderAppGrid = () => {
  const grid = document.querySelector("#appGrid");
  const searchInput = document.querySelector("#searchInput");
  const sortSelect = document.querySelector("#sortSelect");

  if (!grid) {
    return;
  }

  const searchValue = (searchInput?.value || "").trim().toLowerCase();
  const sortValue = sortSelect?.value || "name";

  const filteredApps = apps.filter((app) => {
    if (!searchValue) {
      return true;
    }

    const content = `${app.name} ${app.bundleId} ${app.version} ${app.ipaFile}`.toLowerCase();
    return content.includes(searchValue);
  });

  const sortedApps = [...filteredApps].sort((a, b) => {
    switch (sortValue) {
      case "version":
        return compareVersions(b.version, a.version);
      case "size":
        return b.fileSizeMb - a.fileSizeMb;
      case "min-os":
        return compareVersions(b.minimumOs, a.minimumOs);
      default:
        return a.name.localeCompare(b.name) || compareVersions(a.version, b.version);
    }
  });

  const totalApps = document.querySelector("#totalApps");
  if (totalApps) {
    totalApps.textContent = String(apps.length);
  }

  if (!sortedApps.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No apps match that search. Try another name, version, or bundle ID.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = sortedApps
    .map(
      (app) => `
        <article class="app-card">
          <div class="card-top">
            <span class="platform-tag">${app.platform}</span>
            <span class="size-tag">${formatSize(app.fileSizeMb)}</span>
          </div>

          <div>
            <h3>${app.name}</h3>
            <p class="version">Version ${app.version}</p>
          </div>

          <dl class="meta">
            <div class="meta-row">
              <dt>Bundle ID</dt>
              <dd>${app.bundleId}</dd>
            </div>
            <div class="meta-row">
              <dt>Min OS</dt>
              <dd>${app.minimumOs}</dd>
            </div>
            <div class="meta-row">
              <dt>IPA</dt>
              <dd>${app.ipaFile}</dd>
            </div>
          </dl>

          <div class="actions">
            <a class="button secondary" href="app.html?app=${encodeURIComponent(app.id)}">Details</a>
            <a class="button primary" href="archive/${encodeURIComponent(app.ipaFile)}" download>Download</a>
          </div>
        </article>
      `
    )
    .join("");
};

const compareVersions = (left, right) => {
  const leftParts = left.split(".").map(Number);
  const rightParts = right.split(".").map(Number);
  const maxLength = Math.max(leftParts.length, rightParts.length);

  for (let idx = 0; idx < maxLength; idx += 1) {
    const leftPart = leftParts[idx] || 0;
    const rightPart = rightParts[idx] || 0;

    if (leftPart > rightPart) {
      return 1;
    }

    if (leftPart < rightPart) {
      return -1;
    }
  }

  return 0;
};

const renderDetailPage = () => {
  const detailHolder = document.querySelector("#appDetails");
  if (!detailHolder) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedId = params.get("app");
  const app = getAppById(selectedId);

  if (!app) {
    detailHolder.innerHTML = `
      <div class="failed-state">
        <h2>App not found</h2>
        <p>The requested archive record could not be located.</p>
        <a class="button primary" href="index.html">Return to archive</a>
      </div>
    `;
    return;
  }

  detailHolder.innerHTML = `
    <div class="detail-header">
      <div class="detail-row">
        <div>
          <p class="eyebrow accent">${app.platform}</p>
          <h2 class="detail-heading">${app.name}</h2>
        </div>
        <div class="actions">
          <a class="button secondary" href="index.html">Browse archive</a>
          <a class="button primary" href="archive/${encodeURIComponent(app.ipaFile)}" download>Download IPA</a>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <section class="summary-card">
        <h3>Overview</h3>
        <p>${app.summary}</p>
      </section>

      <aside class="meta-panel">
        <dl>
          <div>
            <dt>Version</dt>
            <dd>${app.version}</dd>
          </div>
          <div>
            <dt>Bundle ID</dt>
            <dd>${app.bundleId}</dd>
          </div>
          <div>
            <dt>Minimum OS</dt>
            <dd>${app.minimumOs}</dd>
          </div>
          <div>
            <dt>File size</dt>
            <dd>${formatSize(app.fileSizeMb)}</dd>
          </div>
          <div>
            <dt>IPA file</dt>
            <dd>${app.ipaFile}</dd>
          </div>
        </dl>
      </aside>
    </div>
  `;
};

const initializeArchive = () => {
  const searchInput = document.querySelector("#searchInput");
  const sortSelect = document.querySelector("#sortSelect");

  if (searchInput) {
    searchInput.addEventListener("input", renderAppGrid);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", renderAppGrid);
  }

  renderAppGrid();
  renderDetailPage();
};

document.addEventListener("DOMContentLoaded", initializeArchive);
