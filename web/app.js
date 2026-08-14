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
    focus: "Confidence, independence, initiative",
    remedy: "Take morning sunlight, make one decision independently, maintain self-discipline, and perform one visible leadership action daily.",
  },
  2: {
    planet: "Moon",
    element: "Earth",
    focus: "Emotions, sensitivity, partnership",
    remedy: "Practise patient listening, maintain emotional routines, cooperate without becoming dependent, and strengthen relationships with mother figures or supportive women.",
  },
  3: {
    planet: "Jupiter",
    element: "Wood",
    focus: "Wisdom, creativity, expression",
    remedy: "Study regularly, teach or share knowledge, respect mentors, practise confident expression, and keep a healthy growing plant.",
  },
  4: {
    planet: "Rahu",
    element: "Wood",
    focus: "Planning, structure, stability",
    remedy: "Use a written schedule, preferably with a wooden pen, organise your workspace, avoid shortcuts, and finish existing tasks before starting new ones.",
  },
  5: {
    planet: "Mercury",
    element: "Earth",
    focus: "Communication, adaptability, balance",
    remedy: "Journal daily, speak clearly and precisely, practise breathwork, keep learning, and pause before making impulsive decisions.",
  },
  6: {
    planet: "Venus",
    element: "Metal",
    focus: "Home, responsibility, harmony",
    remedy: "Keep your home clean and pleasant, honour commitments, nurture close relationships, and choose simple beauty instead of excess.",
  },
  7: {
    planet: "Ketu",
    element: "Metal",
    focus: "Introspection, faith, intuition",
    remedy: "Meditate, spend regular time in silence, read spiritual or reflective material, donate discreetly, and avoid excessive isolation.",
  },
  8: {
    planet: "Saturn",
    element: "Earth",
    focus: "Discipline, patience, responsibility",
    remedy: "Be punctual, follow long-term routines, serve elders or workers, manage money responsibly, and act fairly during difficult situations.",
  },
  9: {
    planet: "Mars",
    element: "Fire",
    focus: "Courage, energy, decisive action",
    remedy: "Exercise regularly, control anger, take timely action, channel competitiveness constructively, and use red only as a subtle symbolic reminder.",
  },
};

const kuaSuggestions = {
  1: "Use water balance: keep routines calm, communicate clearly, study regularly, and choose quiet reflection before major decisions.",
  2: "Use earth balance: keep the home steady, plan patiently, serve others practically, and avoid emotional over-dependence.",
  3: "Use wood balance: exercise lightly, express ideas honestly, start healthy new habits, and stay flexible when plans change.",
  4: "Use wood balance: organise priorities, keep learning, improve gradually, and use structure without becoming rigid.",
  5: "Use centre balance: simplify the home, reduce clutter, keep steady routines, and follow the gender mapping for Kua 5 guidance.",
  6: "Use metal balance: honour responsibility, keep financial order, lead calmly, and practise respectful authority.",
  7: "Use metal balance: maintain boundaries, speak gently, review spending, and choose refinement over criticism.",
  8: "Use earth balance: build discipline, save consistently, organise spaces, and commit to steady long-term work.",
  9: "Use fire balance: show warmth, practise confidence, manage intensity, and use visibility without impatience.",
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

function dms(degrees, minutes = 0) {
  return degrees + minutes / 60;
}

const sampleResult = {
  birth: {
    name: "Example Person",
    date: "1990-01-01",
    time: "12:00:00",
    gender: "Unspecified",
    timezone: "Asia/Kolkata",
    city: "Delhi, India",
    latitude: 28.6139,
    longitude: 77.209,
    utc: "1990-01-01T06:30:00+00:00",
  },
  options: { node: "true", ayanamsha: "lahiri" },
  metadata: {
    ayanamsha_degrees: 23.643940100655982,
    house_system: "whole_sign",
  },
  charts: {
    D1: {
      ascendant: { sign: 4, sign_name: "Leo", degree: 11.117769, division: 1, longitude: 131.117769 },
      houses: {
        1: [{ name: "Asc", sign: 4, sign_name: "Leo", degree: 11.117769, retrograde: false }],
        2: [
          { name: "Sun", sign: 5, sign_name: "Virgo", degree: 11.339544, retrograde: false },
          { name: "Mercury", sign: 5, sign_name: "Virgo", degree: 1.132492, retrograde: false },
        ],
        3: [
          { name: "Moon", sign: 6, sign_name: "Libra", degree: 20.746445, retrograde: false },
          { name: "Venus", sign: 6, sign_name: "Libra", degree: 9.131945, retrograde: false },
          { name: "Saturn", sign: 6, sign_name: "Libra", degree: 20.388559, retrograde: false },
        ],
        4: [{ name: "Ketu", sign: 7, sign_name: "Scorpio", degree: 5.107137, retrograde: true }],
        5: [
          { name: "Mars", sign: 8, sign_name: "Sagittarius", degree: 1.378499, retrograde: false },
          { name: "Jupiter", sign: 8, sign_name: "Sagittarius", degree: 10.782995, retrograde: false },
        ],
        10: [{ name: "Rahu", sign: 1, sign_name: "Taurus", degree: 5.107137, retrograde: true }],
      },
    },
    D9: {
      ascendant: { sign: 3, sign_name: "Cancer", degree: 10.059921, division: 9, longitude: 100.059921 },
      houses: {
        1: [
          { name: "Asc", sign: 3, sign_name: "Cancer", degree: 10.059921, retrograde: false },
          { name: "Jupiter", sign: 3, sign_name: "Cancer", degree: 7.046954, retrograde: false },
        ],
        2: [{ name: "Ketu", sign: 4, sign_name: "Leo", degree: 15.96423, retrograde: true }],
        6: [{ name: "Venus", sign: 8, sign_name: "Sagittarius", degree: 22.187506, retrograde: false }],
        7: [{ name: "Mercury", sign: 9, sign_name: "Capricorn", degree: 10.192432, retrograde: false }],
        8: [{ name: "Rahu", sign: 10, sign_name: "Aquarius", degree: 15.96423, retrograde: true }],
        10: [
          { name: "Sun", sign: 0, sign_name: "Aries", degree: 12.055892, retrograde: false },
          { name: "Moon", sign: 0, sign_name: "Aries", degree: 6.718004, retrograde: false },
          { name: "Mars", sign: 0, sign_name: "Aries", degree: 12.406489, retrograde: false },
          { name: "Saturn", sign: 0, sign_name: "Aries", degree: 3.497031, retrograde: false },
        ],
      },
    },
    D10: {
      ascendant: { sign: 7, sign_name: "Scorpio", degree: 21.17769, division: 10, longitude: 231.17769 },
      houses: {
        1: [{ name: "Asc", sign: 7, sign_name: "Scorpio", degree: 21.17769, retrograde: false }],
        2: [{ name: "Mars", sign: 8, sign_name: "Sagittarius", degree: 13.784988, retrograde: false }],
        3: [{ name: "Venus", sign: 9, sign_name: "Capricorn", degree: 1.319451, retrograde: false }],
        4: [{ name: "Rahu", sign: 10, sign_name: "Aquarius", degree: 21.071366, retrograde: true }],
        5: [{ name: "Jupiter", sign: 11, sign_name: "Pisces", degree: 17.829949, retrograde: false }],
        6: [
          { name: "Moon", sign: 0, sign_name: "Aries", degree: 27.464449, retrograde: false },
          { name: "Saturn", sign: 0, sign_name: "Aries", degree: 23.88559, retrograde: false },
        ],
        7: [{ name: "Mercury", sign: 1, sign_name: "Taurus", degree: 11.324925, retrograde: false }],
        10: [
          { name: "Sun", sign: 4, sign_name: "Leo", degree: 23.395435, retrograde: false },
          { name: "Ketu", sign: 4, sign_name: "Leo", degree: 21.071366, retrograde: true },
        ],
      },
    },
  },
};

const state = {
  activeChart: "D1",
  result: null,
  rahuLocation: null,
};

const form = document.querySelector("#birth-form");
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const genderInput = document.querySelector("#gender");
const cityInput = document.querySelector("#city");
const cityList = document.querySelector("#indian-cities");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const timezoneInput = document.querySelector("#timezone");
const summary = document.querySelector("#validation-summary");
const chartJson = document.querySelector("#chart-json");
const chartOutput = document.querySelector("#chart-output");
const chartTitle = document.querySelector("#chart-title");
const renderJsonButton = document.querySelector("#render-json");
const loadSampleButton = document.querySelector("#load-sample");
const downloadButton = document.querySelector("#download-svg");
const tabs = [...document.querySelectorAll(".tab")];
const nameNumber = document.querySelector("#name-number");
const nameCompound = document.querySelector("#name-compound");
const dobNumber = document.querySelector("#dob-number");
const dobCompound = document.querySelector("#dob-compound");
const lifePathNumber = document.querySelector("#life-path-number");
const lifePathCompound = document.querySelector("#life-path-compound");
const kuaNumber = document.querySelector("#kua-number");
const kuaGroup = document.querySelector("#kua-group");
const kuaSuggestion = document.querySelector("#kua-suggestion");
const nameBreakdown = document.querySelector("#name-breakdown");
const missingRemedies = document.querySelector("#missing-remedies");
const rahuDate = document.querySelector("#rahu-date");
const rahuTime = document.querySelector("#rahu-time");
const rahuPlace = document.querySelector("#rahu-place");
const rahuSunrise = document.querySelector("#rahu-sunrise");
const rahuSunset = document.querySelector("#rahu-sunset");
const rahuCityInput = document.querySelector("#rahu-city");
const useCurrentLocationButton = document.querySelector("#use-current-location");
const loshuCells = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => [
    number,
    document.querySelector(`#loshu-${number}`),
  ]),
);

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

function calculateKuaNumber(dateValue, genderValue) {
  const [year = ""] = String(dateValue || "").split("-");
  const gender = String(genderValue || "").toLowerCase();
  if (!/^\d{4}$/.test(year) || !["male", "female"].includes(gender)) {
    return { number: "-", group: gender ? "Enter DOB" : "Select gender" };
  }

  const yearSum = reduceNumber(
    year.split("").reduce((sum, digit) => sum + Number(digit), 0),
  );
  let kua = gender === "male" ? 11 - yearSum : yearSum + 4;
  kua = reduceNumber(kua);
  if (kua === 5) kua = gender === "male" ? 2 : 8;

  const eastGroup = [1, 3, 4, 9].includes(kua);
  return {
    number: kua,
    group: eastGroup ? "East group" : "West group",
    suggestion: kuaSuggestions[kua],
  };
}

function calculateLoshu(dateValue) {
  const counts = Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => [number, 0]));
  for (const digit of dateDigits(dateValue)) {
    if (digit > 0) counts[digit] += 1;
  }
  return counts;
}

function degreesToRadians(value) {
  return (value * Math.PI) / 180;
}

function radiansToDegrees(value) {
  return (value * 180) / Math.PI;
}

function normaliseDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function normaliseHours(value) {
  return ((value % 24) + 24) % 24;
}

function todayPartsInTimeZone(timezone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone || "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const valueFor = (type) => parts.find((part) => part.type === type)?.value;
  return {
    day: Number(valueFor("day")),
    month: Number(valueFor("month")),
    weekday: valueFor("weekday"),
    year: Number(valueFor("year")),
  };
}

function dayOfYear({ year, month, day }) {
  const start = Date.UTC(year, 0, 0);
  const current = Date.UTC(year, month - 1, day);
  return Math.floor((current - start) / 86400000);
}

function calculateSunEventUtc(parts, latitude, longitude, isSunrise) {
  const zenith = 90.833;
  const n = dayOfYear(parts);
  const lngHour = longitude / 15;
  const t = n + ((isSunrise ? 6 : 18) - lngHour) / 24;
  const meanAnomaly = 0.9856 * t - 3.289;
  const trueLongitude = normaliseDegrees(
    meanAnomaly +
      1.916 * Math.sin(degreesToRadians(meanAnomaly)) +
      0.02 * Math.sin(2 * degreesToRadians(meanAnomaly)) +
      282.634,
  );
  let rightAscension = radiansToDegrees(
    Math.atan(0.91764 * Math.tan(degreesToRadians(trueLongitude))),
  );
  rightAscension = normaliseDegrees(rightAscension);
  rightAscension +=
    Math.floor(trueLongitude / 90) * 90 - Math.floor(rightAscension / 90) * 90;
  rightAscension /= 15;

  const sinDec = 0.39782 * Math.sin(degreesToRadians(trueLongitude));
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosHour =
    (Math.cos(degreesToRadians(zenith)) -
      sinDec * Math.sin(degreesToRadians(latitude))) /
    (cosDec * Math.cos(degreesToRadians(latitude)));

  if (cosHour > 1 || cosHour < -1) return null;

  const hourAngle = isSunrise
    ? 360 - radiansToDegrees(Math.acos(cosHour))
    : radiansToDegrees(Math.acos(cosHour));
  const localMeanTime = hourAngle / 15 + rightAscension - 0.06571 * t - 6.622;
  const utcHour = normaliseHours(localMeanTime - lngHour);

  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day) + utcHour * 3600000);
}

function formatTimeInZone(date, timezone) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: timezone || "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function distanceKm(fromLatitude, fromLongitude, toLatitude, toLongitude) {
  const earthRadiusKm = 6371;
  const latitudeDelta = degreesToRadians(toLatitude - fromLatitude);
  const longitudeDelta = degreesToRadians(toLongitude - fromLongitude);
  const startLatitude = degreesToRadians(fromLatitude);
  const endLatitude = degreesToRadians(toLatitude);
  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function nearestIndianCity(latitude, longitude) {
  return indianCities
    .map((city) => ({
      ...city,
      distance: distanceKm(latitude, longitude, city.latitude, city.longitude),
    }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function renderRahuKalam() {
  const location = state.rahuLocation;
  if (!location) {
    rahuDate.textContent = "Today";
    rahuTime.textContent = "-";
    rahuPlace.textContent = "Select Rahu city or use current location";
    rahuSunrise.textContent = "Sunrise -";
    rahuSunset.textContent = "Sunset -";
    return;
  }

  const latitude = Number(location.latitude);
  const longitude = Number(location.longitude);
  const timezone = location.timezone || "Asia/Kolkata";
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    rahuDate.textContent = "Today";
    rahuTime.textContent = "-";
    rahuPlace.textContent = "Check Rahu location";
    rahuSunrise.textContent = "Sunrise -";
    rahuSunset.textContent = "Sunset -";
    return;
  }

  try {
    const parts = todayPartsInTimeZone(timezone);
    const sunrise = calculateSunEventUtc(parts, latitude, longitude, true);
    const sunset = calculateSunEventUtc(parts, latitude, longitude, false);
    if (!sunrise || !sunset || sunset <= sunrise) {
      throw new Error("Sunrise/sunset unavailable for this location.");
    }

    const segmentByWeekday = [8, 2, 7, 5, 6, 4, 3];
    const weekday = new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay();
    const segment = segmentByWeekday[weekday];
    const segmentLength = (sunset.getTime() - sunrise.getTime()) / 8;
    const rahuStart = new Date(sunrise.getTime() + (segment - 1) * segmentLength);
    const rahuEnd = new Date(rahuStart.getTime() + segmentLength);

    rahuDate.textContent = `${parts.weekday}, ${String(parts.day).padStart(2, "0")}/${String(
      parts.month,
    ).padStart(2, "0")}/${parts.year}`;
    rahuTime.textContent = `${formatTimeInZone(rahuStart, timezone)} - ${formatTimeInZone(
      rahuEnd,
      timezone,
    )}`;
    rahuPlace.textContent = location.label || `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    rahuSunrise.textContent = `Sunrise ${formatTimeInZone(sunrise, timezone)}`;
    rahuSunset.textContent = `Sunset ${formatTimeInZone(sunset, timezone)}`;
  } catch {
    rahuDate.textContent = "Today";
    rahuTime.textContent = "-";
    rahuPlace.textContent = "Check timezone and coordinates";
    rahuSunrise.textContent = "Sunrise -";
    rahuSunset.textContent = "Sunset -";
  }
}

function renderNumerology() {
  const nameResult = calculateNameNumber(nameInput.value);
  const dobResult = calculateDobNumbers(dateInput.value);
  const kuaResult = calculateKuaNumber(dateInput.value, genderInput.value);
  const loshu = calculateLoshu(dateInput.value);

  nameNumber.textContent = nameResult.reduced;
  nameCompound.textContent = `Total ${nameResult.total || "-"}`;
  dobNumber.textContent = dobResult.dayReduced;
  dobCompound.textContent = `Day ${dobResult.dayTotal || "-"}`;
  lifePathNumber.textContent = dobResult.lifeReduced;
  lifePathCompound.textContent = `Total ${dobResult.lifeTotal || "-"}`;
  kuaNumber.textContent = kuaResult.number;
  kuaGroup.textContent = kuaResult.group;
  kuaSuggestion.textContent = kuaResult.suggestion || "-";
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
  const missingRows = missing.map(
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
  );
  missingRemedies.innerHTML = missingRows.length
    ? missingRows.join("")
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

function setRahuLocation(location) {
  state.rahuLocation = location;
  renderRahuKalam();
}

function applyRahuCity() {
  const city = findCity(rahuCityInput.value);
  if (!city) {
    state.rahuLocation = null;
    renderRahuKalam();
    return false;
  }

  rahuCityInput.value = city.name;
  setRahuLocation({
    label: `${city.name}, ${city.state}`,
    latitude: city.latitude,
    longitude: city.longitude,
    timezone: "Asia/Kolkata",
  });
  return true;
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    rahuDate.textContent = "Today";
    rahuTime.textContent = "-";
    rahuPlace.textContent = "Browser location is unavailable";
    rahuSunrise.textContent = "Sunrise -";
    rahuSunset.textContent = "Sunset -";
    return;
  }

  rahuPlace.textContent = "Requesting browser location...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const matchedCity = nearestIndianCity(
        position.coords.latitude,
        position.coords.longitude,
      );
      rahuCityInput.value = matchedCity.name;
      setRahuLocation({
        label: `${matchedCity.name}, ${matchedCity.state}`,
        latitude: matchedCity.latitude,
        longitude: matchedCity.longitude,
        timezone: "Asia/Kolkata",
      });
    },
    () => {
      rahuDate.textContent = "Today";
      rahuTime.textContent = "-";
      rahuPlace.textContent = "Location permission not granted";
      rahuSunrise.textContent = "Sunrise -";
      rahuSunset.textContent = "Sunset -";
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 900000 },
  );
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

function isSameMomentAsSample(birth) {
  return (
    birth.date === sampleResult.birth.date &&
    birth.time === sampleResult.birth.time &&
    birth.timezone === sampleResult.birth.timezone &&
    Math.abs(birth.latitude - sampleResult.birth.latitude) < 0.02 &&
    Math.abs(birth.longitude - sampleResult.birth.longitude) < 0.02
  );
}

function resultWithBirth(result, birth) {
  return {
    ...result,
    birth: {
      ...result.birth,
      ...birth,
      utc: result.birth.utc,
    },
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

function loadGeneratedResult(result) {
  loadResult(result);
  chartJson.value = JSON.stringify(result, null, 2);
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

  if (location.protocol === "file:") {
    showValidation([
      "Open this UI from the Python API server to regenerate charts from inputs: uvicorn vedic_chart.api:app --reload --host 127.0.0.1 --port 8000",
    ]);
    return;
  }

  showValidation([], "Calculating chart...");
  try {
    const result = await calculateChart(birth);
    loadGeneratedResult(result);
    showValidation([], "Chart generated.");
  } catch (error) {
    if (isSameMomentAsSample(birth)) {
      loadGeneratedResult(resultWithBirth(sampleResult, birth));
      showValidation([], "API unavailable, rendered the saved sample chart.");
      return;
    }
    showValidation([error.message]);
  }
});

cityInput.addEventListener("change", applyCityCoordinates);
cityInput.addEventListener("blur", applyCityCoordinates);
nameInput.addEventListener("input", renderNumerology);
dateInput.addEventListener("input", renderNumerology);
genderInput.addEventListener("change", renderNumerology);
rahuCityInput.addEventListener("change", applyRahuCity);
rahuCityInput.addEventListener("blur", applyRahuCity);
rahuCityInput.addEventListener("input", () => {
  if (!rahuCityInput.value.trim()) setRahuLocation(null);
});
useCurrentLocationButton.addEventListener("click", useCurrentLocation);

renderJsonButton.addEventListener("click", () => {
  try {
    const result = JSON.parse(chartJson.value);
    loadResult(result);
  } catch (error) {
    showValidation([`Invalid JSON: ${error.message}`]);
  }
});

loadSampleButton.addEventListener("click", () => {
  chartJson.value = JSON.stringify(sampleResult, null, 2);
  loadResult(sampleResult);
});

downloadButton.addEventListener("click", downloadSvg);

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    setActiveChart(tab.dataset.chart);
    renderActiveChart();
  });
}

populateCityList();
renderNumerology();
renderRahuKalam();
renderActiveChart();
