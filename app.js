const nakshatras = [
  "1. அசுவனி (Ashwini)",
  "2. பரணி (Bharani)",
  "3. கார்த்திகை (Krittika)",
  "4. ரோகிணி (Rohini)",
  "5. மிருகசீரிஷம் (Mrigashira)",
  "6. திருவாதிரை (Thiruvathirai)",
  "7. புனர்பூசம் (Punarpoosam)",
  "8. பூசம் (Poosam)",
  "9. ஆயில்யம் (Ayilyam)",
  "10. மகம் (Magam)",
  "11. பூரம் (Pooram)",
  "12. உத்திரம் (Uthiram)",
  "13. அஸ்தம் (Hastham)",
  "14. சித்திரை (Chithirai)",
  "15. சுவாதி (Swathi)",
  "16. விசாகம் (Visakam)",
  "17. அனுஷம் (Anusham)",
  "18. கேட்டை (Kettai)",
  "19. மூலம் (Moolam)",
  "20. பூராடம் (Pooradam)",
  "21. உத்திராடம் (Uthiradam)",
  "22. திருவோணம் (Thiruvonam)",
  "23. அவிட்டம் (Avittam)",
  "24. சதயம் (Sathayam)",
  "25. பூரட்டாதி (Poorattathi)",
  "26. உத்திரட்டாதி (Uthirattathi)",
  "27. ரேவதி (Revathi)",
];

const masterLookupNumbers = [
  17, 21, 27, 37, 55, 127, 129, 149, 162, 217, 239, 253, 307, 339, 351, 403,
  433, 505, 507, 685, 729, 779, 783, 883, 885, 977, 1009, 1011, 1107, 1157,
  1161, 1259, 1387, 1479, 1509, 1539, 1549, 1637, 1639, 1765, 1819, 1857, 1907,
  1917, 1927, 2017, 2117, 2129, 2143, 2235, 2237, 2295, 2303, 2323, 2395, 2403,
  2507, 2575, 2607, 2613, 2619, 2669, 2673, 2683, 2773, 2775, 2895, 2953, 2991,
  3047, 3051, 3079, 3149, 3153, 3217, 3369, 3375, 3429, 3439, 3457, 3529, 3531,
  3557, 3655, 3709, 3747, 3753, 3807, 3817, 3835, 3917, 3919, 4033, 4087, 4125,
  4131, 4185, 4195, 4213, 4287, 4385, 4465, 4503, 4509, 4559, 4573, 4665, 4757,
  4887, 4937, 4969, 5039, 5043, 5265, 5309, 5329, 5347, 5417, 5421, 5637, 5639,
  5643, 5707, 5725, 5799, 5909, 5977, 6009, 6017, 6021, 6085, 6103, 6117, 6269,
  6287, 6355, 6399, 6453, 6553, 6565, 6679, 6733, 6777, 6831, 6859,
];

const deitiesList = [
  { name: "-- Custom / Direct --", star: 0 },
  { name: "கணபதி (Ganapathi)", star: 24 },
  { name: "சுப்பிரமணியன், ஷண்முகன் (Shanmugan)", star: 3 },
  { name: "முருகன், கந்தன் (Murugan / Kandhan)", star: 16 },
  { name: "சிவன் (Sivan)", star: 6 },
  { name: "பிரம்மா (Brahma)", star: 4 },
  { name: "கிருஷ்ணன் (Krishna)", star: 4 },
  { name: "விஷ்ணு (Vishnu)", star: 22 },
  { name: "இராமன் (Ramar)", star: 7 },
  { name: "சனி (Sani Bhagavan)", star: 2 },
  { name: "பகவதி, பார்வதி (Parvathi)", star: 11 },
  { name: "காளி (Kaali)", star: 3 },
  { name: "துர்க்கை, சரஸ்வதி (Durga / Saraswathi)", star: 15 },
  { name: "லக்ஷ்மி (Lakshmi)", star: 12 },
  { name: "பூமிதேவி (Bhoomidhevi)", star: 16 },
  { name: "சண்டேசுவரன் (Chandikeswarar)", star: 15 },
  { name: "க்ஷேத்ர பாலகன் (Kshetra Baalagan)", star: 5 },
  { name: "சந்திரன் (Chandran)", star: 4 },
  { name: "ஆதித்தன் (Aadhithan / Surya)", star: 10 },
  { name: "வீரபத்திரன் (Veerabhadran)", star: 2 },
  { name: "சாஸ்தா (Sastha / Ayyappan)", star: 12 },
  { name: "கருடன், அனுமான் (Garuda / Hanuman)", star: 15 },
  { name: "வாமனன் (Vamanan)", star: 22 },
  { name: "மத்ஸ்யாவதாரம் (Matsya Avatar)", star: 27 },
  { name: "கூர்மாவதாரம் (Koorma Avatar)", star: 3 },
  { name: "வராகாவதாரம் (Varaha Avatar)", star: 19 },
  { name: "நரசிம்மன் (Narasimhar)", star: 15 },
  { name: "பரசுராமன் (Parasuramar)", star: 5 },
  { name: "ஸ்ரீ தரன் (Sri Dharan)", star: 19 },
  { name: "ஞானி (Gnaani)", star: 13 },
  { name: "பலராமன் (Balaramar)", star: 6 },
  { name: "கல்கி (Kalki)", star: 12 },
];

const nameLetterMap = [
  { starIndex: 1, letters: "சு, சே, சோ, ல (Aswini)" },
  { starIndex: 2, letters: "லி, லு, லெ, லோ (Bharani)" },
  { starIndex: 3, letters: "அ, இ, உ, எ (Krittika)" },
  { starIndex: 4, letters: "ஒ, வ, வி, வு (Rohini)" },
  { starIndex: 5, letters: "வே, வோ, கா, கி (Mrigashira)" },
  { starIndex: 6, letters: "கு, க்க, ங, ச (Thiruvathirai)" },
  { starIndex: 7, letters: "கே, கோ, ஹ, ஹீ (Punarpoosam)" },
  { starIndex: 8, letters: "ஹு, ஹே, ஹோ, ட (Poosam)" },
  { starIndex: 9, letters: "டி, டு, டே, டோ (Ayilyam)" },
  { starIndex: 10, letters: "ம, மி, மு, மே (Magam)" },
  { starIndex: 11, letters: "மோ, டா, டி, டு (Pooram)" },
  { starIndex: 12, letters: "டே, டோ, பா, பி (Uthiram)" },
  { starIndex: 13, letters: "பூ, ஷ, ண, ட (Hastham)" },
  { starIndex: 14, letters: "பே, போ, ரா, ரி (Chithirai)" },
  { starIndex: 15, letters: "ரு, ரே, ரோ, த (Swathi)" },
  { starIndex: 16, letters: "தி, து, தே, தோ (Visakam)" },
  { starIndex: 17, letters: "ந, நி, நு, நே (Anusham)" },
  { starIndex: 18, letters: "நோ, ய, யி, யு (Kettai)" },
  { starIndex: 19, letters: "யே, யோ, பா, பி (Moolam)" },
  { starIndex: 20, letters: "பூ, தா, ப, ட (Pooradam)" },
  { starIndex: 21, letters: "பே, போ, ஜ, ஜி (Uthiradam)" },
  { starIndex: 22, letters: "ஜூ, ஜே, ஜோ, க (Thiruvonam)" },
  { starIndex: 23, letters: "க, கி, கு, கே (Avittam)" },
  { starIndex: 24, letters: "கோ, ஸ, ஸி, ஸு (Sathayam)" },
  { starIndex: 25, letters: "ஸே, ஸோ, த, தி (Poorattathi)" },
  { starIndex: 26, letters: "து, த்ஸ, ஞ, ஜ (Uthirattathi)" },
  { starIndex: 27, letters: "தெ, தொ, ச, சி (Revathi)" },
];

const ayamList = [
  { name: "Arththam (பொருள் / Substance)", pass: true },
  { name: "Bhogam (Lottery / Unexpected Income)", pass: true },
  { name: "Bhogam (இன்பம் / Pleasure)", pass: true },
  { name: "Samprāpthi (நற்பேறு / Renown)", pass: true },
  { name: "Veeram (வீரம் / Heroism)", pass: true },
  { name: "Dhānyam (தான்யம் / Agricultural Wealth)", pass: true },
  { name: "Dhanam (தனம் / Prosperity)", pass: true },
  { name: "Sugam (சுகம் / Happiness)", pass: true },
  { name: "Dharmam (தர்மம் / Virtue & Values)", pass: true },
  { name: "Gnānam (ஞானம் / Wisdom)", pass: true },
  { name: "Yogam (யோகம் / God & Soul Connection)", pass: true },
  { name: "Siddhi (சித்தி / Victory & Success)", pass: true },
];

const vyayamList = [
  { name: "Natpu (நட்பு / Intimacy)", pass: true },
  { name: "Bhukthi (புக்தி / Enjoyment)", pass: true },
  { name: "Mukthi (முக்தி / Liberation)", pass: true },
  { name: "Subham (சுபம் / Auspicious)", pass: true },
  { name: "Samruddhi (சம்ருத்தி / Prosperity)", pass: true },
  { name: "Sampath (சம்பத் / Wealth)", pass: true },
  { name: "Dhanam (தனம் / Wealth)", pass: true },
  { name: "Mēnmai (மேன்மை / Growth)", pass: true },
  { name: "Nāsam (நாசம் / Destruction)", pass: false },
  { name: "Kalagam (கலகம் / Riot & Disputes)", pass: false },
];

const yoniList = [
  { name: "Kāgam (காகம் / Crow) - Reject", pass: false },
  { name: "Dhwajam (துவஜம் / Flag) - East", pass: true },
  { name: "Dhūmam (தூமம் / Smoke) - Reject", pass: false },
  { name: "Simmam (சிம்மம் / Lion) - South", pass: true },
  { name: "Swānam (சுவானம் / Dog) - Reject", pass: false },
  { name: "Rishabam (ரிஷபம் / Bull) - West", pass: true },
  { name: "Kharam (கரம் / Donkey) - Reject", pass: false },
  { name: "Gajam (கஜம் / Elephant) - North", pass: true },
];

const varamList = [
  { name: "Saturday (சனி) - Reject", pass: false },
  { name: "Sunday (ஞாயிறு) - Reject", pass: false },
  { name: "Monday (திங்கள்) - Auspicious", pass: true },
  { name: "Tuesday (செவ்வாய்) - Reject", pass: false },
  { name: "Wednesday (புதன்) - Auspicious", pass: true },
  { name: "Thursday (வியாழன்) - Auspicious", pass: true },
  { name: "Friday (வெள்ளி) - Auspicious", pass: true },
];

const amsamList = [
  { name: "Preshyan (பிரேஷ்யன் / Slave) - Reject", pass: false },
  { name: "Taskaram (தஸ்கரம் / Thief) - Reject", pass: false },
  { name: "Bhukthi (புக்தி / Enjoyment)", pass: true },
  { name: "Sakthi (சக்தி / Power)", pass: true },
  { name: "Dhaniyan (தன்யன் / Wealthy)", pass: true },
  { name: "Nruban (நிருபன் / King)", pass: true },
  { name: "Kliban (கிளீபன் / Neutral) - Reject", pass: false },
  { name: "Nirbheethi (நிர்பீதி / Fearless)", pass: true },
  { name: "Dharidhran (தரித்திரன் / Beggar) - Reject", pass: false },
];

const tarabalaNames = [
  { name: "Janmam (ஜன்மம் / Birth)", pass: false },
  { name: "Sampath (சம்பத் / Prosperity)", pass: true },
  { name: "Vipat (விபத்து / Danger)", pass: false },
  { name: "Kshemam (ஷேமம் / Happiness)", pass: true },
  { name: "Pratyak (பிரத்தியகரம் / Obstacles)", pass: false },
  { name: "Sadhagam (சாதகம் / Beneficial)", pass: true },
  { name: "Vadha (வதை / Destruction)", pass: false },
  { name: "Maithiram (மைத்திரம் / Friendship)", pass: true },
  { name: "Parama Maithiram (பரம மைத்திரம் / Deep Union)", pass: true },
];

function initApp() {
  const karthaSel = document.getElementById("karthaStar");
  const oorSel = document.getElementById("oorStar");
  const bimbamSel = document.getElementById("bimbamStar");
  const karthaLetterSel = document.getElementById("karthaLetter");
  const oorLetterSel = document.getElementById("oorLetter");
  const deitySel = document.getElementById("deitySelect");

  nakshatras.forEach((star, idx) => {
    const val = idx + 1;
    karthaSel.appendChild(new Option(star, val));
    oorSel.appendChild(new Option(star, val));
    bimbamSel.appendChild(new Option(star, val));
  });

  karthaLetterSel.appendChild(new Option("-- Select Letter --", "0"));
  oorLetterSel.appendChild(new Option("-- Select Letter --", "0"));
  nameLetterMap.forEach((item) => {
    karthaLetterSel.appendChild(new Option(item.letters, item.starIndex));
    oorLetterSel.appendChild(new Option(item.letters, item.starIndex));
  });

  deitiesList.forEach((item) => {
    deitySel.appendChild(new Option(item.name, item.star));
  });

  const chipContainer = document.getElementById("lookupChips");
  masterLookupNumbers.forEach((num) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = num;
    chip.onclick = () => {
      document.getElementById("ayadiInput").value = num;
      document.getElementById("unitType").value = "direct";
      document.getElementById("feetInputs").style.display = "none";
      calculateAll();
    };
    chipContainer.appendChild(chip);
  });

  karthaSel.value = 7; // Punarpoosam
  oorSel.value = 16; // Visakam
  bimbamSel.value = 24; // Sathayam
}

function autoSelectStar(sourceId, targetId) {
  const val = parseInt(document.getElementById(sourceId).value, 10);
  if (val > 0) document.getElementById(targetId).value = val;
}

function handleDeitySelect() {
  const val = parseInt(document.getElementById("deitySelect").value, 10);
  if (val > 0) {
    document.getElementById("bimbamStar").value = val;
    document.getElementById("lingaSelect").value = "0";
  }
}

function handleLingaSelect() {
  const val = parseInt(document.getElementById("lingaSelect").value, 10);
  if (val > 0) {
    document.getElementById("bimbamStar").value = val;
    document.getElementById("deitySelect").value = "0";
  }
}

function convertUnits() {
  const type = document.getElementById("unitType").value;
  const feetDiv = document.getElementById("feetInputs");
  feetDiv.style.display = type === "feet" ? "block" : "none";

  if (type === "feet") {
    const ft = parseFloat(document.getElementById("inputFeet").value) || 0;
    const inch = parseFloat(document.getElementById("inputInches").value) || 0;
    const totalInches = ft * 12 + inch;
    const calculatedN = Math.round(totalInches / 16.5);
    document.getElementById("ayadiInput").value = calculatedN;
  }
}

function checkTara(fromStar, toStar) {
  let diff = (toStar - fromStar + 27) % 27;
  let taraIdx = diff % 9;
  return {
    taraNumber: taraIdx === 0 ? 9 : taraIdx,
    name: tarabalaNames[taraIdx].name,
    pass: tarabalaNames[taraIdx].pass,
  };
}

function calculateAll() {
  const num = parseInt(document.getElementById("ayadiInput").value, 10);
  const karthaStar = parseInt(document.getElementById("karthaStar").value, 10);
  const oorStar = parseInt(document.getElementById("oorStar").value, 10);
  const bimbamStar = parseInt(document.getElementById("bimbamStar").value, 10);

  if (isNaN(num) || num <= 0) {
    alert("Please enter a valid Ayadi number");
    return;
  }

  const ayamRem = (num * 8) % 12;
  const vyayamRem = (num * 9) % 10;
  const yoniRem = (num * 3) % 8;
  const starRem = (num * 8) % 27;
  const varamRem = (num * 9) % 7;
  const amsamRem = (num * 4) % 9;

  const nakshatraIndex = starRem === 0 ? 27 : starRem;
  const nakshatraName = nakshatras[nakshatraIndex - 1];

  const karthaTara = checkTara(karthaStar, nakshatraIndex);
  const oorTara = checkTara(oorStar, nakshatraIndex);
  const bimbamTara = checkTara(bimbamStar, nakshatraIndex);

  const taraPassed = karthaTara.pass && oorTara.pass && bimbamTara.pass;

  const results = [
    {
      name: "1. Ayam (ஆயம் - Income)",
      formula: "(N × 8) / 12",
      rem: ayamRem === 0 ? 12 : ayamRem,
      desc: ayamList[ayamRem].name,
      pass: ayamList[ayamRem].pass,
    },
    {
      name: "2. Vyayam (வியயம் - Expense)",
      formula: "(N × 9) / 10",
      rem: vyayamRem === 0 ? 10 : vyayamRem,
      desc: vyayamList[vyayamRem].name,
      pass: vyayamList[vyayamRem].pass,
    },
    {
      name: "3. Yoni (யோனி - Direction)",
      formula: "(N × 3) / 8",
      rem: yoniRem === 0 ? 8 : yoniRem,
      desc: yoniList[yoniRem].name,
      pass: yoniList[yoniRem].pass,
    },
    {
      name: "4. Dhinam (தினம்)",
      formula: "(N × 8) / 27",
      rem: nakshatraIndex,
      desc: nakshatraName,
      pass: taraPassed,
    },
    {
      name: "5. Varam (வாரம் - Day)",
      formula: "(N × 9) / 7",
      rem: varamRem === 0 ? 7 : varamRem,
      desc: varamList[varamRem].name,
      pass: varamList[varamRem].pass,
    },
    {
      name: "6. Amsam (அம்சம் - Quality)",
      formula: "(N × 4) / 9",
      rem: amsamRem === 0 ? 9 : amsamRem,
      desc: amsamList[amsamRem].name,
      pass: amsamList[amsamRem].pass,
    },
  ];

  let passCount = results.filter((r) => r.pass).length;
  const actualAyam = ayamRem === 0 ? 12 : ayamRem;
  const actualVyayam = vyayamRem === 0 ? 10 : vyayamRem;
  const isAyamHigher = actualAyam >= actualVyayam;

  const tbody = document.getElementById("resultsTableBody");
  tbody.innerHTML = "";
  results.forEach((r) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${r.name}</strong></td>
      <td><code>${r.formula}</code></td>
      <td>${r.rem}</td>
      <td>${r.desc}</td>
      <td><span class="status-badge ${r.pass ? "status-pass" : "status-fail"}">${r.pass ? "PASS" : "FAIL"}</span></td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("taraInfoBox").innerHTML = `
    <strong>Tarabala Matrix (தாராபல பொருத்தம்):</strong><br>
    • <strong>Karthā (Donor) Tara:</strong> ${karthaTara.name} → ${karthaTara.pass ? '<span style="color:green">Auspicious (நன்மை)</span>' : '<span style="color:red">Reject (ஆபத்து)</span>'}<br>
    • <strong>Oor (Vāsthu) Tara:</strong> ${oorTara.name} → ${oorTara.pass ? '<span style="color:green">Auspicious (நன்மை)</span>' : '<span style="color:red">Reject (ஆபத்து)</span>'}<br>
    • <strong>Deity (Bimbam) Tara:</strong> ${bimbamTara.name} → ${bimbamTara.pass ? '<span style="color:green">Auspicious (நன்மை)</span>' : '<span style="color:red">Reject (ஆபத்து)</span>'}
  `;

  document.getElementById("financeInfoBox").innerHTML = `
    <strong>Ayam vs Vyayam Check (வரவு - செலவு ஆய்வு):</strong><br>
    Ayam (Income) = ${actualAyam} | Vyayam (Expense) = ${actualVyayam} → 
    ${isAyamHigher ? '<strong style="color:green">Ayam ≥ Vyayam (Good - செல்வம் பெருகும்)</strong>' : '<strong style="color:red">Vyayam > Ayam (Deficit - விரயம் ஏற்படும்)</strong>'}
  `;

  let grade = "";
  if (!taraPassed) {
    grade =
      "Inauspicious (Tarabala Failed — Should Not Proceed / நிராகரிக்கவும்)";
  } else if (passCount === 6 && isAyamHigher) {
    grade = "உத்தம உத்தமம் (Utthama Utthamam - 6/6 Perfect)";
  } else if (passCount === 5) {
    grade = "பரம உத்தமம் (Parama Utthamam - 5/6 Very Good)";
  } else if (passCount === 4) {
    grade = "உத்தமம் (Utthamam - 4/6 Good)";
  } else if (passCount === 3) {
    grade = "மத்தியமம் (Madhyamam - 3/6 Average)";
  } else {
    grade = "வர்ஜ்யம் (Inauspicious / Unfavorable)";
  }

  const verdictDiv = document.getElementById("verdictOutput");
  verdictDiv.textContent = `Grade: ${grade} (${passCount}/6 Pass Score)`;
  verdictDiv.style.backgroundColor =
    passCount >= 4 && taraPassed && isAyamHigher ? "#dcfce7" : "#fee2e2";
  verdictDiv.style.color =
    passCount >= 4 && taraPassed && isAyamHigher ? "#15803d" : "#b91c1c";

  document.getElementById("resultsSection").style.display = "block";
}

window.onload = initApp;
