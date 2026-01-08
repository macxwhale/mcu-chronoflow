export interface MCUNode {
  id: string;
  title: string;
  release_year: number;
  phase: string;
  platform: string;
  synopsis: string;
  key_characters: string[];
  poster_url: string;
  chronological_order: number;
  type: "movie" | "series";
}

// Complete MCU Timeline Data - Chronological Order
export const mcuTimelineData: MCUNode[] = [
  {
    id: "1",
    title: "Eyes of Wakanda",
    release_year: 2025,
    phase: "Phase 5",
    platform: "Disney+",
    synopsis: "An anthology series spanning millennia, following Wakandan warriors across different eras as they protect vibranium from those who would use it for destruction.",
    key_characters: ["Wakandan Warriors", "Ancestral Protectors"],
    poster_url: "https://image.tmdb.org/t/p/w500/rUeBVbR9lBU8qMETgsXgeceVRFP.jpg",
    chronological_order: 1,
    type: "series"
  },
  {
    id: "2",
    title: "Captain America: The First Avenger",
    release_year: 2011,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    key_characters: ["Steve Rogers", "Peggy Carter", "Bucky Barnes", "Red Skull", "Howard Stark"],
    poster_url: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    chronological_order: 2,
    type: "movie"
  },
  {
    id: "3",
    title: "Captain Marvel",
    release_year: 2019,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    key_characters: ["Carol Danvers", "Nick Fury", "Yon-Rogg", "Talos", "Maria Rambeau"],
    poster_url: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    chronological_order: 3,
    type: "movie"
  },
  {
    id: "4",
    title: "Iron Man",
    release_year: 2008,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    key_characters: ["Tony Stark", "Pepper Potts", "Obadiah Stane", "James Rhodes", "J.A.R.V.I.S."],
    poster_url: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    chronological_order: 4,
    type: "movie"
  },
  {
    id: "5",
    title: "Iron Man 2",
    release_year: 2010,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    key_characters: ["Tony Stark", "Pepper Potts", "Natasha Romanoff", "James Rhodes", "Ivan Vanko"],
    poster_url: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    chronological_order: 5,
    type: "movie"
  },
  {
    id: "6",
    title: "The Incredible Hulk",
    release_year: 2008,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    key_characters: ["Bruce Banner", "Betty Ross", "Emil Blonsky", "Thaddeus Ross", "Samuel Sterns"],
    poster_url: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    chronological_order: 6,
    type: "movie"
  },
  {
    id: "7",
    title: "Thor",
    release_year: 2011,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard, where he soon becomes one of their finest defenders.",
    key_characters: ["Thor", "Loki", "Jane Foster", "Odin", "Heimdall"],
    poster_url: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    chronological_order: 7,
    type: "movie"
  },
  {
    id: "8",
    title: "The Avengers",
    release_year: 2012,
    phase: "Phase 1",
    platform: "Theatrical",
    synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    key_characters: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner", "Natasha Romanoff", "Clint Barton", "Loki"],
    poster_url: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    chronological_order: 8,
    type: "movie"
  },
  {
    id: "9",
    title: "Iron Man 3",
    release_year: 2013,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    key_characters: ["Tony Stark", "Pepper Potts", "James Rhodes", "Aldrich Killian", "The Mandarin"],
    poster_url: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    chronological_order: 9,
    type: "movie"
  },
  {
    id: "10",
    title: "Thor: The Dark World",
    release_year: 2013,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
    key_characters: ["Thor", "Loki", "Jane Foster", "Malekith", "Frigga"],
    poster_url: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    chronological_order: 10,
    type: "movie"
  },
  {
    id: "11",
    title: "Captain America: The Winter Soldier",
    release_year: 2014,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    key_characters: ["Steve Rogers", "Natasha Romanoff", "Sam Wilson", "Bucky Barnes", "Nick Fury"],
    poster_url: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    chronological_order: 11,
    type: "movie"
  },
  {
    id: "12",
    title: "Guardians of the Galaxy",
    release_year: 2014,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    key_characters: ["Peter Quill", "Gamora", "Drax", "Rocket", "Groot", "Ronan"],
    poster_url: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    chronological_order: 12,
    type: "movie"
  },
  {
    id: "13",
    title: "Guardians of the Galaxy Vol. 2",
    release_year: 2017,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    key_characters: ["Peter Quill", "Gamora", "Drax", "Rocket", "Groot", "Ego", "Mantis"],
    poster_url: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    chronological_order: 13,
    type: "movie"
  },
  {
    id: "14",
    title: "Avengers: Age of Ultron",
    release_year: 2015,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    key_characters: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner", "Natasha Romanoff", "Ultron", "Vision", "Wanda Maximoff"],
    poster_url: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    chronological_order: 14,
    type: "movie"
  },
  {
    id: "15",
    title: "Ant-Man",
    release_year: 2015,
    phase: "Phase 2",
    platform: "Theatrical",
    synopsis: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    key_characters: ["Scott Lang", "Hank Pym", "Hope Van Dyne", "Darren Cross", "Cassie Lang"],
    poster_url: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    chronological_order: 15,
    type: "movie"
  },
  {
    id: "16",
    title: "Captain America: Civil War",
    release_year: 2016,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    key_characters: ["Steve Rogers", "Tony Stark", "Bucky Barnes", "Black Panther", "Spider-Man", "Wanda Maximoff"],
    poster_url: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    chronological_order: 16,
    type: "movie"
  },
  {
    id: "17",
    title: "Black Widow",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    key_characters: ["Natasha Romanoff", "Yelena Belova", "Alexei Shostakov", "Melina Vostokoff", "Taskmaster"],
    poster_url: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    chronological_order: 17,
    type: "movie"
  },
  {
    id: "18",
    title: "Spider-Man: Homecoming",
    release_year: 2017,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    key_characters: ["Peter Parker", "Tony Stark", "Adrian Toomes", "Ned Leeds", "Happy Hogan"],
    poster_url: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    chronological_order: 18,
    type: "movie"
  },
  {
    id: "19",
    title: "Doctor Strange",
    release_year: 2016,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    key_characters: ["Stephen Strange", "The Ancient One", "Karl Mordo", "Christine Palmer", "Wong"],
    poster_url: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    chronological_order: 19,
    type: "movie"
  },
  {
    id: "20",
    title: "Black Panther",
    release_year: 2018,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    key_characters: ["T'Challa", "Erik Killmonger", "Shuri", "Okoye", "Nakia"],
    poster_url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    chronological_order: 20,
    type: "movie"
  },
  {
    id: "21",
    title: "Thor: Ragnarok",
    release_year: 2017,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    key_characters: ["Thor", "Loki", "Hela", "Hulk", "Valkyrie", "Grandmaster"],
    poster_url: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    chronological_order: 21,
    type: "movie"
  },
  {
    id: "22",
    title: "Ant-Man and the Wasp",
    release_year: 2018,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    key_characters: ["Scott Lang", "Hope Van Dyne", "Hank Pym", "Janet Van Dyne", "Ghost"],
    poster_url: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    chronological_order: 22,
    type: "movie"
  },
  {
    id: "23",
    title: "Avengers: Infinity War",
    release_year: 2018,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    key_characters: ["Thanos", "Tony Stark", "Thor", "Steve Rogers", "Gamora", "Doctor Strange", "Spider-Man"],
    poster_url: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    chronological_order: 23,
    type: "movie"
  },
  {
    id: "24",
    title: "Avengers: Endgame",
    release_year: 2019,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    key_characters: ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner", "Natasha Romanoff", "Clint Barton", "Scott Lang"],
    poster_url: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    chronological_order: 24,
    type: "movie"
  },
  {
    id: "25",
    title: "WandaVision",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems.",
    key_characters: ["Wanda Maximoff", "Vision", "Monica Rambeau", "Agatha Harkness", "Jimmy Woo"],
    poster_url: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
    chronological_order: 25,
    type: "series"
  },
  {
    id: "26",
    title: "The Falcon and the Winter Soldier",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Following the events of Avengers: Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities—and their patience.",
    key_characters: ["Sam Wilson", "Bucky Barnes", "Karli Morgenthau", "John Walker", "Zemo"],
    poster_url: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    chronological_order: 26,
    type: "series"
  },
  {
    id: "27",
    title: "Shang-Chi and the Legend of the Ten Rings",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    key_characters: ["Shang-Chi", "Xu Wenwu", "Xialing", "Katy", "Trevor Slattery"],
    poster_url: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    chronological_order: 27,
    type: "movie"
  },
  {
    id: "28",
    title: "Loki",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    key_characters: ["Loki", "Sylvie", "Mobius", "He Who Remains", "Ravonna Renslayer"],
    poster_url: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    chronological_order: 28,
    type: "series"
  },
  {
    id: "29",
    title: "Spider-Man: Far From Home",
    release_year: 2019,
    phase: "Phase 3",
    platform: "Theatrical",
    synopsis: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    key_characters: ["Peter Parker", "Mysterio", "MJ", "Nick Fury", "Happy Hogan"],
    poster_url: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsGHkdqNL.jpg",
    chronological_order: 29,
    type: "movie"
  },
  {
    id: "30",
    title: "Eternals",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
    key_characters: ["Sersi", "Ikaris", "Thena", "Ajak", "Kingo", "Druig"],
    poster_url: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
    chronological_order: 30,
    type: "movie"
  },
  {
    id: "31",
    title: "Spider-Man: No Way Home",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    key_characters: ["Peter Parker", "Doctor Strange", "MJ", "Doctor Octopus", "Green Goblin"],
    poster_url: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    chronological_order: 31,
    type: "movie"
  },
  {
    id: "32",
    title: "Doctor Strange in the Multiverse of Madness",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    key_characters: ["Stephen Strange", "Wanda Maximoff", "America Chavez", "Wong", "Christine Palmer"],
    poster_url: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    chronological_order: 32,
    type: "movie"
  },
  {
    id: "33",
    title: "Hawkeye",
    release_year: 2021,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop.",
    key_characters: ["Clint Barton", "Kate Bishop", "Yelena Belova", "Maya Lopez", "Kingpin"],
    poster_url: "https://image.tmdb.org/t/p/w500/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
    chronological_order: 33,
    type: "series"
  },
  {
    id: "34",
    title: "Moon Knight",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
    key_characters: ["Marc Spector", "Steven Grant", "Layla El-Faouly", "Arthur Harrow", "Khonshu"],
    poster_url: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
    chronological_order: 34,
    type: "series"
  },
  {
    id: "35",
    title: "Thor: Love and Thunder",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    key_characters: ["Thor", "Jane Foster", "Gorr", "Valkyrie", "Korg"],
    poster_url: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    chronological_order: 35,
    type: "movie"
  },
  {
    id: "36",
    title: "She-Hulk: Attorney at Law",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.",
    key_characters: ["Jennifer Walters", "Bruce Banner", "Emil Blonsky", "Nikki Ramos", "Daredevil"],
    poster_url: "https://image.tmdb.org/t/p/w500/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
    chronological_order: 36,
    type: "series"
  },
  {
    id: "37",
    title: "Ms. Marvel",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Disney+",
    synopsis: "Kamala Khan, a Muslim American teenager growing up in Jersey City, is a superhero mega-fan with an oversized imagination—particularly when it comes to Captain Marvel.",
    key_characters: ["Kamala Khan", "Bruno Carrelli", "Nakia Bahadir", "Muneeba Khan", "Najma"],
    poster_url: "https://image.tmdb.org/t/p/w500/cdkyMYdu8ao26XOBtrP3ECdKl7a.jpg",
    chronological_order: 37,
    type: "series"
  },
  {
    id: "38",
    title: "Black Panther: Wakanda Forever",
    release_year: 2022,
    phase: "Phase 4",
    platform: "Theatrical",
    synopsis: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    key_characters: ["Shuri", "Namor", "Okoye", "M'Baku", "Riri Williams"],
    poster_url: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    chronological_order: 38,
    type: "movie"
  },
  {
    id: "39",
    title: "Ant-Man and the Wasp: Quantumania",
    release_year: 2023,
    phase: "Phase 5",
    platform: "Theatrical",
    synopsis: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
    key_characters: ["Scott Lang", "Hope Van Dyne", "Kang the Conqueror", "Janet Van Dyne", "Cassie Lang"],
    poster_url: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    chronological_order: 39,
    type: "movie"
  },
  {
    id: "40",
    title: "Guardians of the Galaxy Vol. 3",
    release_year: 2023,
    phase: "Phase 5",
    platform: "Theatrical",
    synopsis: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own. A mission that could mean the end of the Guardians if not successful.",
    key_characters: ["Peter Quill", "Rocket", "Gamora", "Drax", "Nebula", "High Evolutionary"],
    poster_url: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    chronological_order: 40,
    type: "movie"
  },
  {
    id: "41",
    title: "The Marvels",
    release_year: 2023,
    phase: "Phase 5",
    platform: "Theatrical",
    synopsis: "Carol Danvers, Kamala Khan, and Monica Rambeau begin swapping places with each other every time they use their powers and must work together to fix their entangled fates.",
    key_characters: ["Carol Danvers", "Kamala Khan", "Monica Rambeau", "Nick Fury", "Dar-Benn"],
    poster_url: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    chronological_order: 41,
    type: "movie"
  },
  {
    id: "42",
    title: "Daredevil: Born Again",
    release_year: 2025,
    phase: "Phase 5",
    platform: "Disney+",
    synopsis: "Matt Murdock continues his fight for justice as the vigilante Daredevil while navigating his complicated relationship with Wilson Fisk, the Kingpin of Crime.",
    key_characters: ["Matt Murdock", "Wilson Fisk", "Karen Page", "Foggy Nelson", "Punisher"],
    poster_url: "https://image.tmdb.org/t/p/w500/vAkeCjX7rdC3Ya6tZ7IbnAi7UH4.jpg",
    chronological_order: 42,
    type: "series"
  },
  {
    id: "43",
    title: "Ironheart",
    release_year: 2025,
    phase: "Phase 5",
    platform: "Disney+",
    synopsis: "Genius inventor Riri Williams creates the most advanced suit of armor since Iron Man, and must face the consequences of her technological innovations.",
    key_characters: ["Riri Williams", "The Hood", "Shuri"],
    poster_url: "https://image.tmdb.org/t/p/w500/t3VhNsL5S9bG0lklCf1x7FU5U2P.jpg",
    chronological_order: 43,
    type: "series"
  },
  {
    id: "44",
    title: "Marvel Zombies",
    release_year: 2025,
    phase: "Phase 5",
    platform: "Disney+",
    synopsis: "A new generation of heroes battle against an ever-spreading zombie scourge in this animated series set in an alternate universe.",
    key_characters: ["Yelena Belova", "Kate Bishop", "Shang-Chi", "Jimmy Woo", "Death Dealer"],
    poster_url: "https://image.tmdb.org/t/p/w500/cnQNuH0hIpYWpL7vmLxj5bjOxHq.jpg",
    chronological_order: 44,
    type: "series"
  }
];

export const getPhaseColor = (phase: string): string => {
  switch (phase) {
    case "Phase 1":
      return "phase-1";
    case "Phase 2":
      return "phase-2";
    case "Phase 3":
      return "phase-3";
    case "Phase 4":
      return "phase-4";
    case "Phase 5":
      return "phase-5";
    case "Phase 6":
      return "phase-6";
    default:
      return "phase-1";
  }
};
