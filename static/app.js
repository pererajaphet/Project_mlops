const obj = {
    genre: "",
    type: "",
    producer: "",
    studio: ""
}

const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Space', 'Mystery',
                'Shounen', 'Magic', 'Police', 'Supernatural', 'Sports', 'Josei', 'Romance',
                'Slice of Life', 'Cars', 'Seinen', 'Horror', 'Psychological', 'Thriller',
                'Super Power', 'Martial Arts', 'Fantasy', 'School', 'Ecchi', 'Military',
                'Historical', 'Dementia', 'Mecha', 'Demons', 'Samurai', 'Game', 'Shoujo',
                'Harem', 'Music', 'Shoujo', 'Shounen', 'Vampire', 'Kids', 'Hentai',
                'Parody', 'Yuri', 'Yaoi']

const types = ['TV', 'Movie', 'OVA', 'Special', 'ONA', 'Music']

const studios = ['Sunrise', 'Bones', 'Madhouse', 'Studio Gallop', 'J.C.Staff', 'A.C.G.T.',
                'Studio Pierrot', 'Toei Animation', 'Trans Arts', 'Studio Comet', 'Gonzo',
                'Studio Deen', 'Gainax', 'Tatsunoko Production', 'Production I.G', 'OLM',
                'Tokyo Movie Shinsha', 'Bee Train', 'AIC', 'Hal Film Maker',
                'Digital Frontier', 'Xebec', 'feel.', 'Zexcs', 'Daume', 'Nomad',
                'Kyoto Animation', 'Group TAC', 'Seven Arcs', 'Asread', 'Studio Hibari',
                'Nakamura Production', 'TMS Entertainment', 'Nippon Animation', 'Imagin',
                'Studio Live', 'Telecom Animation Film', 'ufotable', 'Studio Flag',
                'Studio Matrix', 'TNK', 'Shaft', 'Studio Fantasia', 'Studio Ghibli',
                'Production Reed', 'Pastel', 'Satelight', 'Arms', 'Manglobe', 'APPP',
                'Chaos Project', 'GANSIS', 'Tokyo Kids', 'Palm Studio', 'AIC Spirits',
                'Shin-Ei Animation', 'Radix', 'Ajia-Do', 'Triangle Staff', 'Amber Film Works',
                'E&G Films', 'M.S.C', 'Minami Machi Bugyousho', 'Magic Bus',
                'Animate Film', 'Actas', 'Japan Vistec', 'AIC A.S.T.A.', 'WAO World',
                'Studio 4°C', 'Ashi Production', 'Arcs Create', 'Plum', 'Artland',
                'Brain\'s Base', 'Eiken', 'Trinet Entertainment', 'SynergySP',
                'Studio Junio', 'Picture Magic', 'Zero-G Room', 'View Works',
                'Creators Dot Com', 'Ginga Ya', 'Y.O.U.C', 'OLM Digital', 'Artmic', 'Remic',
                'Enoki Films', 'Dai Nippon Printing', 'Tezuka Productions', 'Studio Jam',
                'G&G Entertainment', 'T.P.O', 'Amuse', 'Oh! Production', 'Agent 21',
                'Studio Egg', 'Yamato Works', 'ACC Production', 'Tamura Shigeru Studio',
                'Bee Media', 'The Answer Studio', 'Darts', 'D.A.S.T.',
                'Phoenix Entertainment', 'Square Enix', 'Azeta Pictures', 'AT-2', 'Annapuru',
                'Planet', 'Yumeta Company', 'Ishimori Entertainment', 'JCF',
                'Office Take Off', 'Sugar Boy', 'Blue Cat', 'Studio Z5', 'Studio March',
                'Vega Entertainment', 'Echo', 'Kitty Films', 'Genco', 'T-Rex', 'Studio G-1Neo',
                'Front Line', 'Anime R', 'Aubec', 'BeSTACK', 'Image House', 'Life Work',
                'Ishikawa Pro', 'Mook DLE', 'Pierrot Plus', 'Big Bang', 'Studio OX',
                'Studio Hakk', 'Tsuchida Productions', 'P.A. Works', 'Himajin Planning',
                'Lilix', 'Telescreen BV', 'A-1 Pictures', 'Venet', 'Visual 80', 'Studio Sign',
                'Mushi Production', 'Diomedea', 'Flavors Soft', 'Studio Core',
                'Studio 9 MAiami', 'Studio Wombat', 'Triple X', 'Cookie Jar Entertainment',
                'Dongwoo A&E', 'Oxybot', 'Sunwoo Entertainment', 'Khara',
                'Shochiku Animation Institute', 'Asahi Production', 'Topcraft', 'Japan Taps',
                '8bit', 'Studio Bogey', 'Doga Kobo', 'Shirogumi', 'Piko Studio',
                'Think Corporation', 'Studio Rikka', 'Kazuki Production', 'PrimeTime',
                'Anpro', 'White Fox', 'Studio Kikan', 'Studio World', 'Suzuki Mirano',
                'Kokusai Eigasha', 'GEN Productions', 'DAX Production', 'Daichi Doga',
                'Dongyang Animation', 'Studio Eromatick', 'Anime Antenna Iinkai', 'Ordet',
                'Kanaban Graphics', 'KeyEast', 'REALTHING', 'Oz', 'Green Bunny',
                'Office Takeout', 'DLE', 'Tele-Cartoon Japan', 'Marvy Jack', 'Egg', 'Code',
                'Marza Animation Planet', 'David Production', 'AIC Plus+', 'Silver Link.',
                'Heewon Entertainment', 'Pink Pineapple', 'Polygon Pictures',
                'Milky Cartoon', 'GoHands', 'Kinema Citrus', 'Studio Anima',
                'Tama Production', 'Studio Blanc', 'Future Planet',
                'Beijing Huihuang Animation Company', 'Indeprox', 'TYO Animations',
                'Robot Communications', 'Hoods Entertainment', 'Natural High', 'Sting Ray',
                'Gathering', 'Panda Factory', 'Studio PuYUKAI', 'G-Lam', 'Bridge', 'dwarf',
                'Daewon Media', '81 Produce', 'AIC Classic', 'Animaruya', 'TAKI Corporation',
                'Public & Basic', 'AIC Build', 'Kachidoki Studio', 'CoMix Wave Films',
                'Seven', 'Studio Zero', 'Knack Productions', 'Lerche', 'Studio Nue', 'MooGoo',
                'B&T', 'Jinnis Animation Studios', 'Digital Media Lab', 'Barnum Studio',
                'Project No.9', 'Studio Gokumi', 'Rabbit Gate',
                'Shogakukan Music & Digital Entertainment', 'SANZIGEN',
                'Encourage Films', 'LMD', 'C2C', 'Studio Chizu', 'Purple Cow Studio Japan',
                'MAPPA', 'Production IMS', 'Odolttogi', 'NHK', 'Hotline', 'Larx Entertainment',
                'Graphinica', 'HS Pictures Studio', 'Trigger', 'AIC Frontier', 'LIDENFILMS',
                'Orange', 'Studio WHO', 'ixtl', 'Nexus', 'Seven Arcs Pictures', 'Charaction',
                'Wit Studio', 'Xebec Zwei', 'Bouncy', 'Fanworks', 'Schoolzone', 'Passione',
                'Kaeruotoko Shokai', 'Connect', 'Animation Do', 'teamKG', 'ILCA',
                'Studio Moriken', 'Studio 1st', 'Yaoyorozu', 'Opera House', 'NAZ',
                'Minakata Laboratory', 'C-Station', 'Lay-duce', '10Gauge', 'Gakken Eigakyoku',
                'Tri-Slash', 'TROYCA', 'Shuka', 'Studio 3Hz', 'Geno Studio', 'Fuji TV',
                'Steve N\' Steven', 'Tonko House', 'Karaku', 'BreakBottle',
                'Creators in Pack', 'Millepensee', 'Bandai Namco Pictures', 'Pie in The Sky',
                'Dynamo Pictures', 'A-Real', 'Rockwell Eyes', 'Calf Studio',
                'Haoliners Animation League', 'EMT²', 'Ascension', '3xCube', 'Studio VOLN',
                'Sparkly Key Animation Studio', 'L²Studio', 'Tomovies', 'Studio Colorido',
                'Jumondo', 'Signal. MD', 'Platinum Vision', 'Qualia Animation',
                'Hoods Drifters Studio', 'Sprite Animation Studios', 'AXsiZ', 'Rising Force',
                'Pollyanna Graphics', 'KOO-KI', 'Oddjob', 'Pine Jam', 'Onionskin',
                'Shanghai Foch Film Culture Investment', 'TOHO animation',
                'Fukushima Gainax', 'G.CMay Animation & Film', 'Issen', 'GEMBA',
                'W-Toon Studio', 'DMM.futureworks', 'NUT', 'Ekura Animal', 'Moss Design Unit',
                'Zero-G', 'domerica', 'Studio! Cucuri', 'Asura Film', 'Kenji Studio',
                'Egg Firm', 'Queen Bee', 'Pb Animation Co. Ltd.', 'Namu Animation', 'Ripromo',
                'Echoes', 'Kyotoma', 'Tengu Kobo', 'Thundray', 'CG Year', 'Blade',
                'GARDEN LODGE', 'M2', 'LandQ studios', 'Lesprit', 'Dwango', 'TYPHOON GRAPHICS',
                'Studio A-CAT', 'PRA', 'Science SARU', 'Studio Ponoc', 'Success Co.',
                'SELFISH', 'Craftar', 'MMDGP', 'DandeLion Animation Studio LLC', 'Chiptune',
                'Imagineer', 'drop', 'Studio LAN', 'Joker Films', 'Kamikaze Douga',
                'Studio Khronos', 'CLOVERWORKS', 'Emon', 'Tsuburaya Productions',
                'Studio Flad', 'Studio CA', 'Kaname Productions', 'Three-d',
                'NHK Enterprises', 'pH Studio', 'Mili Pictures', 'D & D Pictures',
                'HeART-BIT', 'Strawberry Meets Pictures', 'Studio Lings', 'BOOTLEG',
                'helo.inc', 'CUCURI', 'Digital Network Animation', 'Wawayu Animation',
                '33 Collective', 'Shimogumi', 'Imagica Imageworks', 'Success Corp.',
                'Dangun Pictures', 'Sublimation', 'Craftar Studios', 'Lide',
                'Yokohama Animation Lab', "Brain's Base", 'Shanghai Motion Magic',
                'Pie in the sky', 'Signal.MD', 'Ezόla', 'Creatures Inc.']

const producers = ['Bandai Visual', 'Sunrise', 'Victor Entertainment', 'TV Tokyo',
                    'Nihon Ad Systems', 'TV Tokyo Music', 'Shueisha', 'Genco', 'Fuji TV', 
                    'OB Planning', 'Studio Jack', 'VAP', 'Shogakukan Productions', 'Nippon Television Network',
                    'Aniplex', 'TAP', 'Production I.G', 'Sotsu', 'Marvelous', 'Starchild Records', 'Media Factory', 
                    'DAX Production', 'GDH', 'Pony Canyon', 'CBC', 'Group TAC', 'Rondo Robe', 'Pioneer LDC', 'd-rights',
                    'Tohokushinsha Film Corporation', 'Atelier Musa', 'TBS', 'Kadokawa Shoten', 'Audio Tanaka', 'Movic',
                    'Sega', 'Toei Animation', 'Hakusensha', 'Kodansha', 'SME Visual Works', 'Sony Music Entertainment',
                    'Mainichi Broadcasting System', 'Toho', 'Yomiko Advertising', 'Bandai', 'CyberConnect2', 'KSS',
                    'Half H.P Studio', 'Nichion', 'AIC', 'Lantis', 'Cosmic Ray', 'TYO Animations', 'TYO', 
                    'Sony Pictures Entertainment', 'Asatsu DK', 'Youmex', 'Toshiba EMI', 'King Records',
                    'Hal Film Maker', 'Mellow Head', 'Memory-Tech', 'Imagica', 'Sotsu Music Publishing',
                    'Dentsu', 'Tatsunoko Production', 'Rakuonsha', 'Kadokawa Pictures Japan', 'KlockWorx', 
                    'Happinet Pictures', 'Animation Do', 'Sogo Vision', 'Omnibus Japan', 'Nagoya TV Housou', 
                    'Nozomi Entertainment', 'Shochiku', 'TV Asahi', 'Apollon', 'Studio Zain', 'Animax', 
                    'Toei Video', 'Sunny Side Up', 'NHK', 'Studio Tron', 'm.o.e.', 'Geneon Universal Entertainment', 
                    'SoftX', 'Trinet Entertainment', 'Square Enix', 'Dream Force', 'GANSIS', 'Studio Fantasia', 'Remic', 
                    'Front Line', 'Toshiba Entertainment', 'Fuji Pacific Music Publishing', 'Age', 'Marubeni', 'Shelty', 
                    'chara-ani.com', 'KENMedia', 'Broccoli', 'Avex Entertainment', 'Tokuma Shoten', 'A-Line', 'Studio Izena',
                    'MediaNet', 'Discovery', 'WAO World', 'Sony PCL', 'Green Bunny', 'Barnum Studio', 'flying DOG', 'Studio Deen',
                    'Kitty Films', 'Shogakukan', 'SOEISHINSHA', 'I-move', 'SKY Perfect Well Think', 'Shounen Gahousha', 'YTV',
                    'HoriPro', 'Yomiuri Telecasting', 'TMS-Kyokuchi', 'Ashi Production', 'Bandai Namco Games',
                    'Hakuhodo DY Media Partners', 'Bandai Channel', 'USEN', 'Kids Station', 'Studio Kelmadick',
                    'Amber Film Works', 'gimik', 'Capcom', 'Tokyo Movie Shinsha', 'RCC Chugoku Broadcasting',
                    'Dentsu Tec', 'Free-Will', 'Heewon Entertainment', 'WOWOW', 'BeSTACK', 'Ginga Ya', 'Trilogy Future Studio',
                    'NBCUniversal Entertainment Japan', 'On The Run', 'Polygram Japan', 'Film Workshop', 'Pink Pineapple',
                    'Critical Mass Video', 'BEAM Entertainment', 'Nippon Columbia', 'Trans Arts', 'Animate Film',
                    'Asahi Broadcasting', 'Fuji Creative', 'Frontier Works', 'Notes', 'Showgate', 'Kansai Telecasting',
                    'Studio Tulip', 'Idea Factory', 'Design Factory', 'Studio Nue', 'G&G Entertainment', '81 Produce',
                    'Kyoto Animation', 'Production Reed', 'Delfi Sound', 'Mag Garden', 'Takeshobo', 'AnimEigo', 'Network',
                    'Japan Home Video', 'Soft Garage', 'Picture Magic', 'Synergy Japan', 'J.C.Staff', 'Four Some', 'Gakken', 
                    'Big West', 'Media Rings', 'TV Setouchi', 'Topcraft', 'San-X', 'Madhouse', 'Rikuentai', 'Asmik Ace Entertainment',
                    'Three Fat Samurai', 'Sol Blade', 'Studio OX', 'Asahi Production', 'TV Osaka', 'Yomiuri Advertising',
                    'Toshiba Digital Frontiers', 'Studio Take Off', 'AT-X', 'Triangle Staff', 'Studio Flag', 'Radix', 
                    'TV Aichi', 'TMS Entertainment', 'On-Lead', 'Marvelous AQL', 'EMI', 'Ajia-Do', 'Studio Kyuuma', 
                    'Studio Core', 'CBS', 'Milky Animation Label', 'Phoenix Entertainment', 'Alchemist', 'Echo',
                    'Sakura Create', 'Digiturbo', 'Animaruya', 'Shaft', 'SynergySP', 'Nippon Shuppan Hanbai (Nippan) K.K.', 
                    'Digital Works', 'Visual Art\'s', 'Dwango', 'AQUAPLUS', 'Nippon Ichi Software', 'Futabasha', 'Beyond C.', 
                    'Grouper Productions', 'Trinity Sound', 'Audio Highs', 'Miracle Robo', 'Hasbro', 'ASCII Media Works', 
                    'Tablier Communication', 'Dynamic Planning', 'Jade Animation', 'Active', 'T.P.O', 'Magic Capsule', 'GAGA', 
                    'Marine Entertainment', 'Daiei', 'CoMix Wave Films', 'NEC Avenue', 'Studio Comet', 'Studio Ghibli', 
                    'Bee Media', 'Nippon Cultural Broadcasting', 'CherryLips', 'Nelvana', 'Oz', 'Sanctuary', 'E&G Films', 
                    'Darts', 'Shuuhei Morita', 'Bushiroad', 'Ai ga areba Daijobu', 'Oh! Production', 'Tokyu Recreation', 
                    'Sav! The World Productions', 'Teichiku Entertainment', 'Actas', 'Hero Communication', 'Kitty Media',
                    'BMG Japan', 'Nihon Falcom', 'DiC Entertainment', 'Artmic', 'Yamamura Animation, Inc.', 'D3', 'Silky’s', 
                    'Himajin Planning', 'Bee Train', 'Viz Media', 'Tezuka Productions', 'Image Kei', 'Konami', 'Akita Shoten',
                    'APPP', 'Tokyo Kids', 'Pony Canyon Enterprise', 'Nintendo', 'K-Factory', 'Bandai Namco Entertainment',
                    'Koei', 'Banpresto', 'Venus Vangard', 'BS-i', 'NuTech Digital', 'Natural High', 'AC Create', 'NichiNare',
                    'Academy Productions', 'Vega Entertainment', 'Tsuburaya Productions', 'Index', 'Gigno Systems', 'Milky Cartoon',
                    'G-mode', 'SoftBank Creative Corp.', 'T.O Entertainment', 'Kokusai Eigasha', 'Universal Pictures Japan', 'Aubec',
                    'North Stars Pictures', '5pb.', 'Pencil', 'Studio Mausu', 'GEN Productions', 'Houbunsha', 'NHK-BS2',
                    'Lucky Paradise', 'Atlus', 'Cyclone Graphics inc', 'SEDIC International', 'Hakuhodo DY Music & Pictures',
                    'Mainichi Shimbun', 'Mushi Production', 'Magic Bus', 'Datam Polystar', 'Shogakukan Music & Digital Entertainment',
                    'Imagin', 'Nihikime no Dozeu', 'Tokyo MX', 'Kyoraku Industrial Holdings', 'Diomedea', 'Toranoana', 'Big Bang',
                    'Imagi', 'AKOM', 'Arcturus', 'Sanrio', 'Telescreen BV', 'Amuse', 'Plum', 'Jinnan Studio', 'NTT Docomo',
                    'Palm Studio', 'Beat Frog', 'Tokuma Japan', 'Nexon', 'Agent 21', 'Future Planet', 'Yahoo! Japan', 
                    'Meiji Seika', 'Daiichikosho', 'Nikkatsu', 'Yellow Film', 'Gainax', 'Ministry of the Navy', 
                    'MK Pictures', 'Saban Entertainment', 'Nintendo of America', 'Public & Basic', 'JapanAnime', 
                    'Eye Move', 'Yumeta Company', 'Knack Productions', 'Kino Production', 'Hiroshima Television', 
                    'Romantica club !!', 'Enoki Films', 'Directions', 'Code', 'Trick Block', 'ANIK', 'Good Smile Company', 
                    'PrimeTime', 'Nitroplus', '4Kids Entertainment', 'Kinyosha', 'Procidis', 'D.A.S.T.',
                    '501st JOINT FIGHTER WING', 'PRA', 'Anime Antenna Iinkai', 'Soyuzmultfilm', 'Rankin/Bass',
                    'White Bear', 'Meruhensha', 'Tele-Cartoon Japan', 'Blue Eyes', 'MS Pictures', 'Ichijinsha',
                    'Universal Studios', 'Hoso Seisaku Doga', 'Life Work', 'AMG MUSIC', 'Yoon\'s Color',
                    'Jam', 'Animac', 'Flex Comix', 'Amino', 'T-Rex', 'Kadokawa Contents Gate', 'Hobby Japan',
                    'Kaeruotoko Shokai', 'feng', 'Minami Machi Bugyousho', 'Studio Kikan', 'Walt Disney Studios',
                    'Studio Moriken', 'Daume', 'Robot Communications', 'Kiyosumi High School Mahjong Club',
                    'Gentosha Comics', 'Walkers Company', 'Earth Star Entertainment', 'Mobcast', 'Nihon Eizo', 
                    'Ryukyu Asahi Broadcasting', 'Sakura Production', 'International Digital Artist', 'Cospa', 
                    'Primastea', 'Enterbrain', 'Innocent Grey', 'Raku High Student Council', 'Cotton Doll', 'Warner Bros.', 
                    'Bungeishunjuu', 'Takara', 'Casio Entertainment', 'Hisashishi Videos', 'TOMY Company', 'CREi', 'Usagi Ou', 
                    'Xebec', 'Zyc', 'Studio Pastoral', 'BIGLOBE', 'JM Animation', 'Aoni Entertainment', 'RAY', 'BS11', 'Liverpool', 
                    'Shinano Kikaku', 'Chrono Gear Creative', 'AG-ONE', 'OLE-M', 'TOHO animation', 'KMMJ Studios',
                    'Purple Cow Studio Japan', 'Kinoshita Koumuten', 'Fields', 'Visual 80', 'Hoods Entertainment', 
                    'Jumondo', 'Valkyria', 'Infinite', 'Studio G-1Neo', 'Studio Pierrot', 'Jinnis Animation Studios', 
                    'Madoka Partners', 'Warner Music Japan', 'Studio Gram', 'Dream Creation', 'Dentsu Razorfish', 'SUBARU', 
                    'Sony Music Communications', 'Seikaisha', 'I was a Ballerina', 'The Answer Studio', 'Enlight Pictures', 
                    'Studio Mir', 'Bulls Eye', 'Indeprox', 'Kimi To Boku Production Partners', 'ING', 'The Berich', 
                    'Konami Digital Entertainment', 'Pixy', 'M.S.C', 'Glovision', '12 Diary Holders', 'Project IS', 
                    'Slowcurve', 'indigo line', 'OLM', 'Cammot', 'Inu x Boku SS Production Partners', 'Grooove', 
                    'Ultra Super Pictures', 'MAGES.', 'Fujimi Shobo', 'Gakken Eigakyoku', 'Ishimori Pro', 
                    'Hakoniwa Academy Student Council', 'Hot Bear', 'Mary Jane', 'Right Gauge', 'Dwango Music Entertainment', 
                    'StudioRF Inc.',
                    'Saban Brands',
                    'BS-TBS',
                    'Volks',
                    'Jormungand Production Partners',
                    'Tasogare Otome×Amnesia Production Partners',
                    'Project Eureka AO',
                    'Sammy',
                    'Planet',
                    'LandQ studios',
                    'Viki',
                    'tsuritama partners',
                    'Myung Films',
                    'Furyu',
                    'Queen Bee',
                    'Fanworks',
                    'Aniplex of America',
                    'Po10tial',
                    'Asahi Shimbun',
                    'Visual Vision',
                    'Rironsha',
                    'Media Do',
                    'Studio elle',
                    'BS NTV',
                    'Rabbit Gate',
                    'Q-Tec',
                    'Tokyo Theatres',
                    'Toppan Printing',
                    'Keisei Electric Railway',
                    'Gree',
                    'Pastel',
                    'AIR AGENCY',
                    'Animatsu Entertainment',
                    'Project No Name',
                    'Miracle Bus',
                    'Natsuiro Kiseki Production Partners',
                    'BS Fuji',
                    'Exit Tunes',
                    'UNLIMITED Partners',
                    'i0+',
                    'Studio Blanc',
                    'SPO Entertainment',
                    'Kenji Studio',
                    'Solid Vox',
                    'Bouncy',
                    'Kinoshita Group Holdings',
                    'NOTTV',
                    'Mad Box',
                    'Shingeki no Kyojin Team',
                    'Daiichi Shokai CO.',
                    'LTD',
                    'KBS',
                    'Tsubasa Entertainment',
                    'Just Pro',
                    'Nomad',
                    'Bushiroad Music',
                    'Marza Animation Planet',
                    'Senran Kagura Partners',
                    'Studio Zealot',
                    'Avex Pictures',
                    'Lune Pictures',
                    'Angelfish',
                    'Digital Media Lab',
                    'ACC Production',
                    'ZERO-A',
                    'Tokai Television',
                    'Felix Film',
                    'Brave Hearts',
                    'DLE',
                    'Xing',
                    'Lawson HMV Entertainment',
                    'Opera House',
                    'GYAO!',
                    'Overlap',
                    'Iwatobi High School Swimming Club',
                    'Graphinica',
                    'Docomo Anime Store',
                    'Lucent Pictures Entertainment',
                    'DIVE II Entertainment',
                    '3xCube',
                    'Baramiri',
                    'DeNA',
                    'Wit Studio',
                    'Pashmina',
                    'Orange',
                    'JP Room',
                    'Otogi Production',
                    'Wako Productions',
                    'Ai Addiction',
                    'A-Sketch',
                    'Kadokawa Media House',
                    'ZIZ Entertainment (ZIZ)',
                    'EXA International',
                    'Sentai Filmworks',
                    'Studio CHANT',
                    'Tsukuru no Mori',
                    'I Will',
                    'Bandai Namco Live Creative',
                    'Steve N\' Steven',
                    '1st PLACE',
                    'Cygames',
                    'MMDGP',
                    'Animatic',
                    'TC Entertainment',
                    'Forecast Communications',
                    'HeART-BIT',
                    'Hokkaido Azmacy',
                    'Hokkaido Cultural Broadcasting',
                    'C2C',
                    'Voyager Entertainment',
                    'Twin Engine',
                    'NAZ',
                    'Toy\'s Factory',
                    'Anime Consortium Japan',
                    'famima.com',
                    'QREAZY',
                    'DandeLion Animation Studio LLC',
                    'Trans Cosmos',
                    'Production GoodBook',
                    'Comic Umenohone',
                    'BIGFACE',
                    'Age Global Networks',
                    'ILCA',
                    'Top-Insight International Co.,LTD.',
                    'Contents Seed',
                    'White Fox',
                    'Evil Line Records',
                    'Craftar',
                    'Sankyo Planning',
                    'Studio GOONEYS',
                    'Harappa',
                    'Techno Sound',
                    'Mirai Film',
                    'Benesse Corporation',
                    'bilibili',
                    'Kanon Sound',
                    'Hobibox',
                    'Yaoqi',
                    'Sound Team Don Juan',
                    'Pazzy Entertainment',
                    'Hiroshi Planning',
                    'ABC Animation',
                    'Quaras',
                    'Fujishouji',
                    'Tencent Animation',
                    'Studio LAN',
                    'iQIYI',
                    'comico',
                    'Shirogumi',
                    'BS Japan',
                    'Kadokawa',
                    'Shizuoka Broadcasting System',
                    'Tokuma Japan Communications',
                    'Diabolik Lovers MB Project',
                    'Lawson',
                    'C & I entertainment',
                    'Nelke Planning',
                    'East Japan Marketing & Communications',
                    'Assez Finaud Fabric',
                    'Trigger',
                    'Being',
                    'eBooK Initiative Japan CO.,LTD',
                    'ensky',
                    'Bandai Namco Pictures',
                    'Fujio Production',
                    'Fujiko F. Fujio Pro',
                    'Yomiuri TV Enterprise',
                    'Adores',
                    'Heroz',
                    'Penta Show Studios',
                    'Colored-Pencil Animation Design',
                    'Milestone Music Publishing',
                    'Music Ray\'n',
                    'RAB Aomori Broadcasting',
                    'Nippon Television Music',
                    'Medicos Entertainment',
                    'Radio Osaka',
                    'Duckbill Entertainment',
                    'Shanghai Tiantan Culture & Media',
                    'NADA Holdings',
                    'My Theater D.D.',
                    'Crunchyroll SC Anime Fund',
                    'Hobi Animation',
                    'TEAM Entertainment Inc.',
                    'Chugai Mining Co.,Ltd.',
                    'Epicross',
                    'Cromea',
                    'F.M.F',
                    'Telecom Animation Film',
                    'U-NEXT',
                    'Plus One',
                    'Chippai',
                    'Virgin Babylon Records',
                    'Tencent Penguin Pictures',
                    'China Literature Limited',
                    'Sun TV',
                    'TV Saitama',
                    'Chiba TV',
                    'EDGE',
                    'Fuji&gumi Games',
                    'BOOTLEG',
                    'Kadokawa Media (Taiwan)',
                    'Tose',
                    'Yuhodo',
                    'Haoliners Animation League',
                    'JTB Entertainment',
                    'DMM pictures',
                    'Greenwood',
                    'Japan Sleeve',
                    'LIDENFILMS',
                    'Koei Tecmo Games',
                    'Azumaker',
                    'Children\'s Playground Entertainment',
                    'Level-5',
                    'Zack Promotion',
                    'Takara Tomy A.R.T.S',
                    'CyberAgent',
                    'Nishinippon Broadcasting',
                    'Dai Nippon Printing',
                    'Shinchosha',
                    'project lights',
                    'Audio Planning U',
                    'Shin-Ei Animation',
                    'Sumitomo',
                    'Lastrum Music',
                    'Sanyo Bussan',
                    'Zexcs',
                    'BeeWorks',
                    'Tencent Japan',
                    'Bishop',
                    'Emon',
                    'Kobunsha',
                    'Kanetsu Co.,LTD.',
                    'CIC',
                    'Shochiku Music Publishing',
                    'Highlights Entertainment',
                    'Links',
                    'DMM.com',
                    'Digital Frontier',
                    'Hulu',
                    'Sapporo Television Broadcasting',
                    'Miyagi Television Broadcasting',
                    'Shizuoka Daiichi Television',
                    'Chukyo TV Broadcasting',
                    'Fukuoka Broadcasting System',
                    'Pierrot Plus',
                    'Bandai Namco Rights Marketing',
                    'RightTracks',
                    'Amgakuin',
                    'COLOPL',
                    'KDDI',
                    'Dear Stage inc.',
                    'Chukong Technologies',
                    'Media Bank',
                    'Sunrise Music Publishing',
                    'NHK Enterprises',
                    'Smiral Animation',
                    'Wargaming Japan',
                    'Studio NOIX',
                    'Gen\'ei',
                    'Egg Firm',
                    'Production Ace',
                    'Quick Corporation',
                    'XFLAG',
                    'XFLAG Pictures',
                    'NTT Plala',
                    'World Cosplay Summit',
                    'Orchid Seed',
                    'Stardust Promotion',
                    'PansonWorks',
                    'Jidaigeki Channel',
                    'Shufunotomo',
                    'Hakuhodo',
                    'Kakao Japan',
                    'Coamix',
                    'Parco',
                    'e-notion',
                    'Quatre Stella',
                    'Kadokawa Daiei Studio',
                    'Kotobukiya',
                    'China Animation Characters',
                    'NHN PlayArt',
                    'Ima Group',
                    'AZ Creative',
                    'KLab',
                    'LINE Corporation',
                    'Rakuten',
                    'Top Marshal',
                    'Khara',
                    'Walt Disney Japan',
                    'KEN ON',
                    'D.N.dreampartners',
                    'Yomiuri Shimbun',
                    'Drecom',
                    'Pb Animation Co. Ltd.',
                    'Asgard',
                    'Kujou-kun no Bonnou wo Mimamoru-kai',
                    'Marui Group',
                    'DJI',
                    'Donuts',
                    'Kyotoma',
                    'Tate Anime',
                    'Melonbooks',
                    'JY Animation',
                    'Live Viewing Japan',
                    'Neft Film',
                    'W-Toon Studio',
                    'DMM.futureworks',
                    'Gzbrain',
                    'Cocoro Free',
                    'Tosho Printing',
                    'Studio Hibari',
                    'AKABEiSOFT2',
                    'Abema TV',
                    'Moonbell',
                    'INCS toenter',
                    'ONEMUSIC',
                    'NewGin',
                    'Aquamarine',
                    'Medicrie',
                    'Universal Entertainment',
                    'D-techno',
                    'CLOVERWORKS',
                    'Spacey Music Entertainment',
                    'A-Craft',
                    'Tohan Corporation',
                    'Yamasa',
                    'Hipland Music Corporation',
                    'Muse Communication Co.,Ltd.',
                    'Yoshimoto Creative Agency',
                    'Shanghai Jump Network Technology',
                    'Kawade Shobo Shinsha',
                    'Studio A-CAT',
                    'D & D Pictures',
                    'Ki/oon Music',
                    'Picante Circus',
                    'Suiseisha',
                    'Tavac',
                    'Sola Digital Arts',
                    'Frencel',
                    'Success Co.',
                    'Jay Zone Comic',
                    'NIANTIC',
                    'TYPHOON GRAPHICS',
                    'S-TAR7',
                    'Tencent Animation & Comics',
                    'Tencent Games',
                    'Friendly Land',
                    'Aoni Production',
                    'Shochiku Media Division',
                    'animate',
                    'TRUSS',
                    'Warner Bros. Japan',
                    'Sony Interactive Entertainment',
                    'Asmik Ace']


function showNext(step) {
    if (step === 0 && document.getElementById('title').value === "") return alert("please type a title")
    if (step === 2 && document.getElementById('description').value === "") return alert("please type a description")
    if (step === 1 && obj.genre === "") return alert("please select one genre")
    if (step === 4 && obj.producer === "") return alert("please select one producer")
    if (step === 3 && obj.type === "") return alert("please select one type")
    if (step === 5 && obj.studio === "") return alert("please select one studio")

    document.getElementsByClassName('home__form__question')[step].classList.remove("home__form__question--show")
    document.getElementsByClassName('home__form__question')[step + 1].classList.add("home__form__question--show")
    
    if (step === 0) return generateGenre(genres, "myListGenre", "genre")
    if (step === 2) return generateGenre(types, "myListType", "type")
    if (step === 3) return generateGenre(producers, "myListProducer", "producer")
    if (step === 4) return generateGenre(studios, "myListStudio", "studio")

    return
}

function showPrevious(step) {
    document.getElementsByClassName('home__form__question')[step].classList.remove("home__form__question--show")
    document.getElementsByClassName('home__form__question')[step - 1].classList.add("home__form__question--show")

    if (step === 1) return generateGenre(genres, "myListGenre", "genre")
    if (step === 3) return generateGenre(types, "myListType", "type")
    if (step === 4) return generateGenre(producers, "myListProducer", "producer")
    if (step === 5) return generateGenre(studios, "myListStudio", "studio")

    return
}

function showStart() {
    document.getElementsByClassName('home__form__question')[6].classList.remove("home__form__question--show")
    document.getElementsByClassName('home__form__question')[0].classList.add("home__form__question--show")
    document.getElementById('title').value = ""
    document.getElementById('description').value = ""
    
    const x = document.getElementsByClassName('generate-p-select')
    for (let i = 0; i < x.length; i ++) x[i].classList.remove('generate-p-select')

    obj.genre = ""
    obj.producer = ""
    obj.studio = ""
    obj.type = ""

    return
}

async function submitData() {
    if (obj.genre === "") {
        document.getElementsByClassName('home__form__question')[5].classList.remove("home__form__question--show")
        document.getElementsByClassName('home__form__question')[1].classList.add("home__form__question--show")
        return alert('please select one genre')
    }

    if (obj.producer === "") {
        document.getElementsByClassName('home__form__question')[5].classList.remove("home__form__question--show")
        document.getElementsByClassName('home__form__question')[4].classList.add("home__form__question--show")
        return alert('please select one producer')
    }

    if (obj.type === "") {
        document.getElementsByClassName('home__form__question')[5].classList.remove("home__form__question--show")
        document.getElementsByClassName('home__form__question')[3].classList.add("home__form__question--show")
        return alert('please select one type')
    }

    if (obj.studio === "") {
        document.getElementsByClassName('home__form__question')[6].classList.remove("home__form__question--show")
        document.getElementsByClassName('home__form__question')[5].classList.add("home__form__question--show")
        return alert('please select one studio')
    }

    const data = {
        "title": title.value,
        "genre": obj.genre,
        "synopsis": description.value,
        "anime_type": obj.type,
        "producer": obj.producer,
        "studio": obj.studio,
    }

    await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.text() // Utilisez "return" pour renvoyer la promesse
    })
    .then(text => {
        text = text.replace('[', '')
        text = text.replace(']', '')
        console.log(text)
        console.log(typeof text)
        number = (parseFloat(text) * 1)

        const span = document.getElementById('result')
        span.textContent = number
    })
    .catch(error => console.error(error));
}


function generateGenre(arr, id, name) {
    const myList = document.getElementById(id)
    arr.sort()

    // check if the div have children and delete it
    if (!myList.hasChildNodes()) {
        // add the list into the dom
        for (let i = 0; i < arr.length; i++) {
            const p = document.createElement('p')
            p.setAttribute('onclick', `addItem("${arr[i]}","${name}")`)
            p.classList.add('generate-p')
            p.setAttribute('id', arr[i] + '-' + name)
            p.textContent = arr[i]
            myList.appendChild(p)
        }
    }
}

function addItem(item, name) {
    // look if already in the string
    const idx = obj[`${name}`].indexOf(item)

    if (idx === -1) {
        document.getElementById(item + '-' + name).classList.add("generate-p-select")
        obj[`${name}`].length === 0 ? obj[`${name}`] = item : obj[`${name}`] += ", " + item

    } else {
        document.getElementById(item + '-' + name).classList.remove("generate-p-select")
        !obj[`${name}`].includes(",") ? obj[`${name}`] = "" : obj[`${name}`] = obj[`${name}`].replace(obj[`${name}`].substring(idx - 2, idx + item.length), '')
    }

    if (obj[`${name}`][0] === ",") obj[`${name}`] = obj[`${name}`].replace(obj[`${name}`].substring(0, 2), '')

    
    return console.log(name, obj[`${name}`])
}

