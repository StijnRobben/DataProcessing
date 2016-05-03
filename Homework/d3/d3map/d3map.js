// Stijn Robben
// 10559558

// DataProcessing
// Week 3
// Opdracht 2

// list with the abbreviation of every country
// I use this list and the function below to get the abbreviations in the
// right order using console.log
var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the Former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nld", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

// compare the countries of the lists and color the data with the same id
for(var i = 0; i < data.length; i++){
  for(var j = 0; j < country_codes.length; j++){
    if(data[i]["country"] === country_codes[j][2]){
      var short = country_codes[j][1];
      console.log(short);
    }
  }
}

// used the converter from previous assignment (SVG) to convert the data
// with the right abbreviations into a JSON file
var arr = [
  {
    "name": "Qatar",
    "fillKey": "140649.2",
    "country code": "QAT",
    "GDP": "140649.2"
  },
  {
    "name": "MacaoSAR,China",
    "fillKey": "139767.3",
    "country code": "",
    "GDP": "139767.3"
  },
  {
    "name": "Luxembourg",
    "fillKey": "98459.5",
    "country code": "LUX",
    "GDP": "98459.5"
  },
  {
    "name": "Singapore",
    "fillKey": "82763.0",
    "country code": "SGP",
    "GDP": "82763.0"
  },
  {
    "name": "Kuwait",
    "fillKey": "73245.7",
    "country code": "KWT",
    "GDP": "73245.7"
  },
  {
    "name": "BruneiDarussalam",
    "fillKey": "71184.8",
    "country code": "BRN",
    "GDP": "71184.8"
  },
  {
    "name": "United Arab Emirates",
    "fillKey": "67674.1",
    "country code": "ARE",
    "GDP": "67674.1"
  },
  {
    "name": "Norway",
    "fillKey": "65614.5",
    "country code": "NOR",
    "GDP": "65614.5"
  },
  {
    "name": "Switzerland",
    "fillKey": "59539.8",
    "country code": "CHE",
    "GDP": "59539.8"
  },
  {
    "name": "HongKongSAR ,China",
    "fillKey": "55084.3",
    "country code": "",
    "GDP": "55084.3"
  },
  {
    "name": "UnitedStates",
    "fillKey": "54629.5",
    "country code": "USA",
    "GDP": "54629.5"
  },
  {
    "name": "SaudiArabia",
    "fillKey": "52010.2",
    "country code": "SAU",
    "GDP": "52010.2"
  },
  {
    "name": "Ireland",
    "fillKey": "49393.2",
    "country code": "IRL",
    "GDP": "49393.2"
  },
  {
    "name": "Netherlands",
    "fillKey": "48253.3",
    "country code": "NLD",
    "GDP": "48253.3"
  },
  {
    "name": "Austria",
    "fillKey": "47682.3",
    "country code": "AUT",
    "GDP": "47682.3"
  },
  {
    "name": "Germany",
    "fillKey": "46400.6",
    "country code": "DEU",
    "GDP": "46400.6"
  },
  {
    "name": "Australia",
    "fillKey": "45925.5",
    "country code": "AUS",
    "GDP": "45925.5"
  },
  {
    "name": "Denmark",
    "fillKey": "45536.5",
    "country code": "DNK",
    "GDP": "45536.5"
  },
  {
    "name": "Bahrain",
    "fillKey": "45500.2",
    "country code": "BHR",
    "GDP": "45500.2"
  },
  {
    "name": "Sweden",
    "fillKey": "45297.0",
    "country code": "SWE",
    "GDP": "45297.0"
  },
  {
    "name": "Canada",
    "fillKey": "45065.7",
    "country code": "CAN",
    "GDP": "45065.7"
  },
  {
    "name": "Iceland",
    "fillKey": "43993.3",
    "country code": "ISL",
    "GDP": "43993.3"
  },
  {
    "name": "Belgium",
    "fillKey": "43434.7",
    "country code": "BEL",
    "GDP": "43434.7"
  },
  {
    "name": "Finland",
    "fillKey": "40675.9",
    "country code": "FIN",
    "GDP": "40675.9"
  },
  {
    "name": "UnitedKingdom",
    "fillKey": "40233.2",
    "country code": "GBR",
    "GDP": "40233.2"
  },
  {
    "name": "France",
    "fillKey": "39327.9",
    "country code": "FRA",
    "GDP": "39327.9"
  },
  {
    "name": "Oman",
    "fillKey": "38630.7",
    "country code": "OMN",
    "GDP": "38630.7"
  },
  {
    "name": "NewZealand",
    "fillKey": "37679.0",
    "country code": "NZL",
    "GDP": "37679.0"
  },
  {
    "name": "Japan",
    "fillKey": "36619.4",
    "country code": "JPN",
    "GDP": "36619.4"
  },
  {
    "name": "Italy",
    "fillKey": "35462.8",
    "country code": "ITA",
    "GDP": "35462.8"
  },
  {
    "name": "EquatorialGuinea",
    "fillKey": "34739.1",
    "country code": "GNQ",
    "GDP": "34739.1"
  },
  {
    "name": "Israel",
    "fillKey": "33703.4",
    "country code": "ISR",
    "GDP": "33703.4"
  },
  {
    "name": "Spain",
    "fillKey": "33628.9",
    "country code": "ESP",
    "GDP": "33628.9"
  },
  {
    "name": "Korea,Rep.",
    "fillKey": "33394.8",
    "country code": "",
    "GDP": "33394.8"
  },
  {
    "name": "TrinidadandTobago",
    "fillKey": "31967.2",
    "country code": "TTO",
    "GDP": "31967.2"
  },
  {
    "name": "CzechRepublic",
    "fillKey": "31185.9",
    "country code": "CZE",
    "GDP": "31185.9"
  },
  {
    "name": "Slovenia",
    "fillKey": "30402.7",
    "country code": "SVN",
    "GDP": "30402.7"
  },
  {
    "name": "Cyprus",
    "fillKey": "30239.3",
    "country code": "CYP",
    "GDP": "30239.3"
  },
  {
    "name": "Portugal",
    "fillKey": "28760.0",
    "country code": "PRT",
    "GDP": "28760.0"
  },
  {
    "name": "SlovakRepublic",
    "fillKey": "28326.5",
    "country code": "",
    "GDP": "28326.5"
  },
  {
    "name": "Estonia",
    "fillKey": "28139.9",
    "country code": "EST",
    "GDP": "28139.9"
  },
  {
    "name": "Lithuania",
    "fillKey": "27685.9",
    "country code": "LTU",
    "GDP": "27685.9"
  },
  {
    "name": "Greece",
    "fillKey": "26850.9",
    "country code": "GRC",
    "GDP": "26850.9"
  },
  {
    "name": "Seychelles",
    "fillKey": "26422.0",
    "country code": "SYC",
    "GDP": "26422.0"
  },
  {
    "name": "Malaysia",
    "fillKey": "25638.6",
    "country code": "MYS",
    "GDP": "25638.6"
  },
  {
    "name": "Poland",
    "fillKey": "25261.6",
    "country code": "POL",
    "GDP": "25261.6"
  },
  {
    "name": "Hungary",
    "fillKey": "25068.9",
    "country code": "HUN",
    "GDP": "25068.9"
  },
  {
    "name": "Kazakhstan",
    "fillKey": "24227.7",
    "country code": "KAZ",
    "GDP": "24227.7"
  },
  {
    "name": "Latvia",
    "fillKey": "23547.9",
    "country code": "LVA",
    "GDP": "23547.9"
  },
  {
    "name": "Bahamas,The",
    "fillKey": "23491.1",
    "country code": "",
    "GDP": "23491.1"
  },
  {
    "name": "St.KittsandNevis",
    "fillKey": "23239.5",
    "country code": "",
    "GDP": "23239.5"
  },
  {
    "name": "RussianFederation",
    "fillKey": "22989.6",
    "country code": "RUS",
    "GDP": "22989.6"
  },
  {
    "name": "AntiguaandBarbuda",
    "fillKey": "22076.9",
    "country code": "ATG",
    "GDP": "22076.9"
  },
  {
    "name": "Chile",
    "fillKey": "22071.1",
    "country code": "CHL",
    "GDP": "22071.1"
  },
  {
    "name": "Croatia",
    "fillKey": "21635.1",
    "country code": "HRV",
    "GDP": "21635.1"
  },
  {
    "name": "Panama",
    "fillKey": "20894.7",
    "country code": "PAN",
    "GDP": "20894.7"
  },
  {
    "name": "Uruguay",
    "fillKey": "20884.3",
    "country code": "URY",
    "GDP": "20884.3"
  },
  {
    "name": "Romania",
    "fillKey": "20348.1",
    "country code": "ROU",
    "GDP": "20348.1"
  },
  {
    "name": "Turkey",
    "fillKey": "19787.7",
    "country code": "TUR",
    "GDP": "19787.7"
  },
  {
    "name": "Gabon",
    "fillKey": "19430.1",
    "country code": "GAB",
    "GDP": "19430.1"
  },
  {
    "name": "Mauritius",
    "fillKey": "18585.4",
    "country code": "MUS",
    "GDP": "18585.4"
  },
  {
    "name": "Belarus",
    "fillKey": "18184.9",
    "country code": "BLR",
    "GDP": "18184.9"
  },
  {
    "name": "Azerbaijan",
    "fillKey": "17520.7",
    "country code": "AZE",
    "GDP": "17520.7"
  },
  {
    "name": "Lebanon",
    "fillKey": "17462.2",
    "country code": "LBN",
    "GDP": "17462.2"
  },
  {
    "name": "Mexico",
    "fillKey": "17314.7",
    "country code": "MEX",
    "GDP": "17314.7"
  },
  {
    "name": "Iran,IslamicRep.",
    "fillKey": "17302.6",
    "country code": "",
    "GDP": "17302.6"
  },
  {
    "name": "Bulgaria",
    "fillKey": "17207.6",
    "country code": "BGR",
    "GDP": "17207.6"
  },
  {
    "name": "Suriname",
    "fillKey": "16637.6",
    "country code": "SUR",
    "GDP": "16637.6"
  },
  {
    "name": "Botswana",
    "fillKey": "16099.3",
    "country code": "BWA",
    "GDP": "16099.3"
  },
  {
    "name": "Barbados",
    "fillKey": "16057.8",
    "country code": "BRB",
    "GDP": "16057.8"
  },
  {
    "name": "Brazil",
    "fillKey": "15893.2",
    "country code": "BRA",
    "GDP": "15893.2"
  },
  {
    "name": "Thailand",
    "fillKey": "15735.1",
    "country code": "THA",
    "GDP": "15735.1"
  },
  {
    "name": "Libya",
    "fillKey": "15597.1",
    "country code": "LBY",
    "GDP": "15597.1"
  },
  {
    "name": "Turkmenistan",
    "fillKey": "15473.6",
    "country code": "TKM",
    "GDP": "15473.6"
  },
  {
    "name": "Iraq",
    "fillKey": "15057.1",
    "country code": "IRQ",
    "GDP": "15057.1"
  },
  {
    "name": "Montenegro",
    "fillKey": "15054.7",
    "country code": "MNE",
    "GDP": "15054.7"
  },
  {
    "name": "CostaRica",
    "fillKey": "14918.1",
    "country code": "CRI",
    "GDP": "14918.1"
  },
  {
    "name": "Palau",
    "fillKey": "14756.7",
    "country code": "PLW",
    "GDP": "14756.7"
  },
  {
    "name": "Algeria",
    "fillKey": "14193.4",
    "country code": "DZA",
    "GDP": "14193.4"
  },
  {
    "name": "Serbia",
    "fillKey": "13594.1",
    "country code": "SRB",
    "GDP": "13594.1"
  },
  {
    "name": "Macedonia,FYR",
    "fillKey": "13523.0",
    "country code": "",
    "GDP": "13523.0"
  },
  {
    "name": "Colombia",
    "fillKey": "13357.1",
    "country code": "COL",
    "GDP": "13357.1"
  },
  {
    "name": "DominicanRepublic",
    "fillKey": "13262.3",
    "country code": "DOM",
    "GDP": "13262.3"
  },
  {
    "name": "China",
    "fillKey": "13206.4",
    "country code": "CHN",
    "GDP": "13206.4"
  },
  {
    "name": "SouthAfrica",
    "fillKey": "13049.3",
    "country code": "ZAF",
    "GDP": "13049.3"
  },
  {
    "name": "Maldives",
    "fillKey": "12529.7",
    "country code": "MDV",
    "GDP": "12529.7"
  },
  {
    "name": "Grenada",
    "fillKey": "12425.0",
    "country code": "GRD",
    "GDP": "12425.0"
  },
  {
    "name": "Jordan",
    "fillKey": "12050.3",
    "country code": "JOR",
    "GDP": "12050.3"
  },
  {
    "name": "Peru",
    "fillKey": "11988.9",
    "country code": "PER",
    "GDP": "11988.9"
  },
  {
    "name": "Mongolia",
    "fillKey": "11945.7",
    "country code": "MNG",
    "GDP": "11945.7"
  },
  {
    "name": "Tunisia",
    "fillKey": "11435.6",
    "country code": "TUN",
    "GDP": "11435.6"
  },
  {
    "name": "Ecuador",
    "fillKey": "11371.7",
    "country code": "ECU",
    "GDP": "11371.7"
  },
  {
    "name": "SriLanka",
    "fillKey": "11110.2",
    "country code": "LKA",
    "GDP": "11110.2"
  },
  {
    "name": "Albania",
    "fillKey": "11108.0",
    "country code": "ALB",
    "GDP": "11108.0"
  },
  {
    "name": "Dominica",
    "fillKey": "10877.3",
    "country code": "DMA",
    "GDP": "10877.3"
  },
  {
    "name": "St.Lucia",
    "fillKey": "10733.0",
    "country code": "",
    "GDP": "10733.0"
  },
  {
    "name": "St.VincentandtheGrenadines",
    "fillKey": "10727.3",
    "country code": "",
    "GDP": "10727.3"
  },
  {
    "name": "Egypt,ArabRep.",
    "fillKey": "10532.9",
    "country code": "",
    "GDP": "10532.9"
  },
  {
    "name": "Indonesia",
    "fillKey": "10517.0",
    "country code": "IDN",
    "GDP": "10517.0"
  },
  {
    "name": "BosniaandHerzegovina",
    "fillKey": "10426.9",
    "country code": "BIH",
    "GDP": "10426.9"
  },
  {
    "name": "Namibia",
    "fillKey": "9955.5",
    "country code": "NAM",
    "GDP": "9955.5"
  },
  {
    "name": "Georgia",
    "fillKey": "9162.9",
    "country code": "GEO",
    "GDP": "9162.9"
  },
  {
    "name": "Paraguay",
    "fillKey": "8911.4",
    "country code": "PRY",
    "GDP": "8911.4"
  },
  {
    "name": "Jamaica",
    "fillKey": "8877.7",
    "country code": "JAM",
    "GDP": "8877.7"
  },
  {
    "name": "Fiji",
    "fillKey": "8792.4",
    "country code": "FJI",
    "GDP": "8792.4"
  },
  {
    "name": "Ukraine",
    "fillKey": "8665.5",
    "country code": "UKR",
    "GDP": "8665.5"
  },
  {
    "name": "Belize",
    "fillKey": "8416.8",
    "country code": "BLZ",
    "GDP": "8416.8"
  },
  {
    "name": "ElSalvador",
    "fillKey": "8351.1",
    "country code": "SLV",
    "GDP": "8351.1"
  },
  {
    "name": "Swaziland",
    "fillKey": "8292.1",
    "country code": "SWZ",
    "GDP": "8292.1"
  },
  {
    "name": "Armenia",
    "fillKey": "8069.7",
    "country code": "ARM",
    "GDP": "8069.7"
  },
  {
    "name": "Bhutan",
    "fillKey": "7815.7",
    "country code": "BTN",
    "GDP": "7815.7"
  },
  {
    "name": "Morocco",
    "fillKey": "7490.7",
    "country code": "MAR",
    "GDP": "7490.7"
  },
  {
    "name": "Guatemala",
    "fillKey": "7454.3",
    "country code": "GTM",
    "GDP": "7454.3"
  },
  {
    "name": "Philippines",
    "fillKey": "6969.0",
    "country code": "PHL",
    "GDP": "6969.0"
  },
  {
    "name": "Bolivia",
    "fillKey": "6629.8",
    "country code": "",
    "GDP": "6629.8"
  },
  {
    "name": "CaboVerde",
    "fillKey": "6519.5",
    "country code": "",
    "GDP": "6519.5"
  },
  {
    "name": "Congo,Rep.",
    "fillKey": "6276.8",
    "country code": "",
    "GDP": "6276.8"
  },
  {
    "name": "Nigeria",
    "fillKey": "5911.2",
    "country code": "NGA",
    "GDP": "5911.2"
  },
  {
    "name": "Samoa",
    "fillKey": "5789.0",
    "country code": "WSM",
    "GDP": "5789.0"
  },
  {
    "name": "India",
    "fillKey": "5700.7",
    "country code": "IND",
    "GDP": "5700.7"
  },
  {
    "name": "Vietnam",
    "fillKey": "5629.0",
    "country code": "",
    "GDP": "5629.0"
  },
  {
    "name": "Uzbekistan",
    "fillKey": "5573.1",
    "country code": "UZB",
    "GDP": "5573.1"
  },
  {
    "name": "LaoPDR",
    "fillKey": "5320.9",
    "country code": "",
    "GDP": "5320.9"
  },
  {
    "name": "Tonga",
    "fillKey": "5211.1",
    "country code": "TON",
    "GDP": "5211.1"
  },
  {
    "name": "Moldova",
    "fillKey": "4982.6",
    "country code": "",
    "GDP": "4982.6"
  },
  {
    "name": "Nicaragua",
    "fillKey": "4918.3",
    "country code": "NIC",
    "GDP": "4918.3"
  },
  {
    "name": "Honduras",
    "fillKey": "4908.7",
    "country code": "HND",
    "GDP": "4908.7"
  },
  {
    "name": "Pakistan",
    "fillKey": "4811.4",
    "country code": "PAK",
    "GDP": "4811.4"
  },
  {
    "name": "WestBankandGaza",
    "fillKey": "4509.0",
    "country code": "",
    "GDP": "4509.0"
  },
  {
    "name": "Ghana",
    "fillKey": "4081.7",
    "country code": "GHA",
    "GDP": "4081.7"
  },
  {
    "name": "Sudan",
    "fillKey": "4069.3",
    "country code": "SDN",
    "GDP": "4069.3"
  },
  {
    "name": "Mauritania",
    "fillKey": "3911.8",
    "country code": "MRT",
    "GDP": "3911.8"
  },
  {
    "name": "Zambia",
    "fillKey": "3904.0",
    "country code": "ZMB",
    "GDP": "3904.0"
  },
  {
    "name": "MarshallIslands",
    "fillKey": "3802.7",
    "country code": "MHL",
    "GDP": "3802.7"
  },
  {
    "name": "Tuvalu",
    "fillKey": "3765.3",
    "country code": "TUV",
    "GDP": "3765.3"
  },
  {
    "name": "Micronesia,Fed.Sts.",
    "fillKey": "3330.5",
    "country code": "",
    "GDP": "3330.5"
  },
  {
    "name": "KyrgyzRepublic",
    "fillKey": "3321.5",
    "country code": "",
    "GDP": "3321.5"
  },
  {
    "name": "Djibouti",
    "fillKey": "3270.4",
    "country code": "DJI",
    "GDP": "3270.4"
  },
  {
    "name": "Cambodia",
    "fillKey": "3262.6",
    "country code": "",
    "GDP": "3262.6"
  },
  {
    "name": "Coted'Ivoire",
    "fillKey": "3258.2",
    "country code": "",
    "GDP": "3258.2"
  },
  {
    "name": "SaoTomeandPrincipe",
    "fillKey": "3176.3",
    "country code": "STP",
    "GDP": "3176.3"
  },
  {
    "name": "Bangladesh",
    "fillKey": "3122.7",
    "country code": "BGD",
    "GDP": "3122.7"
  },
  {
    "name": "Vanuatu",
    "fillKey": "3030.6",
    "country code": "VUT",
    "GDP": "3030.6"
  },
  {
    "name": "Cameroon",
    "fillKey": "2972.2",
    "country code": "CMR",
    "GDP": "2972.2"
  },
  {
    "name": "Kenya",
    "fillKey": "2954.1",
    "country code": "KEN",
    "GDP": "2954.1"
  },
  {
    "name": "PapuaNewGuinea",
    "fillKey": "2854.7",
    "country code": "PNG",
    "GDP": "2854.7"
  },
  {
    "name": "Tajikistan",
    "fillKey": "2690.8",
    "country code": "TJK",
    "GDP": "2690.8"
  },
  {
    "name": "Lesotho",
    "fillKey": "2638.3",
    "country code": "LSO",
    "GDP": "2638.3"
  },
  {
    "name": "Tanzania",
    "fillKey": "2537.9",
    "country code": "",
    "GDP": "2537.9"
  },
  {
    "name": "Nepal",
    "fillKey": "2374.2",
    "country code": "NPL",
    "GDP": "2374.2"
  },
  {
    "name": "Senegal",
    "fillKey": "2333.1",
    "country code": "SEN",
    "GDP": "2333.1"
  },
  {
    "name": "Timor-Leste",
    "fillKey": "2227.0",
    "country code": "TLS",
    "GDP": "2227.0"
  },
  {
    "name": "Chad",
    "fillKey": "2182.0",
    "country code": "TCD",
    "GDP": "2182.0"
  },
  {
    "name": "SolomonIslands",
    "fillKey": "2130.4",
    "country code": "SLB",
    "GDP": "2130.4"
  },
  {
    "name": "Benin",
    "fillKey": "2030.2",
    "country code": "BEN",
    "GDP": "2030.2"
  },
  {
    "name": "SouthSudan",
    "fillKey": "2018.9",
    "country code": "SSD",
    "GDP": "2018.9"
  },
  {
    "name": "SierraLeone",
    "fillKey": "1966.1",
    "country code": "SLE",
    "GDP": "1966.1"
  },
  {
    "name": "Afghanistan",
    "fillKey": "1932.9",
    "country code": "AFG",
    "GDP": "1932.9"
  },
  {
    "name": "Kiribati",
    "fillKey": "1809.0",
    "country code": "KIR",
    "GDP": "1809.0"
  },
  {
    "name": "Zimbabwe",
    "fillKey": "1791.5",
    "country code": "ZWE",
    "GDP": "1791.5"
  },
  {
    "name": "Uganda",
    "fillKey": "1770.9",
    "country code": "UGA",
    "GDP": "1770.9"
  },
  {
    "name": "Haiti",
    "fillKey": "1731.8",
    "country code": "HTI",
    "GDP": "1731.8"
  },
  {
    "name": "Rwanda",
    "fillKey": "1660.6",
    "country code": "RWA",
    "GDP": "1660.6"
  },
  {
    "name": "Gambia,The",
    "fillKey": "1630.5",
    "country code": "",
    "GDP": "1630.5"
  },
  {
    "name": "BurkinaFaso",
    "fillKey": "1619.5",
    "country code": "BFA",
    "GDP": "1619.5"
  },
  {
    "name": "Mali",
    "fillKey": "1599.2",
    "country code": "MLI",
    "GDP": "1599.2"
  },
  {
    "name": "Ethiopia",
    "fillKey": "1499.8",
    "country code": "ETH",
    "GDP": "1499.8"
  },
  {
    "name": "Madagascar",
    "fillKey": "1439.4",
    "country code": "MDG",
    "GDP": "1439.4"
  },
  {
    "name": "Comoros",
    "fillKey": "1429.3",
    "country code": "COM",
    "GDP": "1429.3"
  },
  {
    "name": "Togo",
    "fillKey": "1428.8",
    "country code": "TGO",
    "GDP": "1428.8"
  },
  {
    "name": "Guinea-Bissau",
    "fillKey": "1385.5",
    "country code": "GNB",
    "GDP": "1385.5"
  },
  {
    "name": "Guinea",
    "fillKey": "1221.3",
    "country code": "GIN",
    "GDP": "1221.3"
  },
  {
    "name": "Mozambique",
    "fillKey": "1129.3",
    "country code": "MOZ",
    "GDP": "1129.3"
  },
  {
    "name": "Niger",
    "fillKey": "937.7",
    "country code": "NER",
    "GDP": "937.7"
  },
  {
    "name": "Liberia",
    "fillKey": "842.4",
    "country code": "LBR",
    "GDP": "842.4"
  },
  {
    "name": "Malawi",
    "fillKey": "821.6",
    "country code": "MWI",
    "GDP": "821.6"
  },
  {
    "name": "Burundi",
    "fillKey": "769.9",
    "country code": "BDI",
    "GDP": "769.9"
  }
], rearranged = {};

// assign different values to the data according to their GDP
for(i = 0; i < arr.length; i++){
  if(parseFloat(arr[i]["fillKey"]) > 769 && parseFloat(arr[i]["fillKey"]) <= 20752){
    arr[i]["fillKey"] = 'A'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 20752 && parseFloat(arr[i]["fillKey"]) <= 40735){
    arr[i]["fillKey"] = 'B'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 40735 && parseFloat(arr[i]["fillKey"]) <= 60718){
    arr[i]["fillKey"] = 'C'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 60718 && parseFloat(arr[i]["fillKey"]) <= 80701){
    arr[i]["fillKey"] = 'D'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 80701 && parseFloat(arr[i]["fillKey"]) <= 100683){
    arr[i]["fillKey"] = 'E'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 100683 && parseFloat(arr[i]["fillKey"]) <= 120666){
    arr[i]["fillKey"] = 'F'  
  }
  if(parseFloat(arr[i]["fillKey"]) > 120666 && parseFloat(arr[i]["fillKey"]) <= 140749){
    arr[i]["fillKey"] = 'G'  
  }
}

// arrange the data in such a way that each object has it's own key
// for this function i had to ask help @stackoverflow and got some useful
// tips. The link to my question is: http://stackoverflow.com/questions/36989381/how-can-i-give-each-of-the-objects-in-my-array-their-own-key/36990583#36990583
arr.forEach(function(obj){
    var info = {};
    Object.keys(obj).forEach((k) => k === "country code" || (info[k] = obj[k]));
    rearranged[obj["country code"]] = info;
});

console.log(JSON.stringify(rearranged, 0, 4));

$("#container1").datamap({
   scope: 'world',
   geography_config: {
     borderColor: 'rgba(255,255,255,0.3)',
     highlightBorderColor: 'rgba(0,0,0,0.5)',
     popupTemplate: _.template([
       '<div class="hoverinfo">',
       '<% if (data.name) { %> <strong><%= data.name %></strong><br/><% } %>',
       '<% if (data.name) { %> <strong><%= data.GDP %></strong><br/><% } %>',
       '</div>'
      ].join('') )
   },
   fills: {
     A: '#fdd0a2',
     B: '#fdae6b',
     C: '#fd8d3c',
     D: '#f16913',
     E: '#d94801',
     F: '#a63603',
     G: '#7f2704',
     defaultFill: 'grey' 
   },
   // copied the data from console.log(JSON.stringify(rearranged, 0, 4)) here
   data: {
      "QAT": {
        "name": "Qatar",
        "fillKey": "G",
        "GDP": "140649.2"
    },
    "": {
        "name": "Gambia,The",
        "fillKey": "A",
        "GDP": "1630.5"
    },
    "LUX": {
        "name": "Luxembourg",
        "fillKey": "G",
        "GDP": "98459.5"
    },
    "SGP": {
        "name": "Singapore",
        "fillKey": "F",
        "GDP": "82763.0"
    },
    "KWT": {
        "name": "Kuwait",
        "fillKey": "E",
        "GDP": "73245.7"
    },
    "BRN": {
        "name": "BruneiDarussalam",
        "fillKey": "E",
        "GDP": "71184.8"
    },
    "ARE": {
        "name": "United Arab Emirates",
        "fillKey": "E",
        "GDP": "67674.1"
    },
    "NOR": {
        "name": "Norway",
        "fillKey": "E",
        "GDP": "65614.5"
    },
    "CHE": {
        "name": "Switzerland",
        "fillKey": "D",
        "GDP": "59539.8"
    },
    "USA": {
        "name": "UnitedStates",
        "fillKey": "D",
        "GDP": "54629.5"
    },
    "SAU": {
        "name": "SaudiArabia",
        "fillKey": "D",
        "GDP": "52010.2"
    },
    "IRL": {
        "name": "Ireland",
        "fillKey": "D",
        "GDP": "49393.2"
    },
    "NLD": {
        "name": "Netherlands",
        "fillKey": "C",
        "GDP": "48253.3"
    },
    "AUT": {
        "name": "Austria",
        "fillKey": "C",
        "GDP": "47682.3"
    },
    "DEU": {
        "name": "Germany",
        "fillKey": "C",
        "GDP": "46400.6"
    },
    "AUS": {
        "name": "Australia",
        "fillKey": "C",
        "GDP": "45925.5"
    },
    "DNK": {
        "name": "Denmark",
        "fillKey": "C",
        "GDP": "45536.5"
    },
    "BHR": {
        "name": "Bahrain",
        "fillKey": "C",
        "GDP": "45500.2"
    },
    "SWE": {
        "name": "Sweden",
        "fillKey": "C",
        "GDP": "45297.0"
    },
    "CAN": {
        "name": "Canada",
        "fillKey": "C",
        "GDP": "45065.7"
    },
    "ISL": {
        "name": "Iceland",
        "fillKey": "C",
        "GDP": "43993.3"
    },
    "BEL": {
        "name": "Belgium",
        "fillKey": "C",
        "GDP": "43434.7"
    },
    "FIN": {
        "name": "Finland",
        "fillKey": "C",
        "GDP": "40675.9"
    },
    "GBR": {
        "name": "UnitedKingdom",
        "fillKey": "C",
        "GDP": "40233.2"
    },
    "FRA": {
        "name": "France",
        "fillKey": "C",
        "GDP": "39327.9"
    },
    "OMN": {
        "name": "Oman",
        "fillKey": "C",
        "GDP": "38630.7"
    },
    "NZL": {
        "name": "NewZealand",
        "fillKey": "C",
        "GDP": "37679.0"
    },
    "JPN": {
        "name": "Japan",
        "fillKey": "C",
        "GDP": "36619.4"
    },
    "ITA": {
        "name": "Italy",
        "fillKey": "C",
        "GDP": "35462.8"
    },
    "GNQ": {
        "name": "EquatorialGuinea",
        "fillKey": "C",
        "GDP": "34739.1"
    },
    "ISR": {
        "name": "Israel",
        "fillKey": "C",
        "GDP": "33703.4"
    },
    "ESP": {
        "name": "Spain",
        "fillKey": "C",
        "GDP": "33628.9"
    },
    "TTO": {
        "name": "TrinidadandTobago",
        "fillKey": "B",
        "GDP": "31967.2"
    },
    "CZE": {
        "name": "CzechRepublic",
        "fillKey": "B",
        "GDP": "31185.9"
    },
    "SVN": {
        "name": "Slovenia",
        "fillKey": "B",
        "GDP": "30402.7"
    },
    "CYP": {
        "name": "Cyprus",
        "fillKey": "B",
        "GDP": "30239.3"
    },
    "PRT": {
        "name": "Portugal",
        "fillKey": "B",
        "GDP": "28760.0"
    },
    "EST": {
        "name": "Estonia",
        "fillKey": "B",
        "GDP": "28139.9"
    },
    "LTU": {
        "name": "Lithuania",
        "fillKey": "B",
        "GDP": "27685.9"
    },
    "GRC": {
        "name": "Greece",
        "fillKey": "B",
        "GDP": "26850.9"
    },
    "SYC": {
        "name": "Seychelles",
        "fillKey": "B",
        "GDP": "26422.0"
    },
    "MYS": {
        "name": "Malaysia",
        "fillKey": "B",
        "GDP": "25638.6"
    },
    "POL": {
        "name": "Poland",
        "fillKey": "B",
        "GDP": "25261.6"
    },
    "HUN": {
        "name": "Hungary",
        "fillKey": "B",
        "GDP": "25068.9"
    },
    "KAZ": {
        "name": "Kazakhstan",
        "fillKey": "B",
        "GDP": "24227.7"
    },
    "LVA": {
        "name": "Latvia",
        "fillKey": "B",
        "GDP": "23547.9"
    },
    "RUS": {
        "name": "RussianFederation",
        "fillKey": "B",
        "GDP": "22989.6"
    },
    "ATG": {
        "name": "AntiguaandBarbuda",
        "fillKey": "B",
        "GDP": "22076.9"
    },
    "CHL": {
        "name": "Chile",
        "fillKey": "B",
        "GDP": "22071.1"
    },
    "HRV": {
        "name": "Croatia",
        "fillKey": "B",
        "GDP": "21635.1"
    },
    "PAN": {
        "name": "Panama",
        "fillKey": "B",
        "GDP": "20894.7"
    },
    "URY": {
        "name": "Uruguay",
        "fillKey": "B",
        "GDP": "20884.3"
    },
    "ROU": {
        "name": "Romania",
        "fillKey": "B",
        "GDP": "20348.1"
    },
    "TUR": {
        "name": "Turkey",
        "fillKey": "B",
        "GDP": "19787.7"
    },
    "GAB": {
        "name": "Gabon",
        "fillKey": "B",
        "GDP": "19430.1"
    },
    "MUS": {
        "name": "Mauritius",
        "fillKey": "B",
        "GDP": "18585.4"
    },
    "BLR": {
        "name": "Belarus",
        "fillKey": "B",
        "GDP": "18184.9"
    },
    "AZE": {
        "name": "Azerbaijan",
        "fillKey": "A",
        "GDP": "17520.7"
    },
    "LBN": {
        "name": "Lebanon",
        "fillKey": "A",
        "GDP": "17462.2"
    },
    "MEX": {
        "name": "Mexico",
        "fillKey": "A",
        "GDP": "17314.7"
    },
    "BGR": {
        "name": "Bulgaria",
        "fillKey": "A",
        "GDP": "17207.6"
    },
    "SUR": {
        "name": "Suriname",
        "fillKey": "A",
        "GDP": "16637.6"
    },
    "BWA": {
        "name": "Botswana",
        "fillKey": "A",
        "GDP": "16099.3"
    },
    "BRB": {
        "name": "Barbados",
        "fillKey": "A",
        "GDP": "16057.8"
    },
    "BRA": {
        "name": "Brazil",
        "fillKey": "A",
        "GDP": "15893.2"
    },
    "THA": {
        "name": "Thailand",
        "fillKey": "A",
        "GDP": "15735.1"
    },
    "LBY": {
        "name": "Libya",
        "fillKey": "A",
        "GDP": "15597.1"
    },
    "TKM": {
        "name": "Turkmenistan",
        "fillKey": "A",
        "GDP": "15473.6"
    },
    "IRQ": {
        "name": "Iraq",
        "fillKey": "A",
        "GDP": "15057.1"
    },
    "MNE": {
        "name": "Montenegro",
        "fillKey": "A",
        "GDP": "15054.7"
    },
    "CRI": {
        "name": "CostaRica",
        "fillKey": "A",
        "GDP": "14918.1"
    },
    "PLW": {
        "name": "Palau",
        "fillKey": "A",
        "GDP": "14756.7"
    },
    "DZA": {
        "name": "Algeria",
        "fillKey": "A",
        "GDP": "14193.4"
    },
    "SRB": {
        "name": "Serbia",
        "fillKey": "A",
        "GDP": "13594.1"
    },
    "COL": {
        "name": "Colombia",
        "fillKey": "A",
        "GDP": "13357.1"
    },
    "DOM": {
        "name": "DominicanRepublic",
        "fillKey": "A",
        "GDP": "13262.3"
    },
    "CHN": {
        "name": "China",
        "fillKey": "A",
        "GDP": "13206.4"
    },
    "ZAF": {
        "name": "SouthAfrica",
        "fillKey": "A",
        "GDP": "13049.3"
    },
    "MDV": {
        "name": "Maldives",
        "fillKey": "A",
        "GDP": "12529.7"
    },
    "GRD": {
        "name": "Grenada",
        "fillKey": "A",
        "GDP": "12425.0"
    },
    "JOR": {
        "name": "Jordan",
        "fillKey": "A",
        "GDP": "12050.3"
    },
    "PER": {
        "name": "Peru",
        "fillKey": "A",
        "GDP": "11988.9"
    },
    "MNG": {
        "name": "Mongolia",
        "fillKey": "A",
        "GDP": "11945.7"
    },
    "TUN": {
        "name": "Tunisia",
        "fillKey": "A",
        "GDP": "11435.6"
    },
    "ECU": {
        "name": "Ecuador",
        "fillKey": "A",
        "GDP": "11371.7"
    },
    "LKA": {
        "name": "SriLanka",
        "fillKey": "A",
        "GDP": "11110.2"
    },
    "ALB": {
        "name": "Albania",
        "fillKey": "A",
        "GDP": "11108.0"
    },
    "DMA": {
        "name": "Dominica",
        "fillKey": "A",
        "GDP": "10877.3"
    },
    "IDN": {
        "name": "Indonesia",
        "fillKey": "A",
        "GDP": "10517.0"
    },
    "BIH": {
        "name": "BosniaandHerzegovina",
        "fillKey": "A",
        "GDP": "10426.9"
    },
    "NAM": {
        "name": "Namibia",
        "fillKey": "A",
        "GDP": "9955.5"
    },
    "GEO": {
        "name": "Georgia",
        "fillKey": "A",
        "GDP": "9162.9"
    },
    "PRY": {
        "name": "Paraguay",
        "fillKey": "A",
        "GDP": "8911.4"
    },
    "JAM": {
        "name": "Jamaica",
        "fillKey": "A",
        "GDP": "8877.7"
    },
    "FJI": {
        "name": "Fiji",
        "fillKey": "A",
        "GDP": "8792.4"
    },
    "UKR": {
        "name": "Ukraine",
        "fillKey": "A",
        "GDP": "8665.5"
    },
    "BLZ": {
        "name": "Belize",
        "fillKey": "A",
        "GDP": "8416.8"
    },
    "SLV": {
        "name": "ElSalvador",
        "fillKey": "A",
        "GDP": "8351.1"
    },
    "SWZ": {
        "name": "Swaziland",
        "fillKey": "A",
        "GDP": "8292.1"
    },
    "ARM": {
        "name": "Armenia",
        "fillKey": "A",
        "GDP": "8069.7"
    },
    "BTN": {
        "name": "Bhutan",
        "fillKey": "A",
        "GDP": "7815.7"
    },
    "MAR": {
        "name": "Morocco",
        "fillKey": "A",
        "GDP": "7490.7"
    },
    "GTM": {
        "name": "Guatemala",
        "fillKey": "A",
        "GDP": "7454.3"
    },
    "PHL": {
        "name": "Philippines",
        "fillKey": "A",
        "GDP": "6969.0"
    },
    "NGA": {
        "name": "Nigeria",
        "fillKey": "A",
        "GDP": "5911.2"
    },
    "WSM": {
        "name": "Samoa",
        "fillKey": "A",
        "GDP": "5789.0"
    },
    "IND": {
        "name": "India",
        "fillKey": "A",
        "GDP": "5700.7"
    },
    "UZB": {
        "name": "Uzbekistan",
        "fillKey": "A",
        "GDP": "5573.1"
    },
    "TON": {
        "name": "Tonga",
        "fillKey": "A",
        "GDP": "5211.1"
    },
    "NIC": {
        "name": "Nicaragua",
        "fillKey": "A",
        "GDP": "4918.3"
    },
    "HND": {
        "name": "Honduras",
        "fillKey": "A",
        "GDP": "4908.7"
    },
    "PAK": {
        "name": "Pakistan",
        "fillKey": "A",
        "GDP": "4811.4"
    },
    "GHA": {
        "name": "Ghana",
        "fillKey": "A",
        "GDP": "4081.7"
    },
    "SDN": {
        "name": "Sudan",
        "fillKey": "A",
        "GDP": "4069.3"
    },
    "MRT": {
        "name": "Mauritania",
        "fillKey": "A",
        "GDP": "3911.8"
    },
    "ZMB": {
        "name": "Zambia",
        "fillKey": "A",
        "GDP": "3904.0"
    },
    "MHL": {
        "name": "MarshallIslands",
        "fillKey": "A",
        "GDP": "3802.7"
    },
    "TUV": {
        "name": "Tuvalu",
        "fillKey": "A",
        "GDP": "3765.3"
    },
    "DJI": {
        "name": "Djibouti",
        "fillKey": "A",
        "GDP": "3270.4"
    },
    "STP": {
        "name": "SaoTomeandPrincipe",
        "fillKey": "A",
        "GDP": "3176.3"
    },
    "BGD": {
        "name": "Bangladesh",
        "fillKey": "A",
        "GDP": "3122.7"
    },
    "VUT": {
        "name": "Vanuatu",
        "fillKey": "A",
        "GDP": "3030.6"
    },
    "CMR": {
        "name": "Cameroon",
        "fillKey": "A",
        "GDP": "2972.2"
    },
    "KEN": {
        "name": "Kenya",
        "fillKey": "A",
        "GDP": "2954.1"
    },
    "PNG": {
        "name": "PapuaNewGuinea",
        "fillKey": "A",
        "GDP": "2854.7"
    },
    "TJK": {
        "name": "Tajikistan",
        "fillKey": "A",
        "GDP": "2690.8"
    },
    "LSO": {
        "name": "Lesotho",
        "fillKey": "A",
        "GDP": "2638.3"
    },
    "NPL": {
        "name": "Nepal",
        "fillKey": "A",
        "GDP": "2374.2"
    },
    "SEN": {
        "name": "Senegal",
        "fillKey": "A",
        "GDP": "2333.1"
    },
    "TLS": {
        "name": "Timor-Leste",
        "fillKey": "A",
        "GDP": "2227.0"
    },
    "TCD": {
        "name": "Chad",
        "fillKey": "A",
        "GDP": "2182.0"
    },
    "SLB": {
        "name": "SolomonIslands",
        "fillKey": "A",
        "GDP": "2130.4"
    },
    "BEN": {
        "name": "Benin",
        "fillKey": "A",
        "GDP": "2030.2"
    },
    "SSD": {
        "name": "SouthSudan",
        "fillKey": "A",
        "GDP": "2018.9"
    },
    "SLE": {
        "name": "SierraLeone",
        "fillKey": "A",
        "GDP": "1966.1"
    },
    "AFG": {
        "name": "Afghanistan",
        "fillKey": "A",
        "GDP": "1932.9"
    },
    "KIR": {
        "name": "Kiribati",
        "fillKey": "A",
        "GDP": "1809.0"
    },
    "ZWE": {
        "name": "Zimbabwe",
        "fillKey": "A",
        "GDP": "1791.5"
    },
    "UGA": {
        "name": "Uganda",
        "fillKey": "A",
        "GDP": "1770.9"
    },
    "HTI": {
        "name": "Haiti",
        "fillKey": "A",
        "GDP": "1731.8"
    },
    "RWA": {
        "name": "Rwanda",
        "fillKey": "A",
        "GDP": "1660.6"
    },
    "BFA": {
        "name": "BurkinaFaso",
        "fillKey": "A",
        "GDP": "1619.5"
    },
    "MLI": {
        "name": "Mali",
        "fillKey": "A",
        "GDP": "1599.2"
    },
    "ETH": {
        "name": "Ethiopia",
        "fillKey": "A",
        "GDP": "1499.8"
    },
    "MDG": {
        "name": "Madagascar",
        "fillKey": "A",
        "GDP": "1439.4"
    },
    "COM": {
        "name": "Comoros",
        "fillKey": "A",
        "GDP": "1429.3"
    },
    "TGO": {
        "name": "Togo",
        "fillKey": "A",
        "GDP": "1428.8"
    },
    "GNB": {
        "name": "Guinea-Bissau",
        "fillKey": "A",
        "GDP": "1385.5"
    },
    "GIN": {
        "name": "Guinea",
        "fillKey": "A",
        "GDP": "1221.3"
    },
    "MOZ": {
        "name": "Mozambique",
        "fillKey": "A",
        "GDP": "1129.3"
    },
    "NER": {
        "name": "Niger",
        "fillKey": "A",
        "GDP": "937.7"
    },
    "LBR": {
        "name": "Liberia",
        "fillKey": "A",
        "GDP": "842.4"
    },
    "MWI": {
        "name": "Malawi",
        "fillKey": "A",
        "GDP": "821.6"
    },
    "BDI": {
        "name": "Burundi",
        "fillKey": "A",
        "GDP": "769.9"
    }
  }
});
