

// DATA

// minna no nihongo 13-25 vocab

const vocabularyMinnaNoNihongo = [
    //lesson 10
    { japanese : "nikai" ,  meaning : "second floor"},
    { japanese : "jimusho" ,  meaning : "office"},
    { japanese : "shinsitsu" ,  meaning : "room"},
    { japanese : "hako" ,  meaning : "box"},
    { japanese : "ushiro" ,  meaning : "back"},
    { japanese : "soto" ,  meaning : "outside"},
    { japanese : "shita" ,  meaning : "under"},
    { japanese : "yasai" ,  meaning : "vegetables"},
    { japanese : "kudamono" ,  meaning : "fruits"},
    { japanese : "memori kaado" ,  meaning : "memory card"},
    { japanese : "kazoku" ,  meaning : "family"},
    
    // lesson 11
    { japanese : "kakarimasu" ,  meaning : "to take (distance, time)"},
    { japanese : "kakitome de" ,  meaning : "registered post"},
    { japanese : "kyoudai" ,  meaning : "siblings"},
    { japanese : "…kai" ,  meaning : "…floor"},
    { japanese : "…dake" ,  meaning : "…only"},
    { japanese : "faasuto fuudo" ,  meaning : "fast food"},
    
    // lesson 12
    { japanese : "shiken" ,  meaning : "test, exam"},
    { japanese : "kantan" ,  meaning : "easy"},
    { japanese : "shinkansen" ,  meaning : "fast train"},
    { japanese : "futsuu densha" ,  meaning : "ordinary train"},
    { japanese : "zutto" ,  meaning : "much"},
    { japanese : "hansamu" ,  meaning : "handsome"},
    { japanese : "karee" ,  meaning : "curry"},
    { japanese : "karai" ,  meaning : "spicy"},
    { japanese : "haru" ,  meaning : "spring"},
    { japanese : "aki" ,  meaning : "autumn"},
    { japanese : "dochiramo" ,  meaning : "nothing"},
    { japanese : "yasashi" ,  meaning : "gentle, kind"},
    
    // lesson 13
    { japanese : "ikemen kareshi" ,  meaning : "cool boyfriend"},
    { japanese : "kankoku" ,  meaning : "korea"},
    { japanese : "onaka ga sukimashita" ,  meaning : "I'm hungry"},
    { japanese : "hanbaagaa" ,  meaning : "hamburger"},
    { japanese : "ryoushin" ,  meaning : "parents"},
    { japanese : "mukaemasu" ,  meaning : "to pick up (airport)"},
    { japanese : "yuki matsuri" ,  meaning : "snow festival"},
    { japanese : "maitoshi" ,  meaning : "every year"},
    { japanese : "sutoa" ,  meaning : "store"},
    { japanese : "mise" ,  meaning : "shop"},
    { japanese : "nodo ga kawakimashita" ,  meaning : "I'm thirsty"},
    
    
    // lesson 14
    { japanese : "kumori desu" ,  meaning : "cloudy"},
    { japanese : "ame desu" ,  meaning : "rainy"},
    { japanese : "isogimasu" ,  meaning : "to hurry"},
    { japanese : "nimotsu" ,  meaning : "luggage"},
    { japanese : "tetsudaimasu" ,  meaning : "to help, to assist"},
    { japanese : "kekkou desu" ,  meaning : "it is ok, alright, enough"},
    { japanese : "shitsurei desu" ,  meaning : "sorry for disturbing"},
    { japanese : "shio" ,  meaning : "salt"},
    { japanese : "toorimasu" ,  meaning : "to pass (the bread, salt)"},
    { japanese : "kaze ga fuite imasu" ,  meaning : "wind is blowing"},
    
    
    // lesson 15
    { japanese : "nimotsu" ,  meaning : "luggage"},
    { japanese : "okimasu" ,  meaning : "to put"},
    { japanese : "moraimasu" ,  meaning : "to receive, to keep"},
    { japanese : "karimasu" ,  meaning : "to borrow"},
    { japanese : "tomemasu" ,  meaning : "to park"},
    { japanese : "dame desu" ,  meaning : "forbidden"},
    { japanese : "mochimasu" ,  meaning : "to hold , to carry, to have"},
    { japanese : "dokushin" ,  meaning : "single"},
    { japanese : "sutaa bakkusu" ,  meaning : "starbucks"},
    { japanese : "hashirimasu" ,  meaning : "to run"},
    { japanese : "denki seihin" ,  meaning : "electric products"},
    { japanese : "urimasu" ,  meaning : "to sell"},
    { japanese : "tsukurimasu" ,  meaning : "to make,  to produce"},
    { japanese : "denki jidousha" ,  meaning : "electric car"},
    { japanese : "shirimasu" ,  meaning : "know"},
    { japanese : "mada" ,  meaning : "still"},
    
    // lesson 16
    { japanese : "shawa o abimasu" ,  meaning : "to take a shower"},
    { japanese : "yuushoku" ,  meaning : "dinner"},
    { japanese : "norikaemasu" ,  meaning : "to transfer (bus, train etc)"},
    { japanese : "atama ga ii" ,  meaning : "smart"},
    { japanese : "suzushii" ,  meaning : "cool"},
    { japanese : "sugoku osusume" ,  meaning : "highly recommend"},
    { japanese : "omoshiroi mono" ,  meaning : "interesting things"},
    { japanese : "betonamu jin" ,  meaning : "vietnamese"},
    { japanese : "ryuugakusei" ,  meaning : "foreign student"},
    { japanese : "pairotto" ,  meaning : "pilot"},
    { japanese : "kangoshi" ,  meaning : "nurse"},
    { japanese : "kado" ,  meaning : "card"},
    { japanese : "iremasu" ,  meaning : "irete"},
    { japanese : "this button" ,  meaning : "kono botan"},
    { japanese : "oshiemasu" ,  meaning : "to press"},
    { japanese : "demasu" ,  meaning : "to graduate"},
    { japanese : "sekai" ,  meaning : "world"},
    { japanese : "owarimasu" ,  meaning : "to finish"},
    { japanese : "yamemasu" ,  meaning : "to quit, to resign"},
    { japanese : "kaigi" ,  meaning : "meeting"},
    { japanese : "me" ,  meaning : "eyes"},
    { japanese : "kami" ,  meaning : "hair"},
    { japanese : "senshu" ,  meaning : "player"},
    { japanese : "se ga hikui" ,  meaning : "short"},
    { japanese : "ashi ga hayai" ,  meaning : "fast"},
    { japanese : "sekaijuu de" ,  meaning : "all over the world"},
    { japanese : "douyatte" ,  meaning : "how"},
    { japanese : "jinja" ,  meaning : "shrine"},
    { japanese : "arukimasu" ,  meaning : "to walk"},
    { japanese : "jidouhanbaiki" ,  meaning : "vending machine"},
    { japanese : "mazu" ,  meaning : "first"},
    { japanese : "okane" ,  meaning : "money"},
    { japanese : "oshimasu" ,  meaning : "to push, to press"},
    { japanese : "oniisan" ,  meaning : "brother"},
    
    // lesson 17
    { japanese : "chiketto" ,  meaning : "ticket"},
    { japanese : "nakushimasu" ,  meaning : "to lose"},
    { japanese : "shinpai shimasu" ,  meaning : "to worry"},
    { japanese : "wasuremasu" ,  meaning : "to forget"},
    { japanese : "pasupooto" ,  meaning : "passport"},
    { japanese : "kaeshimasu" ,  meaning : "to return (book)"},
    { japanese : "raishuu" ,  meaning : "next week"},
    { japanese : "dekakemasu" ,  meaning : "to go out"},
    { japanese : "otto" ,  meaning : "husband"},
    { japanese : "haraimasu" ,  meaning : "to pay"},
    { japanese : "mottekimasu" ,  meaning : "to bring"},
    { japanese : "nugimasu" ,  meaning : "to take off (shoes, clothes)"},
    { japanese : "dashimasu" ,  meaning : "to submit, to hand in, to give out"},
    { japanese : "zangyoushimasu" ,  meaning : "to work late, overtime"},
    
    // lesson 18
    { japanese : "onrain" ,  meaning : "online"},
    { japanese : "yoyaku shimasu" ,  meaning : "to reserve"},
    { japanese : "porutogaru" ,  meaning : "portuguese"},
    { japanese : "kaemasu" ,  meaning : "to change (money)"},
    { japanese : "shumi" ,  meaning : "hobby"},
    { japanese : "tsuri" ,  meaning : "fishing"},
    { japanese : "konpyuutaa geemu" ,  meaning : "computer game"},
    { japanese : "atsumemasu" ,  meaning : "to collect, to gather"},
    { japanese : "araimasu" ,  meaning : "to wash"},
    { japanese : "te" ,  meaning : "hand"},
    { japanese : "hoteru no yoyaku" ,  meaning : "hotel reservation"},
    { japanese : "kakunin shimasu" ,  meaning : "to confirm"},
    { japanese : "shokuji" ,  meaning : "meal"},
    { japanese : "inori o shimasu" ,  meaning : "to pray"},
    { japanese : "shiryou" ,  meaning : "documents, materials"},
    { japanese : "kopii" ,  meaning : "copy"},
    { japanese : "nakanaka" ,  meaning : "quite, pretty, fairly"},
    { japanese : "tesuto" ,  meaning : "test"},
    { japanese : "oboemasu" ,  meaning : "to memorize, to remember"},
    { japanese : "suterumasu" ,  meaning : "to throw away, to dispose"},
    { japanese : "ooganiku sutoaa" ,  meaning : "organic store"},
    { japanese : "zehi" ,  meaning : "definitely"},
    { japanese : "asobi ni ikimasu" ,  meaning : "to go out to play"},
    
    // lesson 19
    { japanese : "noborimasu" ,  meaning : "to climb"},
    { japanese : "baniku" ,  meaning : "horse meat"},
    { japanese : "ikkai dake" ,  meaning : "once only"},
    { japanese : "ichidomo arimasen" ,  meaning : "not even once "},
    { japanese : "sentaku shimasu" ,  meaning : "to do laundry"},
    { japanese : "sooji shimasu" ,  meaning : "to do cleaning"},
    { japanese : "tsuyoi" ,  meaning : "strong"},
    { japanese : "musuko" ,  meaning : "my son"},
    { japanese : "karada" ,  meaning : "health"},
    { japanese : "sashimi" ,  meaning : "raw fish"},
    
    // lesson 20
    { japanese : "tsukaremasu" ,  meaning : "to get tired"},
    { japanese : "kuni" ,  meaning : "country"},
    
    // lesson 21
    { japanese : "tarimasu" ,  meaning : "to be enough"},
    { japanese : "irimasu" ,  meaning : "to need"},
    { japanese : "jikan no muda" ,  meaning : "waste of time"},
    { japanese : "kachimasu" ,  meaning : "to win"},
    { japanese : "… ni suite" ,  meaning : "about …"},
    { japanese : "yakuni" ,  meaning : "helpful"},
    { japanese : "end of meal" ,  meaning : "shokuji no owari"},
    { japanese : "yotei" ,  meaning : "plan"},
    { japanese : "kakkoii" ,  meaning : "cool"},
    { japanese : "hontou ni" ,  meaning : "really, indeed"},
    { japanese : "konsaato" ,  meaning : "concert"},
    { japanese : "tsugi" ,  meaning : "next"},
    { japanese : "orinpikku" ,  meaning : "olympics"},
    { japanese : "jishin" ,  meaning : "earthquake"},
    { japanese : "iken" ,  meaning : "opinion"},
    { japanese : "matsuri" ,  meaning : "festival"},
    { japanese : "… demo" ,  meaning : "… etc"},
    { japanese : "ranchi" ,  meaning : "lunch"},
    { japanese : "sorosoro" ,  meaning : "almost"},
    { japanese : "mou" ,  meaning : "already"},
    { japanese : "saigo" ,  meaning : "last"},
    { japanese : "chansu" ,  meaning : "chance"},
    
    // lesson 22
    { japanese : "suteki-na" ,  meaning : "nice"},
    { japanese : "kaburimasu" ,  meaning : "to wear (hat, cap etc)"},
    { japanese : "tonari ni" ,  meaning : "next"},
    { japanese : "akarui" ,  meaning : "cheerful"},
    { japanese : "karimasu" ,  meaning : "to borrow"},
    { japanese : "kooto" ,  meaning : "coat"},
    { japanese : "umaremasu" ,  meaning : "to be born"},
    { japanese : "renshuu shimasu" ,  meaning : "to practise (speech etc)"},
    { japanese : "yakusoku" ,  meaning : "promise, arrangement, appointment"},
    { japanese : "tsuma" ,  meaning : "wife"},
    { japanese : "later" ,  meaning : "ato de"},
    { japanese : "omoidashimasu" ,  meaning : "to remember, to recall"},
    { japanese : "yotei" ,  meaning : "plan"},
    { japanese : "haisha" ,  meaning : "dentist"},
    
    // lesson 23
    { japanese : "shiyakusho" ,  meaning : "city hall"},
    { japanese : "zairyuu kaado" ,  meaning : "residence card"},
    { japanese : "motte kimasu" ,  meaning : "to bring"},
    { japanese : "ongaku" ,  meaning : "music"},
    { japanese : "onigiri" ,  meaning : "onigiri (a kind of meal)"},
    { japanese : "dekakemasu" ,  meaning : "to go out"},
    { japanese : "yoku" ,  meaning : "often, usually"},
    { japanese : "demasu" ,  meaning : "to come out"},
    { japanese : "oshiemasu" ,  meaning : "to press, to push"},
    { japanese : "mawashimasu" ,  meaning : "to turn, to rotate"},
    { japanese : "oto" ,  meaning : "sound, noise"},
    { japanese : "tsumami" ,  meaning : "knob (of the door etc)"},
    { japanese : "kousaten" ,  meaning : "intersection"},
    { japanese : "migi" ,  meaning : "right"},
    { japanese : "hidari" ,  meaning : "left"},
    { japanese : "magarimasu" ,  meaning : "to turn"},
    { japanese : "shingou" ,  meaning : "traffic light"},
    { japanese : "ukimasu" ,  meaning : "to work, to operate, to run"},
    { japanese : "otsuri" ,  meaning : "change"},
    { japanese : "sanpo shimasu" ,  meaning : "to take a walk, to stroll"},
    { japanese : "michi" ,  meaning : "road"},
    { japanese : "hashi" ,  meaning : "bridge"},
    { japanese : "watarimasu" ,  meaning : "to cross"},
    
    
    // lesson 24
    { japanese : "kuremasu" ,  meaning : "to give (to the receiver or family)"},
    { japanese : "ototo" ,  meaning : "brother"},
    { japanese : "oshiemasu" ,  meaning : "to teach"},
    { japanese : "ressun" ,  meaning : "lesson"},
    { japanese : "kashimasu" ,  meaning : "to lend"},
    { japanese : "ojiisan" ,  meaning : "grandpa"},
    { japanese : "iremasu" ,  meaning : "to make (tea, coffee etc)"},
    { japanese : "okurimasu" ,  meaning : "to send, to see off"},
    { japanese : "obaasan" ,  meaning : "grandma"},
    { japanese : "annai shimasu" ,  meaning : "to guide, to show the way"},
    { japanese : "ani" ,  meaning : "brother"},
    { japanese : "tsuremasu" ,  meaning : "to bring along someone, to take with"},
    { japanese : "shoukai shimasu" ,  meaning : "to introduce"},
    { japanese : "kotae" ,  meaning : "answer"},
    { japanese : "setsumei shimasu" ,  meaning : "to explain"},
    { japanese : "obentou" ,  meaning : "lunch"},
    { japanese : "ane" ,  meaning : "sister"},
    { japanese : "hikkoshi" ,  meaning : "moving"},
    { japanese : "junbi shimasu" ,  meaning : "to prepare"},
    { japanese : "mondai" ,  meaning : "trouble, problem"},
    { japanese : "yokattara " ,  meaning : "if you like"},
    
    // lesson 25
    { japanese : "toshi" ,  meaning : "age"},
    { japanese : "ooi" ,  meaning : "many"},
    { japanese : "sumaho" ,  meaning : "smart phone"},
    { japanese : "byouki" ,  meaning : "ill, sick"},
    { japanese : "jibun de" ,  meaning : "myself, in person, oneself"},
    { japanese : "tomarimasu" ,  meaning : "to stop"} ];
    
    
    
    // sentences minna no nihongo 13-25


    const sentencesMinnaNoNihongo = [
    
    
    // sentences lesson 13
    { japanese : "watashi wa kuruma ga hoshii desu" ,  meaning : "araba istiyorum"},
    { japanese : "watashi wa kareshi ga hoshii desu" ,  meaning : "erkek arkadaş istiyorum"},
    { japanese : "watashi wa kuruma ga hoshikunai desu" ,  meaning : "araba istemiyorum"},
    { japanese : "watashi wa kareshi ga hoshikunai desu" ,  meaning : "erkek arkadaş istemiyorum"},
    { japanese : "anata wa kuruma ga hoshii desu ka" ,  meaning : "araba istiyor musun"},
    { japanese : "ja, nani ga hoshii desu ka" ,  meaning : "o zaman, ne istiyorsun"},
    { japanese : "donna kareshi ga hoshii desu ka" ,  meaning : "nasıl bir erkek arkadaş istiyorsun"},
    { japanese : "eeto ikemen kareshi ga ichiban hoshii desu" ,  meaning : "hot bir erkek arkadaş istiyorum"},
    { japanese : "watashi wa kuruma ga hoshikatta desu" ,  meaning : "araba istiyordum"},
    { japanese : "watashi wa kuruma ga hoshikunakatta desu, demo ima wa hoshii desu" ,  meaning : "araba istemiyordum ama şimdi istiyorum"},
    { japanese : "kare wa atarashii kuruma o hoshigatte imasu" ,  meaning : "o yeni bir araba istiyor"},
    { japanese : "koohii ga ikaga desu ka" ,  meaning : "kahve ister miydin (kahve nasıl olur)"},
    { japanese : "watashi wa kuruma ga/o kaitai desu" ,  meaning : "araba almak istiyorum"},
    { japanese : "watashi wa biyonse ni aitai desu" ,  meaning : "beyonce ile tanışmak istiyorum"},
    { japanese : "watashi wa kankoku e ikitai desu" ,  meaning : "koreye gitmek istiyorum"},
    { japanese : "onaka ga sukimashita hambaagaa ga/o tabetai desu" ,  meaning : "karnım acıktı hamburger yemek istiyorum"},
    { japanese : "watashi wa benkyoo o shitakunai desu" ,  meaning : "ders çalışmak istemiyorum"},
    { japanese : "watashi wa asobitakunai desu" ,  meaning : "oynamak istemiyorum"},
    { japanese : "watashi wa oyogitakunai desu" ,  meaning : "yüzmek istemiyorum"},
    { japanese : "watashi wa kekkon shitakunai desu" ,  meaning : "evlenmek istemiyorum"},
    { japanese : "anata wa nani o kaitai desu ka" ,  meaning : "ne satın almak istiyosun"},
    { japanese : "anata wa dare ni aitai desu ka" ,  meaning : "kimle buluşmak istiyosun"},
    { japanese : "anata wa doko e ikitai desu ka" ,  meaning : "nereye gitmek istiyosun"},
    { japanese : "anata wa itsu kankoku e ikitai desu ka" ,  meaning : "ne zaman koreye gitmek istiosun"},
    { japanese : "anata wa nani o shitai desu ka" ,  meaning : "ne yapmak istiyosun"},
    { japanese : "kankoku e ikitakatta desu" ,  meaning : "koreye gitmek istedim"},
    { japanese : "kekkon shitakunakatta desu" ,  meaning : "evelenmek istemedim"},
    { japanese : "kanojo wa roshia e ikitagatte imasu" ,  meaning : "o rusyaya gitmek istiyor"},
    { japanese : "koohii o nomimasen ka" ,  meaning : "kahve içelim mi"},
    { japanese : "koohii o nomitakunai desu ka" ,  meaning : "kehve içmek istemez miydin"},
    { japanese : "watashi wa honkon e kaimono ni ikimasu" ,  meaning : "hong konga alışverişe gidiyorum"},
    { japanese : "watashi wa nihon e benkyou ni kimashita" ,  meaning : "i came to japan to study"},
    { japanese : "watashi wa uchi e ryooshin ni ai ni kaerimashita" ,  meaning : "i went back home to see my parents"},
    { japanese : "tomodachi to sakkaa o shi ni ikimasu" ,  meaning : "arkadaşımla futbol oynamaya gidiyorum"},
    { japanese : "kazoku wa nihon de hajimete kara, kuukou e mukae ni ikimasu" ,  meaning : "ailem japonyaya ilk kez geldiğinden (başladığından), alana karşılamaya gidiyorum"},
    { japanese : "hokkaido e sukii ni ikimasu" ,  meaning : "hokkaidoya kayağa gidiyorum"},
    { japanese : "maitoshi sapporo no yuki matsuri ni ikimasu" ,  meaning : "her sene sapporo kar festivaline gidiyorum"},
    { japanese : "doko e benkyou ni ikimasu ka" ,  meaning : "nereye çalışmaya gidiyosun"},
    { japanese : "sutoa e nani o kaini ikimasu ka" ,  meaning : "dükkana ne almaya gidiosun"},
    { japanese : "dare ni ai ni kimashita ka" ,  meaning : "kimi görmeye (kimle buluşmaya) geldin"},
    { japanese : "nanji goro watashi o mukae ni kimasu ka" ,  meaning : "saat kaç civarı beni almaya (alandan) geleceksin"},
    { japanese : "anata wa nani o shi ni ikimasu ka" ,  meaning : "ne yapmaya gidiyosun"},
    { japanese : "ano mise ni hairimashou" ,  meaning : "o dükkana girelim"},
    { japanese : "kare wa shichiji goro uchi o demashita" ,  meaning : "saat 7'de evi terk etti (evden çıktı)"},
    { japanese : "densha ni norimasu" ,  meaning : "trene biniyor"},
    { japanese : "densha o orimasu" ,  meaning : "trenden iniyor"},
    { japanese : "nanika (o) tabemasen ka" ,  meaning : "(herhangi) bir şey yemez misin"},
    { japanese : "nodo ga kawakimashita nanika nomitai desu" ,  meaning : "susadım, bir şey içmek istiyorum"},
    { japanese : "kono shumatsu ni dokoka e asobimasu" ,  meaning : "bu hafta sonu biryerde eğleniyorum"},
    { japanese : "natsu yasumi wa dokoka ikimashita ka" ,  meaning : "yaz tatilinde biryere gittin mi"},
    
    
    
    // sentences lesson 14
    { japanese : "sumimasen onamae o oshiete kudasai" ,  meaning : "afedersin ismi söyleyin lütfen"},
    { japanese : "samui kara mado o shimete kudasai" ,  meaning : "sağuk olduğundan pencereyi kapayın lütfen"},
    { japanese : "rozu to yonde kudasai" ,  meaning : "rose ile (ismi ile) çağırın lütfen)"},
    { japanese : "ashita koko ni kite kudasai" ,  meaning : "yarın buraya gelin lütfen"},
    { japanese : "isoide kudasai" ,  meaning : "acele edin lütfen"},
    { japanese : "ganbatte kudasai" ,  meaning : "gayret edin lütfen"},
    { japanese : "chotto matte kudasai" ,  meaning : "biraz bekleyin lütfen"},
    { japanese : "minnasan kiite kudasai" ,  meaning : "herkes dinlesin lütfen"},
    { japanese : "ame ga futte imasu" ,  meaning : "yağmur yağıyor"},
    { japanese : "tegami o kaite imasu" ,  meaning : "mektup yazıyor"},
    { japanese : "akachan ga nete imasu" ,  meaning : "bebek uyuyor"},
    { japanese : "yamadasan wa denwa o kakete imasu" ,  meaning : "yamadasan telefon açıyor"},
    { japanese : "ame ga futte imasu ka" ,  meaning : "yağmur yağıyor mu?"},
    { japanese : "nani o kaite imasu ka" ,  meaning : "ne yazıyorsun?"},
    { japanese : "anata wa kiite imasu ka" ,  meaning : "sen dinliyor musun?"},
    { japanese : "anata wa ima nani o shite imasu ka" ,  meaning : "sen şimdi ne yapıyorsun?"},
    { japanese : "ame ga futte imasen" ,  meaning : "yağmur yağmıyor"},
    { japanese : "watashi wa kiite imashita" ,  meaning : "dinliyordum"},
    { japanese : "watashi wa kinoo nani mo shite imasen deshita" ,  meaning : "dün hiçbirşey yapmıyordum"},
    { japanese : "nimotsu o mochimashou ka?" ,  meaning : "valizinizi taşıyayım mı?"},
    { japanese : "Atsukunai desu ka? Mado o akemashou ka? Soo desu ne. Sukoshi akete kudasai." ,  meaning : "sıcak değil mi? (sıcak olmadı mı?) Pencereyi açalım mı? Evet, öyle, biraz açın lütfen."},
    { japanese : "shigoto o tetsudaimashou ka? İie, kekkoo desu." ,  meaning : "işe yardım edeyim mi? Hayır, gerek yok / böyle iyi"},
    { japanese : "nihon no tabemono wa oishii desu ga totemo takai desu" ,  meaning : "japon yemekleri lezzetli ama çok pahalı"},
    { japanese : "shitsurei desu ga, onamae wa?" ,  meaning : "rahatsız ediyorum ama isminiz?"},
    { japanese : "sumimasen ga, shio o totte kudasai?" ,  meaning : "afedersiniz, tuzu alabilir miyim lütfen?"},
    { japanese : "yuki ga futte imasu" ,  meaning : "kar yağıyor"},
    { japanese : "kaze ga fuite imasu" ,  meaning : "rüzgar esiyor"},
    
    
    
    
    
    
    // sentences lesson 15
    { japanese : "watashi no pasokon o tsukatte mo ii desu" ,  meaning : "bnim bilgisayarımı kullansan olur"},
    { japanese : "asoko de suwatte mo ii desu" ,  meaning : "orada otursan olur"},
    { japanese : "sono heya no naka ni nimotsu o oite mo ii desu" ,  meaning : "şu odanın içine valizini koysan olur"},
    { japanese : "haitte mo ii desu" ,  meaning : "girsen olur"},
    { japanese : "tabako o sutte mo ii desu ka? Ee, ii desu, douzo / sumimasen, chotto" ,  meaning : "sigara içsem olur mu? Evet, olur buyur / afedersin, olmaz"},
    { japanese : "kono shashin o moratte mo ii desu ka?" ,  meaning : "bu resmi alsam olur mu?"},
    { japanese : "pen o karite mo ii desu ka?" ,  meaning : "kalem ödünç alsam olur mu?"},
    { japanese : "koko de tabako o sutte wa ikemasen" ,  meaning : "burada sigara içmek olmaz"},
    { japanese : "bijutsukan no naka de shashin o totte wa ikemasen" ,  meaning : "müzenin içinde foto çekmek olur mu? Hayır, olmaz / evet olur"},
    { japanese : "koko de kuruma o tomete mo ii desu ka? iie, ikemasen / iie, dame desu" ,  meaning : "burada araba parketmek olur mu? Hayır olmaz / hayır, yasak"},
    { japanese : "kare wa kekkon shite imasu" ,  meaning : "o evlidir (evli durumda)"},
    { japanese : "kazoku wa nagoya ni sunde imasu" ,  meaning : "ailem nagoya'da yaşamakta"},
    { japanese : "ninen nihongo o benkyou shite imasu" ,  meaning : "iki yıldır japonca çalışmaktayım"},
    { japanese : "iphone10 o motte imasu" ,  meaning : "iphone 10um var"},
    { japanese : "anata wa kekkon shite imasu ka? Hai, kekkon shite imasu / iie, dokushin desu" ,  meaning : "sen evli misin? Evet, evliyim / hayır bekarım"},
    { japanese : "doko ni sunde imasu ka? Saitama ken ni sunde imasu" ,  meaning : "nerede yaşamaktasın? Saitama semtinde yaşıyorum"},
    { japanese : "mainichi sutaa bakkusu no koohii o katte imasu" ,  meaning : "hergün starbucks kahvesi satın alıyorum"},
    { japanese : "maiasa hashitte imasu" ,  meaning : "her sabah koşuyorum"},
    { japanese : "oosaka no nippon bashi de yasui denki seihin o utte imasu" ,  meaning : "osaka nippon bashi'de ucuz elektronik ürünleri satın alıyorum"},
    { japanese : "tesla wa denki jidousha o tsukutte imasu." ,  meaning : "tesla elektrikli arama üretiyor"},
    { japanese : "nani o shite imasu ka" ,  meaning : "ne yapıyorsun? / ne iş yapıyorsun?"},
    { japanese : "o shigoto wa nan desu ka" ,  meaning : "işin nedir?"},
    { japanese : "guuguru de hataraite imasu" ,  meaning : "google'da çalışıyorum"},
    { japanese : "watashi wa toudai de benkyou shite imasu" ,  meaning : "tokyo üniversitesinde okuyorum"},
    { japanese : "enjiniabu no hashimotosan o shitte imasu ka? Hai, shitte imasu / iie, shirimasen" ,  meaning : "mühendislik bölümünden hashimotosanı tanıyo musun? Evet tanıyorum / hayır tanımıyorum."},
    { japanese : "watashi no juusho o shitte imasu ka? Hai, shitte imasu / iie, shirimasen." ,  meaning : "benim adresimi biliyo musun? Evet biliyorum / hayır, bilmiyorum"},
    { japanese : "shuumatsu wa nani o shimasu ka? Kaimono ni ikimasu / eeto, mada wakarimasen. (shirimasen would be rude here)" ,  meaning : "haftasonu ne yapıyorsun? Alışverişe gidiyorum / hmm, hala bilmiyorum"},
    { japanese : "eigo ga wakarimasu ka? Hai, wakarimasu / iie, wakarimasen." ,  meaning : "ingilizce bilio musun? Evet biliyorum / hayır bilmiyorum"},
    
    
    
    // sentences lesson 16
    { japanese : "asa (wa) shawa o abite, asagohan o tabete, shigoto o shimasu" ,  meaning : "sabah duş alıp, kahvaltı yiyip, iş yaparım"},
    { japanese : "shibuya de tomodachi ni atte, eiga o mite, yuushoku o tabemashita" ,  meaning : "shibuyada arkadaşla buluşup, film izleyip, akşam yemeği yedik"},
    { japanese : "yokohama eki kara, jr densha ni notte, shimbashi de orite, sorekara chikatetsu ni norikaete, ginza eki de orite kudasai" ,  meaning : "yokohama durağından jr trenine binip, shimbaşi'de inip, ondan sonra metroya geçip, ginza durağında inin lütfen"},
    { japanese : "otoosan wa yasashi kute atama ga ii hito desu" ,  meaning : "babam kibar ve zeki bir insandır"},
    { japanese : "hokkaido wa tenki ga yokute, suzushikatta desu" ,  meaning : "hokkaidoda hava güzel ve serindir"},
    { japanese : "tabemono wa oishikute, yasukute, sugoku osusume desu" ,  meaning : "yemek lezzetli ucuz ve tavsiye edilebilir"},
    { japanese : "kyooto wa kirei de, omoshiroi mono ga takusan arimasu" ,  meaning : "kyoto güzel ve ilginç şeyler çok vardır"},
    { japanese : "guensan wa betonamu jin de, ryuugakusei desu" ,  meaning : "nguyen vietnamlı ve yabancı öğrencidir"},
    { japanese : "chichi wa pairotto de, haha wa kangoshi desu" ,  meaning : "babam pilot annem ise hemşiredir"},
    { japanese : "shinkansen wa hayai desu ga, takai desu" ,  meaning : "hızlı tren hızlı ama pahalıdır"},
    { japanese : "kaado o irete kara, kono botan o oshite kudasai" ,  meaning : "kartı soktukan sonra, bu düğmeye basınız"},
    { japanese : "daigaku o dete kara, sekai o ryokou shimasu" ,  meaning : "üniversiteden mezun olduktan sonra, dünya seyahati yapıcam"},
    { japanese : "shigoto o owatte kara, biiru o nomimasen ka" ,  meaning : "iş bittikten sonra bira içmeyelim mi"},
    { japanese : "shigoto o yamete kara, nani o shimasu ka" ,  meaning : "işten ayrıldıktan sonra (quit), ne yapacaksın"},
    { japanese : "kyouto e itte (kara), nani o shimashita ka" ,  meaning : "kyotoya gidip ne yaptın"},
    { japanese : "kaigi ga owatte kare, dokoka e ikimasu ka" ,  meaning : "toplantı bittikten sonra, biryere gidiyor musun?"},
    { japanese : "annasan wa kami ga kurokute me ga ookii desu" ,  meaning : "anna'nın saçı siyah, gözleri büyüktür"},
    { japanese : "sono senshu wa se ga hikui desu ga ashi ga hayai desu" ,  meaning : "bu oyuncudun boyu kısa ama ayakları hızlıdır"},
    { japanese : "furansu (de)wa tabemono ga oishikute, wain ga sekaijuu de yuumei desu" ,  meaning : "fransız yemekleri lezzetli, şarabı da dünyaca ünlüdür"},
    { japanese : "gakkou made douyatte ikimasu ka? Eki kara ichiban no basu ni notte, jinja no mae de orimasu. Soko kara gakkou made gofun furai arukimasu. " ,  meaning : "okula kadar nasıl gidersin? Duraktan ilk önce otobüse binerim, tapınağın önünde inerim. Oradan okula 5 dakika yürürüm."},
    { japanese : "kono jidouhanbaiki wa douyatte tsukaimasu ka" ,  meaning : "bu vending machine nasıl kullanılır?"},
    { japanese : "mazu okane o irete, suki na dorinku no botan o oshite kudasai" ,  meaning : "ilk önce parayı girip, sevdiğiniz içeceğin düğmesine basın lütfen"},
    { japanese : "oniisan wa dono hito desu ka? Ano ichiban se ga takai hito desu" ,  meaning : "ağbin hangi kişidir? O en uzun boylu olan kişidir"},
    { japanese : "anata no kuruma wa dono kuruma desu ka? Sono kuruma wa watashi no kuruma desu" ,  meaning : "senin araban hangi arabadır? Şu araba benim arabamdır"},
    { japanese : "anata no kuruma wa dore desu ka" ,  meaning : "senin araban hangisidir?"},
    
    
    // sentences lesson 17
    { japanese : "chiketto o nakusanaide kudasai" ,  meaning : "biletleri kaybetme lütfen"},
    { japanese : "naka de shashin o toranaide kudasai" ,  meaning : "içerde foto çekme lütfen"},
    { japanese : "watashi wa daijoubu desu, shinpai shinaide kudasai" ,  meaning : "ben iyiyim, endişelenme lütfen"},
    { japanese : "anata no pasupooto o wasurenaide kudasai" ,  meaning : "pasaportunu unutma lütfen"},
    { japanese : "raishuu made ni kono hon o kaesana kereba narimasen" ,  meaning : "gelecek haftaya kadar bu kitabı iade etmezsem olmaz"},
    { japanese : "yasai o tabena kereba narimasen" ,  meaning : "sebze yemezsen olmaz"},
    { japanese : "otto to dekakemasu kara, hayaku kaerana kereba narimasen" ,  meaning : "kocamla dışarı çıktığımızdan, eve erken dönmezsem olmaz"},
    { japanese : "tabete kara kusuri o nomana kereba narimasen" ,  meaning : "yemekten itibaren (sonra) ilacını içmezsen olmaz"},
    { japanese : "raishuu made ni kono hon o kaesana kereba narimasen ka" ,  meaning : "bu kitabı haftaya kadar iade etmezsem olmaz mı?"},
    { japanese : "yasai o tabena kereba narimasen ka" ,  meaning : "sebze yemezsem olmaz mı?"},
    { japanese : "nanji ni kaerana kereba narimasen ka" ,  meaning : "saat kaçta dönmem lazım?"},
    { japanese : "nankai kusuri o nomana kereba narimasen ka" ,  meaning : "ilacı kaç kere almam lazım"},
    { japanese : "daijoubu, harawana kute mo ii desu" ,  meaning : "tamam, ödemesen de olur"},
    { japanese : "nani mo mottekona kute mo ii desu" ,  meaning : "hiçbişey almasan(getirmesen) da olur"},
    { japanese : "douzo oagari kudasai, kutsu o nogana kute mo ii desu" ,  meaning : "girin lütfen, ayakkabıları çıkarmasanız da olur"},
    { japanese : "ashita youji ga arimasu kara, watashi wa ikana kute mo ii desu ka" ,  meaning : "yarın yapacak işler olduğundan, gelmesem olur mu"},
    { japanese : "keeki wa tabenaide kudasai" ,  meaning : "keki (söz konusuysa) yemeyin lütfen"},
    { japanese : "repooto wa kinyobi made ni dashite kudasai" ,  meaning : "rapor (söz konusuysa) cumaya kadar teslim et lütfen"},
    { japanese : "getsuyoubi made ni kite kudasai" ,  meaning : "pazartesiye kadar gel lütfen"},
    { japanese : "paatii wa juuji made ni owarimasu" ,  meaning : "parti saat 10a kadar bitecek"},
    { japanese : "ashita made ni repooto o dasana kereba narimasen kara, zangyou shimasu" ,  meaning : "yarına kadar bu raporu teslim etmezsem olmayacağından, fazla mesai yapacağım"},
    
    
    // sentences lesson 18
    { japanese : "lilisan wa utau koto ga dekimasu" ,  meaning : "lili şarkı söyleyebilir"},
    { japanese : "adamsan wa oyogu koto ga dekimasu" ,  meaning : "adam yüzme yapabilir"},
    { japanese : "natarisan wa kanji o yomu koto ga dekimasu" ,  meaning : "natali kanji okuyabilir"},
    { japanese : "onrain de chiketto o yoyakusuru koto ga dekimashita" ,  meaning : "online bilet reservasyonu yapabilirim"},
    { japanese : "watashi wa gorufu ga dekimasu" ,  meaning : "golf oynayabilirim"},
    { japanese : "otto wa ryouri ga jouzu ni dekimasu" ,  meaning : "kocam gerçekten iyi yemek yapabilir"},
    { japanese : "watashi wa piano ga dekimasu" ,  meaning : "piano çalabilirim"},
    { japanese : "watashi wa porutogarugo ga dekimasu" ,  meaning : "portkeizce konuşabilirim"},
    { japanese : "anata wa unten suru koto ga dekimasu ka" ,  meaning : "araba kullanabilir misin"},
    { japanese : "unten ga dekimasu ka? Hai, unten ga dekimasu / iie, unten ga dekimasen" ,  meaning : "araba kullanabilir misin"},
    { japanese : "kinoo (wa) benkyou ga dekimashita ka? Hai, dekimashita / iie, dekimasen deshita" ,  meaning : "dün ders çalışabildin mi? Evet çalışabildim / hayır çalışamadım"},
    { japanese : "watashi wa kuukoo de en o doru ni kaeru koto ga dekimasu ka? Hai, dekimasu yo" ,  meaning : "havalimanında yeni dolara çevirebilir miyim? Evet, yapabilirsin"},
    { japanese : "anata wa nan meetoru oyogu koto ga dekimasu ka? 50 meetoru gurai oyogu koto ga dekimasu" ,  meaning : "sen kaç metre yüzebilirsin? Yaklaşık 50 metre yüzebilirim"},
    { japanese : "anata wa nanigo o hanasu koto ga dekimasu ka? Porutogaru ga dekimasu" ,  meaning : "hangi dili konuşabilirsin? Portekizce konuşabilirim"},
    { japanese : "watashi no shumi wa  tsuri desu" ,  meaning : "hobim balık tutmaktır"},
    { japanese : "watashi no shumi wa konpyuutaa geemu desu" ,  meaning : "hobim bilgisayar oyunlarıdır"},
    { japanese : "watashi no shumi wa shashin o toru koto desu" ,  meaning : "hobim resim çekmektir"},
    { japanese : "watashi no shumi wa akushon figyua o atsumeru koto desu" ,  meaning : "hobim action figürleri biriktirmektir"},
    { japanese : "neru mae ni shawa o abimasu" ,  meaning : "uyumadan önce duş alacağım"},
    { japanese : "taberu mae ni te o aratte kudasai" ,  meaning : "yemekten önce elleri yıka lütfen"},
    { japanese : "gakkou e iku mae ni, inu no sanpo o shimasu" ,  meaning : "okula gitmeden önce köpeği yürüteceğim (köpeğin yürüyüşünü yapacağım)"},
    { japanese : "neru mae ni nani o shimasu ka" ,  meaning : "uyumadan önce ne yaparsın?"},
    { japanese : "ryoou no mae ni, hoteru no yoyaku o kakunin shimasu" ,  meaning : "geziden önce otel rezervasyonunu onaylıyorum"},
    { japanese : "shokuji no mae ni, inori o shimasu" ,  meaning : "yemekten önce dua ederim"},
    { japanese : "kaigi no mae ni, kono shiryou o kopii shite kudasai" ,  meaning : "toplantıdan önce bu dokümanı kopyapa lütfen"},
    { japanese : "watashi wa junen mae ni, amerika ni kimashita" ,  meaning : "10 yıl önce amerikaya geldim"},
    { japanese : "rokka-getsu mae ni kaisha o yamemashita" ,  meaning : "6 ay önce şirketten emekli oldum"},
    { japanese : "kusuri wa sanjuu-pun mae ni nomimashita" ,  meaning : "ilacı 30 dakika önce içtim"},
    { japanese : "keeki wa nakanaka oishii desu" ,  meaning : "kek oldukça/bayağı lezzetli"},
    { japanese : "kareshi wa nakanaka hansamu desu ne" ,  meaning : "erken arkadaşın bayağı/oldukça yakışıklı"},
    { japanese : "tesuto wa nakanaka muzukashikatta desu" ,  meaning : "test oldukça/bayağı zordu"},
    { japanese : "nakanaka hito no namae o oboeru koto ga dekimasen" ,  meaning : "insanların ismini hatırlamayı  pek beceremem"},
    { japanese : "nihon dewa nakanaka furui pasokon o suteru koto ga dekimasen" ,  meaning : "eski bilgisayarlardan kurtulmak biraz zordur (pek mümkün değildir)"},
    { japanese : "nihon dewa ooganiku sutoaa ga nakanaka arimasen" ,  meaning : "japonyada organik mağaza pek yoktur"},
    { japanese : "watashi wa hawai de zehi kekkon shitai desu" ,  meaning : "kesin hawaide evlenmeyi isterim"},
    { japanese : "watashi no tanjoubi desu kara, zehi paati ni kite kudasai ne" ,  meaning : "benim yaşgünüm olduğundan, kesin partime gelin."},
    { japanese : "keeki o zehi tabete kudasai, oishii desu yo" ,  meaning : "kesin kekten yiyin, lezzetli ha"},
    { japanese : "issho ni asobi ni ikimasen ka? Ee, zehi" ,  meaning : "birlikte dışarı çıkalım mı (gezelim mi) ? Evet, kesin / mutlaka"},
    
    
    
    // sentences lesson 19
    { japanese : "fujisan ni nobotta koto ga arimasu" ,  meaning : "fuji dağına (tepesine) tırmanmışlığım vardır"},
    { japanese : "itaria ni itta koto ga arimasu" ,  meaning : "italyaya gitmişliğim vardır"},
    { japanese : "baniku o tabeta koto ga arimasen" ,  meaning : "at eti yemişiğim yoktur"},
    { japanese : "pachinko o shita koto ga arimasen" ,  meaning : "pachinko çalmışlığım yoktur"},
    { japanese : "shinkansen o notta koto ga arimasu ka" ,  meaning : "hızlı trene binmişliğin var mıdır"},
    { japanese : "sushi o tabeta koto ga arimasu ka? Hai, ikkai dake arimasu / iie, ichidomo arimasen" ,  meaning : "sushi yemişlğin var mıdır? Evet, bir kere / hayır hiç yoktur"},
    { japanese : "shumatsu wa sentaku shitari, souji shitari, kaimono shitari shimasu" ,  meaning : "hafta sonu çamaşır yıkar, temizlik yapar, alışveriş yapar yaparım."},
    { japanese : "toukyou e ittari, tomodachi to asondari, geemu o shitari shimashita" ,  meaning : "tokyoya gider, arkadaşlarla eğlenir, oyun oynar yaptım."},
    { japanese : "anata wa atarashii kaban o kattari, hoteru no yoyaku o kakunishitari, puran o tsukuttari, shina kereba narimasen." ,  meaning : "yeni bir çanta satın alma, otel rezervasyonu yapma, gezi planı yapma, yapmazsan olmaz."},
    { japanese : "watashi no shumi wa hon o yondari, ongaku o kiitari, geemu o shitari suru koto desu" ,  meaning : "hobilerim kitap okumak, müzik dinlemek, oyun oynamak yapmakdır"},
    { japanese : "watashi wa tsuyoku naritai desu" ,  meaning : "güçlü olmak istiyorum (güçlenmek)"},
    { japanese : "anata wa nihongo ga jouzu ni narimashita" ,  meaning : "japoncan iyileşmiş (gelişmiş)"},
    { japanese : "kotoshi 30 sai ni narimasu" ,  meaning : "bu yıl 30 yaşıma giriyorum"},
    { japanese : "musuko wa pairotto ni naritagatte imasu" ,  meaning : "oğlum pilot olmak istiyor"},
    { japanese : "tabako o suu koto ga karada ni yokunai desu yo. Sou desu ne" ,  meaning : "sigara içmek sağlığa iyi değil. Katılıyorum (evet öyle ya)"},
    { japanese : "mou osoku narimasu kaeranaito. Aa, sou desu ne." ,  meaning : "geç oldu dönmem lazım. Ya, öyle."},
    { japanese : "aihon ten wa aihon eitto yori ii desu ne? Sou desu ne." ,  meaning : "iphone 10 iphone 8'den daha iyi di mi? Öyle."},
    { japanese : "dochira mo tsukatta koto ga arimasen kara, wakarimasen" ,  meaning : "ikisini de kullanmışlığım olmadığından, bilmiyorum"},
    
    
    // sentences lesson 20
    { japanese : "10ji ni nemasu / 10ji ni neru" ,  meaning : "saat 10da uyurum"},
    { japanese : "mainichi benkyou shimasen / mainichi benkyou shinai" ,  meaning : "hergün ders çalışıyorum"},
    { japanese : "asagohan o tamemashita / asagohan o tabeta" ,  meaning : "kahvaltıyı yedim"},
    { japanese : "asagohan o tabemasu ka? / asagohan o taberu ? Hai tabemasu / un taberu, iie, tabemasen / iie, tabenai" ,  meaning : "kahvaltı ediyor musun? Evet ediyorum / hayır etmiyorum"},
    { japanese : "kyoo hatarakimasen deshita / kyoo hatarakanakatta " ,  meaning : "dün çalışmadım"},
    { japanese : "issho ni biiru o nomimasen ka / issho ni biiru o nomanai  " ,  meaning : "birlikte bira içmeyelim mi"},
    { japanese : "ikimashou / ikou" ,  meaning : "gidelim"},
    { japanese : "tabemashou / tabeyou" ,  meaning : "yiyelim"},
    { japanese : "benkyou shimashou / benkyou shyou" ,  meaning : "ders yapalım"},
    { japanese : "kirei desu / kirei da" ,  meaning : "güzel"},
    { japanese : "ashita hima ja arimasen / ashita hima janai" ,  meaning : "yarın boş değilim"},
    { japanese : "kare wa yumei deshita / kare wa yumei datta" ,  meaning : "o ünlüydü"},
    { japanese : "suteki ja arimasen deshita / suteki ja nakatta" ,  meaning : "güzel değildi"},
    { japanese : "ii desu / ii" ,  meaning : "iyi"},
    { japanese : "yokunai desu / yokunai" ,  meaning : "iyiydi"},
    { japanese : "osihikatta desu / oishikatta" ,  meaning : "ilginçti"},
    { japanese : "omoshirokunakatta desu / omoshirokunakatta" ,  meaning : "ilginç değildi"},
    { japanese : "dou desu ka / dou" ,  meaning : "nasıl?"},
    { japanese : "dou deshita ka / dou datta" ,  meaning : "nasıldı?"},
    { japanese : "kamera ga arimasu / kamera ga aru" ,  meaning : "kamera var"},
    { japanese : "pasokon ga arimasen / pasokon ga nai" ,  meaning : "bilgisayar yok"},
    { japanese : "kuruma ga arimashita / kuruma ga atta" ,  meaning : "araba vardı"},
    { japanese : "wakarimashita / wakatta" ,  meaning : "anladım"},
    { japanese : "inu ga oshii desu / inu ga oshii" ,  meaning : "köpek istiyorum"},
    { japanese : "supein e ikitai desu / supein e ikitai" ,  meaning : "ispanyaya gitmek istiyorum"},
    { japanese : "koko ni kite kudasai / kochi ni kite" ,  meaning : "buraya gel"},
    { japanese : "wasurenaide kudasai / wasurenai de ne" ,  meaning : "unutma"},
    { japanese : "kore o tsukatte mo ii desu ka / kore o tsukatte ii" ,  meaning : "bunu kullanabilir miyim"},
    { japanese : "koko de tabako o sutte wa ikemasen / koko de tabako o sutte wa ikenai" ,  meaning : "burada sigara içmek olmaz"},
    { japanese : "ikana kereba narimasen / ikana kereba naranai" ,  meaning : "gitmezsek olmaz"},
    { japanese : "isogonaito ikemasen / isogonaito ikenai" ,  meaning : "acele etmezsek olmaz"},
    { japanese : "harawana kute mo ii desu / harawana kute mo ii" ,  meaning : "ödemezsen de olur"},
    { japanese : "unten ga dekimasu ka / unten ga dekiru? Hai dekimasu / un, dekiru" ,  meaning : "araba kullanabilir misin? Evet, kullanabilirim"},
    { japanese : "unten ga dekimasu ka / unten ga dekiru? İie dekimasen / uun, dekinai" ,  meaning : "araba kullanabilir misin? Hayır kullanamam"},
    { japanese : "fujisan ni nobotta koto ga arimasu ka / fujisan ni nobotta koto ga aru" ,  meaning : "fujisana çıkmışlığın (tepesine) var mı?"},
    { japanese : "hai nobotta koto ga arimasu / un, nobotta koto ga aru" ,  meaning : "evet çokmışlığım var"},
    { japanese : "iie nobotta koto ga arimasen / uun nobotta koto ga nai" ,  meaning : "hayır çıkmışlığım yok"},
    { japanese : "keeki o tabemasu ka / keeki o taberu" ,  meaning : "kek yer misin?"},
    { japanese : "hai tabemasu / iie tabemasen" ,  meaning : "yes i eat / no i dont eat"},
    { japanese : "un taberu / uun tabenai" ,  meaning : "yes i eat / no i dont eat"},
    { japanese : "ie ni dare ka arimasu ka / iie ni dare ka aru?" ,  meaning : "evde kimse var mı? "},
    { japanese : "hai yuki ga imasu / iie dare mo imasen" ,  meaning : "evet yuki var / hayır kimse yok"},
    { japanese : "un, yuki ga iru (yo) / uun, dare mo inai" ,  meaning : "evet yuki var / hayır kimse yok"},
    { japanese : "doko ikimasu ka / doko iku?" ,  meaning : "where r u going?"},
    { japanese : "tokyou e ikimasu / tokyou e iku" ,  meaning : "tokyo'ya gidiyorum"},
    { japanese : "genki desu ka / genki ?" ,  meaning : "sağlıklı mi?"},
    { japanese : "hai genki desu / un, genki" ,  meaning : "evet sağlıklıyım"},
    { japanese : "iie, genki ja arimasen / uun, genki janai" ,  meaning : "hayır, sağlıklı değilim"},
    { japanese : "sou desu ka / souka" ,  meaning : "haa demek öyle"},
    
    
    // sentenes lesson 21
    { japanese : "kare de tariru to omoimasu" ,  meaning : "bu yeter diye düşünüyorum"},
    { japanese : "nihonjin wa bisa ga iranai to omoimasu" ,  meaning : "japon vizeye ihtiyaç yok diye düşünüyorum"},
    { japanese : "densha wa totemo benri da to omoimasu" ,  meaning : "tren çok pratiktir diye düşünüyorum"},
    { japanese : "terebi o miru koto wa jikan no muda da to omoimasu" ,  meaning : "tv izlemenin zaman kaybı olduğunu düşünüyorum"},
    { japanese : "soosharu media wa ii to omoimasu ka? Hai, ii to omoimasu / iie, yokunai to omoimasu" ,  meaning : "sosyal medyanın iyi olduğunu düşünüo musun? Evet, iyi olduğunu düşünüyorum / hayır kötü olduğunu düşünüyorum "},
    { japanese : "jasutisu riigu to abenjaazu to dochira ga katsu to omoimasu ka? Abenjaazu ga katsu to omoimasu" ,  meaning : "justice league ve avengers arasından hangisi kazanır diye düşünüosun? Avnegers kazanır diye düşünüyorum"},
    { japanese : "firipinjin ni tsuite dou omoimasu ka" ,  meaning : "filipinliler hakkında ne/nasıl düşünüosun"},
    { japanese : "fakusuki ga yakunitatanaku natta to omoimasu! Watashi mo sou omoimasu / watashi wa sou omoimasen" ,  meaning : "faks makinesi gereksiz oldu diye düşünüyo musun? Evet, öyle düşünüyorum / hayır, öyle düşünmüyorum."},
    { japanese : "nihonjin wa shokuji mae ni 'itadakimasu' to iimasu" ,  meaning : "japonlar yemek yemeden önce 'itadakimasu' derler"},
    { japanese : "shingusan wa 'mata atodo denwa shimasu' to iimashita" ,  meaning : "shingusan 'daha sonra tekrar ararım' diye söyledi."},
    { japanese : "shingusan wa mata atodo denwa suru to iimashita" ,  meaning : "shingusan daha sonra tekrar ararım diye söyledi."},
    { japanese : "shokuji no owari ni nan to iimasu ka" ,  meaning : "yemek bittikten sonra ne diye söylersin"},
    { japanese : "gochisou samadeshita to iimasu" ,  meaning : "gochisou samadeshita diye söylerim"},
    { japanese : "'not at all' wa nihongo de nan to iimasu ka? Dou itashimashite to iimasu" ,  meaning : "'not at all' japoncada nasıl söylenir? 'dou itashimashite' diye söylenir"},
    { japanese : "suuzii wa ashita no yotei ni tsuite nan to iimashita ka? Daijoubu da to iimashita" ,  meaning : "suzy yarının planı üzerine ne diye söylüyor? Tamam diye söylüyor."},
    { japanese : "asatte yuki ga furu deshou?" ,  meaning : "yarın kar yağar di mi? (yağar mı)"},
    { japanese : "jettokoosutaa wa tanoshii deshou?" ,  meaning : "kaykay eğlenceli di mi?"},
    { japanese : "watashi no kanojo wa kirei deshou?" ,  meaning : "benim kız arkadaşım güzel di mi?"},
    { japanese : "jonsonsan wa daigakusei deshou?" ,  meaning : "jonson üniversite öğrencisi di mi?"},
    { japanese : "kyou wa yuki ga furu deshou" ,  meaning : "bugün kar yağabilir"},
    { japanese : "kare wa kakkoii. Kanojo ga mou iru deshou" ,  meaning : "o çok cool. Kız arkadaşı olmalı (vardır)"},
    { japanese : "juu-nen ni nihon ni sunde iru kara, anatawa hontou ni nihongo ga jouzu deshou" ,  meaning : "10 yıldır japonyada yaşadığından, senin gerçekten japoncan iyi olmalı."},
    { japanese : "maitoshi sapporo de yuki matsuri ga arimasu" ,  meaning : "her sene sapporo'da kar festivali vardır"},
    { japanese : "teiraa suuifuto wa manira de konsaato ga arimashita" ,  meaning : "taylor swift manila'da konseri vardı"},
    { japanese : "nisen nijuu nen ni toukyou de tsugi no orinpikku ga arimasu" ,  meaning : "2020 yılında tokya'da gelecek olimpiyatlar var"},
    { japanese : "nijusan nen mae ni koube de ookii jishin ga arimashita" ,  meaning : "23 yıl önce kobe'de deprem olmuştu"},
    { japanese : "paatii de kare ni aimashita ka" ,  meaning : "partide onunla karşılaştım/tanıştım"},
    { japanese : "kaigi de iken o iimasu" ,  meaning : "toplantıda fikrimi söyleyeceğim"},
    { japanese : "omatsuri de kaimashita" ,  meaning : "festivalde satın aldım"},
    { japanese : "eiga demo mimasen ka" ,  meaning : "film falan izlemeyelim mi"},
    { japanese : "koohii demo nomimasen ka" ,  meaning : "kahve falan içmeyelim mi"},
    { japanese : "ranchi demo ikanai" ,  meaning : "öğle yemeğine falan gitmeyelim mi"},
    { japanese : "mou ikanaito" ,  meaning : "artık gitmem lazım"},
    { japanese : "sorosoro jikan da, shito o owaranai to" ,  meaning : "neredeyse zaman geldi, işi bitirmem lazım"},
    { japanese : "saigo no chansu da, ganbaranai to" ,  meaning : "en son şansım, elimden geleni yapmam lazım"},
    
    
    // sentences lesson 22
    { japanese : "yuki no kaban" ,  meaning : "yukinin çantası"},
    { japanese : "suteki na kaban" ,  meaning : "güzel çanta"},
    { japanese : "furui kaban" ,  meaning : "eski çanta"},
    { japanese : "niku o taberu hito" ,  meaning : "et yiyen insan"},
    { japanese : "niku o tabenai hito" ,  meaning : "et yemeyen insan"},
    { japanese : "niku o tabeta hito" ,  meaning : "et yemiş olan insan"},
    { japanese : "niku o tabenakatta hito" ,  meaning : "et yememiş olan insan"},
    { japanese : "akai kooto o kite iru hito" ,  meaning : "kırmızı mont giymekte olan insan"},
    { japanese : "boushi o kabutte iru hito" ,  meaning : "şapka takmakta olan insan"},
    { japanese : "hon o yonde iru hito" ,  meaning : "kitap okumakta olan insan"},
    { japanese : "kimurasan no tonari ni iru hito" ,  meaning : "kimurusan'ın yanında (duran) insan"},
    { japanese : "akarukute ii hito" ,  meaning : "neşeli ve iyi insan"},
    { japanese : "kirei de yuumei na hito" ,  meaning : "güzel ve ünlü insan"},
    { japanese : "kyujuu-sai no hito" ,  meaning : "90 yaşındaki insan"},
    { japanese : "eigo no sensei" ,  meaning : "ingilizce öğretmeni"},
    { japanese : "watashi wa toshokan kara hon o karimashita" ,  meaning : "ben kütüphaneden kitap ödünç aldım"},
    { japanese : "watashi ga toshokan kara karita hon" ,  meaning : "kütüphaneden ödünç aldığım kitap"},
    { japanese : "chichi wa resutoran de hataraite imasu" ,  meaning : "babam restoranda çalışmaktadır"},
    { japanese : "chichi ga harataite iru resutoran" ,  meaning : "bababım çalışmakta olduğu restoran"},
    { japanese : "watashi wa dareka ni agemasu" ,  meaning : "ben birisine veriyorum"},
    { japanese : "watashi ga ageru hito" ,  meaning : "benim verdiğim insan"},
    { japanese : "akai kooto o kite iru hito wa jonson san desu" ,  meaning : "kırmızı mont giymekte olan insan jonsondur"},
    { japanese : "jonsonsan wa akai kooto o kite iru hito desu" ,  meaning : "jonson kırmızı mont giymekte olan insandır"},
    { japanese : "watashi wa watashi ga toshokan kara karita hon o nakushimashita" ,  meaning : "ben kütüphaneden ödünç aldığım kitabı kaybettim"},
    { japanese : "anata wa nisen nen ni umareta hito o shitte imasu ka" ,  meaning : "sen 2000 yıldında doğmuş birini tanıyo musun"},
    { japanese : "kimurasan no tonari ni iru hito wa dare desu ka" ,  meaning : "kimurusan'ın yanında (duran) insan kimdir?"},
    { japanese : "anata ga sunde ita apaato wa doko desu ka" ,  meaning : "senin yaşamış olduğun apartman nerededir?"},
    { japanese : "suki na kuruma ga dore desu ka" ,  meaning : "beğendiğin hoşuna giden araba hangisidir?"},
    { japanese : "kinoo mita eiga wa doo deshita ka" ,  meaning : "dün izlediğin film nasıldı"},
    { japanese : "watashi wa toshokan kara hon o karimashita" ,  meaning : "kütüphaneden kitap ödünç aldım"},
    { japanese : "watashi ga toshokan kara karita hon o nakushimashita" ,  meaning : "kütüphaneden ödünç aldığım kitabı kaybettim"},
    { japanese : "chichi wa resutoran de hataraite imasu" ,  meaning : "babam restoranda çalışmaktadır"},
    { japanese : "chichi ga harataite iru resutoran e ikimasu" ,  meaning : "babamın çalışmakta olduğu restorana gidiyorum"},
    { japanese : "anata wa byouin de umaremashita" ,  meaning : "sen hastanede doğdun"},
    { japanese : "anata ga umareta byouin o shitte imasu ka" ,  meaning : "sen doğduğun hastaneyi biliyor musun?"},
    { japanese : "supiichi o renshuusuru jikan ga arimasen" ,  meaning : "konuşma pratiği zamanı yoktur"},
    { japanese : "atode tsuma to shokujisuru yakusoku o omoidashimashita" ,  meaning : "sonra karımla yemek yeme sözümü hatırladım"},
    { japanese : "haisha ni iku yotei o wasurenaide" ,  meaning : "dişçiye gitme planını unutma"},
    
    
    // sentenes lesson 23
    { japanese : "shiyakusho ni iku toki, zairyuu kaado o mottekite" ,  meaning : "valiliğe gittiğin zaman, oturma izni kartını alıp git"},
    { japanese : "benkyou suru toki, ongaku o kikimasu" ,  meaning : "çalıştığım zaman, müzik dinlerim"},
    { japanese : "wakaranai koto ga aru toki, watashi ni kiite kudasai" ,  meaning : "anlamadığın birşey olduğu zaman, bana sor lütfen"},
    { japanese : "uchi de asagohan o taberu jikan ga nai toki, onigiri o densha de tabemasu" ,  meaning : "evde kahvaltı yeme zamanı olmadığı zaman, onigiriyi trende yerim"},
    { japanese : "samui toki, amari dekakemasen" ,  meaning : "soğuk olduğu zaman, pek dışarı çıkmam"},
    { japanese : "hima na toki, nomini ikimasu" ,  meaning : "boş olduğum zaman, içmeye giderim"},
    { japanese : "kodomo no toki, yoku anime o mimashita" ,  meaning : "çocuk zamanı, sık sık anime izlerdim"},
    { japanese : "yasumi no toki, nani o shimasu ka" ,  meaning : "tatil olduğu zaman, ne yaparsın?"},
    { japanese : "unten shite iru toki, keitai denwa o tsukaimasen" ,  meaning : "araba kullanıyor olduğum zaman, cep telefonu kullanmam"},
    { japanese : "nete iru toki, jishin ga arimashita" ,  meaning : "uyuyorken (uğuduğum esnada), deprem oldu"},
    { japanese : "uchi e kaeru toki, denwa shimashita" ,  meaning : "eve dönerken (varmadan önce), telefon ediyorum"},
    { japanese : "uchie e kaetta toki, denwa shimashita" ,  meaning : "eve döndüğümde (dönünce), telefon ettim"},
    { japanese : "kuni e kaetta toki, fuku o kaimasu" ,  meaning : "ülkeme döndüğümde, giysi satın alıcam"},
    { japanese : "taberu toki, 'itadakimasu' to iimasu" ,  meaning : "yemek yerken (öncesinde), 'itadakimasu' deriz"},
    { japanese : "tabeta toki, 'gochisousama deshita' to iimasu" ,  meaning : "yemek yediğimizde (sonrasında)'afiyet olsun' deriz."},
    { japanese : "dekakeru toki, ittekimasu to iimasu" ,  meaning : "evi terkederken 'ittekimasu' deriz"},
    { japanese : "uchi e kaetta toki, tadaima to iimasu" ,  meaning : "eve geri geldiğimiz zaman 'tadaima' deriz"},
    { japanese : "akai botan o osu to, kaado ga demasu" ,  meaning : "kırmızı düğmeye basmanla, kart çıkar"},
    { japanese : "tsunami o hidari e mawasu to, oto ga ookiku narimasu" ,  meaning : "kolu sola döndürmenle ses büyük olur (ses yükselir)"},
    { japanese : "kousaten o migi e magaru to, shiyakusho ga arimasu" ,  meaning : "dört yol ağzında sola dönmenle, valiliği göreceksin (valilik var)"},
    { japanese : "asagohan o tabenai to, atama ga itakunaru" ,  meaning : "kahvaltıyı yememekle,başım ağırır"},
    { japanese : "shingou ga aka ni narimashita" ,  meaning : "trafik ışığı kırmızı oldu (kırmızı yandı)"},
    { japanese : "atama ga itai" ,  meaning : "başım ağrıyor"},
    { japanese : "tokei ga ugoite inai" ,  meaning : "saat hareket etmiyo (saat çalışmıyo)"},
    { japanese : "kono botan o osu to, otsuri ga demasu" ,  meaning : "bu düğmeye basmanla, bozuk çıkar (makineden)"},
    { japanese : "kouen o sampo shimasu" ,  meaning : "i take a stroll in the park"},
    { japanese : "michi o arukimasu" ,  meaning : "i walk along the road"},
    { japanese : "hashi o watarimasu" ,  meaning : "i go across the bridge"},
    { japanese : "kousaten o migi e magatte kudasai" ,  meaning : "turn right at the intersection"},
    
    
    // sentences lesson 24
    { japanese : "ramasan wa watashi ni kono hon o kuremashita" ,  meaning : "ramasan bana bu kitabı verdi"},
    { japanese : "samitasan wa ototo ni kono hon o kuremashita" ,  meaning : "samitasan ağbime bu kitabı verdi"},
    { japanese : "obaasan wa watashi ni kono hon o kuremashita" ,  meaning : "büyükannem bana bu kitabı verdi"},
    { japanese : "ramasan wa samitasan ni kono hon o agemashita" ,  meaning : "ramasan samitasana bu kitabı verdi"},
    { japanese : "watashi wa ramsan ni kono hon o agemashita" ,  meaning : "ben ramsana bu kitabı verdim"},
    { japanese : "watashi wa ototo ni kono hon o agemashita" ,  meaning : "ben ağbime bu kitabı verdim"},
    { japanese : "sensei wa watashi ni ressun o oshiemashita" ,  meaning : "öğretmen bana ders verdi (öğretti anlamı)"},
    { japanese : "sensei wa watashi ni ressun o oshiete kuremashita / kureta" ,  meaning : "öğretmen bana ders verdi (ahlaki anlamda)"},
    { japanese : "amiru wa  yoshidasan ni kuruma o kashite agemasu" ,  meaning : "amir yoshidasana arabayı ödünç verdi"},
    { japanese : "watashi wa ojiichan ni koohii o irete agemashita" ,  meaning : "ben büyükbabaya kahve verdim"},
    { japanese : "watashi wa tanakasan o kuukoo e okutte agemasu" ,  meaning : "tanakasan'ı havalimanına götürdüm (geçirdim, yolcu ettim)"},
    { japanese : "tanakasan kuukoo e okurimashou ka" ,  meaning : "tanaksan (sizi) havalimanına götüreyim mi? (saygılı)"},
    { japanese : "obaachan kaban o motte ageru yo, omoi kara." ,  meaning : "büyükanne çantanı taşıyayım mı, ağır çünkü (olduğundan)"},
    { japanese : "watashi wa samita ni basu noriba made annaishite moraimashita" ,  meaning : "samita bana otobüs durağına kadar eşlik etti (verdi)"},
    { japanese : "watashi wa ani ni koko ni tsuretekite moraimashita" ,  meaning : "abim beni buraya getirdi (verdi)"},
    { japanese : "watashi wa tomodachi ni anime o shoukaishite moraimashita" ,  meaning : "arkadaşın beni animeyle tanıştırdı (verdi)"},
    { japanese : "sensei wa (watashi ni) kotae o setsumeishite kuremashita" ,  meaning : "öğretmen bana cevabı açıkladı"},
    { japanese : "haha wa mainichi obentou o tsukette kuremasu  " ,  meaning : "annem hergün yemeği bana hazırladı (yaptı)"},
    { japanese : "ane wa hikkoshi o tetsudatte kuremasu" ,  meaning : "kız kardeşim hareket etmeme yardım etti (verdi)"},
    { japanese : "watashi wa ane ni hikkoshi o tetsudatte moraimasu" ,  meaning : "ben kız kardeşimden hareket etmede yardımı aldım (verdim)"},
    { japanese : "ane wa watashi ni hikkoshi o tetsudatte kuremasu" ,  meaning : "kız kardeşim hareket etmeme yardım etti (verdi)"},
    { japanese : "okaasan ga katte kuremashita" ,  meaning : "annem (bana) satın aldı (satın alıp verdi)"},
    { japanese : "tanaka sensei ga oshiete kuremashita" ,  meaning : "tanaka hoca (bana) öğretti (verdi)"},
    { japanese : "dare ga anata ni kono hon o kuremashita ka / agemashita ka? Rama san ga kuremashita" ,  meaning : "kim sana bu kitabı verdi? ramasan verdi"},
    { japanese : "dare ga shiryou o junbishimasu ka? haradasan ga junbi shimasu" ,  meaning : "kim belgeleri hazırladı? Haradasan hazırladı"},
    { japanese : "dare ga barentain choko o moraimashita ka? Jon dake ga moraimashita" ,  meaning : "kim valentine çikolatası aldı? Jon sadece aldı"},
    { japanese : "dare ni/kara moraimashita ka?" ,  meaning : "kimden aldın?"},
    { japanese : "dare ni kono hon o moraimashita ka? " ,  meaning : "kimden bu kitabı aldın?"},
    { japanese : "dare ni eigo o oshiete moraimashita ka? Simusu sensei ni oshiete moraimashita" ,  meaning : "kimden ingilizce öğrendin (aldın)? Sumisu hocadan öğrendim"},
    { japanese : "dare kara/ni barentain choko o moraimashita ka? Maria kara moraimashita" ,  meaning : "kimden valentine çikolatası aldın? Maria'dan aldım"},
    
    
    //sentences lesson 25
    { japanese : "ichi-oku en ga attara, shigoto o yamemasu" ,  meaning : "yüz milyon yenim olursa, işimi bırakacağım"},
    { japanese : "jikan ga nakattara, konakute mo ii desu" ,  meaning : "eğer zaman yoksa, gelmesen de olur"},
    { japanese : "yokattara, douzo" ,  meaning : "istersen buyur (al)"},
    { japanese : "hima dattara, asobimashou" ,  meaning : "eğer boşsan, dışarı çıkıp oynayalım"},
    { japanese : "genki ni nattara, ippai nomimashou" ,  meaning : "iylişence, bir kadeh içelim"},
    { japanese : "toshi o tottara, inaka ni sumitai" ,  meaning : "yaşım ilerleyince, kırsala (köye) yerleşmek istiyorum"},
    { japanese : "eki ni tsuitara, denwa shite kudasai" ,  meaning : "durağa vardığında, telefon aç lütfen"},
    { japanese : "shigoto ga owattara, kaette mo ii desu" ,  meaning : "işi bitirdikten sonra, eve gidebilirsin"},
    { japanese : "watashi wa benkyou shite mo, wakarimasen" ,  meaning : "çalışsam da, anlamıyorum"},
    { japanese : "yasukute mo watashi wa guruupu ryokou ga sukijanai" ,  meaning : "ucuz olsa da, grup seyahatlerini sevmiyorum"},
    { japanese : "benri demo sumaho o kaimasen" ,  meaning : "kullanışlı olsa da akıllı telefonları sevmiyorum"},
    { japanese : "yasumi demo, isogashi desu" ,  meaning : "tatil olsam da, meşgulum"},
    { japanese : "moshi ichi-oku en ga attara, shigoto o yamemasu" ,  meaning : "ola ki yüz milyon yenim olsa, işi terkederim"},
    { japanese : "moshi yokattara, douzo" ,  meaning : "ola ki istersen, buyur"},
    { japanese : "moshi nihon ni ittara, fankopoppu o katte kuremasen ka" ,  meaning : "ola ki japonyaya gittin, bana fankopop oyuncağı alıp vermez misin?"},
    { japanese : "ikura kangaete mo, kanojo no koto o omoida shimasen" ,  meaning : "ne kadar düşünsem de, onu hatırlayamıyorum"},
    { japanese : "ikura takakute mo anata ni katte agemasu" ,  meaning : "ne kadar pahalı olsa da, sana alıp vereceğim"},
    { japanese : "ikura benri demo, sumaho o kaimasen" ,  meaning : "ne kadar kullanışlı olsa da, akıllı telefon satın almıyorum"},
    { japanese : "migeru ga tsuitara, watashi ni oshiete kudasai" ,  meaning : "miguel vardığında, bana söyle lütfen (haber ver)"},
    { japanese : "sumaho ga benri demo, kaimasen" ,  meaning : "akıllı telefon kullanışlı olsa da, almıyorum"},
    { japanese : "okaasan ga byouki no toki, jibunde ryouri o shimasu" ,  meaning : "annem hasta olduğu zaman, ben kendim yemek yapıyorum"},
    { japanese : "yuki ga furu to, densha ga tomarimasu" ,  meaning : "kar yağmasıyla, trene bindik"},
    { japanese : "akachan ga umareru mae ni, iroiro junbi shinai to" ,  meaning : "bebeğim doğmasından önce, onubunu hazırlamak zorundayım"}];

    

    

    // japanese for busy people 1 vocab (1-30)



    const vocabularyJFBP = [

        // lesson 1    
        { japanese : "こちら" ,  meaning : "this one"},
        { japanese : "はじめまして" ,  meaning : "how do you do"},
        { japanese : "どうぞ　よろしく" ,  meaning : "please favor me"},
        { japanese : "べんごし" ,  meaning : "lawyer"},
        { japanese : "ryoujikan" ,  meaning : "consulate"},
        { japanese : "bijustukan" ,  meaning : "museum"},
        { japanese : "eigakan" ,  meaning : "sinema"},
        { japanese : "gaka" ,  meaning : "painter"},
        { japanese : "ongakuka" ,  meaning : "musician"},
        { japanese : "sakka" ,  meaning : "author"},
        { japanese : "ginko" ,  meaning : "bank"},
        { japanese : "gakusei" ,  meaning : "student"},
        { japanese : "kaishain" ,  meaning : "company employee"},
        { japanese : "chuugoku" ,  meaning : "china"},
        { japanese : "doitsu" ,  meaning : "germany"},
        { japanese : "hisho" ,  meaning : "secretary"},
        { japanese : "taishikan" ,  meaning : "embassy"},
        { japanese : "go-shokai shimasu" ,  meaning : "let me introduce you"},
        { japanese : "donata" ,  meaning : "who"},
        
        
        
        
        // lesson 2
        { japanese : "めいし" ,  meaning : "business card"},
        { japanese : "どうぞ" ,  meaning : "please(accept)"},
        { japanese : "どうも　ありがとう　ございます" ,  meaning : "thank you very much"},
        { japanese : "なまえ" ,  meaning : "name"},
        { japanese : "でんわばんごう" ,  meaning : "phone number"},
        { japanese : "かいしゃのです" ,  meaning : "company's"},
        { japanese : "うち" ,  meaning : "home"},
        { japanese : "jidousha" ,  meaning : "automobile"},
        { japanese : "konbini" ,  meaning : "convenient store"},
        { japanese : "jisho" ,  meaning : "dictionary"},
        { japanese : "keitai denwa" ,  meaning : "mobile phone"},
        { japanese : "nooto pasokon" ,  meaning : "laptop"},
        { japanese : "mou ichido onegaishimasu" ,  meaning : "one more time please"},
        { japanese : "mou ikkai onegaishimasu" ,  meaning : "one more time please"},
        { japanese : "hon" ,  meaning : "book"},
        { japanese : "shimbun" ,  meaning : "newspaper"},
        { japanese : "tokei" ,  meaning : "clock"},
        { japanese : "kagi" ,  meaning : "key"},
        { japanese : "denwa" ,  meaning : "phone"},
        { japanese : "kuruma" ,  meaning : "car"},
        { japanese : "juusho" ,  meaning : "address"},
        { japanese : "nan-ban?" ,  meaning : "what number?"},
        
        
        
        
        // lesson 3
        { japanese : "nan-kai" ,  meaning : "how many times?"},
        { japanese : "nan-ji" ,  meaning : "what hour?"},
        { japanese : "kara" ,  meaning : "from"},
        { japanese : "made" ,  meaning : "until"},
        { japanese : "gogo" ,  meaning : "pm"},
        { japanese : "gozen" ,  meaning : "am"},
        { japanese : "すみません" ,  meaning : "excuse me,  I'm sorry"},
        { japanese : "いま" ,  meaning : "now"},
        { japanese : "なんじ" ,  meaning : "what time?"},
        { japanese : "おんなの　ひと" ,  meaning : "female, woman"},
        { japanese : "depato" ,  meaning : "department store"},
        { japanese : "から" ,  meaning : "from"},
        { japanese : "まで" ,  meaning : "until"},
        { japanese : "ごご" ,  meaning : "pm"},
        { japanese : "どう　いたしまして" ,  meaning : "don't mention it , you're welcome, not at all"},
        { japanese : "han" ,  meaning : "half"},
        { japanese : "…nen…gatsu…nichi" ,  meaning : "…year…month…day"},
        { japanese : "hiru-yasumi" ,  meaning : "noon break"},
        { japanese : "1-ji han" ,  meaning : "half past 1"},
        { japanese : "6-gatsu 18 nichi" ,  meaning : "6 month 18th day"},
        { japanese : "ashita" ,  meaning : "tomorrow"},
        { japanese : "tanjoobi" ,  meaning : "birthday"},
        { japanese : "kinoo" ,  meaning : "yesterday"},
        { japanese : "kyoo" ,  meaning : "today"},
        
        
        
        // numbers
        { japanese : "zero / rei" ,  meaning : "0"},
        { japanese : "ichi" ,  meaning : "1"},
        { japanese : "ni" ,  meaning : "2"},
        { japanese : "san" ,  meaning : "3"},
        { japanese : "shi/yon" ,  meaning : "4"},
        { japanese : "go" ,  meaning : "5"},
        { japanese : "roku" ,  meaning : "6"},
        { japanese : "shichi / nana" ,  meaning : "7"},
        { japanese : "hachi" ,  meaning : "8"},
        { japanese : "kyu / ku" ,  meaning : "9"},
        { japanese : "ju" ,  meaning : "10"},
        { japanese : "juichi" ,  meaning : "11"},
        { japanese : "juni" ,  meaning : "12"},
        { japanese : "jusan" ,  meaning : "13"},
        { japanese : "jushi / juyon" ,  meaning : "14"},
        { japanese : "jugo" ,  meaning : "15"},
        { japanese : "juroku" ,  meaning : "16"},
        { japanese : "jushichi / junana" ,  meaning : "17"},
        { japanese : "juhachi" ,  meaning : "18"},
        { japanese : "jukyu / juku" ,  meaning : "19"},
        { japanese : "niju" ,  meaning : "20"},
        { japanese : "sanju" ,  meaning : "30"},
        { japanese : "yonju" ,  meaning : "40"},
        { japanese : "goju" ,  meaning : "50"},
        { japanese : "rokuju" ,  meaning : "60"},
        { japanese : "shichiju, naniju" ,  meaning : "70"},
        { japanese : "hachiju" ,  meaning : "80"},
        { japanese : "kyuujuu" ,  meaning : "90"},
        { japanese : "hyaku" ,  meaning : "100"},
        { japanese : "nihyaku" ,  meaning : "200"},
        { japanese : "sambyaku" ,  meaning : "300"},
        { japanese : "yonhyaku" ,  meaning : "400"},
        { japanese : "gohyaku" ,  meaning : "500"},
        { japanese : "roppyaku" ,  meaning : "600"},
        { japanese : "nanahyaku" ,  meaning : "700"},
        { japanese : "happyaku" ,  meaning : "800"},
        { japanese : "kyuhyaku" ,  meaning : "900"},
        { japanese : "sen" ,  meaning : "1000"},
        { japanese : "nisen" ,  meaning : "2000"},
        { japanese : "sanzen" ,  meaning : "3000"},
        { japanese : "yonsen" ,  meaning : "4000"},
        { japanese : "gosen" ,  meaning : "5000"},
        { japanese : "rokusen" ,  meaning : "6000"},
        { japanese : "nanasen" ,  meaning : "7000"},
        { japanese : "hassen" ,  meaning : "8000"},
        { japanese : "kyuusen" ,  meaning : "9000"},
        { japanese : "ichiman" ,  meaning : "10000"},
        { japanese : "juman" ,  meaning : "100000"},
        { japanese : "hyakuman" ,  meaning : "1000000"},
        { japanese : "senman" ,  meaning : "10000000"},
        
        
        
        
        { japanese : "gakko" ,  meaning : "okul"},
        { japanese : "paati" ,  meaning : "party"},
        { japanese : "eiga" ,  meaning : "movie"},
        { japanese : "kaigi" ,  meaning : "conference, meeting"},
        { japanese : "yubinkyoku" ,  meaning : "post office"},
        { japanese : "shigoto" ,  meaning : "work"},
        { japanese : "nan-nichi" ,  meaning : "which day (of the month)"},
        { japanese : "nan-yoobi" ,  meaning : "which day of the week)"},
        { japanese : "natsu-yasumi" ,  meaning : "summer vacation"},
        { japanese : "natsu" ,  meaning : "summer"},
        
        
        // days
        { japanese : "nichi-yoobi" ,  meaning : "Sunday"},
        { japanese : "getsu-yoobi" ,  meaning : "Monday"},
        { japanese : "ka-yoobi" ,  meaning : "Tuesday"},
        { japanese : "sui-yoobi" ,  meaning : "Wednesday"},
        { japanese : "moku-yoobi" ,  meaning : "Thursday"},
        { japanese : "kin-yoobi" ,  meaning : "Friday"},
        { japanese : "do-yoobi" ,  meaning : "Saturday"},
        
        // months
        { japanese : "ichi-gatsu" ,  meaning : "january"},
        { japanese : "ni-gatsu" ,  meaning : "february"},
        { japanese : "san-gatsu" ,  meaning : "march"},
        { japanese : "shi-gatsu" ,  meaning : "april"},
        { japanese : "go-gatsu" ,  meaning : "may"},
        { japanese : "roku-gatsu" ,  meaning : "june"},
        { japanese : "shichi-gatsu" ,  meaning : "july"},
        { japanese : "hachi-gatsu" ,  meaning : "august"},
        { japanese : "ku-gatsu" ,  meaning : "september"},
        { japanese : "ju-gatsu" ,  meaning : "october"},
        { japanese : "juichi-gatsu" ,  meaning : "november"},
        { japanese : "juni-gatsu" ,  meaning : "december"},
        
        // ordinal numbers
        { japanese : "tsuitachi" ,  meaning : "1st"},
        { japanese : "futsuka" ,  meaning : "2nd"},
        { japanese : "mikka" ,  meaning : "3rd"},
        { japanese : "yokka" ,  meaning : "4th"},
        { japanese : "itsuka" ,  meaning : "5th"},
        { japanese : "muika" ,  meaning : "6th"},
        { japanese : "nanoka" ,  meaning : "7th"},
        { japanese : "yooka" ,  meaning : "8th"},
        { japanese : "kokonoka" ,  meaning : "9th"},
        { japanese : "tooka" ,  meaning : "10th"},
        { japanese : "juyokka" ,  meaning : "14th"},
        { japanese : "hatsuka" ,  meaning : "20th"},
        
        // lesson 4
        { japanese : "ten'in" ,  meaning : "store clerk"},
        { japanese : "irasshaimase" ,  meaning : "welcome"},
        { japanese : "sore" ,  meaning : "that"},
        { japanese : "o" ,  meaning : "particle"},
        { japanese : "misete kudasai" ,  meaning : "show me please"},
        { japanese : "misemasu(miseru)" ,  meaning : "to show"},
        { japanese : "ikura" ,  meaning : "how much"},
        { japanese : "senzen-en" ,  meaning : "3000 yen"},
        { japanese : "mo" ,  meaning : "de da eki"},
        { japanese : "ja" ,  meaning : "well then"},
        { japanese : "kudasai" ,  meaning : "please give me"},
        { japanese : "are" ,  meaning : "that"},
        { japanese : "kasa" ,  meaning : "umbrella"},
        { japanese : "terebi" ,  meaning : "tv"},
        { japanese : "rajio" ,  meaning : "radio"},
        { japanese : "teepurekoodaa" ,  meaning : "tape recorder"},
        { japanese : "haizara" ,  meaning : "ashtray"},
        { japanese : "mizu" ,  meaning : "water"},
        { japanese : "ringo" ,  meaning : "apple"},
        { japanese : "reshito" ,  meaning : "receipt"},
        
        
        
        
        
        
        
        // counting numbers
        { japanese : "hitotsu" ,  meaning : "bir tane"},
        { japanese : "futatsu" ,  meaning : "iki tane"},
        { japanese : "mittsu" ,  meaning : "üç tane"},
        { japanese : "yottsu" ,  meaning : "dört tane"},
        { japanese : "itsutsu" ,  meaning : "beş tane"},
        { japanese : "muttsu" ,  meaning : "altı tane"},
        { japanese : "nanatsu" ,  meaning : "yedi tane"},
        { japanese : "yattsu" ,  meaning : "sekiz tane"},
        { japanese : "kokonotsu" ,  meaning : "dokuz tane"},
        { japanese : "to" ,  meaning : "on tane"},
        { japanese : "juichi" ,  meaning : "onbir tane"},
        { japanese : "juni" ,  meaning : "oniki tane"},
        
        
        
        
        // lesson 5
        { japanese : "sono" ,  meaning : "that"},
        { japanese : "kamera" ,  meaning : "camera"},
        { japanese : "kamera-ya" ,  meaning : "camera store, camera seller"},
        { japanese : "dore" ,  meaning : "which"},
        { japanese : "chiisai" ,  meaning : "small"},
        { japanese : "sorekara" ,  meaning : "and"},
        { japanese : "fuirumu" ,  meaning : "film"},
        { japanese : "kono" ,  meaning : "this"},
        { japanese : "denchi" ,  meaning : "battery"},
        { japanese : "ano" ,  meaning : "that"},
        { japanese : "igirusu" ,  meaning : "england"},
        { japanese : "furansu" ,  meaning : "france"},
        { japanese : "doko" ,  meaning : "where"},
        { japanese : "akai" ,  meaning : "red"},
        { japanese : "teepu" ,  meaning : "tape"},
        { japanese : "ookii" ,  meaning : "big"},
        { japanese : "mikan" ,  meaning : "tangerine"},
        { japanese : "2-kiro" ,  meaning : "2 kg"},
        { japanese : "kitte" ,  meaning : "post stamp"},
        { japanese : "biru" ,  meaning : "beer"},
        { japanese : "10-mai" ,  meaning : "10 (sheets)"},
        { japanese : "10-hon" ,  meaning : "10 (bottles)"},
        { japanese : "dono" ,  meaning : "which"},
        { japanese : "aoi" ,  meaning : "blue"},
        { japanese : "kuroi" ,  meaning : "black"},
        
        
        // lesson 6
        { japanese : "shutcho" ,  meaning : "business trip"},
        { japanese : "ni" ,  meaning : "to"},
        { japanese : "ikimasu" ,  meaning : "to go"},
        { japanese : "Kyooto" ,  meaning : "Kyoto"},
        { japanese : "shisha" ,  meaning : "branch office"},
        { japanese : "hitori de" ,  meaning : "alone"},
        { japanese : "to" ,  meaning : "with"},
        { japanese : "Oosaka" ,  meaning : "Osaka"},
        { japanese : "Tookyoo" ,  meaning : "Tokyo"},
        { japanese : "kaerimasu (kaeru)" ,  meaning : "to return "},
        { japanese : "asatte" ,  meaning : "the day after tomorrow"},
        { japanese : "soshite" ,  meaning : "and then, besides"},
        { japanese : "densha" ,  meaning : "train"},
        { japanese : "eki" ,  meaning : "station"},
        { japanese : "senshuu" ,  meaning : "last week"},
        { japanese : "kyonen" ,  meaning : "last year"},
        { japanese : "kara" ,  meaning : "from"},
        { japanese : "kimasu" ,  meaning : "to come"},
        { japanese : "rainen" ,  meaning : "next year"},
        { japanese : "tomodachi" ,  meaning : "friend"},
        { japanese : "basu" ,  meaning : "bus"},
        { japanese : "chikatetsu" ,  meaning : "subway"},
        { japanese : "sengetsu" ,  meaning : "last month"},
        { japanese : "ga" ,  meaning : "subject marker"},
        { japanese : "kuukoo" ,  meaning : "airport"},
        { japanese : "otoko no hito" ,  meaning : "man"},
        { japanese : "otoko" ,  meaning : "male, man"},
        
        // lesson 7
        { japanese : "yoku irasshaimashita" ,  meaning : "welcome"},
        { japanese : "yoku" ,  meaning : "well"},
        { japanese : "irrashaimashita" ,  meaning : "came"},
        { japanese : "irrashaimasu (irassharu)" ,  meaning : "to come (polite)"},
        { japanese : "ohairi kudasai" ,  meaning : "do come in"},
        { japanese : "hairimasu (hairu)" ,  meaning : "to enter"},
        { japanese : "shitsurei shimasu" ,  meaning : "may I? (I'm afraid I'll be disturbing you)"},
        { japanese : "kochira e" ,  meaning : "this way"},
        { japanese : "kochira" ,  meaning : "this direction"},
        { japanese : "de" ,  meaning : "by"},
        { japanese : "takushi" ,  meaning : "taxi"},
        { japanese : "okake kudasai" ,  meaning : "please have a seat"},
        { japanese : "kakemasu (kakeru)" ,  meaning : "sit"},
        { japanese : "ni" ,  meaning : "on"},
        { japanese : "Kanada" ,  meaning : "Canada"},
        { japanese : "ototoi" ,  meaning : "the day before yesterday"},
        { japanese : "raishuu" ,  meaning : "next week"},
        { japanese : "raigetsu" ,  meaning : "next month"},
        { japanese : "nan de" ,  meaning : "how, by what means"},
        { japanese : "nan-nen" ,  meaning : "what year?"},
        
        
        // lesson 8
        { japanese : "ima" ,  meaning : "living room"},
        { japanese : "ni" ,  meaning : "in"},
        { japanese : "isu" ,  meaning : "chair"},
        { japanese : "ya" ,  meaning : "and (etc.)"},
        { japanese : "teeburu" ,  meaning : "table"},
        { japanese : "arimasu (aru)" ,  meaning : "to exist, to be (inanimate)"},
        { japanese : "ue" ,  meaning : "above, top"},
        { japanese : "to" ,  meaning : "and"},
        { japanese : "hana" ,  meaning : "flower"},
        { japanese : "okusan" ,  meaning : "wife"},
        { japanese : "imasu (iru)" ,  meaning : "to exist, to be (animate)"},
        { japanese : "niwa" ,  meaning : "garden"},
        { japanese : "otoko no ko" ,  meaning : "boy (male child)"},
        { japanese : "ko" ,  meaning : "child"},
        { japanese : "daidokoro" ,  meaning : "kitchen"},
        { japanese : "dare mo… -masen" ,  meaning : "there isn't anybody"},
        { japanese : "ikkai" ,  meaning : "first floow"},
        { japanese : "hako" ,  meaning : "box"},
        { japanese : "naka" ,  meaning : "inside"},
        { japanese : "hagaki" ,  meaning : "postcard"},
        { japanese : "tana" ,  meaning : "shelf"},
        { japanese : "shashin" ,  meaning : "photograph"},
        { japanese : "mado" ,  meaning : "window"},
        { japanese : "chikaku" ,  meaning : "near, close to"},
        { japanese : "onna no ko" ,  meaning : "girl (female child)"},
        { japanese : "genkan" ,  meaning : "entrance hall"},
        { japanese : "todana" ,  meaning : "cabinet"},
        { japanese : "mae" ,  meaning : "in front of, before"},
        { japanese : "kodomo" ,  meaning : "child"},
        { japanese : "shokudoo" ,  meaning : "dining room"},
        { japanese : "otearai" ,  meaning : "lavatory"},
        { japanese : "nani mo … -masen" ,  meaning : "there isn't anything"},
        { japanese : "shita" ,  meaning : "under"},
        { japanese : "biru" ,  meaning : "building"},
        { japanese : "asoko" ,  meaning : "over there"},
        { japanese : "uketsuke" ,  meaning : "reception (desk)"},
        { japanese : "ne" ,  meaning : "you see.. (isn't there?)"},
        
        
        
        // lesson 9
        { japanese : "kanrinin" ,  meaning : "superintendent"},
        { japanese : "yo" ,  meaning : "I tell you (particle)"},
        { japanese : "suupaa" ,  meaning : "supermarket"},
        { japanese : "tonari" ,  meaning : "next to"},
        { japanese : "posuto" ,  meaning : "mail box, post box"},
        { japanese : "kara" ,  meaning : "so, because"},
        { japanese : "wakarimasu (wakaru)" ,  meaning : "understand, see"},
        { japanese : "tatemono" ,  meaning : "building"},
        { japanese : "takusan" ,  meaning : "many, lots of"},
        { japanese : "hon-ya" ,  meaning : "book store"},
        { japanese : "5-nin" ,  meaning : "5 people"},
        { japanese : "takushi-noriba" ,  meaning : "taxi stand"},
        { japanese : "byooin" ,  meaning : "hospital"},
        { japanese : "futari" ,  meaning : "2 people"},
        { japanese : "hitori" ,  meaning : "1 person"},
        { japanese : "ikutsu" ,  meaning : "how many"},
        { japanese : "nan-mai" ,  meaning : "how many sheets"},
        { japanese : "nan-bon" ,  meaning : "how many bottles"},
        { japanese : "nan-nin" ,  meaning : "how many people"},
        { japanese : "kippu-uriba" ,  meaning : "ticket office"},
        { japanese : "iriguchi" ,  meaning : "entrance"},
        { japanese : "kusuri-ya" ,  meaning : "pharmacy"},
        { japanese : "kusuri" ,  meaning : "medicine"},
        { japanese : "niku-ya" ,  meaning : "meat store"},
        { japanese : "niku" ,  meaning : "meat"},
        { japanese : "yaoya" ,  meaning : "vegetable store"},
        { japanese : "sakana-ya" ,  meaning : "fish store"},
        { japanese : "sakana" ,  meaning : "fish"},
        { japanese : "pan-ya" ,  meaning : "bread store"},
        { japanese : "pan" ,  meaning : "bread"},
        { japanese : "saka-ya" ,  meaning : "liquor store"},
        { japanese : "soko" ,  meaning : "there, that place"},
        { japanese : "koko" ,  meaning : "here, this place"},
        { japanese : "megane" ,  meaning : "eye glasses"},
        { japanese : "heya" ,  meaning : "room"},
        { japanese : "basu-noriba" ,  meaning : "bus terminal"},
        { japanese : "kaisatsuguchi" ,  meaning : "ticket gate"},
        { japanese : "kooban" ,  meaning : "police box"},
        { japanese : "yasumi" ,  meaning : "holiday"},
        { japanese : "dooshite" ,  meaning : "why"},
        { japanese : "hikooki" ,  meaning : "airplane"},
        { japanese : "hikooki" ,  meaning : "airplane"},
        
        
        // lesson 10
        { japanese : "shuumatsu" ,  meaning : "weekend"},
        { japanese : "shimasu (suru)" ,  meaning : "to do"},
        { japanese : "kabuki" ,  meaning : "kabuki (japanese theater)"},
        { japanese : "mimasu (miru)" ,  meaning : "see"},
        { japanese : "ii desu ne" ,  meaning : "it's nice (all right)"},
        { japanese : "mou" ,  meaning : "already"},
        { japanese : "kaimashita" ,  meaning : "bought"},
        { japanese : "kaimasu (kau)" ,  meaning : "to buy"},
        { japanese : "pureigaido" ,  meaning : "theater booking agency"},
        { japanese : "de" ,  meaning : "at (particle)"},
        { japanese : "mainichi" ,  meaning : "everyday"},
        { japanese : "benkyoo o shimasu (suru)" ,  meaning : "to study"},
        { japanese : "resutoran" ,  meaning : "restaurant"},
        { japanese : "gohan" ,  meaning : "meal"},
        { japanese : "hiru-gohan" ,  meaning : "lunch"},
        { japanese : "tabemasu (taberu)" ,  meaning : "eat"},
        { japanese : "e" ,  meaning : "picture"},
        { japanese : "kikimasu" ,  meaning : "to listen, to ask"},
        { japanese : "nyuusu" ,  meaning : "news"},
        { japanese : "ongaku" ,  meaning : "music"},
        { japanese : "rekoodoo" ,  meaning : "record"},
        { japanese : "shiidii" ,  meaning : "cd"},
        { japanese : "asa-gohan" ,  meaning : "breakfast"},
        { japanese : "asa" ,  meaning : "morning"},
        { japanese : "ban-gohan" ,  meaning : "dinner"},
        { japanese : "ban" ,  meaning : "evening"},
        { japanese : "sandoitchi" ,  meaning : "sandwich"},
        { japanese : "sarada" ,  meaning : "salad"},
        { japanese : "o-cha" ,  meaning : "tea"},
        { japanese : "o-sake" ,  meaning : "rice wine"},
        { japanese : "suupu" ,  meaning : "soup"},
        { japanese : "zasshi" ,  meaning : "magazine"},
        { japanese : "chizu" ,  meaning : "map"},
        { japanese : "yomimasu (yomu)" ,  meaning : "to read"},
        { japanese : "tegami" ,  meaning : "letter"},
        { japanese : "kaimono" ,  meaning : "shopping"},
        { japanese : "tenisu" ,  meaning : "tennis"},
        { japanese : "komban" ,  meaning : "this evening"},
        { japanese : "kissaten" ,  meaning : "coffee shop"},
        { japanese : "koohii" ,  meaning : "coffee"},
        { japanese : "nomimasu (nomu)" ,  meaning : "drink"},
        { japanese : "maiasa" ,  meaning : "every morning"},
        { japanese : "koocha" ,  meaning : "black tea"},
        { japanese : "miruku" ,  meaning : "milk"},
        { japanese : "juusu" ,  meaning : "juice"},
        { japanese : "kutsu" ,  meaning : "shoes"},
        { japanese : "maiban" ,  meaning : "every evening"},
        { japanese : "maishuu" ,  meaning : "every week"},
        { japanese : "kazoku" ,  meaning : "(my) family"},
        
        
        // lesson 11
        { japanese : "kotoshi" ,  meaning : "this year"},
        { japanese : "takidoki" ,  meaning : "sometimes"},
        { japanese : "shokudoo" ,  meaning : "cafeteria"},
        { japanese : "goro" ,  meaning : "about"},
        { japanese : "7-ji goro" ,  meaning : "about 7 o'clock"},
        { japanese : "kaigi o shimasu" ,  meaning : "to hold a meeting, conference"},
        
        
        // lesson 12
        { japanese : "moshi moshi" ,  meaning : "hello"},
        { japanese : "o-taku" ,  meaning : "(his) residence"},
        { japanese : "go-shujin" ,  meaning : "(your) husband"},
        { japanese : "irasshaimasu" ,  meaning : "is (polite for imasu)"},
        { japanese : "mata" ,  meaning : "again"},
        { japanese : "ato de" ,  meaning : "afterwards"},
        { japanese : "onegaishimasu" ,  meaning : "please do"},
        { japanese : "shitsurei shimasu" ,  meaning : "good-bye"},
        { japanese : "aimasu" ,  meaning : "meet"},
        { japanese : "denwa o shimasu" ,  meaning : "make a phone call"},
        { japanese : "yoku" ,  meaning : "often"},
        { japanese : "kakimasu" ,  meaning : "to write"},
        { japanese : "amari … masen" ,  meaning : "does not … often"},
        { japanese : "oshiemasu" ,  meaning : "to tell"},
        { japanese : "mainen" ,  meaning : "every year"},
        { japanese : "kurisumasu kaadı" ,  meaning : "christmas card"},
        { japanese : "nengajoo" ,  meaning : "new year's card"},
        { japanese : "haha" ,  meaning : "mother"},
        { japanese : "hoteru" ,  meaning : "hotel"},
        { japanese : "oshiemasu" ,  meaning : "to tell"},
        { japanese : "mise" ,  meaning : "store, shop"},
        { japanese : "naisen-bango" ,  meaning : "extension number"},
        { japanese : "sensei" ,  meaning : "teacher"},
        { japanese : "otoosan" ,  meaning : "(your) father"},
        { japanese : "okaasan" ,  meaning : "(your) mother"},
        { japanese : "zenzen …masen" ,  meaning : "never"},
        { japanese : "chigaimasu" ,  meaning : "that's wrong"},
        { japanese : "kookanshu" ,  meaning : "switchboard operator"},
        { japanese : "shooshoo" ,  meaning : "a moment"},
        { japanese : "omachi kudasai" ,  meaning : "please wait"},
        { japanese : "machimasu" ,  meaning : "to wait"},
        { japanese : "jogingu o shimasu" ,  meaning : "to do jogging"},
        
        
        // lesson 13
        { japanese : "o-kashi" ,  meaning : "cake"},
        { japanese : "ikaga desu ka?" ,  meaning : "how about?"},
        { japanese : "ikaga" ,  meaning : "how?"},
        { japanese : "itadakimasu" ,  meaning : "to eat (polite for tabemasu)"},
        { japanese : "kirei-na" ,  meaning : "pretty"},
        { japanese : "meshiagatte kudasai" ,  meaning : "please eat, have some"},
        { japanese : "totemo" ,  meaning : "very"},
        { japanese : "oishii" ,  meaning : "tasty , delicious"},
        { japanese : "moo" ,  meaning : "more (another)"},
        { japanese : "ippai" ,  meaning : "1 cup of"},
        { japanese : "hai / bai / pai" ,  meaning : "counter particles"},
        { japanese : "iie, moo kekkoo desu" ,  meaning : "no, already ok"},
        { japanese : "amari… nai, ...masen" ,  meaning : "not very"},
        { japanese : "shizuka-na" ,  meaning : "quiet"},
        { japanese : "tamago" ,  meaning : "egg"},
        { japanese : "takai" ,  meaning : "expensive"},
        { japanese : "yasui" ,  meaning : "cheap"},
        { japanese : "gyuu-niku" ,  meaning : "beef"},
        { japanese : "tori-niku" ,  meaning : "chicken meat"},
        { japanese : "atarashii" ,  meaning : "new, fresh"},
        { japanese : "furui" ,  meaning : "old, not fresh"},
        { japanese : "yasai" ,  meaning : "vegetable"},
        { japanese : "yasashii" ,  meaning : "easy"},
        { japanese : "muzukashii" ,  meaning : "difficult"},
        { japanese : "omoshiroi" ,  meaning : "interesting"},
        { japanese : "kooen" ,  meaning : "park"},
        { japanese : "benri-na" ,  meaning : "convenient"},
        { japanese : "watashi-tachi" ,  meaning : "we"},
        { japanese : "shokuji o shimasu" ,  meaning : "to have a meal"},
        { japanese : "shokuji" ,  meaning : "meal"},
        { japanese : "yuumei-na" ,  meaning : "famous"},
        { japanese : "genki-na" ,  meaning : "well, healthy"},
        { japanese : "shinsetsu-na" ,  meaning : "kind, helpful"},
        { japanese : "hima-na" ,  meaning : "free"},
        { japanese : "isogashii" ,  meaning : "busy"},
        { japanese : "donna" ,  meaning : "what kind of?"},
        { japanese : "tenki" ,  meaning : "weather"},
        { japanese : "hontoo ni" ,  meaning : "really, truly"},
        { japanese : "20-pun gurai" ,  meaning : "about 20 minutes"},
        { japanese : "gurai" ,  meaning : "about, approximately"},
        { japanese : "ki" ,  meaning : "tree"},
        
        // lesson 14
        { japanese : "doo deshita ka?" ,  meaning : "how was it?"},
        { japanese : "doo" ,  meaning : "how"},
        { japanese : "wakarimasu" ,  meaning : "to understand"},
        { japanese : "zenzen… masen" ,  meaning : "not at all"},
        { japanese : "iyahoon" ,  meaning : "earphones"},
        { japanese : "ei-go" ,  meaning : "english"},
        { japanese : "setsumei" ,  meaning : "explanation"},
        { japanese : "sumukatta" ,  meaning : "was cold"},
        { japanese : "atsukunakatta" ,  meaning : "was not hot"},
        { japanese : "nigiyaka-na" ,  meaning : "lively, bustling"},
        { japanese : "tanoshii" ,  meaning : "enjoyable"},
        { japanese : "machi" ,  meaning : "town, street"},
        { japanese : "ryokoo" ,  meaning : "trip"},
        { japanese : "gorufu" ,  meaning : "golf"},
        { japanese : "ryoori" ,  meaning : "food, cooking"},
        
        
        // lesson 15
        { japanese : "kabin" ,  meaning : "vase"},
        { japanese : "moraimasu" ,  meaning : "to receive"},
        { japanese : "iro" ,  meaning : "color"},
        { japanese : "suki-na" ,  meaning : "likable, favorite"},
        { japanese : "agemasu" ,  meaning : "to give"},
        { japanese : "jisho" ,  meaning : "dictionary"},
        { japanese : "chichi" ,  meaning : "(my) father"},
        { japanese : "ane" ,  meaning : "(my) elder sister"},
        { japanese : "nekutai" ,  meaning : "necktie"},
        { japanese : "rekishi" ,  meaning : "history"},
        { japanese : "kanai" ,  meaning : "(my) wife"},
        
        
        // lesson 16
        { japanese : "sukii" ,  meaning : "skiing"},
        { japanese : "issho ni" ,  meaning : "together with"},
        { japanese : "aimashoo ka" ,  meaning : "shall we meet?"},
        { japanese : "wakarimashite" ,  meaning : "sure, certainly"},
        { japanese : "zannen desu ga" ,  meaning : "I'm sorry but…"},
        { japanese : "zannen-na" ,  meaning : "regrettable"},
        { japanese : "tsugoo ga warui" ,  meaning : "I am unable (conditions are bad)"},
        { japanese : "tsugoo" ,  meaning : "conditions"},
        { japanese : "haikingu" ,  meaning : "hiking"},
        { japanese : "doraibu" ,  meaning : "driving,  a drive"},
        { japanese : "sanpo o shimasu" ,  meaning : "to take a walk"},
        { japanese : "umi" ,  meaning : "sea"},
        { japanese : "akachan" ,  meaning : "baby(other's)"},
        { japanese : "supuun" ,  meaning : "spoon"},
        { japanese : "koppu" ,  meaning : "mug"},
        
        
        
        // lesson 17
        { japanese : "soobetsukai" ,  meaning : "farewell party"},
        { japanese : "zehi" ,  meaning : "I'd like to (by all means)"},
        { japanese : "dochira" ,  meaning : "where (polite)"},
        { japanese : "kakimashoo ka" ,  meaning : "shall I draw?"},
        { japanese : "akemashoo ka" ,  meaning : "shall I open?"},
        { japanese : "akemasu" ,  meaning : "to open"},
        { japanese : "keshimasu" ,  meaning : "to turn off"},
        { japanese : "doa" ,  meaning : "door"},
        { japanese : "shimemasu" ,  meaning : "close"},
        { japanese : "kangeikai" ,  meaning : "welcome party"},
        { japanese : "demo" ,  meaning : "but"},
        { japanese : "bideo" ,  meaning : "video"},
        { japanese : "kurai" ,  meaning : "dark"},
        { japanese : "denki" ,  meaning : "electric (light)"},
        { japanese : "tsukemasu" ,  meaning : "to turn on"},
        { japanese : "urusai" ,  meaning : "noisy"},
        { japanese : "hiitaa" ,  meaning : "heater"},
        { japanese : "kopii" ,  meaning : "photocopy"},
        
        
        
        // lesson 18
        { japanese : "arimasu" ,  meaning : "to have"},
        { japanese : "jikan" ,  meaning : "time"},
        { japanese : "kyoodai" ,  meaning : "brothers, sisters"},
        { japanese : "o-kane" ,  meaning : "money"},
        { japanese : "kongetsu" ,  meaning : "this month"},
        { japanese : "yasumi" ,  meaning : "vacation, day off"},
        { japanese : "jugyoo" ,  meaning : "class"},
        { japanese : "kekkon-shiki" ,  meaning : "wedding"},
        { japanese : "kekkon" ,  meaning : "marriage"},
        { japanese : "shiki" ,  meaning : "ceremony"},
        { japanese : "imooto-san" ,  meaning : "(your) younger sister"},
        { japanese : "chotto" ,  meaning : "a little"},
        { japanese : "okosan" ,  meaning : "(your) son"},
        { japanese : "musuko" ,  meaning : "(my) son"},
        { japanese : "musume" ,  meaning : "(my) daughter"},
        { japanese : "musuko-san" ,  meaning : "(your) son"},
        { japanese : "nan-sai" ,  meaning : "how many years"},
        { japanese : "ojoo-san" ,  meaning : "(your) daughter"},
        
        
        
        // lesson 19
        { japanese : "imasu" ,  meaning : "to stay, to be"},
        { japanese : "konshuu" ,  meaning : "this week"},
        { japanese : "mikka" ,  meaning : "for 3 days"},
        { japanese : "dake" ,  meaning : "only"},
        { japanese : "sorekara" ,  meaning : "after that"},
        { japanese : "o-tera" ,  meaning : "temple"},
        { japanese : "shigoto no ato de" ,  meaning : "after work"},
        { japanese : "no ato de" ,  meaning : "after…"},
        { japanese : "2-jikan" ,  meaning : "2 hours"},
        { japanese : "asa-gohan no mae ni" ,  meaning : "before breakfast"},
        { japanese : "no mae ni" ,  meaning : "before…"},
        { japanese : "donogurai" ,  meaning : "how long?"},
        { japanese : "4-shukan" ,  meaning : "4 weeks"},
        { japanese : "sukoshi" ,  meaning : "a little"},
        
        
        // lesson 20
        { japanese : "mottekite kudasai" ,  meaning : "please bring"},
        { japanese : "mottekimasu" ,  meaning : "to bring"},
        { japanese : "nan-ji made ni" ,  meaning : "by what time?"},
        { japanese : "made ni" ,  meaning : "by"},
        { japanese : "todokemasu" ,  meaning : "to deliver"},
        { japanese : "todokete kudasai" ,  meaning : "please deliver"},
        { japanese : "iimasu" ,  meaning : "to say"},
        { japanese : "itte kudasai" ,  meaning : "please say"},
        { japanese : "maido" ,  meaning : "each time"},
        { japanese : "maido arigatoo kudasai" ,  meaning : "thank you each time"},
        { japanese : "matte kudasai" ,  meaning : "please wait"},
        { japanese : "tsugi" ,  meaning : "next"},
        { japanese : "kado" ,  meaning : "corner"},
        { japanese : "migi" ,  meaning : "right"},
        { japanese : "magatte kudasai" ,  meaning : "please turn"},
        { japanese : "magarimasu" ,  meaning : "turn"},
        { japanese : "taipu" ,  meaning : "typing"},
        { japanese : "menyuu" ,  meaning : "menu"},
        { japanese : "yukkuri" ,  meaning : "slowly"},
        { japanese : "keeki" ,  meaning : "cake"},
        { japanese : "shingoo" ,  meaning : "traffic light"},
        { japanese : "koosaten" ,  meaning : "intersection"},
        { japanese : "hidari" ,  meaning : "left"},
        { japanese : "ueitoresu" ,  meaning : "waitress"},
        
        
        // lesson 21
        { japanese : "untenshu" ,  meaning : "driver"},
        { japanese : "massugu" ,  meaning : "straight ahead"},
        { japanese : "temae" ,  meaning : "just before"},
        { japanese : "tomete kudasai" ,  meaning : "stop please"},
        { japanese : "tomemasu" ,  meaning : "to stop"},
        { japanese : "otsuri" ,  meaning : "change"},
        { japanese : "doomo" ,  meaning : "thanks (colloquial)"},
        { japanese : "yoyaku" ,  meaning : "reservation"},
        { japanese : "nan nin-sama" ,  meaning : "how many people?"},
        { japanese : "sama" ,  meaning : "polite form of san"},
        { japanese : "kuriningu" ,  meaning : "dry cleaning"},
        { japanese : "dekimasu" ,  meaning : "be ready (finished, done)"},
        { japanese : "mada desu" ,  meaning : "not yet"},
        { japanese : "mada" ,  meaning : "yet"},
        
        
        
        // lesson22
        { japanese : "dooyatte" ,  meaning : "how?"},
        { japanese : "norimasu" ,  meaning : "to take, to get on"},
        { japanese : "orimasu" ,  meaning : "to get off"},
        { japanese : "made" ,  meaning : "to, as far as"},
        { japanese : "arukimasu" ,  meaning : "to walk"},
        { japanese : "kakarimasu" ,  meaning : "to take (it takes)"},
        { japanese : "demasu" ,  meaning : "to leave"},
        { japanese : "tsukimasu" ,  meaning : "to arrive"},
        { japanese : "yuugata" ,  meaning : "late afternoon, early evening"},
        
        
        
        // lesson 23
        { japanese : "denki-ya" ,  meaning : "electrical appliance store"},
        { japanese : "katarogu" ,  meaning : "catalogue"},
        { japanese : "keesu" ,  meaning : "showcase"},
        { japanese : "tsukete mo ii desu ka?" ,  meaning : "may I turn it on?"},
        { japanese : "shashin o totte mo ii desu ka?" ,  meaning : "may I take a photograph?"},
        { japanese : "shashin o torimasu" ,  meaning : "to take a photo"},
        { japanese : "tsukatte mo ii desu" ,  meaning : "you may use it"},
        { japanese : "tsukaimasu" ,  meaning : "to use"},
        { japanese : "pen" ,  meaning : "pen"},
        { japanese : "subarashii" ,  meaning : "wonderful"},
        { japanese : "saa" ,  meaning : "well"},
        
        
        
        // lesson 24
        { japanese : "keikan" ,  meaning : "policeman"},
        { japanese : "moshi moshi" ,  meaning : "I say"},
        { japanese : "chuusha kinshi" ,  meaning : "no parking"},
        { japanese : "tomenaide kudasai" ,  meaning : "do not park"},
        { japanese : "tomemasu" ,  meaning : "to park"},
        { japanese : "chuushajoo" ,  meaning : "parking lot"},
        { japanese : "hidari-gawa" ,  meaning : "left handside"},
        { japanese : "tabako" ,  meaning : "tobacco"},
        { japanese : "suwanaide kudasai" ,  meaning : "do nor smoke"},
        { japanese : "suimasu" ,  meaning : "to smoke, to inhale"},
        { japanese : "deguchi" ,  meaning : "exit"},
        
        
        // lesson 25
        { japanese : "kaigi-shitsu" ,  meaning : "conference,  meeting room"},
        { japanese : "…shitsu" ,  meaning : "…room"},
        { japanese : "kaigi o shite imasu" ,  meaning : "is in conference"},
        { japanese : "suraido" ,  meaning : "slide"},
        { japanese : "mite imasu" ,  meaning : "is looking"},
        { japanese : "denwa o shite imasu" ,  meaning : "is phoning"},
        { japanese : "shigoto o shite imasu" ,  meaning : "is working"},
        { japanese : "hanashi o shimasu" ,  meaning : "to talk"},
        { japanese : "o-kyaku-san" ,  meaning : "client"},
        
        
        // lesson 26
        { japanese : "yorokonde" ,  meaning : "I'd be happy to"},
        { japanese : "hi" ,  meaning : "day"},
        { japanese : "omaneki arigatoo gozaimasu" ,  meaning : "thanks for your invitation"},
        { japanese : "wain" ,  meaning : "wine"},
        { japanese : "mina-san" ,  meaning : "everyone (excluding myself)"},
        { japanese : "minna" ,  meaning : "everyone"},
        { japanese : "osoi" ,  meaning : "late"},
        { japanese : "ki o tsukete" ,  meaning : "take care, be careful"},
        
        
        // lesson 27
        { japanese : "ani" ,  meaning : "(my) older brother"},
        { japanese : "o-niisan" ,  meaning : "(your) older brother"},
        { japanese : "ryokoo-gaisha" ,  meaning : "travel agency"},
        { japanese : "tsutomemasu" ,  meaning : "to hold a post, to be employed"},
        { japanese : "sumimasu" ,  meaning : "to live"},
        { japanese : "shitte imasu" ,  meaning : "I know"},
        { japanese : "chika 1-kai" ,  meaning : "first basement"},
        { japanese : "chika" ,  meaning : "basement (underground)"},
        { japanese : "utte imasu" ,  meaning : "to sell"},
        { japanese : "urimasu" ,  meaning : "to sell"},
        { japanese : "gaikoku" ,  meaning : "foreign country"},
        { japanese : "seetaa" ,  meaning : "sweater"},
        
        
        // lesson 28
        { japanese : "kagu" ,  meaning : "furniture"},
        { japanese : "tansu" ,  meaning : "chest or drawers"},
        { japanese : "tsukue" ,  meaning : "table"},
        { japanese : "iroirona koto" ,  meaning : "various things"},
        { japanese : "mise ni tsuite" ,  meaning : "about stores"},
        { japanese : "...ni tsuite" ,  meaning : "…about"},
        { japanese : "joozuna" ,  meaning : "good at"},
        { japanese : "dekimasu" ,  meaning : "to be able"},
        { japanese : "atama" ,  meaning : "head"},
        { japanese : "itai" ,  meaning : "aching"},
        { japanese : "yooroppa" ,  meaning : "europe"},
        { japanese : "nodo" ,  meaning : "throat"},
        { japanese : "onaka" ,  meaning : "stomach"},
        { japanese : "ha" ,  meaning : "tooth"},
        { japanese : "okuritai" ,  meaning : "I want to send"},
        { japanese : "okurimasu" ,  meaning : "to send"},
        { japanese : "yama" ,  meaning : "mountain"},
        { japanese : "toshokan" ,  meaning : "library"},
        { japanese : "kudamono" ,  meaning : "fruit"},
        { japanese : "tomato" ,  meaning : "tomato"},
        { japanese : "onsen" ,  meaning : "hot spring"},
        { japanese : "matsuri" ,  meaning : "festival"},
        { japanese : "kutsushita" ,  meaning : "socks"},
        { japanese : "isha" ,  meaning : "doctor"},
        { japanese : "doo shimashita ka?" ,  meaning : "what's the matter?"},
        { japanese : "kibun" ,  meaning : "feeling"},
        { japanese : "netsu" ,  meaning : "fever"},
        { japanese : "30-do" ,  meaning : "39 dgrees"},
        { japanese : "doozo o-daiji ni" ,  meaning : "look after yourself"},
        { japanese : "nimotsu" ,  meaning : "parcel"},
        { japanese : "kookuubin" ,  meaning : "airmail"},
        { japanese : "funabin" ,  meaning : "sea mail"},
        { japanese : "soo desu ne" ,  meaning : "let me see"},
        { japanese : "ikkagetsu" ,  meaning : "for one month"},
        { japanese : "…month" ,  meaning : "…month"},
        
        // lesson 29
        { japanese : "nomimono" ,  meaning : "beverage"},
        { japanese : "sukiyaki" ,  meaning : "sukiyaki"},
        { japanese : "dezaato" ,  meaning : "dessert"},
        { japanese : "meron" ,  meaning : "melon"},
        { japanese : "aisukuriimu" ,  meaning : "ice cream"},
        
        
        // lesson 30
        { japanese : "sensei" ,  meaning : "teacher"},
        { japanese : "konde imasu" ,  meaning : "crowded"},
        { japanese : "komimasu" ,  meaning : "to be crowded"},
        { japanese : "tokoro" ,  meaning : "place"},
        { japanese : "hoka" ,  meaning : "other"},
        { japanese : "guruupu" ,  meaning : "group"},
        { japanese : "tsukurimasu" ,  meaning : "form"},
        { japanese : "maitsuki" ,  meaning : "every month"},
        { japanese : "shakai" ,  meaning : "society, social conditions"},
        { japanese : "bunka" ,  meaning : "culture"},
        { japanese : "kangaekata" ,  meaning : "way of thinking"},
        { japanese : "keizai" ,  meaning : "economy"},
        { japanese : "seiji" ,  meaning : "politics"},
        { japanese : "saikin" ,  meaning : "nowadays"},
        { japanese : "tekisuto" ,  meaning : "text"},
        { japanese : "moo sugu" ,  meaning : "very soon"},
        { japanese : "atarashii no" ,  meaning : "new one"},
        { japanese : "…no" ,  meaning : "…new"},
        { japanese : "tanoshimi ni shite imasu" ,  meaning : "looking forward to"},
        { japanese : "mina-sama ni doozo yoroshiku" ,  meaning : "best regards to everyone"},
        { japanese : "mina-sama" ,  meaning : "everyone (politer than minna-san)"},
        { japanese : "...ni yoroshiku" ,  meaning : "best regards to…"},
        { japanese : "o-genki de" ,  meaning : "take care of yourself"},



        // adjectives
{ japanese : 'abunai' ,  meaning : 'dangerous'},
{ japanese : 'akai' ,  meaning : 'red'},
{ japanese : 'akarui' ,  meaning : 'bright'},
{ japanese : 'amai' ,  meaning : 'sweet'},
{ japanese : 'anzenna' ,  meaning : 'safe'},
{ japanese : 'aoi' ,  meaning : 'blue'},
{ japanese : 'atarashii' ,  meaning : 'new, fresh'},
{ japanese : 'atatakai' ,  meaning : 'warm'},
{ japanese : 'atsui' ,  meaning : 'hot'},
{ japanese : 'benrina' ,  meaning : 'convenient'},
{ japanese : 'chairoi' ,  meaning : 'brown'},
{ japanese : 'chiisai' ,  meaning : 'small'},
{ japanese : 'chikai' ,  meaning : 'near'},
{ japanese : 'daijina' ,  meaning : 'important'},
{ japanese : 'damena' ,  meaning : 'no good'},
{ japanese : 'fubenna' ,  meaning : 'inconvenient'},
{ japanese : 'furui' ,  meaning : 'old'},
{ japanese : 'fushinsetsuna' ,  meaning : 'unkind'},
{ japanese : 'genkina' ,  meaning : 'well, healthy'},
{ japanese : 'hayai' ,  meaning : 'fast, early'},
{ japanese : 'hetana' ,  meaning : 'unskillfull'},
{ japanese : 'hikui' ,  meaning : 'low'},
{ japanese : 'himana' ,  meaning : 'free'},
{ japanese : 'hiroi' ,  meaning : 'wide'},
{ japanese : 'ii' ,  meaning : 'good'},
{ japanese : 'iroirona' ,  meaning : 'various'},
{ japanese : 'isogashii' ,  meaning : 'busy'},
{ japanese : 'itai' ,  meaning : 'painful'},
{ japanese : 'joozuna' ,  meaning : 'skillful'},
{ japanese : 'karai' ,  meaning : 'hot, spicy'},
{ japanese : 'karui' ,  meaning : 'light'},
{ japanese : 'kiiroi' ,  meaning : 'yellow'},
{ japanese : 'kiraina' ,  meaning : 'unlikeable'},
{ japanese : 'kireina' ,  meaning : 'clean, pretty'},
{ japanese : 'kitanai' ,  meaning : 'dirty'},
{ japanese : 'kurai' ,  meaning : 'dark'},
{ japanese : 'kuroi' ,  meaning : 'black'},
{ japanese : 'midoriiro' ,  meaning : 'green'},
{ japanese : 'mijikai' ,  meaning : 'short'},
{ japanese : 'murasaki' ,  meaning : 'purple'},
{ japanese : 'muzukashii' ,  meaning : 'difficult'},
{ japanese : 'nagai' ,  meaning : 'long'},
{ japanese : 'nigiyakana' ,  meaning : 'lively'},
{ japanese : 'oishii' ,  meaning : 'delicious'},
{ japanese : 'omoi' ,  meaning : 'heavy'},
{ japanese : 'omoshiroi' ,  meaning : 'interesting'},
{ japanese : 'ooi' ,  meaning : 'many, much'},
{ japanese : 'ookii' ,  meaning : 'large'},
{ japanese : 'osoi' ,  meaning : 'slow, late'},
{ japanese : 'samui' ,  meaning : 'cold'},
{ japanese : 'semai' ,  meaning : 'narrow'},
{ japanese : 'shinsetsuna' ,  meaning : 'kind'},
{ japanese : 'shiokarai' ,  meaning : 'salty'},
{ japanese : 'shiroi' ,  meaning : 'white'},
{ japanese : 'shitsureina' ,  meaning : 'rude'},
{ japanese : 'shizukana' ,  meaning : 'quiet'},
{ japanese : 'sukanai' ,  meaning : 'few, a little'},
{ japanese : 'sukina' ,  meaning : 'likeable'},
{ japanese : 'suppai' ,  meaning : 'sour'},
{ japanese : 'suzushii' ,  meaning : 'cool'},
{ japanese : 'tadashii' ,  meaning : 'correct'},
{ japanese : 'takai' ,  meaning : 'high, expensive'},
{ japanese : 'tanoshii' ,  meaning : 'pleasant'},
{ japanese : 'teineina' ,  meaning : 'polite'},
{ japanese : 'tooi' ,  meaning : 'far'},
{ japanese : 'tsumaranai' ,  meaning : 'boring'},
{ japanese : 'tsumetai' ,  meaning : 'cold'},
{ japanese : 'wakai' ,  meaning : 'young'},
{ japanese : 'warui' ,  meaning : 'bad'},
{ japanese : 'yasashii' ,  meaning : 'easy'},
{ japanese : 'yasui' ,  meaning : 'cheap'},
{ japanese : 'yuumeina' ,  meaning : 'famous'},






// family vocab
{ japanese : 'family' ,  meaning : 'kazoku'},
{ japanese : 'husband' ,  meaning : 'shujin'},
{ japanese : 'wife' ,  meaning : 'kanai'},
{ japanese : 'child' ,  meaning : 'kodomo'},
{ japanese : 'son' ,  meaning : 'musuko'},
{ japanese : 'daughter' ,  meaning : 'musume'},
{ japanese : 'parents' ,  meaning : 'ryooshin'},
{ japanese : 'father' ,  meaning : 'chichi'},
{ japanese : 'mother' ,  meaning : 'haha'},
{ japanese : 'grandfather' ,  meaning : 'sofu'},
{ japanese : 'grandmother' ,  meaning : 'sobo'},
{ japanese : 'brothers and sisters' ,  meaning : 'kyoodai'},
{ japanese : 'older brother' ,  meaning : 'ani'},
{ japanese : 'older sister' ,  meaning : 'ane'},
{ japanese : 'younger brother' ,  meaning : 'otooto'},
{ japanese : 'younger sister' ,  meaning : 'imooto'},
{ japanese : 'grandchild' ,  meaning : 'mago'},
{ japanese : 'uncle' ,  meaning : 'oji'},
{ japanese : 'aunt' ,  meaning : 'oba'},
{ japanese : 'nephew' ,  meaning : 'oi'},
{ japanese : 'niece' ,  meaning : 'mei'},
{ japanese : 'cousin' ,  meaning : 'itoko'}];



// japanese for busy people vocab

const sentencesJFBP = [

    { japanese : "itadakimasu." ,  meaning : "afiyet olsun, hadi afiyetle yiyelim. "},
    { japanese : "iie, moo kekkoo desu." ,  meaning : "hayır, böyle kafi."},
    { japanese : "kono ringo wa totemo oishii desu." ,  meaning : "bu elma çok lezzetli."},
    { japanese : "ano ringo wa amari oishikunai desu." ,  meaning : "o elma pek lezzetli değil."},
    { japanese : "watashi wa oishii ringo o tabemashita." ,  meaning : "ben lezzetli bir elma yedim."},
    { japanese : "kono heya wa shizuka desu." ,  meaning : "bu oda sessizdir."},
    { japanese : "ano heya wa shizuka dewa arimasen." ,  meaning : "o oda sessiz değildir."},
    { japanese : "watashi wa shizukana heya de benkyoo o shimasu." ,  meaning : "ben sessiz bir odada ders çalışırım."},
    
    { japanese : "kono kamera wa ookii desu. Ano kamera wa chiisai desu." ,  meaning : "bu kamera büyük. O kamera küçük."},
    { japanese : "kono rajio wa takai desu.ano rajio wa yasui desu." ,  meaning : "bu radyo pahalı. O radyo ucuz."},
    { japanese : "kono tamago wa ookii desu. Ano tagamo wa chiisai desu." ,  meaning : "bu yumurta büyük. O yumurta küçük."},
    { japanese : "kono gyuuniku wa takai desu. Ano toriniku wa yasui desu." ,  meaning : "bu dana eti pahalı, o tavuk eti ucuz."},
    
    { japanese : "kore wa atarashii sakana desu. Are wa furui sakana desu." ,  meaning : "bu taze balık. O bayat balık."},
    
    { japanese : "nihongo wa yasashii desu ka. İie, yasashikunai desu." ,  meaning : "japonca kolay mıdır? Hayır, kolay değildir."},
    { japanese : "nihongo wa muzukashii desu ka. İie, muzukashikunai desu." ,  meaning : "japonca zor mudur? Hatır, zor değildir."},
    { japanese : "kooen wa koko kara tooi desu ka. İie, tokunai desu. Chikai desu." ,  meaning : "park buradan uzak mıdır? Hayır, uzak değildir. Yakındır."},
    
    { japanese : "kono hana wa kirei desu." ,  meaning : "bu çiçek güzeldir."},
    { japanese : "tokyo no chikatetsu wa benri desu." ,  meaning : "tokyo metrosu pratiktir / uygun / kullanışlıdır."},
    { japanese : "watashitachi wa kireina resutoran de shokuji o shimashita." ,  meaning : "biz güzel bir restoranda yemek yedik."},
    { japanese : "watashitachi wa shizukana resutoran de shokuji o shimashita." ,  meaning : "biz sessiz bir restoranda yemek yedik."},
    { japanese : "watashitachi wa yuumeina resutoran de shokuji o shimashita." ,  meaning : "biz ünlü bir restoranda yemek yedik."},
    { japanese : "anata wa ashita hima desu ka. İie, hima dewa arimasen. İsogashii desu." ,  meaning : "yarın boş musun? Hayır, boş değilim. Meşgulüm."},
    { japanese : "anata wa ashita no gogo hima desu ka. İie, hima dewa arimasen. İsogashii desu." ,  meaning : "yarın öğleden sonra boş musun? Hayır, boş değilim. Meşgulüm."},
    { japanese : "anata wa raishuu no kin-yoobi hima desu ka. İie, hima dewa arimasen. İsogashii desu." ,  meaning : "gelecek hafta boş muusn? Hayır, boş değilim. Meşgulüm."},
    
    { japanese : "hayashisan wa donna hito desu ka. Shinsetsuna hito desu." ,  meaning : "hayashi san nasıl bir insandır? Kibar bir insandır."},
    { japanese : "hayashisan wa donna hito desu ka. Omoshiroi hito desu." ,  meaning : "hayashi san nasıl bir insandır? İlginç bir insandır."},
    { japanese : "hayashisan wa donna hito desu ka. Genkina hito desu." ,  meaning : "hayashi san nasıl bir insandır? Sağlıklı bir insandır."},
    
    { japanese : "kyoo wa ii tenki desu ne. Ee, hontoo ni ii tenki desu ne." ,  meaning : "bugüm iyi hava di mi? Evet gerçekten de iyi hava."},
    { japanese : "koko wa shizukana koen desu ne. Ee, ookii ki ya kireina hana ga takusan arimasu ne. Howaitosan wa yoku kooen ni ikimasu ka." ,  meaning : "burası sessiz/sakin bir park. Evet, büyük ve güzel çiçekler çok fazla var. Howaito sık sık parka gider mi?"},
    
    
    { japanese : "kinoo wa samukatta desu." ,  meaning : "dün soğuktu."},
    { japanese : "kinoo wa atsukunakatta desu." ,  meaning : "dün sıcak değildi. "},
    { japanese : "kinoo no paatii wa nigiyaka deshita." ,  meaning : "dün parti canlıydı."},
    { japanese : "watashi was senshuu hima dewa arimasen deshita." ,  meaning : "geçen hafta boş değildim."},
    
    { japanese : "kinoo no eiga wa omoshirokatta desu." ,  meaning : "dünkü film ilginçti."},
    { japanese : "kinoo no eiga wa yokatta desu." ,  meaning : "dünkü film iyiydi."},
    { japanese : "kinoo no eiga wa tanoshikatta desu." ,  meaning : "dünkü film eğlenceliydi."},
    
    { japanese : "kinoo machi wa shizuka deshita." ,  meaning : "dün şehir sessiz / sakindi."},
    { japanese : "kinoo machi wa nigiyaka deshita." ,  meaning : "dün şehir canlıydı."},
    
    { japanese : "tanakasan wa genki deshita ka. İie, amari genki dewa arimasen deshita." ,  meaning : "tanakasan sağlıklı mıydı? Hayır, pek sağlıklı değildi."},
    { japanese : "kono hon wa yokatta desu ka. İie, yokunakatta desu." ,  meaning : "bu kitap iyi miydi? Hayır, iyi değildi."},
    { japanese : "kono hon wa omoshirokatta desu ka. İie, omoshirokunakatta desu." ,  meaning : "bu kitap ilginç miydi? Hayır, ilginç değildi."},
    
    { japanese : "kinoo no paatii wa doo deshita ka. Amari tanoshikunakatta desu." ,  meaning : "dünkü parti nasıldı? Pek eğlenceli değildi."},
    { japanese : "kinoo no paatii waa doo deshita ka. Amari omoshirokunakatta desu." ,  meaning : "dünkü parti nasıldı? Pek ilginç değildi."},
    { japanese : "kinoo no paatii wa doo deshita ka. Amari nigiyaka dewa arimasen deshita." ,  meaning : "dünkü parti nasıldı? Pek canlı değildi."},
    
    { japanese : "ryokoo wa doo deshita ka. Totemo tanoshikatta desu." ,  meaning : "seyahat nasıldı? Çok eğlenceliydi."},
    { japanese : "eiga wa doo deshita ka. Totemo omoshikatta desu." ,  meaning : "film nasıldı? Çok ilginçti."},
    { japanese : "ryoori wa doo deshita ka. Totemo oishikatta desu." ,  meaning : "yemek nasıldı? Çok lezzetliydi."},
    
    { japanese : "kinoo eki no chikaku no resutoran ni ikimashita." ,  meaning : "dün istasyonun yakınındaki restorana gittim."},
    
    
    
    { japanese : "watashi wa tanakasan ni kabin o agemashita." ,  meaning : "tanakaya vazo verdim."},
    { japanese : "kurakusan wa watashi ni kabin o kuremashita." ,  meaning : "kuraku bana vazo verdi."},
    { japanese : "watashi wa kurakusan ni/kara kabin o moraimashita." ,  meaning : "kuraku'dan vazo aldım."},
    { japanese : "tomodachi no kurakusan." ,  meaning : "arkadaşlarımdan kurakusan."},
    { japanese : "hayashisan wa sumisusan ni hon o agemashita." ,  meaning : "hayashi sumisuya kitap verdi."},
    { japanese : "sumisusan wa hayashisan ni hon o moraimashita. " ,  meaning : "sumisuhayashiden kitap aldı."},
    
    { japanese : "anata wa kurakusan ni kireina kitte o agemashita ka. İie, agemasen deshita." ,  meaning : "kusaku'ya güzel bir pul verdin mi? Hayır vermedim."},
    { japanese : "anata wa kurakusan ni ryokoo no shashin o agemashita ka. İie, agemasen deshita." ,  meaning : "kuraku'ya seyahat resimlerini verdin mi? Hayır vermedim."},
    
    { japanese : "anata wa dare ni eiga no kippu o moraimashita ka. Chichi ni moraimashita / ane ni moraimashita." ,  meaning : "sen kimden film bileti aldın? Babamdan / büyük kız kardeşimden."},
    
    { japanese : "anata wa otoosan no tanjoobi ni otoosan ni nani o agemasu ka. Tokei o agemasu / rekishi no hon o agemasu." ,  meaning : "babanım yaşgününde babana ne hediye verdin? Saat verdim / tarih kitabı verdim."},
    
    { japanese : "ii nekutai desu ne. Doomo arigatoo. Kinoo kanai ni moraimashita. Kinoo wa watashi no tanjoo bi deshita." ,  meaning : "güzel kravat. Çok teşekkürler. Dün karımdan aldım. Dün benim yaşgünümdü."},
    
    
    
    { japanese : "do-yoobi ni issho ni tenisu o shimasen ka." ,  meaning : "Cumartesi birlikte tenis oynamayalım mı?"},
    { japanese : "issho ni shokuji ni ikimasen ka." ,  meaning : "birlikte yemeğe gitmeyelim mi?"},
    { japanese : "12-ji ni eki no mae de aimashoo." ,  meaning : "saat 12'de istasyonun önünde buluşalım."},
    { japanese : "sukii ni ikimasu." ,  meaning : "kayağa gidiyorum."},
    
    
    
    { japanese : "nichiyoobi ni uchini kimasen ka" ,  meaning : "Pazar günü eve geliyor musun?"},
    { japanese : "doyoobi ni ichi de kurakusan no sobetsukai o shimasu. Uchi ni kimasen ka. Ee, zehi. Zannen desu ga, tsugoo ga warui desu." ,  meaning : "Cumartesi evde kuraku'nun veda partisini yapıyoruz. Eve gelir misin? Evet, tabii / üzgünüm ama, şartlar kötü (müsait değil)."},
    { japanese : "kono hon wa omoshiroi desu yo. Yomimasen ka. Ee, ar,gatoo gozaimasu / arigato gozaimasu demo moo yomimashita." ,  meaning : "bu kitap ilginçtir. Okumayalım mı? Evet, teşekkür ederim / teşekkür ederim ama çoktan okudum."},
    { japanese : "urusai desu ne. Doa o shimemashoo ka. Ee, onegaishimasu / iie, kekkoo desu." ,  meaning : "çok gürültülü. Kapıyı kapayalım mı? Evet, lütfen / Hayır, böyle iyi."},
    
    
    { japanese : "kuruma ga arimasu kara issho ni ikimashoo." ,  meaning : "araba oolduğundan birlikte gidelim."},
    { japanese : "tanakasan wa kodomo ga futari arimasu." ,  meaning : "tanakasan'ın iki çocuğu var."},
    { japanese : "koko de 2-ji kara kaigi ga arimasu." ,  meaning : "burada saat 2'den itibaren toplantı var."},
    { japanese : "kyoo jikan ga arimasu." ,  meaning : "bugün zaman var."},
    { japanese : "eiga no kippu ga 2-mai arimasu." ,  meaning : "film bileti 2 tane var."},
    { japanese : "doyoobi ni taishikan de paati ga arimasu." ,  meaning : "Cumartesi büyükelçilikte parti var."},
    { japanese : "ima okane ga arimasu ka." ,  meaning : "şimdi para var mı?"},
    { japanese : "ashita kaigi ga arimasu ka." ,  meaning : "yarın toplantı var mı?"},
    { japanese : "kongetsu yasumi ga arimasu ka." ,  meaning : "bu ay tatil var mı?"},
    { japanese : "hayashisan wa kyoo nihongo no jugyoo ga arimasu ka. İie, arimasen. Ashita arimasu." ,  meaning : "hayashi'nin bugün japonca dersi var mı? Hayır, yok. Yarın var."},
    { japanese : "anata wa itsu nihongo no jugyoo ga arimasu ka. Getsuyoobi to kayoobi ni arimasu." ,  meaning : "senin ne zaman japonca dersin var? Pazartesi ve Salı günü var."},
    { japanese : "paati wa doko de arimasu ka. Taishikan de arimasu." ,  meaning : "parti nerede var? Elçilikte var."},
    { japanese : "tomodachi no kekkon-shiki wa doko de arimasu ka. Hoteru de arimasu." ,  meaning : "arkadaşın düğünü nerede var? Otlede var."},
    { japanese : "hayashisan, ima jikan ga arimasu ka. İie, ima chotto isogashi desu. İma kara kaigi ga arimasu kara." ,  meaning : "hayashisan, şimdi zaman var mı? Hayır, şimdi biraz meşgulüm. Şimdiden itibaren toplantı var."},
    { japanese : "kuraakusan no sobetsukai wa doko de arimasu ka. Hayashisan no uchi de arimasu. İtsu arimasu ka. Kinyoobi no gogo 7-ji kara desu." ,  meaning : "kurakusan'ın veda partisi nerede var? Hayashisan'ın evinde var. Ne zaman var? Cuma öğle sonrası 7'de."},
    { japanese : "sumisusani okosan ga arimasu ka. Ee, futari arimasu. Musuko to musume desu." ,  meaning : "sumisusan'ın çocukları var mı? Evet, iki tane. Erkek ve kız."},
    { japanese : "musuko-san wa nan-sai desu ka. Musuko wa 15-sai desu." ,  meaning : "erkek çocuğu kaç yaşında? Erkek çocuğu 15 yaşında."},
    { japanese : "ojo-san wa nan-sai desu ka. Musume wa 13-sai desu." ,  meaning : "kız çocuğu kaç yaşında? Kız çocuğu 13 yaşında."},
    { japanese : "hayashisan wa kyoodai ga nan-nin arimasu ka. 3-nin arimasu." ,  meaning : "hayashisan kardeş kaç tane var? 3 tane."},
    { japanese : "anata wa itsu yasumi ga arimasu ka. Raigetsu arimasu." ,  meaning : "senin ne zaman tatilin var? Gelecek ay var."},
    { japanese : "kyoo taishikan de nani ga arimasu ka. Paati ga arimasu." ,  meaning : "bugün elçilikte ne var? Parti var."},
    { japanese : "tomodachi no kekkon-shiki wa doko de arimasu ka. Hoteru de arimasu." ,  meaning : "arkadaşın düğünü nerede var (nerede) ? Otelde var."},
    { japanese : "tanakasan wa kuruma ga arimasu." ,  meaning : "tanakasan'ın arabası var."},
    { japanese : "tanakasan no kuruma wa asoko ni arimasu." ,  meaning : "tanakasan'ın arabası orada."},
    { japanese : "kyoo kaigi wa doko de arimasu ka." ,  meaning : "bugün toplantı nerede var?"},
    { japanese : "sumisusan wa kodomo ga futari arimasu." ,  meaning : "sumisusan'ın iki çocuğu var."},
    { japanese : "nichiyoobi ni tomodachi no uchi de paati ga arimasu." ,  meaning : "Pazar günü arkadaşın evinde parti var."},
    { japanese : "eiga no kippu ga 2-mai arimasu. Ashita issho ni ikimasen ka. Tsugoo ga warui desu. Shigoto ga takusan arimasu kara." ,  meaning : "film bileti 2 adet var. Yarın birlikte gitmeyelim mi? Durumlar kötü. Çok fazla iş var."},
    { japanese : "watashi wa imooto ga 2-nin arimasu. İmooto wa tookyoo to oosaka ni imasu." ,  meaning : "benim iki kız kardeşim var. Kızkardeişerim tokyo ve osakada."},
    { japanese : "tanakasan, 8-gatsu ni yasumi ga arimasu ka. İie, arimasen. 9-gatsu ni arimasu." ,  meaning : "tanakasan, ağustos'ta tatil var mı? Hayır, yok. Eylül'de var."},
    { japanese : "raishuu, kyooto no shisha de kaigi ga arimasu." ,  meaning : "gelecek hafta, kyoto şubesinde toplantı var."},
    
    
    
    
    
    
    
    { japanese : "kinoo amerika kara rindasan ga kimashita." ,  meaning : "dün amerika'dan linda geldi."},
    { japanese : "rindasan wa itsu made nihon ni imasu ka." ,  meaning : "linda ne zamana kadar japonya'da kalacak?"},
    { japanese : "kyooto to nara ni itte, furui otera ya niwa o mimasu." ,  meaning : "kyoto ve nara'ya gidip, eski tapınak bahçe vs göreceğiz."},
    { japanese : "watashi wa kippu ga 2-mai arimasu." ,  meaning : "bende 2 tane bilet var."},
    { japanese : "ashita issho ni eiga ni ikimashoo." ,  meaning : "yarın birlikte filme gidelim."},
    { japanese : "kinoo shigoto no ato de tomodachi to shokuji o shite, 9ji ni uchi ni kaerimashita" ,  meaning : "dün işten sonra arkadaşımla yemek yiyip, 9'da eve geri döndüm."},
    { japanese : "kurakusan wa kyonen no 5-gatsu kara nihon ni imasu. Soshite rainen no 3-gatsu made nihon ni imasu." ,  meaning : "karuku geçen sene mayıs ayından beri japonya'da. ayrıca gelecek yıl mart ayına kadar japonyada kalacak."},
    { japanese : "tanakasan wa mainichi 2-jikan benkyoo o shimasu." ,  meaning : "tanaka hegün 2 saat ders çalışıyor."},
    { japanese : "hayashisan wa asagohan no mae ni rajio de nyuusu o kikimasu. Shokuji no ato de shimbun o yomimasu." ,  meaning : "hayashi sabah kahvaltısından önce radyoda haberleri dinler. Yemekten sonra gazete okur."},
    { japanese : "hon ya ni itte, jisho o kaimasu." ,  meaning : "kitapçıya gidip, sözlük satın alırım."},
    { japanese : "tanakasan ni aitte, issho ni eiga ni ikimasu." ,  meaning : "tanaka ile buluşup beraber filme gidiyoruz."},
    { japanese : "kabuki o mite, shokuji o shite, takushi de kaerimasu." ,  meaning : "tiyatro izleyip, yemek yiyip, taksiyle döneriz."},
    { japanese : "eiga o mite, shokuji o shimashoo." ,  meaning : "film zileyip, yemek yiyelim."},
    { japanese : "uchi ni kite, ocha o nomimasu." ,  meaning : "eve gidip, çay içeriz."},
    { japanese : "shokuji no mae ni shimbun o yomimasu." ,  meaning : "yemekten önce gazete okur."},
    { japanese : "kaimono no ato de tanakasan ni aimasu." ,  meaning : "alış verişten sonra tanaka ile buluşurum."},
    { japanese : "doyoobi ni donogurai shigoto o shimasu ka. 3-jikan dake shimasu." ,  meaning : "Cumartesi ne kadar süre iş yaparsın? 3 saat sadece yaparım."},
    { japanese : "doyoobi ni donogurai hon o yomimasu ka. 1-jikan dake yamimasu." ,  meaning : "Cumartesi ne kadar süre kitap okursun? 1 saat sadece."},
    { japanese : "howaiitosan wa donogurai nihongo no benkyoo o shimashita ka. 4-shukan dake shimashita. Mainichi 2-jikan shimashita." ,  meaning : "howaito ne kadar süre japonca ders yaptı. 4 hafta sadece yaptı. Hergün 2 saat yaptı."},
    { japanese : "nihongo no bekyoo wa doo deshita ka. Sukoshi muzukashikatta desu ga, omoshirokatta desu." ,  meaning : "japonca çalışma nasıldı? Biraz zordu ama, ilginçti."},
    { japanese : "osake wa ikaga desu ka. Kyoo wa kekkoo desu. dooshite desu ka. Kuruma de kimashita kara." ,  meaning : "osake nasıl olur (osake alır mısın?) bugün yeter. Neden? Arabayla geldiğim için."},
    { japanese : "tanakasan wa amerika ni nan-nen no nan-gatsu kara nan-nen no nan-gatsu made imashita ka. 1979-nen no 5-gatsu kara 1982-nen no 3-gatsu made imashita." ,  meaning : "tanakasan hangi yıl hangi aydan hangı yıl hangi aya kadar amerilka da bulundu? 1979 yılının mayısından 1982 yılının martına kadar bulundu."},
    { japanese : "oosaka ni nan-shukan gurai imashita ka. 1-shukan imashita." ,  meaning : "osakada kaç hafta yaklaşık bulundun? 1 hafta bulundum. "},
    { japanese : "Itsu sumisusan ni aimasu ka. Shigoto no ato de aimasu." ,  meaning : "ne zaman sumisu ile buluşursun? İşten sonra buluşurum."},
    { japanese : "kyonen nihon ni kimashita. Soshite rainen kaerimasu." ,  meaning : "bu sene japonyaya gittim. Sonra gelecek yıl geri döneceğim."},
    { japanese : "ashita kyooto ni itte, doyoobi ni tookyoo ni kaerimasu." ,  meaning : "yarın kyotoya gidip, Cumartesi tokyoya geri döneceğim."},
    { japanese : "tomodachi wa tookyoo ni donogurai imashita ka." ,  meaning : "arkadaş tokyoda ne kadar süre kaldı."},
    { japanese : "kinoo tenisu o 1-jikan gurai shimashita." ,  meaning : "dün yaklaşık bir saat tenis oynadım."},
    { japanese : "sono hon wa doo desu ka. Omoshiroi desu." ,  meaning : "şu kitap nasıl? İlginç."},
    { japanese : "kaisha ni nan de ikimasu ka. Chikatetsu de ikimasu." ,  meaning : "ofise neyle gidiyorsun. Metroyla gidiyorum."},
    { japanese : "kaisha made donogurai desu ka. 25-fun gurai desu." ,  meaning : "ofise kadar yaklaşık ne kadar? Yaklaşık 25 dakika."},
    { japanese : "maiasa nyuusu o kiite, kaisha ni/e ikimasu." ,  meaning : "her sabah haberleri dinleyip, ofise giderim."},
    { japanese : "tanakasan ni atte, issho ni ban-gohan o tabemashita. Soshite uchi ni kaerimashita." ,  meaning : "tanaka ile buluşup, birlikte akşam yemeği yedik. Sonra eve geri geldim."},
    { japanese : "donogurai uchi de nihon-go no benkyoo o shimasu ka. 30-pun dake shimasu." ,  meaning : "evde yaklaşık ne kadar süre japonca ders çalışırsın? Sadece 30 dakika çalışırım."},
    { japanese : "kinoo doko ni/e mo ikimasen deshita. Uchi ni imashita." ,  meaning : "dün hiçbir yere gitmedim. Evdeydim."},
    
    
    { japanese : "15-nichi made tookyoo ni ite kudasai." ,  meaning : "ayın 15ine kadar tokyoda kal lütfen."},
    { japanese : "15-nichi made ni tookyoo ni kite kudasai." ,  meaning : "ayın 15inde tokyoya gel lütfen."},
    { japanese : "uchi ni todokete kudasai." ,  meaning : "eve teslim edin lütfen."},
    { japanese : "azabu 2-choome 2 no 1" ,  meaning : "azabu 2. kesim 2 hane 1 numara."},
    { japanese : "tsugi no kado o migi ni magatte kudasai." ,  meaning : "gelecek köşeden sağa dön lütfen."},
    { japanese : "taipu o onegaishimasu." ,  meaning : "tape lütfen."},
    
    { japanese : "menyuu o misete kudasai." ,  meaning : "menüyü gösterin lütfen."},
    { japanese : "yukkuri itte kudasai." ,  meaning : "yavaşça söyleyin lütfen."},
    { japanese : "biru to juusu o todokete kudasai." ,  meaning : "bira ve meyvesuyu gönderin lütfen."},
    { japanese : "keeki o onegaishimasu." ,  meaning : "kek lütfen."},
    { japanese : "kopii o onegaishimasu." ,  meaning : "kopya lütfen."},
    { japanese : "sandoitchi to sarada o onegaishimasu." ,  meaning : "sandöviç ve salata lütfen."},
    
    { japanese : "biiru o 2-hon kudasai." ,  meaning : "bira iki kutu lütfen."},
    { japanese : "kopi o 3-mai kudasai." ,  meaning : "kopya 3 tane lütfen."},
    
    { japanese : "tsugi no kado o migi ni magatte kudasai." ,  meaning : "gelecek köşede sağa dön lütfen."},
    { japanese : "tsugi no shingoo o migi ni magatte kudasai." ,  meaning : "gelecek ışıklarda sağa dön lütfen."},
    { japanese : "tsugi no koosaten o hidari ni magatte kudasai." ,  meaning : "gelecek dört yol ağzında sola dön lütfen."},
    
    { japanese : "mado o akemashoo ka. Hai akete kudasai." ,  meaning : "pencereyi açayım mı. Evet aç lütfen."},
    { japanese : "doa o shimemashoo ka. Hai shimete kudasai." ,  meaning : "kapıyı kapayayım mı. Evet kapat lütfen."},
    { japanese : "terebi o tsukemashoo ka. Hai tsukete kudasai." ,  meaning : "televizyonu açayım mı. Evet aç lütfen."},
    { japanese : "rajio o keshimashoo ka. Hai keshite kudasai." ,  meaning : "radyoyu kapayayım mı. Evet kapat lütfen."},
    { japanese : "juusho to namae o kakimashoo ka. Hai, kaite kudasai." ,  meaning : "adres ve ismi yazayım mı. Evet yaz lütfen."},
    { japanese : "denwa-bango o iimasho ka. Hai, itte kudasai." ,  meaning : "telefon numarasını söyleyeyim mi. Evet söyle lütfen."},
    
    { japanese : "koocha o keeki o onegaishimasu. Hai, shooshoo omachi kudasai." ,  meaning : "çay ve kek lütfen. Tabii, biraz bekleyin lütfen."},
    
    
    { japanese : "kore o kudasai." ,  meaning : "bu lütfen."},
    { japanese : "biru o 5-hon kudasai." ,  meaning : "bira 5 kutu lütfen."},
    { japanese : "ashita 8-ji han made ni kite kudasai." ,  meaning : "yarın 8.30'da gel lütfen."},
    { japanese : "kopii o onegaishimasu." ,  meaning : "kopya lütfen."},
    { japanese : "juusu o 5-hon to biiru o 12-hon uchi ni/e mottekite kudasai." ,  meaning : "meyvesuyu 5 kutu ve bira 12 kutu eve getirin lütfen"},
    { japanese : "tsugi no kado o hidari ni magatte kudasai." ,  meaning : "bi sonraki köşeden sola dönün lütfen."},
    
    { japanese : "menyuu o misete kudasai. Hai, doozo." ,  meaning : "menüyü gösterin lütfen."},
    { japanese : "sumimasen ga, uchi ni biiru o 12-hon todokete kudasai. Hai, wakarimashita. Kuraakusan desu ne. Ee, soo desu." ,  meaning : "pardon, eve bira 12 kutu teslim edin lütfen. Evet, anladım. Kurakusan mı? Evet, öyle."},
    { japanese : "kono chiisai terebi o kudasai. Hai, wakarimashita. Todokemashoo ka. İie, kekkoo desu. Kuruma de kimashita kara." ,  meaning : "bu küçük tv lütfen. Evet, anladım. Yolayalım mı? Hayır, böyle iyi. Arabayla geldiğim için."},
    
    
    { japanese : "tookyoo eki de basu ni norimashita. Azabu de basu o orimashita." ,  meaning : "tokyo istasyonunda otobüse bindik. Azabu da otobüsten indik."},
    { japanese : "5-fun gurai." ,  meaning : "yaklaşık 5 dakika."},
    { japanese : "2-jikan gurai." ,  meaning : "yaklaşık 2 saat."},
    { japanese : "3-shukan gurai." ,  meaning : "yaklaşık 3 hafta."},
    { japanese : "nan-pun, nan-jikan, nan-nichi" ,  meaning : "kaç dakika, kaç saat, kaç gün."},
    { japanese : "nan-jikan kakarimasu ka." ,  meaning : "kaç saat sürer."},
    { japanese : "donogurai kakarimasu ka." ,  meaning : "yaklaşık ne kadar sürer?"},
    { japanese : "donogurai/ikura kakarimasu ka." ,  meaning : "yaklaşık ne kadar tutar?"},
    
    { japanese : "hikooki wa gozen 8-ji 10-pun ni narita kuukoo o demasu." ,  meaning : "uçak öğleden önce 8.10'da narita havalimanını terk ediyo."},
    { japanese : "sumisusan wa gogo 3-ji ni narita kuukoo ni tsukimashita." ,  meaning : "sumisu öğleden sonra 3'te narita havalimanına vardı."},
    { japanese : "tookyoo eki de basu ni notte, ginza de basu o orite kudasai." ,  meaning : "tokyo istasyonunda otobüse binip, ginza'da otobüsten inin lütfen."},
    { japanese : "uchi kara eki made basu de 10-pun kakarimasu." ,  meaning : "evden istasyona otobüsle 10 dakika sürer."},
    
    { japanese : "watashi wa densha ni norimasu. Densha o orimasu." ,  meaning : "ben trene biniyorum. Trenden iniyorum."},
    { japanese : "tanakasan wa hiru oosaka o demashita. Yuugata tookyoo ni tsukimashita." ,  meaning : "tanaka öğlen osaka'yı terk etti. Akşam üzeri tokyo'ya vardı."},
    
    { japanese : "tanakasan wa dooyatte kaisha ni ikimasu ka. Azabu de basu ni notte, aoyama 1-chome de orimasu. Aoyama 1-chome kara chikatetsu ni notte, nihombashi de orimasu. Soshite kaisha made 5-fun gurai arukimasu." ,  meaning : "tanaka nasıl ofise gidiyor? Azabu'da otobüse biniyor, aoyama 1. kesimde iniyor. Aoyama 1 kesimden metroya binip, nihombashi'de iniyor. Daha sonra ofise kadar yaklaşık 5 dakika yürüyor."},
    { japanese : "o-taku kara kaisha made donogurai kakarimasu ka." ,  meaning : "evden ofise kadar yaklaşık ne kadar sürer?"},
    { japanese : "1-jikan gurai kakarimasu." ,  meaning : "yaklaşık bir saat."},
    
    
    { japanese : "terebi o tsukete mo ii desu ka." ,  meaning : "tv'yi açsam (iyi) olur mu?"},
    { japanese : "moratte mo ii desu ka." ,  meaning : "alsam olur mu?"},
    { japanese : "koko de shashin o totte mo ii desu ka." ,  meaning : "burada resim çekmek olur mu?"},
    { japanese : "kono heya o tsukatte mo ii desu ka." ,  meaning : "bu odayı kullansak olur mu?"},
    
    { japanese : "kono mizu o nonde mo ii desu ka." ,  meaning : "bu suyu içsek olur mu?"},
    { japanese : "rajio o tsukete mo ii desu ka." ,  meaning : "radyoyu açsam olur mu?"},
    { japanese : "mado o akete mo ii desu ka." ,  meaning : "pencereyi açsak olur mu?"},
    { japanese : "daidokoro ni haitte mo ii desu ka." ,  meaning : "mutfağa girsem olur mu?"},
    
    { japanese : "kamera no katarogu o moratte mo ii desu." ,  meaning : "kameranın kataloğunu alsam olur mu?"},
    { japanese : "kono pen o tsukatte mo ii desu." ,  meaning : "bu kalemi kullansam olu rmu?"},
    { japanese : "otearai o tsukatte mo ii desu." ,  meaning : ""},
    
    { japanese : "ashita 2-ji goro denwa o shite mo ii desu ka. Sumimasen ga, 2-ji goro uchi ni imasen kara, 6-ji goro onegaishimasu." ,  meaning : "yarın 2 gibi telefon etsem olur mu? Üzgünüm ama,  2 gibi evde olmadığımdan, 6 gibi lütfen."},
    { japanese : "go-juusho to o-namae o onegaishimasu. Sumimasen, pen ga arimasen. Kono pen o tsukatte mo ii desu ka." ,  meaning : "adress ve isim lütfen. Afedersin, kalem yok. Bu kalemi kullansam olur mu?"},
    { japanese : "koko wa yuumeina otera desu. Naka ni hairimashoo. subarashii niwa desu ne. Kono niwa no shashin o totte mo ii desu ka. Saa, wakarimasen. Ano hito ni kikimashoo. " ,  meaning : "bu ünlü bir tapınaktır. Hadi içeri girelim. Harika bahçe di mi. Bu bahçenin fotoğrafını çeksek olur mu? Hmmm, bilmem. Şu adama soralım."},
    
    
    { japanese : "tomenaide kudasai." ,  meaning : "durmayınız"},
    { japanese : "otaku ni kuruma de itte mo ii desu ka." ,  meaning : "eve araba ile gitsek olur mu?"},
    
    { japanese : "koko de tabako o suwanaide kudasai." ,  meaning : "burada tütün içmeyiniz."},
    { japanese : "koko wa 'chuusha kinshi' desu kara, kuruma o tomenaide kudasai." ,  meaning : "burası parka yasak bölge olduğu için, araç park etmeyiniz."},
    { japanese : "shashin o toranaide kudasai." ,  meaning : "resim çekmeyiniz."},
    { japanese : "kono heya o tsukenaide kudasai." ,  meaning : "bu odayı kullanmayın."},
    { japanese : "mado o akenaide kudasai." ,  meaning : "pencereyi açmayın."},
    { japanese : "doa o shimenaide kudasai." ,  meaning : "kapıyı kapamayın."},
    
    { japanese : "doa o shimete mo ii desu ka. İie, shimenaide kudasai. Atsui desu kara." ,  meaning : "kapıyı kapasak olur mu? Hayır kapamayın. Sıcak."},
    { japanese : "mado o shimete mo ii desu ka. İie, shimenaide kudasai. Atsui desu kara." ,  meaning : "pencereyi kapasak olur mu? Hayır, kapamayın. Sıcak."},
    { japanese : "koko wa iriguchi desu kara, kuruma o tomenaide kudasai." ,  meaning : "burası giriş olduğundan, araba parketmeyin."},
    { japanese : "koko wa deguchi desu kara, kuruma o tomenaide kudasai." ,  meaning : "burası çıkış olduğundan, araç parketmeyin."},
    { japanese : "koko wa mise no mae desu kara, kuruma o tomenaide kudasai." ,  meaning : "burası dükkan önü olduğundan, araç parketmeyin."},
    
    { japanese : "koko de tabako o sutte mo ii desu ka. Sumimasen ga, suwanaide kudasai." ,  meaning : "burada sigara içsek olur mu? Üzgünüm ama içmeyin."},
    { japanese : "denki o keshimashoo ka. İie, ima kara kono heya o tsukaimasu kara, kesanaide kudasai." ,  meaning : "lambayı kapayalım mı? Hayır, şimdiden itibaren bu odayı kullanacağımızdan, kapatmayın."},
    
    
    { japanese : "kaigi o shite imasu." ,  meaning : "toplantı yapmaktadır."},
    { japanese : "suraido o mite imasu." ,  meaning : "slaytlara bakmaktadır."},
    { japanese : "sumisusan wa maishuu taimu o yonde imasu." ,  meaning : "sumisu her hafta time okumaktadır."},
    { japanese : "kinoo no gogo nani o shite imashita ka." ,  meaning : "bugün öğleden sonra ne yapıyorsun?"},
    { japanese : "yamadasan wa ima denwa o shite imasu." ,  meaning : "yamada şu anda telefon etmektedir."},
    { japanese : "howaitosan wa ima shigoto o shite imasu." ,  meaning : "howaito şu anda iş yapmaktadır."},
    { japanese : "okyakusan to hanashi o shite imasu." ,  meaning : "müşteri ile konuşmaktayım."},
    
    { japanese : "ima koohii o nonde imasu ka. Hai, nonde imasu / iie nonde imasen." ,  meaning : "şimdi kahve içkemte misin? Evet, içmekteyim / hayır içmemekteyim."},
    { japanese : "ima tegami o kaite imasu ka. Hai, kaite imasu / iie kaite imasen." ,  meaning : "şu anda mektup yazmakta mısın? Evet yazmaktayım / hayır yazmamaktayım"},
    { japanese : "ima shigoto o shite imasu ka. Hai, shite imasu / iie, shite imasen." ,  meaning : "şu anda iş yapmakta mısın? Evet yapmaktayım / hayır yapmamaktayım."},
    { japanese : "yamadasan wa terebi o mite imasu." ,  meaning : "yamada şu anda tv izlemektedir."},
    { japanese : "sumisusan wa tegami o kaite imasu." ,  meaning : "sumisu şu anda mektup yazmaktadır."},
    { japanese : "howaitosan wa denwa o shite imasu." ,  meaning : "howaito şu anda telefon etmektedir."},
    { japanese : "yamadasan wa niwa de shashin o totte imasu." ,  meaning : "yamada şu anda bahçenin resmini çekmektedir."},
    { japanese : "yamadasan wa tonari no heya de denwa o shite imasu." ,  meaning : "yamada şu anda yandaki odada telefon etmektedir."},
    { japanese : "yamadasan wa ima hon o yonde imasu." ,  meaning : "yamada şu anda kitap okumaktadır."},
    { japanese : "yamadasan wa shokuji o shite imasu." ,  meaning : "yamada şu anda öğün/yemek yemektedir."},
    
    
    { japanese : "ima kyooto ni itte imasu." ,  meaning : "şimdi koyoto'ya gitmiş bulunmaktayım. (şu an kyootodayım)"},
    { japanese : "tanakasan wa kekkon shite imasu." ,  meaning : "tanaka evlidir."},
    { japanese : "bengoshi wa moo kimashita ka. Hai, kite imasu." ,  meaning : "avukat artık geldi mi? Evet geldi. (gelmiş bulunuyor)"},
    { japanese : "ani wa ryokoo-gaisha ni tsutomete imasu." ,  meaning : "abim turizm acentasında çalışıyor."},
    
    
    { japanese : "sumisusan no oniisan wa ima nihon ni kite imasu." ,  meaning : "sumisunun abisi şu anda japonya'ya geliyor."},
    { japanese : "kurakusan wa tookyoo ni sunde imasu." ,  meaning : "klark tokyo'da yaşıyor."},
    { japanese : "hayashisan wa nihon ginko ni tsutomete imasu." ,  meaning : "hayashi nihon bank'ta çalışıyor."},
    { japanese : "watashi wa tanakasan o yoku shitte imasu." ,  meaning : "tanaka'yı iyi tanıyorum."},
    { japanese : "chika 1-kai de niku ya sakana o utte imasu." ,  meaning : "yeraltı 1. katta et ve balık vs. satılıyor (satılmakta)."},
    
    { japanese : "tanakasan o shitte imasu ka. Hai, shitte imasu / iie, shirimasen." ,  meaning : "tanaka'yı tanır mısın? Evet tanırım / hayır, tanımam."},
    { japanese : "hayashisan no atarashii denwa-bango o shitte imasu ka. Hai, shitte imasu / iie, shirimasen." ,  meaning : "hayashi'nin yeni telefon numarasını biliyor musun? Evet, biliyorum / hayır, bilmiyorum."},
    { japanese : "ii niku-ya o shitte imasu ka. Hai, shitte imasu / iie, shirimasen." ,  meaning : "iyi bir kasap biliyor musun? Evet biliyorum / hayır bilmiyorum."},
    
    { japanese : "ryokoo-gaisha ni tsutomete imasu." ,  meaning : "seyahat acentasında çalışıyorum."},
    { japanese : "gakkoo ni tsutomete imasu." ,  meaning : "okulda çalışıyorum."},
    { japanese : "kitte wa ano mise de utte imasu." ,  meaning : "pul o dükkanda satılmaktadır."},
    { japanese : "kutsu wa 6-kai de utte imasu." ,  meaning : "ayakkabı 6. katta satılmaktadır."},
    
    
    { japanese : "Watashi wa Nihon no furui kagu ga suki desu." ,  meaning : "Japonya'nın eski mobilyalarını çok seviyorum."},
    { japanese : "Sengetsu tansu o kaimashita." ,  meaning : "Geçen ay tansu satın aldım."},
    { japanese : "Tsugi wa tsukue o kaitai desu." ,  meaning : "Daha sonra masa almak isiyorum."},
    { japanese : "Iii mise o shitte imasu ka." ,  meaning : "İyi bir dükkan biliyor musun?"},
    { japanese : "Saa" ,  meaning : "Hmmm bir bakayım"},
    { japanese : "Hayashisan wa iroirona koto o yoku shitte imasu kara Hayashisan ni kiite kudasai." ,  meaning : "Hayashi san çeşitli şeyleri iyi bildiği için ona sor lütfen."},
    
    { japanese : "Banana ga suki desu." ,  meaning : "I like banana."},
    { japanese : "Anata ga suki desu." ,  meaning : "I love you."},
    { japanese : "Koohii ga ii desu." ,  meaning : "I'd like coffee."},
    { japanese : "Watashi wa koohii ga ii desu." ,  meaning : "Bana kahve iyidir. "},
    { japanese : "Nomimono wa koohii ga ii desu." ,  meaning : "İçecek olarak kahve iyidir bana."},
    { japanese : "Watashi wa nomimono wa koohii ga ii desu." ,  meaning : "Benim için içecek olarak kahve iyidir."},
    { japanese : "Watashi wa taipu ga dekimasu." ,  meaning : "I can do typing / I can type."},
    
    { japanese : "Takushi de ikitai desu." ,  meaning : "I want to go by taxi"},
    { japanese : "Takushi de ikitakunai desu." ,  meaning : "I don't want to go by taxi."},
    { japanese : "Takushi de ikitakatta desu." ,  meaning : "I wanted to go by taxi."},
    { japanese : "Takushi de ikitakunakatta desu." ,  meaning : "I did not want to go by taxi."},
    
    { japanese : "Terebi o mitai desu." ,  meaning : "TV izlemek istiyorum."},
    { japanese : "Terebi o mitakunai desu." ,  meaning : "TV izlemek istemiyorum."},
    { japanese : "terebi o mitakatta desu." ,  meaning : "TV izlemek istiyordum."},
    { japanese : "terebi o mitakunakatta desu." ,  meaning : "TV izlemek istemiyordum."},
    
    { japanese : "tanakasan ni aitai desu." ,  meaning : "Tanaka ile buluşmak istiyorum."},
    { japanese : "tanakasan ni aitakunai desu." ,  meaning : "Tanaka ile buluşmak istemiyorum."},
    { japanese : "tanakasan ni aitakatta desu." ,  meaning : "Tanaka ile buluşmak istiyordum."},
    { japanese : "tanakasan ni aitakunakatta desu." ,  meaning : "Tanaka ile buluşmak istemiyordum."},
    
    { japanese : "yama ni ikitai desu." ,  meaning : "dağa gitmek istiyorum."},
    { japanese : "toshokan ni ikitai desu." ,  meaning : "kütüphaneye gitmek istiyorum."},
    { japanese : "onsen ni ikitai desu." ,  meaning : "kaplıcaya gitmek istiyorum."},
    { japanese : "kyooto no matsuri ni ikitai desu." ,  meaning : "kyoto festivaline gitmek istiyorum."},
    
    { japanese : "ima terebi o mitakunai desu." ,  meaning : "şimdi tv izlemek istemiyorum."},
    { japanese : "ima eiga o mitakunai desu." ,  meaning : "şimdi film izlemek istemiyorum."},
    { japanese : "ima suraido o mitakunai desu." ,  meaning : "şimdi slayt izlemek istemiyorum."},
    
    { japanese : "yama ni ikitai desu." ,  meaning : "dağa gitmek istiyorum."},
    { japanese : "umi ni ikitai desu." ,  meaning : "denize gitmek istiyorum."},
    { japanese : "onsen ni ikitai desu." ,  meaning : "kaplıcaya gitmek istiyorum."},
    
    { japanese : "nekutai o kaitai desu." ,  meaning : "kravat satın almak istiyorum."},
    { japanese : "kutsushita o kaitai desu." ,  meaning : "çorap almak istiyorum."},
    { japanese : "tsukue o kaitai desu." ,  meaning : "masa almak istiyorum."},
    
    { japanese : "hon o yomitai desu." ,  meaning : "kitap okumak istiyorum."},
    { japanese : "eiga ni ikitai desu." ,  meaning : "filme gitmek istiyorum."},
    { japanese : "ryooko o shitai desu." ,  meaning : "seyahat etmek istiyorum."},
    
    { japanese : "tanakasan wa gorufu ga joozu desu." ,  meaning : "tanaka golfte başarılı."},
    { japanese : "ringo ga suki desu." ,  meaning : "elma severim."},
    { japanese : "taipu ga dekimasu." ,  meaning : "typing yapabilirim."},
    { japanese : "atama ga itai desu." ,  meaning : "başım ağırıyor."},
    { japanese : "yooroppa ni ikitai desu." ,  meaning : "avrupaya gitmek istiyorum."},
    { japanese : "ima nani mo tabetakunai desu." ,  meaning : "şu anda hiç bir şey yemek istemiyorum."},
    
    { japanese : "nodo ga itai desu." ,  meaning : "boğazım ağrıyor."},
    { japanese : "onaka ga itai desu." ,  meaning : "midem ağrıyor."},
    { japanese : "ha ga itai desu." ,  meaning : "dişim ağrıyor."},
    
    { japanese : "kudamono ga suki desu ka. Hai, totemo suki desu /  iie, amari suki dewa arimasen." ,  meaning : "meyve sever misin? Evet çok severim / hayır pek sevmem."},
    { japanese : "nihongo ga dekimasu ka. Hai, sukoshi dekimasu. / iie zenzen dekimasen" ,  meaning : "japonca konuşabilir misin? Evet biraz konuşabilirim / hayır hiç konuşamam."},
    { japanese : "donna kudamono ga suki desu ka. Ringo ga suki desu." ,  meaning : "hangi meyveyi seversin? Elma severim."},
    { japanese : "donna yasai ga suki desu ka. Tomato ga suki desu." ,  meaning : "hangi sebzeyi seversin ? Domates severim."},
    { japanese : "donna ryoori ga suki desu ka. Niku no ryoori ga suki desu." ,  meaning : "hangi yemeği seversin? Et yemeği severim."},
    
    
    { japanese : "Kono ryoori wa totemo oishii desu." ,  meaning : "This dish is very delicious."},
    { japanese : "Moo sukoshi ikaga desu ka." ,  meaning : "How about a little more?"},
    { japanese : "Howaito-san wa ryoori ga joozu desu ne." ,  meaning : "Mrs. White is very good at cooking."},
    { japanese : "Doo shimashita ka." ,  meaning : "What happened? / What's the matter?"},
    
    
    { japanese : "Kinoo kara kibun ga warui desu." ,  meaning : "I don't feel well since yesterday."},
    { japanese : "Netsu ga arimasu ka." ,  meaning : "Do you have a fever?"},
    { japanese : "Atama itai desu." ,  meaning : "I have a headache."},
    { japanese : "Nodo mo itai desu." ,  meaning : "I have a sore throat / throat ache."},
    { japanese : "Tsugi no nichi-yoobi nani o shitai desu ka." ,  meaning : "What would you like to do next Sunday?"},
    { japanese : "Tenisu o shitai desu. Hon mo yomitai desu." ,  meaning : "I'd like to play tennis. I'd like to read a book too."},
    { japanese : "Eiga ni ikitai desu." ,  meaning : "Filme gitmek istiyorum."},
    { japanese : "Iie, ikitakatta desu ga, atama ga itakatta desu kara ikimasen deshita." ,  meaning : "Hayır, gitmek istiyordum ama başım ağırdığından gitmedim."},
    
    
    
    { japanese : "nomimono ga nani ga ii desu ka. Biiru ga ii desu." ,  meaning : "içecek olarak ne iyidir? Bir iyidir."},
    { japanese : "ryoori wa sukiyaki ga ii desu ka, shabushabu ga ii desu ka." ,  meaning : "yiyecek olarak sukiyaki mi, shabushabu mu iyidir?"},
    { japanese : "kyooto ni ikimasu ka, oosaka ni ikimasu ka." ,  meaning : "kyoto'ya mı osaka'ya mı gidiyoruz."},
    { japanese : "sukiyaki wa senshuu tabemashita kara…" ,  meaning : "sukiyaki'yi geçen kafta yediğimden…"},
    { japanese : "watashi wa juusu ga ii desu." ,  meaning : "bana meyve suyu uyar."},
    { japanese : "nomimono wa juusu ga ii desu." ,  meaning : "içecek olarak meyve suyu uyar bana."},
    { japanese : "dezaato wa aisukurimu ga ii desu." ,  meaning : "tatlı olarak dondurma uyar."},
    { japanese : "dewa, sukiyaki wa ikaga desu ka." ,  meaning : "o zaman, sukiyaki nasıl olur?"},
    { japanese : "dewa, shokuji no mae ni niwa de shashin o torimasen ka?" ,  meaning : "o zaman, yenekten önce bahçede fotoğraf çekmeyelim mi?"}]



// verbs array

const verbs = [
    { japanese : 'agemasu' ,  te : 'agete', nai : 'agenai', type : 'verb' },
{ japanese : 'aimasu' ,  te : 'atte', nai : 'awanai', type : 'verb' },
{ japanese : 'akemasu' ,  te : 'akete', nai : 'akenai', type : 'verb' },
{ japanese : 'arimasu' ,  te : 'atte', nai : 'nai', type : 'verb' },
{ japanese : 'arukimasu' ,  te : 'aruite', nai : 'arukanai', type : 'verb' },
{ japanese : 'benkyoo o shimasu' ,  te : 'benkyoo o shite', nai : 'benkyoo o shinai', type : 'verb' },
{ japanese : 'chigaimasu' ,  te : 'chigatte', nai : 'chigawanai', type : 'verb' },
{ japanese : 'dekimasu' ,  te : 'dekite', nai : 'dekinai', type : 'verb' },
{ japanese : 'demasu' ,  te : 'dete', nai : 'denai', type : 'verb' },
{ japanese : 'gambarimasu' ,  te : 'gambatte', nai : 'gambaranai', type : 'verb' },
{ japanese : 'hairimasu' ,  te : 'haitte', nai : 'hairanai', type : 'verb' },
{ japanese : 'iimasu' ,  te : 'itte', nai : 'iwanai', type : 'verb' },
{ japanese : 'ikimasu' ,  te : 'itte', nai : 'ikanai', type : 'verb' },
{ japanese : 'imasu' ,  te : 'ite', nai : 'inai', type : 'verb' },
{ japanese : 'irasshaimasu' ,  te : 'irasshatte', nai : 'irassharanai', type : 'verb' },
{ japanese : 'itadakimasu' ,  te : 'itadaite', nai : 'itadakanai', type : 'verb' },
{ japanese : 'kaerimasu' ,  te : 'kaette', nai : 'kaeranai', type : 'verb' },
{ japanese : 'kaimasu' ,  te : 'katte', nai : 'kawanai', type : 'verb' },
{ japanese : 'kakarimasu' ,  te : 'kakatte', nai : 'kakaranai', type : 'verb' },
{ japanese : 'kakemasu' ,  te : 'kakete', nai : 'kakenai', type : 'verb' },
{ japanese : 'kakimasu' ,  te : 'kaite', nai : 'kakanai', type : 'verb' },
{ japanese : 'keshimasu' ,  te : 'keshite', nai : 'kesanai', type : 'verb' },
{ japanese : 'ki o tsukemasu' ,  te : 'tsukete', nai : 'ki o tsukenai', type : 'verb' },
{ japanese : 'kikimasu' ,  te : 'kiite', nai : 'kikanai', type : 'verb' },
{ japanese : 'kimasu' ,  te : 'kite', nai : 'konai', type : 'verb' },
{ japanese : 'komimasu' ,  te : 'konde', nai : 'komanai', type : 'verb' },
{ japanese : 'machimsu' ,  te : 'matte', nai : 'matanai', type : 'verb' },
{ japanese : 'magarimasu' ,  te : 'magatte', nai : 'magaranai', type : 'verb' },
{ japanese : 'mimasu' ,  te : 'mite', nai : 'minai', type : 'verb' },
{ japanese : 'misemasu' ,  te : 'misete', nai : 'misenai', type : 'verb' },
{ japanese : 'mochimasu' ,  te : 'motta', nai : 'motanai', type : 'verb' },
{ japanese : 'moraimasu' ,  te : 'moratte', nai : 'morawanai', type : 'verb' },
{ japanese : 'mottekimasu' ,  te : 'mottekite', nai : 'mottekonai', type : 'verb' },
{ japanese : 'nomimasu' ,  te : 'node', nai : 'nomanai', type : 'verb' },
{ japanese : 'norimasu' ,  te : 'notte', nai : 'noranai', type : 'verb' },
{ japanese : 'okurimasu' ,  te : 'okutte', nai : 'okuranai', type : 'verb' },
{ japanese : 'onegaishimasu' ,  te : 'onegaishite', nai : 'onegaishinai', type : 'verb' },
{ japanese : 'orimasu' ,  te : 'orite', nai : 'orinai', type : 'verb' },
{ japanese : 'oshiemasu' ,  te : 'oshiete', nai : 'oshienai', type : 'verb' },
{ japanese : 'oshimasu' ,  te : 'oshite', nai : 'osanai', type : 'verb' },
{ japanese : 'owarimasu' ,  te : 'owatte', nai : 'owaranai', type : 'verb' },
{ japanese : 'shimasu' ,  te : 'shite', nai : 'shinai', type : 'verb' },
{ japanese : 'shimemasu' ,  te : 'shimete', nai : 'shimenai', type : 'verb' },
{ japanese : 'shitsureishimasu' ,  te : 'shitsureishite', nai : 'shitsureishinai', type : 'verb' },
{ japanese : 'shitteimasu' ,  te : 'shitte', nai : 'shiranai', type : 'verb' },
{ japanese : 'suimasu' ,  te : 'sutte', nai : 'suwanai', type : 'verb' },
{ japanese : 'sumimasu' ,  te : 'sunde', nai : 'sumanai', type : 'verb' },
{ japanese : 'tabemasu' ,  te : 'tabete', nai : 'tabenai', type : 'verb' },
{ japanese : 'todokemasu' ,  te : 'todokete', nai : 'todokenai', type : 'verb' },
{ japanese : 'tomemasu' ,  te : 'tomete', nai : 'tomenai', type : 'verb' },
{ japanese : 'torimasu' ,  te : 'totte', nai : 'toranai', type : 'verb' },
{ japanese : 'tsukaimasu' ,  te : 'tsukatte', nai : 'tsukawanai', type : 'verb' },
{ japanese : 'tsukemasu' ,  te : 'tsukete', nai : 'tsukenai', type : 'verb' },
{ japanese : 'tsukimasu' ,  te : 'tsuite', nai : 'tsukanai', type : 'verb' },
{ japanese : 'tsukurimasu' ,  te : 'tsukutte', nai : 'tsukuranai', type : 'verb' },
{ japanese : 'tsutomemasu' ,  te : 'tsutomete', nai : 'tsutomete', type : 'verb' },
{ japanese : 'urimasu' ,  te : 'utte', nai : 'uranai', type : 'verb' },
{ japanese : 'wakarimasu' ,  te : 'wakatte', nai : 'wakaranai', type : 'verb' },
{ japanese : 'yobimsau' ,  te : 'yonde', nai : 'yobanai', type : 'verb' },
{ japanese : 'yomimasu' ,  te : 'yonde', nai : 'yomanai', type : 'verb' },
{ japanese : 'yomimasu' ,  te : 'yonde', nai : 'yomanai', type : 'verb' },
];



// adjectives array

const adjectives = [
    { japanese : 'abunai' ,  meaning : 'dangerous', type : 'adjective' },
{ japanese : 'akai' ,  meaning : 'red', type : 'adjective' },
{ japanese : 'akarui' ,  meaning : 'bright', type : 'adjective' },
{ japanese : 'amai' ,  meaning : 'sweet', type : 'adjective' },
{ japanese : 'anzenna' ,  meaning : 'safe', type : 'adjective' },
{ japanese : 'aoi' ,  meaning : 'blue', type : 'adjective' },
{ japanese : 'atarashii' ,  meaning : 'new, fresh', type : 'adjective' },
{ japanese : 'atatakai' ,  meaning : 'warm', type : 'adjective' },
{ japanese : 'atsui' ,  meaning : 'hot', type : 'adjective' },
{ japanese : 'benrina' ,  meaning : 'convenient', type : 'adjective' },
{ japanese : 'chairoi' ,  meaning : 'brown', type : 'adjective' },
{ japanese : 'chiisai' ,  meaning : 'small', type : 'adjective' },
{ japanese : 'chikai' ,  meaning : 'near', type : 'adjective' },
{ japanese : 'daijina' ,  meaning : 'important', type : 'adjective' },
{ japanese : 'damena' ,  meaning : 'no good', type : 'adjective' },
{ japanese : 'fubenna' ,  meaning : 'inconvenient', type : 'adjective' },
{ japanese : 'furui' ,  meaning : 'old', type : 'adjective' },
{ japanese : 'fushinsetsuna' ,  meaning : 'unkind', type : 'adjective' },
{ japanese : 'genkina' ,  meaning : 'well, healthy', type : 'adjective' },
{ japanese : 'hayai' ,  meaning : 'fast, early', type : 'adjective' },
{ japanese : 'hetana' ,  meaning : 'unskillfull', type : 'adjective' },
{ japanese : 'hikui' ,  meaning : 'low', type : 'adjective' },
{ japanese : 'himana' ,  meaning : 'free', type : 'adjective' },
{ japanese : 'hiroi' ,  meaning : 'wide', type : 'adjective' },
{ japanese : 'ii' ,  meaning : 'good', type : 'adjective' },
{ japanese : 'iroirona' ,  meaning : 'various', type : 'adjective' },
{ japanese : 'isogashii' ,  meaning : 'busy', type : 'adjective' },
{ japanese : 'itai' ,  meaning : 'painful', type : 'adjective' },
{ japanese : 'joozuna' ,  meaning : 'skillful', type : 'adjective' },
{ japanese : 'karai' ,  meaning : 'hot, spicy', type : 'adjective' },
{ japanese : 'karui' ,  meaning : 'light', type : 'adjective' },
{ japanese : 'kiiroi' ,  meaning : 'yellow', type : 'adjective' },
{ japanese : 'kiraina' ,  meaning : 'unlikeable', type : 'adjective' },
{ japanese : 'kireina' ,  meaning : 'clean, pretty', type : 'adjective' },
{ japanese : 'kitanai' ,  meaning : 'dirty', type : 'adjective' },
{ japanese : 'kurai' ,  meaning : 'dark', type : 'adjective' },
{ japanese : 'kuroi' ,  meaning : 'black', type : 'adjective' },
{ japanese : 'midoriiro' ,  meaning : 'green', type : 'adjective' },
{ japanese : 'mijikai' ,  meaning : 'short', type : 'adjective' },
{ japanese : 'murasaki' ,  meaning : 'purple', type : 'adjective' },
{ japanese : 'muzukashii' ,  meaning : 'difficult', type : 'adjective' },
{ japanese : 'nagai' ,  meaning : 'long', type : 'adjective' },
{ japanese : 'nigiyakana' ,  meaning : 'lively', type : 'adjective' },
{ japanese : 'oishii' ,  meaning : 'delicious', type : 'adjective' },
{ japanese : 'omoi' ,  meaning : 'heavy', type : 'adjective' },
{ japanese : 'omoshiroi' ,  meaning : 'interesting', type : 'adjective' },
{ japanese : 'ooi' ,  meaning : 'many, much', type : 'adjective' },
{ japanese : 'ookii' ,  meaning : 'large', type : 'adjective' },
{ japanese : 'osoi' ,  meaning : 'slow, late', type : 'adjective' },
{ japanese : 'samui' ,  meaning : 'cold', type : 'adjective' },
{ japanese : 'semai' ,  meaning : 'narrow', type : 'adjective' },
{ japanese : 'shinsetsuna' ,  meaning : 'kind', type : 'adjective' },
{ japanese : 'shiokarai' ,  meaning : 'salty', type : 'adjective' },
{ japanese : 'shiroi' ,  meaning : 'white', type : 'adjective' },
{ japanese : 'shitsureina' ,  meaning : 'rude', type : 'adjective' },
{ japanese : 'shizukana' ,  meaning : 'quiet', type : 'adjective' },
{ japanese : 'sukanai' ,  meaning : 'few, a little', type : 'adjective' },
{ japanese : 'sukina' ,  meaning : 'likeable', type : 'adjective' },
{ japanese : 'suppai' ,  meaning : 'sour', type : 'adjective' },
{ japanese : 'suzushii' ,  meaning : 'cool', type : 'adjective' },
{ japanese : 'tadashii' ,  meaning : 'correct', type : 'adjective' },
{ japanese : 'takai' ,  meaning : 'high, expensive', type : 'adjective' },
{ japanese : 'tanoshii' ,  meaning : 'pleasant', type : 'adjective' },
{ japanese : 'teineina' ,  meaning : 'polite', type : 'adjective' },
{ japanese : 'tooi' ,  meaning : 'far', type : 'adjective' },
{ japanese : 'tsumaranai' ,  meaning : 'boring', type : 'adjective' },
{ japanese : 'tsumetai' ,  meaning : 'cold', type : 'adjective' },
{ japanese : 'wakai' ,  meaning : 'young', type : 'adjective' },
{ japanese : 'warui' ,  meaning : 'bad', type : 'adjective' },
{ japanese : 'yasashii' ,  meaning : 'easy', type : 'adjective' },
{ japanese : 'yasui' ,  meaning : 'cheap', type : 'adjective' },
{ japanese : 'yuumeina' ,  meaning : 'famous', type : 'adjective' },
];


// vocabulary related to family
const vocabularyFamily = [
    { japanese : 'family' ,  meaning : 'kazoku'},
{ japanese : 'husband' ,  meaning : 'shujin'},
{ japanese : 'wife' ,  meaning : 'kanai'},
{ japanese : 'child' ,  meaning : 'kodomo'},
{ japanese : 'son' ,  meaning : 'musuko'},
{ japanese : 'daughter' ,  meaning : 'musume'},
{ japanese : 'parents' ,  meaning : 'ryooshin'},
{ japanese : 'father' ,  meaning : 'chichi'},
{ japanese : 'mother' ,  meaning : 'haha'},
{ japanese : 'grandfather' ,  meaning : 'sofu'},
{ japanese : 'grandmother' ,  meaning : 'sobo'},
{ japanese : 'brothers and sisters' ,  meaning : 'kyoodai'},
{ japanese : 'older brother' ,  meaning : 'ani'},
{ japanese : 'older sister' ,  meaning : 'ane'},
{ japanese : 'younger brother' ,  meaning : 'otooto'},
{ japanese : 'younger sister' ,  meaning : 'imooto'},
{ japanese : 'grandchild' ,  meaning : 'mago'},
{ japanese : 'uncle' ,  meaning : 'oji'},
{ japanese : 'aunt' ,  meaning : 'oba'},
{ japanese : 'nephew' ,  meaning : 'oi'},
{ japanese : 'niece' ,  meaning : 'mei'},
{ japanese : 'cousin' ,  meaning : 'itoko'},
];


// integer Numbers

const integerNumbers = [
    { japanese : 'zero / rei' ,  meaning : '0'},
{ japanese : 'ichi' ,  meaning : '1'},
{ japanese : 'ni' ,  meaning : '2'},
{ japanese : 'san' ,  meaning : '3'},
{ japanese : 'shi/yon' ,  meaning : '4'},
{ japanese : 'go' ,  meaning : '5'},
{ japanese : 'roku' ,  meaning : '6'},
{ japanese : 'shichi / nana' ,  meaning : '7'},
{ japanese : 'hachi' ,  meaning : '8'},
{ japanese : 'kyu / ku' ,  meaning : '9'},
{ japanese : 'ju' ,  meaning : '10'},
{ japanese : 'juichi' ,  meaning : '11'},
{ japanese : 'juni' ,  meaning : '12'},
{ japanese : 'jusan' ,  meaning : '13'},
{ japanese : 'jushi / juyon' ,  meaning : '14'},
{ japanese : 'jugo' ,  meaning : '15'},
{ japanese : 'juroku' ,  meaning : '16'},
{ japanese : 'jushichi / junana' ,  meaning : '17'},
{ japanese : 'juhachi' ,  meaning : '18'},
{ japanese : 'jukyu / juku' ,  meaning : '19'},
{ japanese : 'niju' ,  meaning : '20'},
{ japanese : 'sanju' ,  meaning : '30'},
{ japanese : 'yonju' ,  meaning : '40'},
{ japanese : 'goju' ,  meaning : '50'},
{ japanese : 'rokuju' ,  meaning : '60'},
{ japanese : 'shichiju, naniju' ,  meaning : '70'},
{ japanese : 'hachiju' ,  meaning : '80'},
{ japanese : 'kyuujuu' ,  meaning : '90'},
{ japanese : 'hyaku' ,  meaning : '100'},
{ japanese : 'nihyaku' ,  meaning : '200'},
{ japanese : 'sambyaku' ,  meaning : '300'},
{ japanese : 'yonhyaku' ,  meaning : '400'},
{ japanese : 'gohyaku' ,  meaning : '500'},
{ japanese : 'roppyaku' ,  meaning : '600'},
{ japanese : 'nanahyaku' ,  meaning : '700'},
{ japanese : 'happyaku' ,  meaning : '800'},
{ japanese : 'kyuhyaku' ,  meaning : '900'},
{ japanese : 'sen' ,  meaning : '1000'},
{ japanese : 'nisen' ,  meaning : '2000'},
{ japanese : 'sanzen' ,  meaning : '3000'},
{ japanese : 'yonsen' ,  meaning : '4000'},
{ japanese : 'gosen' ,  meaning : '5000'},
{ japanese : 'rokusen' ,  meaning : '6000'},
{ japanese : 'nanasen' ,  meaning : '7000'},
{ japanese : 'hassen' ,  meaning : '8000'},
{ japanese : 'kyuusen' ,  meaning : '9000'},
{ japanese : 'ichiman' ,  meaning : '10000'},
{ japanese : 'juman' ,  meaning : '100000'},
{ japanese : 'hyakuman' ,  meaning : '1000000'},
{ japanese : 'senman' ,  meaning : '10000000'},
];


// ordinal numbers
const ordinalNumbers = [
    { japanese : 'tsuitachi' ,  meaning : '1st'},
{ japanese : 'futsuka' ,  meaning : '2nd'},
{ japanese : 'mikka' ,  meaning : '3rd'},
{ japanese : 'yokka' ,  meaning : '4th'},
{ japanese : 'itsuka' ,  meaning : '5th'},
{ japanese : 'muika' ,  meaning : '6th'},
{ japanese : 'nanoka' ,  meaning : '7th'},
{ japanese : 'yooka' ,  meaning : '8th'},
{ japanese : 'kokonoka' ,  meaning : '9th'},
{ japanese : 'tooka' ,  meaning : '10th'},
{ japanese : 'juyokka' ,  meaning : '14th'},
{ japanese : 'hatsuka' ,  meaning : '20th'},
];


// counting numbers
const countingNumbers = [
    { japanese : 'hitotsu' ,  meaning : 'bir tane'},
{ japanese : 'futatsu' ,  meaning : 'iki tane'},
{ japanese : 'mittsu' ,  meaning : 'üç tane'},
{ japanese : 'yottsu' ,  meaning : 'dört tane'},
{ japanese : 'itsutsu' ,  meaning : 'beş tane'},
{ japanese : 'muttsu' ,  meaning : 'altı tane'},
{ japanese : 'nanatsu' ,  meaning : 'yedi tane'},
{ japanese : 'yattsu' ,  meaning : 'sekiz tane'},
{ japanese : 'kokonotsu' ,  meaning : 'dokuz tane'},
{ japanese : 'to' ,  meaning : 'on tane'},
{ japanese : 'juichi' ,  meaning : 'onbir tane'},
{ japanese : 'juni' ,  meaning : 'oniki tane'},
];




// FUNCTIONS


// search word f

function searchWord (word) {
    let dictionary = [...vocabularyJFBP, ...vocabularyMinnaNoNihongo];

    console.log(verbConj(word));


    let filtered = dictionary.filter(item => item.japanese.toLowerCase() === word.toLowerCase() || item.meaning.toLowerCase() === word.toLowerCase());
    if(filtered.length > 0) {
    let mapped = filtered.map(item => `${item.japanese} : ${item.meaning}`);
    mapped.forEach(item => {
        verbConj(item.split(" ")[0]);
    })
    return [...new Set(mapped)];
    } else {
    let filtered = dictionary.filter(item => item.japanese.toLowerCase().includes(word.toLowerCase()) || item.meaning.toLowerCase().includes(word.toLowerCase()));
    let mapped = filtered.map(item => `${item.japanese} : ${item.meaning}`);
    mapped.forEach(item => {
        verbConj(item.split(" ")[0]);
    })
    return [...new Set(mapped)];
    }
    
}




// search sentence f

function searchSentence (word) {
    let dictionary = [...sentencesJFBP ,...sentencesMinnaNoNihongo];
    let filtered1 = dictionary.filter(item => item.japanese.toLowerCase().split(" ").includes(word.toLowerCase())); // one by one split the sentences
    let filtered2 = dictionary.filter(item => item.japanese.toLowerCase().includes(word.toLowerCase())); // any match pattern in the sentence
    
    if(filtered1.length > 0) {
        let mapped = filtered1.map(item => `${item.japanese} : ${item.meaning}`); 
        return [...new Set(mapped)]; 
    } else {
        let mapped = filtered2.map(item => `${item.japanese} : ${item.meaning}`);
        return [...new Set(mapped)];
    }
}




// search verb conj

function verbConj (word) {
    let isVerb1 = verbs.filter(item => item.japanese === word || item.te === word || item.nai === word);
    //let isVerb2 = verbs.filter(item => item.japanese.includes(word) || item.te.includes(word) || item.nai.includes(word))
    let isVerb = [...new Set([...isVerb1])]
    let verbDisplay = isVerb.map(item => `
    ${item.japanese}  |  ${item.te}  |  ${item.nai}`);
    return verbDisplay
}


// create HTML functions


function createWordsHTML (wordsArray) {
divWords.innerHTML = "";
wordsArray.forEach(item => {
    let element = document.createElement("h4");
    element.textContent = item
    divWords.append(element)
})
}


function createSentencesHTML (sentencesArray) {
    divSentences.innerHTML = "";
    sentencesArray.forEach(item => {
        let element = document.createElement("p");
        element.textContent = item
        divSentences.append(element)
    })
}

function createConjHTML (verbArray) {
    divConj.innerHTML = "";
    verbArray.forEach(item => {
        let element = document.createElement("h4");
        element.textContent = item;
        divConj.append(element)
    })
}





// DOM VARIABLES



const inputWord = document.querySelector("#input-word");
const divWords = document.querySelector("#div-words");
const divConj = document.querySelector("#div-conj");
const divSentences = document.querySelector("#div-sentences");




// EVENT LISTENERS

// input event

// clear the input when clicked
inputWord.addEventListener("click", function(){
    inputWord.value = "";
    divSentences.innerHTML = "";
    
  
})

// word input field event listener
inputWord.addEventListener("input", function(e){
    
    let word = e.target.value;
    let resultArrayWords = searchWord(word);
    let resultArraySentences = searchSentence(word);
    let resultArrayVerbs = verbConj(word);
    createSentencesHTML(resultArraySentences);
    createWordsHTML(resultArrayWords);
    createConjHTML(resultArrayVerbs);

    if(inputWord.value === "") {
        divSentences.innerHTML = "";
        divWords.innerHTML = "";
    }
})

divWords.addEventListener("click", function(e){
    console.log(e.target);
})

divConj.addEventListener("click" , function(e){
    console.log(e.target)
})

