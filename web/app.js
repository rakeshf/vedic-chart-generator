const houseCentres = {
  1: [300, 105],
  2: [185, 65],
  3: [85, 105],
  4: [120, 220],
  5: [85, 335],
  6: [185, 375],
  7: [300, 335],
  8: [415, 375],
  9: [515, 335],
  10: [480, 220],
  11: [515, 105],
  12: [415, 65],
};

const planetIcons = {
  Asc: "As",
  Sun: "\u2609",
  Moon: "\u263d",
  Mars: "\u2642",
  Mercury: "\u263f",
  Jupiter: "\u2643",
  Venus: "\u2640",
  Saturn: "\u2644",
  Rahu: "Ra",
  Ketu: "Ke",
};

const chaldeanValues = {
  A: 1,
  I: 1,
  J: 1,
  Q: 1,
  Y: 1,
  B: 2,
  K: 2,
  R: 2,
  C: 3,
  G: 3,
  L: 3,
  S: 3,
  D: 4,
  M: 4,
  T: 4,
  E: 5,
  H: 5,
  N: 5,
  X: 5,
  U: 6,
  V: 6,
  W: 6,
  O: 7,
  Z: 7,
  F: 8,
  P: 8,
};

const loshuRemedies = {
  1: {
    planet: "Sun",
    element: "Water",
    focus: "Confidence, independence",
    remedy: "Morning sunlight, clear self-discipline, and one visible leadership action daily.",
  },
  2: {
    planet: "Moon",
    element: "Earth",
    focus: "Emotions, partnership",
    remedy: "Calm water practice, respect mother figures, and steady emotional routines.",
  },
  3: {
    planet: "Jupiter",
    element: "Wood",
    focus: "Wisdom, expression",
    remedy: "Study, teach, respect mentors, and keep a small yellow or growth symbol.",
  },
  4: {
    planet: "Rahu",
    element: "Wood",
    focus: "Stability, planning",
    remedy: "Use written plans, avoid shortcuts, and complete practical tasks before new ones.",
  },
  5: {
    planet: "Mercury",
    element: "Earth",
    focus: "Communication, balance",
    remedy: "Practice precise speech, journaling, breath control, and consistent learning.",
  },
  6: {
    planet: "Venus",
    element: "Metal",
    focus: "Home, harmony",
    remedy: "Keep surroundings clean, nurture relationships, and use beauty with simplicity.",
  },
  7: {
    planet: "Ketu",
    element: "Metal",
    focus: "Faith, intuition",
    remedy: "Meditation, quiet donation, spiritual reading, and time away from noise.",
  },
  8: {
    planet: "Saturn",
    element: "Earth",
    focus: "Karma, patience",
    remedy: "Serve elders or workers, stay punctual, and choose fairness in hard situations.",
  },
  9: {
    planet: "Mars",
    element: "Fire",
    focus: "Courage, action",
    remedy: "Exercise, anger discipline, decisive action, and mindful use of red.",
  },
};

const indianCities = [
  { name: "Agra", state: "Uttar Pradesh", latitude: 27.1767, longitude: 78.0081 },
  { name: "Ahmedabad", state: "Gujarat", latitude: 23.0225, longitude: 72.5714 },
  { name: "Amritsar", state: "Punjab", latitude: 31.634, longitude: 74.8723 },
  { name: "Bengaluru", state: "Karnataka", latitude: 12.9716, longitude: 77.5946 },
  { name: "Bhandara", state: "Maharashtra", latitude: 21.17, longitude: 79.650002 },
  { name: "Bhopal", state: "Madhya Pradesh", latitude: 23.2599, longitude: 77.4126 },
  { name: "Bhubaneswar", state: "Odisha", latitude: 20.2961, longitude: 85.8245 },
  { name: "Chandigarh", state: "Chandigarh", latitude: 30.7333, longitude: 76.7794 },
  { name: "Chennai", state: "Tamil Nadu", latitude: 13.0827, longitude: 80.2707 },
  { name: "Coimbatore", state: "Tamil Nadu", latitude: 11.0168, longitude: 76.9558 },
  { name: "Delhi", state: "Delhi", latitude: 28.6139, longitude: 77.209 },
  { name: "Gurugram", state: "Haryana", latitude: 28.4595, longitude: 77.0266 },
  { name: "Guwahati", state: "Assam", latitude: 26.1445, longitude: 91.7362 },
  { name: "Hyderabad", state: "Telangana", latitude: 17.385, longitude: 78.4867 },
  { name: "Indore", state: "Madhya Pradesh", latitude: 22.7196, longitude: 75.8577 },
  { name: "Jaipur", state: "Rajasthan", latitude: 26.9124, longitude: 75.7873 },
  { name: "Kanpur", state: "Uttar Pradesh", latitude: 26.4499, longitude: 80.3319 },
  { name: "Kochi", state: "Kerala", latitude: 9.9312, longitude: 76.2673 },
  { name: "Kolkata", state: "West Bengal", latitude: 22.5726, longitude: 88.3639 },
  { name: "Lucknow", state: "Uttar Pradesh", latitude: 26.8467, longitude: 80.9462 },
  { name: "Mumbai", state: "Maharashtra", latitude: 19.076, longitude: 72.8777 },
  { name: "Nagpur", state: "Maharashtra", latitude: 21.1458, longitude: 79.0882 },
  { name: "Nashik", state: "Maharashtra", latitude: 19.9975, longitude: 73.7898 },
  { name: "Noida", state: "Uttar Pradesh", latitude: 28.5355, longitude: 77.391 },
  { name: "Patna", state: "Bihar", latitude: 25.5941, longitude: 85.1376 },
  { name: "Pune", state: "Maharashtra", latitude: 18.5204, longitude: 73.8567 },
  { name: "Raipur", state: "Chhattisgarh", latitude: 21.2514, longitude: 81.6296 },
  { name: "Ranchi", state: "Jharkhand", latitude: 23.3441, longitude: 85.3096 },
  { name: "Surat", state: "Gujarat", latitude: 21.1702, longitude: 72.8311 },
  { name: "Thiruvananthapuram", state: "Kerala", latitude: 8.5241, longitude: 76.9366 },
  { name: "Vadodara", state: "Gujarat", latitude: 22.3072, longitude: 73.1812 },
  { name: "Varanasi", state: "Uttar Pradesh", latitude: 25.3176, longitude: 82.9739 },
  { name: "Visakhapatnam", state: "Andhra Pradesh", latitude: 17.6868, longitude: 83.2185 },
];

const cityAliases = new Map([
  ["bangalore", "Bengaluru"],
  ["bombay", "Mumbai"],
  ["calcutta", "Kolkata"],
  ["gurgaon", "Gurugram"],
  ["new delhi", "Delhi"],
  ["trivandrum", "Thiruvananthapuram"],
  ...indianCities.map((city) => [city.name.toLowerCase(), city.name]),
]);

const state = {
  activeChart: "D1",
  result: null,
};

const chartCacheKey = "vedicChart.cache.v3";
const nameIndexKey = "vedicChart.nameIndex.v3";

const form = document.querySelector("#birth-form");
const nameInput = document.querySelector("#name");
const savedNamesList = document.querySelector("#saved-names");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const genderInput = document.querySelector("#gender");
const cityInput = document.querySelector("#city");
const cityList = document.querySelector("#indian-cities");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const timezoneInput = document.querySelector("#timezone");
const summary = document.querySelector("#validation-summary");
const chartOutput = document.querySelector("#chart-output");
const chartTitle = document.querySelector("#chart-title");
const clearCacheButton = document.querySelector("#clear-cache");
const downloadButton = document.querySelector("#download-svg");
const tabs = [...document.querySelectorAll(".tab")];
const nameNumber = document.querySelector("#name-number");
const nameCompound = document.querySelector("#name-compound");
const dobNumber = document.querySelector("#dob-number");
const dobCompound = document.querySelector("#dob-compound");
const lifePathNumber = document.querySelector("#life-path-number");
const lifePathCompound = document.querySelector("#life-path-compound");
const nameBreakdown = document.querySelector("#name-breakdown");
const missingRemedies = document.querySelector("#missing-remedies");
const loshuCells = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => [
    number,
    document.querySelector(`#loshu-${number}`),
  ]),
);

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normaliseCachePart(value) {
  return String(value ?? "").trim().toLowerCase();
}

function cacheKeyForBirth(birth) {
  return [
    normaliseCachePart(birth.name),
    normaliseCachePart(birth.date),
    normaliseCachePart(birth.time),
    normaliseCachePart(birth.gender),
    normaliseCachePart(birth.timezone),
    Number(birth.latitude).toFixed(6),
    Number(birth.longitude).toFixed(6),
  ].join("|");
}

function nameKey(name) {
  return normaliseCachePart(name);
}

function populateSavedNames() {
  const index = readStorage(nameIndexKey, {});
  savedNamesList.innerHTML = Object.values(index)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => `<option value="${escapeXml(entry.name)}">${escapeXml(entry.date || "")}</option>`)
    .join("");
}

function cacheChartResult(birth, result) {
  const cache = readStorage(chartCacheKey, {});
  const index = readStorage(nameIndexKey, {});
  const key = cacheKeyForBirth(birth);
  const saved = {
    birth,
    result,
    savedAt: new Date().toISOString(),
  };

  cache[key] = saved;
  index[nameKey(birth.name)] = {
    name: birth.name,
    date: birth.date,
    key,
    savedAt: saved.savedAt,
  };
  writeStorage(chartCacheKey, cache);
  writeStorage(nameIndexKey, index);
  populateSavedNames();
}

function cachedChartForBirth(birth) {
  const cached = readStorage(chartCacheKey, {})[cacheKeyForBirth(birth)] || null;
  return cached && hasAscendantInD1(cached.result) ? cached : null;
}

function cachedChartForName(name) {
  const index = readStorage(nameIndexKey, {});
  const entry = index[nameKey(name)];
  if (!entry) return null;
  const cached = readStorage(chartCacheKey, {})[entry.key] || null;
  return cached && hasAscendantInD1(cached.result) ? cached : null;
}

function clearChartCache() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("vedicChart."))
    .forEach((key) => localStorage.removeItem(key));
  savedNamesList.innerHTML = "";
  state.result = null;
  renderActiveChart();
  showValidation([], "Chart cache cleared.");
}

function fillFormFromBirth(birth) {
  nameInput.value = birth.name || "";
  dateInput.value = birth.date || "";
  timeInput.value = birth.time || "";
  genderInput.value = birth.gender || "";
  cityInput.value = birth.city || "";
  timezoneInput.value = birth.timezone || "";
  latitudeInput.value = Number.isFinite(Number(birth.latitude)) ? birth.latitude : "";
  longitudeInput.value = Number.isFinite(Number(birth.longitude)) ? birth.longitude : "";
  renderNumerology();
}

function loadCachedName() {
  const cached = cachedChartForName(nameInput.value);
  if (!cached) return false;

  fillFormFromBirth(cached.birth);
  loadResult(cached.result);
  showValidation([], `Loaded saved chart for ${cached.birth.name}.`);
  return true;
}

function reduceNumber(value) {
  let current = Math.abs(Number(value) || 0);
  while (current > 9) {
    current = String(current)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current || "-";
}

function dateDigits(dateValue) {
  return String(dateValue || "").replace(/\D/g, "").split("").map(Number);
}

function calculateNameNumber(name) {
  const letters = String(name || "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("");
  const entries = letters.map((letter) => ({ letter, value: chaldeanValues[letter] || 0 }));
  const total = entries.reduce((sum, entry) => sum + entry.value, 0);
  return { total, reduced: reduceNumber(total), entries };
}

function calculateDobNumbers(dateValue) {
  if (!dateValue) {
    return { dayTotal: 0, dayReduced: "-", lifeTotal: 0, lifeReduced: "-" };
  }
  const [, , day = ""] = dateValue.split("-");
  const dayTotal = day.split("").reduce((sum, digit) => sum + Number(digit || 0), 0);
  const lifeTotal = dateDigits(dateValue).reduce((sum, digit) => sum + digit, 0);
  return {
    dayTotal,
    dayReduced: reduceNumber(dayTotal),
    lifeTotal,
    lifeReduced: reduceNumber(lifeTotal),
  };
}

function calculateLoshu(dateValue) {
  const counts = Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => [number, 0]));
  for (const digit of dateDigits(dateValue)) {
    if (digit > 0) counts[digit] += 1;
  }
  return counts;
}

function renderNumerology() {
  const nameResult = calculateNameNumber(nameInput.value);
  const dobResult = calculateDobNumbers(dateInput.value);
  const loshu = calculateLoshu(dateInput.value);

  nameNumber.textContent = nameResult.reduced;
  nameCompound.textContent = `Total ${nameResult.total || "-"}`;
  dobNumber.textContent = dobResult.dayReduced;
  dobCompound.textContent = `Day ${dobResult.dayTotal || "-"}`;
  lifePathNumber.textContent = dobResult.lifeReduced;
  lifePathCompound.textContent = `Total ${dobResult.lifeTotal || "-"}`;
  nameBreakdown.innerHTML = nameResult.entries.length
    ? nameResult.entries
        .map(
          (entry) =>
            `<span class="letter-chip"><b>${escapeXml(entry.letter)}</b>${entry.value}</span>`,
        )
        .join("")
    : '<span class="muted-text">Enter a name to calculate.</span>';

  for (const [number, cell] of Object.entries(loshuCells)) {
    const count = loshu[number];
    cell.textContent = count ? String(number).repeat(count) : "-";
    cell.parentElement.classList.toggle("filled", count > 0);
  }

  const missing = Object.entries(loshu)
    .filter(([, count]) => count === 0)
    .map(([number]) => Number(number));
  missingRemedies.innerHTML = missing.length
    ? missing
        .map(
          (number) => {
            const item = loshuRemedies[number];
            return `<div class="remedy-row">
              <strong>${number}</strong>
              <div>
                <span class="remedy-meta">${escapeXml(item.planet)} / ${escapeXml(item.element)}</span>
                <b>${escapeXml(item.focus)}</b>
                <p>${escapeXml(item.remedy)}</p>
              </div>
            </div>`;
          },
        )
        .join("")
    : '<span class="muted-text">No missing Lo Shu numbers.</span>';
}

function populateCityList() {
  cityList.innerHTML = indianCities
    .map((city) => `<option value="${escapeXml(city.name)}">${escapeXml(city.state)}</option>`)
    .join("");
}

function findCity(value) {
  const key = value.trim().toLowerCase();
  const compactKey = key.replace(/[^a-z]/g, " ");
  const canonicalName = cityAliases.get(key);
  if (canonicalName) {
    return indianCities.find((city) => city.name === canonicalName) || null;
  }
  return (
    indianCities.find((city) => compactKey.split(/\s+/).includes(city.name.toLowerCase())) ||
    null
  );
}

function applyCityCoordinates() {
  const city = findCity(cityInput.value);
  if (!city) return false;

  cityInput.value = city.name;
  latitudeInput.value = city.latitude;
  longitudeInput.value = city.longitude;
  timezoneInput.value = "Asia/Kolkata";
  showValidation([], `${city.name}, ${city.state}: latitude and longitude filled.`);
  return true;
}

function normaliseTime(value) {
  if (!value) return value;
  return value.length === 5 ? `${value}:00` : value;
}

function formBirthData() {
  const data = new FormData(form);
  const city = findCity(data.get("city") || "");
  const cityLabel = city
    ? `${city.name}, ${city.state}, India`
    : (data.get("city") || "").trim();

  return {
    name: (data.get("name") || "").trim(),
    date: data.get("date"),
    time: normaliseTime(data.get("time")),
    gender: data.get("gender"),
    timezone: (data.get("timezone") || "").trim(),
    city: cityLabel,
    latitude: Number(data.get("latitude")),
    longitude: Number(data.get("longitude")),
  };
}

async function calculateChart(birth) {
  const response = await fetch("/api/chart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...birth, node: "true" }),
  });
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.detail || "Chart calculation failed.");
  }
  return body;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function signForHouse(chart, house) {
  const ascSign = chart.ascendant.sign;
  return ((ascSign + house - 1) % 12) + 1;
}

function normaliseHouses(houses) {
  const output = {};
  for (let house = 1; house <= 12; house += 1) {
    output[house] = houses?.[house] || houses?.[String(house)] || [];
  }
  return output;
}

function hasAscendantInD1(result) {
  const firstHouse = normaliseHouses(result?.charts?.D1?.houses)[1];
  return firstHouse.some((item) => item.name === "Asc");
}

function setActiveChart(chartName) {
  state.activeChart = chartName;
  tabs.forEach((item) => {
    const isActive = item.dataset.chart === chartName;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
}

function displayHouses(chart) {
  const houses = normaliseHouses(chart.houses);
  const firstHouse = houses[1];
  const hasAscendant = firstHouse.some((item) => item.name === "Asc");
  if (!hasAscendant && chart.ascendant) {
    houses[1] = [
      {
        name: "Asc",
        degree: chart.ascendant.degree,
        retrograde: false,
      },
      ...firstHouse,
    ];
  }
  return houses;
}

function formatDegree(degree) {
  const totalMinutes = Math.round(Number(degree) * 60);
  const degrees = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${degrees}\u00b0 ${minutes}\u2032`;
}

function planetLabel(item) {
  const retrograde = item.retrograde ? " \u211e" : "";
  return `${item.name}${retrograde} ${formatDegree(item.degree)}`;
}

function renderPlanetItem(item, x, y, index) {
  const icon = planetIcons[item.name] || item.name.slice(0, 2);
  const iconX = x - 46;
  const rowY = y + 18 + index * 22;
  return `<g class="planet-row">
    <circle class="planet-chip" cx="${iconX}" cy="${rowY - 4}" r="8"/>
    <text class="planet-icon" x="${iconX}" y="${rowY - 1}" text-anchor="middle">${escapeXml(icon)}</text>
    <text class="planet" x="${iconX + 13}" y="${rowY}" text-anchor="start">${escapeXml(planetLabel(item))}</text>
  </g>`;
}

function renderNorthIndianSvg(chart, title) {
  const houses = displayHouses(chart);
  const labels = Object.entries(houseCentres)
    .map(([house, [x, y]]) => {
      const houseNumber = Number(house);
      const planets = houses[houseNumber];
      return `<g class="house-label">
        <circle class="sign-chip" cx="${x}" cy="${y - 6}" r="11"/>
        <text class="sign" x="${x}" y="${y - 2}" text-anchor="middle">${signForHouse(chart, houseNumber)}</text>
        ${planets.map((item, index) => renderPlanetItem(item, x, y, index)).join("")}
      </g>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="480" viewBox="0 0 600 480" role="img" aria-label="${escapeXml(title)}">
  <style>
    .frame { fill: #fffdf8; stroke: #7c3f1d; stroke-width: 2.2; }
    .line { stroke: #7c3f1d; stroke-width: 1.55; }
    .title { font: 700 22px sans-serif; fill: #1f2933; }
    .sign-chip { fill: #f3eee4; stroke: #b45309; stroke-width: 1; }
    .sign { font: 800 12px sans-serif; fill: #9a3412; }
    .planet-chip { fill: #dff4ef; stroke: #0f766e; stroke-width: 1; }
    .planet-icon { font: 700 9px sans-serif; fill: #115e59; }
    .planet { font: 12px sans-serif; fill: #1f2933; }
  </style>
  <text class="title" x="300" y="28" text-anchor="middle">${escapeXml(title)}</text>
  <rect class="frame" x="40" y="40" width="520" height="400"/>
  <path class="line" d="M40 40 L560 440 M560 40 L40 440 M300 40 L560 240 L300 440 L40 240 Z" fill="none"/>
  ${labels}
</svg>`;
}

function validateBirthFields(data) {
  const errors = [];
  const latitude = Number(data.get("latitude"));
  const longitude = Number(data.get("longitude"));

  if (!data.get("name")?.trim()) errors.push("Name is required.");
  if (!data.get("date")) errors.push("Date is required.");
  if (!data.get("time")) errors.push("Time is required.");
  if (!data.get("timezone")?.trim()) errors.push("Timezone is required.");
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
    errors.push("Latitude must be between -90 and 90.");
  }
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    errors.push("Longitude must be between -180 and 180.");
  }

  return errors;
}

function validateChartResult(result) {
  const errors = [];
  if (!result || typeof result !== "object") return ["Chart data must be an object."];
  if (!result.charts || typeof result.charts !== "object") {
    return ["Chart data must include a charts object."];
  }

  for (const chartName of ["D1", "D9", "D10"]) {
    const chart = result.charts[chartName];
    if (!chart) {
      errors.push(`${chartName} chart is missing.`);
      continue;
    }
    if (!chart.ascendant || !Number.isInteger(chart.ascendant.sign)) {
      errors.push(`${chartName} ascendant.sign must be an integer from 0 to 11.`);
    } else if (chart.ascendant.sign < 0 || chart.ascendant.sign > 11) {
      errors.push(`${chartName} ascendant.sign must be from 0 to 11.`);
    }
    if (!chart.houses || typeof chart.houses !== "object") {
      errors.push(`${chartName} houses object is missing.`);
    }
  }

  return errors;
}

function showValidation(errors, okMessage) {
  summary.className = `validation-summary ${errors.length ? "error" : "ok"}`;
  summary.textContent = errors.length ? errors.join(" ") : okMessage;
}

function renderActiveChart() {
  if (!state.result) {
    chartTitle.textContent = "";
    chartOutput.innerHTML = '<div class="empty-state">Enter details or paste chart JSON.</div>';
    return;
  }

  const chart = state.result.charts[state.activeChart];
  const title = state.activeChart;

  chartTitle.textContent = [
    state.result.options?.ayanamsha ? `Ayanamsha: ${state.result.options.ayanamsha}` : "",
    state.result.metadata?.house_system
      ? `House system: ${state.result.metadata.house_system.replace("_", " ")}`
      : "",
  ]
    .filter(Boolean)
    .join(" | ");
  chartOutput.innerHTML = renderNorthIndianSvg(chart, title);
}

function loadResult(result) {
  const errors = validateChartResult(result);
  if (errors.length) {
    showValidation(errors);
    return;
  }
  state.result = result;
  setActiveChart("D1");
  showValidation([], "Chart data validated and rendered.");
  renderNumerology();
  renderActiveChart();
}

function loadAndCacheResult(result, birth) {
  loadResult(result);
  cacheChartResult(birth, result);
}

function downloadSvg() {
  const svg = chartOutput.querySelector("svg");
  if (!svg) return;

  const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${state.activeChart}.svg`;
  link.click();
  URL.revokeObjectURL(link.href);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  applyCityCoordinates();
  const data = new FormData(form);
  const errors = validateBirthFields(data);
  if (errors.length) {
    showValidation(errors);
    return;
  }

  const birth = formBirthData();
  const cached = cachedChartForBirth(birth);
  if (cached) {
    loadResult(cached.result);
    showValidation([], "Loaded chart from cache.");
    return;
  }

  if (location.protocol === "file:") {
    showValidation([
      "Open this UI from the Python API server to regenerate charts from inputs: uvicorn vedic_chart.api:app --reload --host 127.0.0.1 --port 8000",
    ]);
    return;
  }

  showValidation([], "Calculating chart...");
  try {
    const result = await calculateChart(birth);
    loadAndCacheResult(result, birth);
    showValidation([], "Chart regenerated and saved to cache.");
  } catch (error) {
    showValidation([error.message]);
  }
});

cityInput.addEventListener("change", applyCityCoordinates);
cityInput.addEventListener("blur", applyCityCoordinates);
nameInput.addEventListener("input", renderNumerology);
nameInput.addEventListener("change", loadCachedName);
nameInput.addEventListener("blur", loadCachedName);
dateInput.addEventListener("input", renderNumerology);

clearCacheButton.addEventListener("click", clearChartCache);

downloadButton.addEventListener("click", downloadSvg);

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    setActiveChart(tab.dataset.chart);
    renderActiveChart();
  });
}

populateCityList();
populateSavedNames();
renderNumerology();
renderActiveChart();
