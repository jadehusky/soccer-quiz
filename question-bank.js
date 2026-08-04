const categoryStores = {
  clubs: {
    records: [
      ["Manchester United", "The Red Devils", "Old Trafford", "England", "Premier League", "Manchester derby"],
      ["FC Barcelona", "Blaugrana", "Camp Nou", "Spain", "La Liga", "El Clasico"],
      ["Juventus", "The Old Lady", "Allianz Stadium", "Italy", "Serie A", "Derby d'Italia"],
      ["Liverpool", "The Reds", "Anfield", "England", "Premier League", "Merseyside derby"],
      ["Borussia Dortmund", "Die Schwarzgelben", "Signal Iduna Park", "Germany", "Bundesliga", "Revierderby"],
      ["Arsenal", "The Gunners", "Emirates Stadium", "England", "Premier League", "North London derby"],
      ["Real Madrid", "Los Blancos", "Santiago Bernabeu", "Spain", "La Liga", "El Clasico"],
      ["Chelsea", "The Blues", "Stamford Bridge", "England", "Premier League", "West London derby"],
      ["Atletico Madrid", "Los Colchoneros", "Metropolitano Stadium", "Spain", "La Liga", "Madrid derby"],
      ["Benfica", "The Eagles", "Estadio da Luz", "Portugal", "Primeira Liga", "Derby de Lisboa"],
      ["Inter Milan", "Nerazzurri", "San Siro", "Italy", "Serie A", "Derby della Madonnina"],
      ["Paris Saint-Germain", "Les Parisiens", "Parc des Princes", "France", "Ligue 1", "Le Classique"],
      ["Bayern Munich", "Die Roten", "Allianz Arena", "Germany", "Bundesliga", "Der Klassiker"],
      ["Ajax", "de Godenzonen", "Johan Cruyff Arena", "Netherlands", "Eredivisie", "De Klassieker"],
      ["Celtic", "The Bhoys", "Celtic Park", "Scotland", "Scottish Premiership", "Old Firm"],
      ["Porto", "Dragoes", "Estadio do Dragao", "Portugal", "Primeira Liga", "O Classico"],
      ["Boca Juniors", "Xeneizes", "La Bombonera", "Argentina", "Primera Division", "Superclasico"],
      ["River Plate", "Los Millonarios", "Estadio Monumental", "Argentina", "Primera Division", "Superclasico"],
      ["AC Milan", "Rossoneri", "San Siro", "Italy", "Serie A", "Derby della Madonnina"],
      ["Tottenham Hotspur", "Spurs", "Tottenham Hotspur Stadium", "England", "Premier League", "North London derby"]
    ],
    fields: ["club", "nickname", "stadium", "country", "league", "rivalry"]
  },
  players: {
    records: [
      ["Lionel Messi", "Argentina", "Forward", "Inter Miami", "2022 World Cup winner", "La Pulga"],
      ["Cristiano Ronaldo", "Portugal", "Forward", "Al Nassr", "five-time Ballon d'Or winner", "CR7"],
      ["Kylian Mbappe", "France", "Forward", "Real Madrid", "2018 World Cup winner", "Donatello"],
      ["Erling Haaland", "Norway", "Striker", "Manchester City", "Premier League Golden Boot winner", "The Terminator"],
      ["Mohamed Salah", "Egypt", "Winger", "Liverpool", "Premier League champion", "Egyptian King"],
      ["Marta", "Brazil", "Forward", "Orlando Pride", "women's football icon", "Queen Marta"],
      ["Alexia Putellas", "Spain", "Midfielder", "Barcelona", "Ballon d'Or Feminin winner", "La Reina"],
      ["Aitana Bonmati", "Spain", "Midfielder", "Barcelona", "World Cup and Ballon d'Or winner", "midfield maestro"],
      ["Neymar", "Brazil", "Forward", "Santos", "Champions League winner", "Ney"],
      ["Luka Modric", "Croatia", "Midfielder", "Real Madrid", "2018 Ballon d'Or winner", "midfield magician"],
      ["Kevin De Bruyne", "Belgium", "Midfielder", "Manchester City", "Premier League playmaker", "KDB"],
      ["Harry Kane", "England", "Striker", "Bayern Munich", "England men's record scorer", "Hurricane"],
      ["Virgil van Dijk", "Netherlands", "Defender", "Liverpool", "Champions League winner", "VVD"],
      ["Gianluigi Buffon", "Italy", "Goalkeeper", "Parma", "2006 World Cup winner", "Gigi"],
      ["Iker Casillas", "Spain", "Goalkeeper", "Real Madrid", "2010 World Cup captain", "San Iker"],
      ["Ronaldinho", "Brazil", "Attacking midfielder", "Barcelona", "2005 Ballon d'Or winner", "O Bruxo"],
      ["Ronaldo Nazario", "Brazil", "Striker", "Real Madrid", "two-time World Cup winner", "Il Fenomeno"],
      ["Zinedine Zidane", "France", "Midfielder", "Real Madrid", "1998 World Cup winner", "Zizou"],
      ["Mia Hamm", "United States", "Forward", "Washington Freedom", "Women's World Cup winner", "USWNT legend"],
      ["Megan Rapinoe", "United States", "Winger", "OL Reign", "2019 Women's World Cup star", "Pinoe"]
    ],
    fields: ["player", "country", "position", "club", "achievement", "nickname"]
  },
  tournaments: {
    records: [
      ["FIFA World Cup", "world", "national teams", "every four years", "World Cup Trophy", "Uruguay"],
      ["UEFA Champions League", "Europe", "clubs", "every season", "European Cup", "Real Madrid"],
      ["UEFA Euro", "Europe", "national teams", "every four years", "Henri Delaunay Trophy", "Spain"],
      ["Copa America", "South America", "national teams", "usually every four years", "Copa America trophy", "Uruguay"],
      ["Africa Cup of Nations", "Africa", "national teams", "every two years", "AFCON trophy", "Egypt"],
      ["AFC Asian Cup", "Asia", "national teams", "every four years", "Asian Cup trophy", "Japan"],
      ["CONCACAF Gold Cup", "North America", "national teams", "every two years", "Gold Cup trophy", "Mexico"],
      ["Copa Libertadores", "South America", "clubs", "every season", "Libertadores trophy", "Independiente"],
      ["Europa League", "Europe", "clubs", "every season", "Europa League trophy", "Sevilla"],
      ["FA Cup", "England", "clubs", "every season", "FA Cup trophy", "Arsenal"],
      ["Copa del Rey", "Spain", "clubs", "every season", "Copa del Rey trophy", "Barcelona"],
      ["DFB-Pokal", "Germany", "clubs", "every season", "DFB-Pokal trophy", "Bayern Munich"],
      ["Coppa Italia", "Italy", "clubs", "every season", "Coppa Italia trophy", "Juventus"],
      ["FIFA Women's World Cup", "world", "national teams", "every four years", "Women's World Cup Trophy", "United States"],
      ["Olympic football tournament", "world", "national teams", "every four years", "Olympic gold medal", "Brazil"],
      ["Club World Cup", "world", "clubs", "periodically", "Club World Cup trophy", "Real Madrid"],
      ["Nations League", "Europe", "national teams", "every two years", "Nations League trophy", "Portugal"],
      ["Leagues Cup", "North America", "clubs", "every season", "Leagues Cup trophy", "Inter Miami"],
      ["U.S. Open Cup", "United States", "clubs", "every season", "Dewar Challenge Trophy", "Bethlehem Steel"],
      ["Community Shield", "England", "clubs", "every season", "Community Shield", "Manchester United"]
    ],
    fields: ["tournament", "region", "participants", "frequency", "prize", "recordTeam"]
  },
  rules: {
    records: [
      ["Offside", "A player is penalized when involved in active play from an offside position", "indirect free kick", "positioning", "no offside from a throw-in", "watch the second-last defender"],
      ["Red card", "A player is sent off and their team plays short", "direct free kick or penalty if tied to a foul", "discipline", "serious foul play can cause it", "leave the field"],
      ["Yellow card", "A player receives a caution", "free kick if play was stopped for the offense", "discipline", "two yellows become a red", "warning"],
      ["Throw-in", "The ball fully crosses the touchline", "throw-in", "restart", "both feet should stay on or behind the line", "use both hands"],
      ["Corner kick", "The defending team last touched the ball before it crossed its own goal line without a goal", "corner kick", "restart", "no offside directly from it", "taken from the corner arc"],
      ["Goal kick", "The attacking team last touched the ball before it crossed the defending goal line without a goal", "goal kick", "restart", "the ball is in play when kicked and clearly moves", "defending team restarts"],
      ["Penalty kick", "A direct-free-kick foul by defenders in their own penalty area", "penalty kick", "restart", "taken from the penalty spot", "goalkeeper stays on the line"],
      ["Direct free kick", "A restart that can score directly against the opponents", "direct free kick", "restart", "used for many contact fouls", "can be a shot"],
      ["Indirect free kick", "A restart that must touch another player before a goal counts", "indirect free kick", "restart", "the referee raises an arm", "needs a second touch"],
      ["Dropped ball", "Used for certain stoppages when no team has committed an offense", "dropped ball", "restart", "often returned to the team that last had possession", "neutral restart"],
      ["Handball", "Illegal hand or arm contact with the ball", "direct free kick or penalty", "foul", "context and arm position matter", "not every touch is a foul"],
      ["Advantage", "The referee lets play continue because stopping would hurt the fouled team", "play continues", "referee decision", "can be brought back if advantage does not develop", "keep attacking"],
      ["VAR", "Video officials review clear and obvious errors in major incidents", "review decision", "technology", "used for goals, penalties, red cards, and mistaken identity", "Video Assistant Referee"],
      ["Substitution", "A team replaces one player with another", "play restarts from the original restart", "team management", "the departing player should leave promptly", "fresh player enters"],
      ["Kickoff", "Starts each half and restarts after a goal", "kickoff", "restart", "a goal can be scored directly from it", "taken from the center mark"],
      ["Added time", "Extra time added for stoppages during a half", "continued play", "timekeeping", "announced near the end of each half", "referee tracks it"],
      ["DOGSO", "Denying an obvious goal-scoring opportunity", "direct free kick or penalty", "discipline", "can produce a red card", "major attacking chance denied"],
      ["Back-pass rule", "A goalkeeper cannot handle a deliberate kick from a teammate", "indirect free kick", "goalkeeper rule", "does not apply to headers from teammates", "feet to keeper matters"],
      ["Encroachment", "Players enter a required area too early at a restart", "retake or indirect free kick depending on outcome", "restart management", "common on penalties", "wait for the kick"],
      ["Ball out of play", "The whole ball fully crosses a boundary line", "restart based on where it left", "boundary", "the whole ball must cross the whole line", "line belongs to the field"]
    ],
    fields: ["term", "definition", "restart", "topic", "detail", "tip"]
  },
  history: {
    records: [
      ["1930", "Uruguay won the first men's World Cup", "Uruguay", "FIFA World Cup", "Montevideo", "first champions"],
      ["1958", "Pele starred as Brazil won the World Cup", "Brazil", "FIFA World Cup", "Sweden", "teenage superstar"],
      ["1966", "England won the World Cup at Wembley", "England", "FIFA World Cup", "London", "home triumph"],
      ["1970", "Brazil produced one of football's most famous teams", "Brazil", "FIFA World Cup", "Mexico", "Jogo Bonito"],
      ["1986", "Maradona scored the Hand of God and Goal of the Century", "Argentina", "FIFA World Cup", "Mexico", "Maradona magic"],
      ["1991", "The United States won the first Women's World Cup", "United States", "Women's World Cup", "China", "women's football milestone"],
      ["1994", "The United States hosted the men's World Cup", "United States", "FIFA World Cup", "USA", "record crowds"],
      ["1998", "France won the World Cup on home soil", "France", "FIFA World Cup", "Paris", "Zidane final"],
      ["1999", "Manchester United completed a treble", "Manchester United", "Champions League", "Barcelona", "late comeback"],
      ["2002", "Brazil won its fifth men's World Cup", "Brazil", "FIFA World Cup", "Japan and South Korea", "Ronaldo redemption"],
      ["2005", "Liverpool completed the Miracle of Istanbul", "Liverpool", "Champions League", "Istanbul", "3-0 comeback"],
      ["2006", "Italy won the World Cup on penalties", "Italy", "FIFA World Cup", "Berlin", "Azzurri victory"],
      ["2008", "Spain began its golden international run", "Spain", "UEFA Euro", "Austria and Switzerland", "tiki-taka era"],
      ["2010", "Spain won its first men's World Cup", "Spain", "FIFA World Cup", "South Africa", "Iniesta winner"],
      ["2012", "Chelsea won its first Champions League", "Chelsea", "Champions League", "Munich", "penalty shootout"],
      ["2014", "Germany beat Brazil 7-1 in a World Cup semifinal", "Germany", "FIFA World Cup", "Belo Horizonte", "historic shock"],
      ["2015", "The United States won the Women's World Cup", "United States", "Women's World Cup", "Canada", "Carli Lloyd hat trick"],
      ["2016", "Portugal won Euro 2016", "Portugal", "UEFA Euro", "France", "extra-time winner"],
      ["2019", "The United States won another Women's World Cup", "United States", "Women's World Cup", "France", "dominant campaign"],
      ["2022", "Argentina won the World Cup in Qatar", "Argentina", "FIFA World Cup", "Qatar", "Messi triumph"]
    ],
    fields: ["year", "event", "team", "competition", "place", "tag"]
  }
};

window.questionBank = Object.entries(categoryStores).flatMap(([category, store]) =>
  buildCategoryQuestions(category, store.records.map((record) => objectFromRecord(store.fields, record)))
);

function buildCategoryQuestions(category, records) {
  const builders = {
    clubs: buildClubQuestions,
    players: buildPlayerQuestions,
    tournaments: buildTournamentQuestions,
    rules: buildRuleQuestions,
    history: buildHistoryQuestions
  };

  return records.flatMap((record) => builders[category](record, records));
}

function buildClubQuestions(record, records) {
  return [
    question("clubs", "Starter", `Which club is nicknamed ${record.nickname}?`, record.club, choices(records, "club", record.club), `${record.club} is known as ${record.nickname}.`),
    question("clubs", "Starter", `Which club plays at ${record.stadium}?`, record.club, choices(records, "club", record.club), `${record.stadium} is home to ${record.club}.`),
    question("clubs", "Starter", `Which country is ${record.club} from?`, record.country, choices(records, "country", record.country), `${record.club} is based in ${record.country}.`),
    question("clubs", "Pro", `Which league does ${record.club} play in?`, record.league, choices(records, "league", record.league), `${record.club} competes in ${record.league}.`),
    question("clubs", "Pro", `Which rivalry is connected to ${record.club}?`, record.rivalry, choices(records, "rivalry", record.rivalry), `${record.club} is connected with the ${record.rivalry}.`),
    question("clubs", "Elite", `Which stadium would you visit to watch ${record.club} at home?`, record.stadium, choices(records, "stadium", record.stadium), `${record.club} plays home matches at ${record.stadium}.`)
  ];
}

function buildPlayerQuestions(record, records) {
  return [
    question("players", "Starter", `Which country does ${record.player} represent?`, record.country, choices(records, "country", record.country), `${record.player} represents ${record.country}.`),
    question("players", "Starter", `What position is ${record.player} best known for?`, record.position, choices(records, "position", record.position), `${record.player} is best known as a ${record.position}.`),
    question("players", "Starter", `Which player is nicknamed ${record.nickname}?`, record.player, choices(records, "player", record.player), `${record.nickname} refers to ${record.player}.`),
    question("players", "Pro", `Which club is listed with ${record.player} in this quiz bank?`, record.club, choices(records, "club", record.club), `${record.player} is listed with ${record.club}.`),
    question("players", "Pro", `Which achievement is connected to ${record.player}?`, record.achievement, choices(records, "achievement", record.achievement), `${record.player} is connected to: ${record.achievement}.`),
    question("players", "Elite", `Which player matches this clue: ${record.country} ${record.position}, ${record.nickname}?`, record.player, choices(records, "player", record.player), `The clue points to ${record.player}.`)
  ];
}

function buildTournamentQuestions(record, records) {
  return [
    question("tournaments", "Starter", `Which region is most connected to ${record.tournament}?`, record.region, choices(records, "region", record.region), `${record.tournament} is connected to ${record.region}.`),
    question("tournaments", "Starter", `Who competes in ${record.tournament}?`, record.participants, choices(records, "participants", record.participants), `${record.tournament} is for ${record.participants}.`),
    question("tournaments", "Starter", `How often is ${record.tournament} usually played?`, record.frequency, choices(records, "frequency", record.frequency), `${record.tournament} is played ${record.frequency}.`),
    question("tournaments", "Pro", `Which prize is connected to ${record.tournament}?`, record.prize, choices(records, "prize", record.prize), `${record.prize} is connected to ${record.tournament}.`),
    question("tournaments", "Pro", `Which team is listed as a record or famous team for ${record.tournament}?`, record.recordTeam, choices(records, "recordTeam", record.recordTeam), `${record.recordTeam} is strongly connected to ${record.tournament}.`),
    question("tournaments", "Elite", `Which tournament matches this clue: ${record.region}, ${record.participants}, ${record.frequency}?`, record.tournament, choices(records, "tournament", record.tournament), `The clue points to ${record.tournament}.`)
  ];
}

function buildRuleQuestions(record, records) {
  return [
    question("rules", "Starter", `Which rule term means: ${record.definition}?`, record.term, choices(records, "term", record.term), `That describes ${record.term}.`),
    question("rules", "Starter", `What is the usual restart or result for ${record.term}?`, record.restart, choices(records, "restart", record.restart), `${record.term} usually leads to: ${record.restart}.`),
    question("rules", "Starter", `Which topic does ${record.term} mostly belong to?`, record.topic, choices(records, "topic", record.topic), `${record.term} is a ${record.topic} topic.`),
    question("rules", "Pro", `Which detail is true about ${record.term}?`, record.detail, choices(records, "detail", record.detail), `For ${record.term}: ${record.detail}.`),
    question("rules", "Pro", `Which tip helps remember ${record.term}?`, record.tip, choices(records, "tip", record.tip), `A good ${record.term} tip is: ${record.tip}.`),
    question("rules", "Elite", `Which rule matches this clue: ${record.topic}, ${record.restart}, ${record.tip}?`, record.term, choices(records, "term", record.term), `The clue points to ${record.term}.`)
  ];
}

function buildHistoryQuestions(record, records) {
  return [
    question("history", "Starter", `In which year did this happen: ${record.event}?`, record.year, choices(records, "year", record.year), `${record.event} happened in ${record.year}.`),
    question("history", "Starter", `Which team or country is connected to ${record.year}: ${record.event}?`, record.team, choices(records, "team", record.team), `${record.team} is connected to that moment.`),
    question("history", "Starter", `Which competition featured this moment: ${record.event}?`, record.competition, choices(records, "competition", record.competition), `That moment belongs to ${record.competition}.`),
    question("history", "Pro", `Where did this football moment happen: ${record.event}?`, record.place, choices(records, "place", record.place), `It happened in ${record.place}.`),
    question("history", "Pro", `Which tag best describes ${record.year}: ${record.event}?`, record.tag, choices(records, "tag", record.tag), `A good tag is ${record.tag}.`),
    question("history", "Elite", `Which year matches this clue: ${record.team}, ${record.competition}, ${record.tag}?`, record.year, choices(records, "year", record.year), `The clue points to ${record.year}.`)
  ];
}

function question(category, difficulty, prompt, correct, wrong, fact) {
  return {
    id: `${category}:${prompt}:${correct}`,
    category,
    difficulty,
    question: prompt,
    answers: [correct, ...wrong],
    correct: 0,
    fact
  };
}

function objectFromRecord(fields, record) {
  return Object.fromEntries(fields.map((field, index) => [field, record[index]]));
}

function choices(records, field, correct) {
  const fallbackOptions = [
    "clubs",
    "national teams",
    "players",
    "goalkeepers only",
    "every season",
    "every two years",
    "every four years",
    "Europe",
    "South America",
    "world",
    "restart",
    "discipline",
    "foul",
    "technology",
    "England",
    "Spain",
    "Italy",
    "Germany",
    "Brazil",
    "Argentina",
    "France",
    "United States"
  ];

  return [...records.map((record) => record[field]), ...fallbackOptions]
    .filter((value, index, values) => value && value !== correct && values.indexOf(value) === index)
    .slice(0, 3);
}
