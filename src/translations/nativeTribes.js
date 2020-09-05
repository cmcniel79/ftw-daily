
const nativeTribes = [
  { name: "'Amuwu" },
  { name: "'Anyapax" },
  { name: "A'i Cofán/Kofán" },
  { name: "Abenaki / Abénaquis" },
  { name: "Acaxees" },
  { name: "Accomack" },
  { name: "Achagua" },
  { name: "Achires" },
  { name: "Acho Dene Koe" },
  { name: "Achuar" },
  { name: "Achumawi" },
  { name: "Achí" },
  { name: "Acjachemen (Juaneño)" },
  { name: "Adena" },
  { name: "Agwarmin" },
  { name: "Ahantchuyuk" },
  { name: "Ahtna Nenn’" },
  { name: "Ahuriri Hapū" },
  { name: "Ais" },
  { name: "Akaitcho" },
  { name: "Akawaio/Akawayo" },
  { name: "Akimel O’odham (Upper Pima)" },
  { name: "Akokisa" },
  { name: "Alawa" },
  { name: "Alazapas" },
  { name: "Alutiiq (Sugpiaq)" },
  { name: "Alyawarre" },
  { name: "Amangu" },
  { name: "Amarak" },
  { name: "Ambaló" },
  { name: "Amorúa" },
  { name: "Andegerebenha" },
  { name: "Andoa" },
  { name: "Andyamathanha" },
  { name: "Anggamudi" },
  { name: "Anguthimri" },
  { name: "Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ" },
  { name: "Anmatyerre" },
  { name: "Antakarinja" },
  { name: "Aparai" },
  { name: "Appamattuck" },
  { name: "Apsaalooké (Crow)" },
  { name: "Arabana" },
  { name: "Arapaho" },
  { name: "Arawak" },
  { name: "Arosaguntacook" },
  { name: "Arrernte" },
  { name: "Arrohatec" },
  { name: "Aseniwuche Winewak (Rocky Mountain)" },
  { name: "Assiniboine" },
  { name: "Atakapa" },
  { name: "Atfalati" },
  { name: "Atsugewi" },
  { name: "Attiwonderonk (Neutral)" },
  { name: "Aucocisco" },
  { name: "Avanersuaq" },
  { name: "Awabakal" },
  { name: "Awaswas" },
  { name: "Awngthim" },
  { name: "Aymara" },
  { name: "Ayuukjä'äy (Mixe)" },
  { name: "Añuu" },
  { name: "Aónikenk (Tehuelche)" },
  { name: "Badimaya" },
  { name: "Badtjala" },
  { name: "Bakanh" },
  { name: "Ballardong" },
  { name: "Bandjigali" },
  { name: "Banggarla" },
  { name: "Banjima" },
  { name: "Baraba Baraba" },
  { name: "Baradha" },
  { name: "Barasano/Panenoá" },
  { name: "Bardi" },
  { name: "Barindji" },
  { name: "Barkindji" },
  { name: "Barna" },
  { name: "Barranbinya" },
  { name: "Barundji" },
  { name: "Barunggam" },
  { name: "Baré" },
  { name: "Barí" },
  { name: "Batsil Winik' Otik (Tzotzil)" },
  { name: "Bayali" },
  { name: "Beaver Lake Cree" },
  { name: "Beaver" },
  { name: "Ben 'Zaa/Binnizá/Mén Diiste/Bene Xhon (Zapoteco)" },
  { name: "Beothuk" },
  { name: "Betoy" },
  { name: "Bibbulman" },
  { name: "Bidai" },
  { name: "Bidjara" },
  { name: "Bidwell" },
  { name: "Big Stone Cree" },
  { name: "Bigambul" },
  { name: "Bilinara" },
  { name: "Binbinga" },
  { name: "Bindjali" },
  { name: "Biri" },
  { name: "Biripi" },
  { name: "Birria" },
  { name: "Bodéwadmiakiwen (Potawatomi)" },
  { name: "Boonwurrung" },
  { name: "Bora" },
  { name: "Boriken Taino" },
  { name: "Bostos" },
  { name: "Bribri" },
  { name: "Brothertown" },
  { name: "Brunka" },
  { name: "Buandig" },
  { name: "Budjari" },
  { name: "Buglé and Ngäbé" },
  { name: "Bukurnidja" },
  { name: "Bularnu" },
  { name: "Bundjalung" },
  { name: "Burarra" },
  { name: "Cabiyari/Kawiyarí" },
  { name: "Caddo" },
  { name: "Cahita" },
  { name: "Cahto" },
  { name: "Cahuilla" },
  { name: "Calicuas" },
  { name: "Calusa" },
  { name: "Canarsie" },
  { name: "Cape Fear" },
  { name: "Carcross/Tagish First Nation (BC)" },
  { name: "Carcross/Tagish First Nation (Yukon)" },
  { name: "Carrizo/Comecrudo" },
  { name: "Catawba" },
  { name: "Caxcan" },
  { name: "Cayuse, Umatilla and Walla Walla" },
  { name: "Central Pomo" },
  { name: "Ch'orti'" },
  { name: "Chafan" },
  { name: "Chahta Yakni (Choctaw)" },
  { name: "Chalon" },
  { name: "Chamorro" },
  { name: "Champagne & Aishihik" },
  { name: "Chango" },
  { name: "Charrúas" },
  { name: "Chehalis" },
  { name: "Chelamela" },
  { name: "Chelan" },
  { name: "Chemapho" },
  { name: "Chemehuevi" },
  { name: "Chepenefa" },
  { name: "Cheraw" },
  { name: "Cheroenhaka (Nottoway)" },
  { name: "Cherokee (Oklahoma)" },
  { name: "Chesapeake" },
  { name: "Cheyenne" },
  { name: "Cheyenne-Arapaho (Oklahoma)" },
  { name: "Chiapaneco" },
  { name: "Chickahominy" },
  { name: "Chickasaw (Oklahoma)" },
  { name: "Chicora" },
  { name: "Chikashsha Yaki (Chickasaw)" },
  { name: "Chilula" },
  { name: "Chimacum" },
  { name: "Chimariko (territory)" },
  { name: "Chinanteco" },
  { name: "Chinook" },
  { name: "Chiricahua Apache" },
  { name: "Chiso" },
  { name: "Chit-dee-ni (Chetco)" },
  { name: "Chitimacha" },
  { name: "Chochenyo" },
  { name: "Choctaw (Oklahoma)" },
  { name: "Cholulteca" },
  { name: "Chono" },
  { name: "Chontal de Guerrero – Tuxteco" },
  { name: "Chorotega" },
  { name: "Chowanoke" },
  { name: "Chumash" },
  { name: "Ciguayo" },
  { name: "Clackamas" },
  { name: "Clatskanie" },
  { name: "Clatsop" },
  { name: "Coahuiltecan" },
  { name: "Coast Salish" },
  { name: "Coast Yuki" },
  { name: "Coca" },
  { name: "Cochimí" },
  { name: "Cocopah (Xawiƚƚ kwñchawaay)" },
  { name: "Coharie" },
  { name: "Colville" },
  { name: "Comca’ac (Seri)" },
  { name: "Confederated Tribes of Warm Springs" },
  { name: "Congaree" },
  { name: "Coos, Lower Umpqua, Siuslaw" },
  { name: "Coquille" },
  { name: "Corchaug" },
  { name: "Coree" },
  { name: "Cow Creek Umpqua" },
  { name: "Cowlitz" },
  { name: "Coyutecos (Nahuatl)" },
  { name: "Cree" },
  { name: "Croatan" },
  { name: "Cuchiyaga" },
  { name: "Cuitlatec" },
  { name: "Cupeño" },
  { name: "Cuttatawomen" },
  { name: "Dadi Dadi" },
  { name: "Dainggatti" },
  { name: "Dakeł Keyoh (ᑕᗸᒡ ᗲᘏᑋ)" },
  { name: "Dangbon" },
  { name: "Danggali" },
  { name: "Darkinung" },
  { name: "Darumbal" },
  { name: "Da’naxda’xw Awaetlatla" },
  { name: "Deg Xit'an Ngan' (Deg Xit'an)" },
  { name: "Dehcho Dene" },
  { name: "Dena'ina Ełnena" },
  { name: "Dene Tha'" },
  { name: "Denendeh (Dënësųłinë́ Nëné)" },
  { name: "Dharawala" },
  { name: "Dharug" },
  { name: "Dhirari" },
  { name: "Dieri" },
  { name: "Diné" },
  { name: "Ditidaht" },
  { name: "Djabuganjdji" },
  { name: "Djabwurung" },
  { name: "Djadjawurrung (territory)" },
  { name: "Djargurdwurung" },
  { name: "Djawi" },
  { name: "Djirbalngan" },
  { name: "Dokapuara (Tuyuca)" },
  { name: "Doolboong/Miriwoong" },
  { name: "Duwamish" },
  { name: "Dyo'xaiya-o-Ivo'tsa (Okaina)" },
  { name: "Dyungungoo (Gubbi Gubbi)" },
  { name: "E'ñepá" },
  { name: "Eastern Mono/Monache" },
  { name: "Eastern Nehântick" },
  { name: "Eastern Pomo" },
  { name: "Eastern Shawnee (Oklahoma)" },
  { name: "Eastern Shoshone" },
  { name: "Eduria (Taiwano)" },
  { name: "Eeyou Istchee" },
  { name: "Emberá Chamí" },
  { name: "Emberá Dobidá" },
  { name: "Emberá Katío/Eyabida" },
  { name: "Emberá" },
  { name: "Emberá/Eperara/Épera" },
  { name: "Eno" },
  { name: "Entiat" },
  { name: "Eora" },
  { name: "Eperara Siapidara" },
  { name: "Erie" },
  { name: "Esselen" },
  { name: "Eyak" },
  { name: "Fernandeño Tataviam" },
  { name: "Féénemɨnaa" },
  { name: "Gabalbara" },
  { name: "Gadubanud" },
  { name: "Gagudju" },
  { name: "Gamberre" },
  { name: "Gananggalinda" },
  { name: "Ganggalida" },
  { name: "Gangulu" },
  { name: "Garawa" },
  { name: "Garingbal" },
  { name: "Garífuna" },
  { name: "Gayardilt" },
  { name: "Gayiri" },
  { name: "Geawegal" },
  { name: "Giraiwurung" },
  { name: "Gitga’at Lax Yuup" },
  { name: "Gitga’at" },
  { name: "Gitx̱san Lax̱yip" },
  { name: "Giya" },
  { name: "Gooniyandi" },
  { name: "Goreng" },
  { name: "Goshute" },
  { name: "Graton Rancheria" },
  { name: "Guacata" },
  { name: "Guachichil" },
  { name: "Guahibo/Hiwi" },
  { name: "Guamares" },
  { name: "Guanaca" },
  { name: "Guanahatabey" },
  { name: "Guane" },
  { name: "Guarani" },
  { name: "Guarijío/Guarijó" },
  { name: "Guarungumbe" },
  { name: "Guasaves/Tamazulas" },
  { name: "Guaycura" },
  { name: "Gugu-Badhun" },
  { name: "Gulidjan" },
  { name: "Gumbainggir" },
  { name: "Guna Yala" },
  { name: "Guna of Madugandí" },
  { name: "Guna of Wargandí" },
  { name: "Gunadule (Kuna-Tule)" },
  { name: "Gunbalang" },
  { name: "Gunditjmara" },
  { name: "Gundungurra" },
  { name: "Gungabula" },
  { name: "Gunggandji" },
  { name: "Gunggari" },
  { name: "Gungurugoni" },
  { name: "Gunibidji" },
  { name: "Gunindiri" },
  { name: "Gunu" },
  { name: "Gunwinggu" },
  { name: "Gureng Gureng" },
  { name: "Gurindji" },
  { name: "Guugu-Yimidhirr" },
  { name: "Guwa" },
  { name: "Guwinmal" },
  { name: "Gwa’Sala-‘Nakwaxda’xw" },
  { name: "Gwich'in Nành" },
  { name: "Gwitch'in Settlement Region" },
  { name: "Hach Winik (Lacandon)" },
  { name: "Haida Gwaii" },
  { name: "Hammonassets" },
  { name: "Hatteras" },
  { name: "Haudenosaunee" },
  { name: "Havasupai" },
  { name: "Heiltsuk" },
  { name: "Hesquiaht" },
  { name: "Hi Ui (Pame/Chichimeco Jonaz)" },
  { name: "Hia-Ced O'odham" },
  { name: "Ho-Chunk (Winnebago)" },
  { name: "Hoh" },
  { name: "Hohokam" },
  { name: "Holikachuk" },
  { name: "Homalco" },
  { name: "Hoopa (Reservation)" },
  { name: "Hoopa" },
  { name: "Hopewell" },
  { name: "Hopi" },
  { name: "Hoti" },
  { name: "Houma" },
  { name: "Hualapai" },
  { name: "Huasteco/Teenek" },
  { name: "Huetar" },
  { name: "Hul Kuhk’u" },
  { name: "Hul’qumi’num Treaty Group" },
  { name: "Hunkpapa" },
  { name: "Hupacasath" },
  { name: "Huu-ay-aht" },
  { name: "Hän" },
  { name: "Hñähñu (Otomí)" },
  { name: "Ijku (Arhuaco)" },
  { name: "Ikoots/Kunajts/Ikoojts (Huave)" },
  { name: "In-SHUCK-ch" },
  { name: "Ineseño" },
  { name: "Inga" },
  { name: "Inikana/Kukama Kukamiria/Kokama" },
  { name: "Iningai" },
  { name: "Inkal Awá" },
  { name: "Inkeriläinen" },
  { name: "Innus (Montagnais)" },
  { name: "Inuit" },
  { name: "Inupiat" },
  { name: "Inuvialuit" },
  { name: "Iowa (Oklahoma)" },
  { name: "Iowa" },
  { name: "Irritilas/Lagunero" },
  { name: "Itazipco" },
  { name: "Iwaidja" },
  { name: "Ixil" },
  { name: "Jabirrjabirr" },
  { name: "Jaburrara" },
  { name: "Jaitmatang" },
  { name: "Jaminjung" },
  { name: "Janos" },
  { name: "Jardwadjali" },
  { name: "Jaru" },
  { name: "Jawoyn" },
  { name: "Jeaga" },
  { name: "Jicarilla Apache" },
  { name: "Jingili" },
  { name: "Jiwarli" },
  { name: "Jococobas" },
  { name: "Juhup-Yuju/Yuhupdëh" },
  { name: "Jukun" },
  { name: "Julimes" },
  { name: "Jumanos" },
  { name: "Jurruru" },
  { name: "K'iche'" },
  { name: "Ka:’yu:’k’t’h’/Che:k’tles7et’h’" },
  { name: "Kaantju" },
  { name: "Kadjerong" },
  { name: "Kala Lagaw Ya" },
  { name: "Kalaako/Malpa" },
  { name: "Kalaalisut" },
  { name: "Kalaamaya" },
  { name: "Kalapuya" },
  { name: "Kalaw Kawaw Ya" },
  { name: "Kalina/Kariña" },
  { name: "Kalinago (Island Carib)" },
  { name: "Kalispel" },
  { name: "Kalkadoon" },
  { name: "Kamejeya (Yukuna)" },
  { name: "Kamilaroi" },
  { name: "Kamëntsá" },
  { name: "Kanaka ʻŌiwi" },
  { name: "Kaniyang" },
  { name: "Kankuamo" },
  { name: "Kaqchikel" },
  { name: "Karajarri" },
  { name: "Karangpurru" },
  { name: "Karangura" },
  { name: "Karankawa" },
  { name: "Karenggapa" },
  { name: "Karijona" },
  { name: "Kariyarra" },
  { name: "Karjalaiset (Karelian)" },
  { name: "Karkin" },
  { name: "Karuk" },
  { name: "Karuwali" },
  { name: "Kashaya" },
  { name: "Kashtik " },
  { name: "Kaska Dena Kayeh" },
  { name: "Kaskaskia" },
  { name: "Kathlamet" },
  { name: "Kaurna Pangkarra" },
  { name: "Kauwets'a:ka" },
  { name: "Kaw (Kansa)" },
  { name: "Kaw (Oklahoma)" },
  { name: "Kawaiisu" },
  { name: "Kawashkar" },
  { name: "Kaytej" },
  { name: "Kañari" },
  { name: "Kecoughtan" },
  { name: "Kelly Lake Metis Settlement Society" },
  { name: "Ket Chonhab’ Kob’a (Chuj)" },
  { name: "Keyauwee" },
  { name: "Khanty/Kantyk" },
  { name: "Kickapoo (Oklahoma)" },
  { name: "Kiikaapoi (Kickapoo)" },
  { name: "Kija" },
  { name: "Kiliwa" },
  { name: "Kiowa" },
  { name: "Kiowa-Comanche-Apache (Oklahoma)" },
  { name: "Kiskiack" },
  { name: "Kitanemuk" },
  { name: "Kitasoo/Xai'xais" },
  { name: "Kitsé Cha’tnio (Chatino)" },
  { name: "Kizh" },
  { name: "Klahoose" },
  { name: "Klallam" },
  { name: "Klamath" },
  { name: "Kluane" },
  { name: "Kogui/Kaggabba" },
  { name: "Kokatha" },
  { name: "Koknar" },
  { name: "Koko-bera" },
  { name: "Kokomini" },
  { name: "Kokowarra" },
  { name: "Konbudj" },
  { name: "Konomihu" },
  { name: "Kooma" },
  { name: "Koyom:k’awi (Konkow)" },
  { name: "Koyukon" },
  { name: "Kriol" },
  { name: "Ktunaxa ɁamakɁis" },
  { name: "Kubéwa/Cubeo" },
  { name: "Kukatj" },
  { name: "Kukatja" },
  { name: "Kuku-yalanji" },
  { name: "Kullilla" },
  { name: "Kumeyaay" },
  { name: "Kundjey’mi" },
  { name: "Kungarakany" },
  { name: "Kunja" },
  { name: "Kunjen" },
  { name: "Kureinji" },
  { name: "Kuring-gai" },
  { name: "Kurnai" },
  { name: "Kurrama" },
  { name: "Kurtjar" },
  { name: "Kusso" },
  { name: "Kuthant" },
  { name: "Kuuku-yani" },
  { name: "Kuuku-ya’u" },
  { name: "Kuungkari" },
  { name: "Kuuvuan KaNianiq" },
  { name: "Kuwarra" },
  { name: "Kuwema" },
  { name: "Kuyam" },
  { name: "Kuyani" },
  { name: "Kwakwaka’wakw" },
  { name: "Kwanlin Dün" },
  { name: "Kwantlen" },
  { name: "Kwikwetlem" },
  { name: "Kwini" },
  { name: "K’asho Got’ine" },
  { name: "K’áálǫ Got’ine" },
  { name: "K’ómoks" },
  { name: "Lamalama" },
  { name: "Lardil" },
  { name: "Larrakia" },
  { name: "Lassik" },
  { name: "Latje Latje" },
  { name: "Lekawe (Rockaway)" },
  { name: "Lekwungen/Songhees" },
  { name: "Lemhi-Shoshone" },
  { name: "Lenca" },
  { name: "Lhaq’temish (Lummi)" },
  { name: "Lheidli T'enneh" },
  { name: "Lil'wat" },
  { name: "Limilngan" },
  { name: "Limuw" },
  { name: "Lingít Aaní (Tlingit)" },
  { name: "Lipan Apache" },
  { name: "Little Salmon/Carmacks" },
  { name: "Lokono (Arawak)" },
  { name: "Lower Chinook" },
  { name: "Lower Tohono O’odham (Lower Pima)" },
  { name: "Lucayo" },
  { name: "Luckiamute" },
  { name: "Lumbee" },
  { name: "Luritja" },
  { name: "Luthigh" },
  { name: "Lənape Haki-nk (Lenni-Lenape)" },
  { name: "Maaväki (Izhorian)" },
  { name: "Maańśi" },
  { name: "Macorix" },
  { name: "Macuxi" },
  { name: "Madi Madi" },
  { name: "Magüta/Ticuna" },
  { name: "Maiawali" },
  { name: "Maijuna" },
  { name: "Makah" },
  { name: "Malak malak" },
  { name: "Malkana" },
  { name: "Malyangaba" },
  { name: "Malécu" },
  { name: "Manahoac" },
  { name: "Mandan, Hidatsa, and Arikara" },
  { name: "Mandandanji" },
  { name: "Mandjindja" },
  { name: "Mangala" },
  { name: "Mangarayi" },
  { name: "Maniapoto" },
  { name: "Manissean" },
  { name: "Mannansett" },
  { name: "Mara" },
  { name: "Maranunggu" },
  { name: "Mardu" },
  { name: "Margany" },
  { name: "Maricopa/Pima" },
  { name: "Marramaninjsji" },
  { name: "Marringarr" },
  { name: "Marrithiyel" },
  { name: "Martuthunira" },
  { name: "Massa-adchu-es-et (Massachusett)" },
  { name: "Massacoes" },
  { name: "Massapequas" },
  { name: "Massawomeck" },
  { name: "Matagalpa/Cacaopera" },
  { name: "Matawai" },
  { name: "Matecumbe" },
  { name: "Matinecock" },
  { name: "Matlatzinco/Tlahuica/Ocuiltec" },
  { name: "Matlatzinco/matlatzinteca" },
  { name: "Mattamuskeet" },
  { name: "Mattaponi" },
  { name: "Mattole" },
  { name: "Maung" },
  { name: "Maungaharuru Tangitū Hapū" },
  { name: "Maya Yucateco" },
  { name: "Maya" },
  { name: "Mayaimi" },
  { name: "Mayangna" },
  { name: "Mayi-Kulan" },
  { name: "Mayi-Kutuna" },
  { name: "Mayi-Thakurti" },
  { name: "Mayi-Yapi" },
  { name: "Mazahua" },
  { name: "Mazatec" },
  { name: "Mbabaram" },
  { name: "Mbara" },
  { name: "Mbeiwum" },
  { name: "Mbukarla" },
  { name: "Mdewakanton" },
  { name: "Me-Wuk (Bay Miwok)" },
  { name: "Me-Wuk (Central Sierra Miwok)" },
  { name: "Me-Wuk (Coast Miwok)" },
  { name: "Me-Wuk (Lake Miwok)" },
  { name: "Me-Wuk (Northern Sierra Miwok)" },
  { name: "Me-Wuk (Plains Miwok)" },
  { name: "Me-Wuk (Southern Sierra Miwok)" },
  { name: "Mechoopda Maidu" },
  { name: "Meherrin" },
  { name: "Menominee" },
  { name: "Meriam Mir" },
  { name: "Merrick" },
  { name: "Meru" },
  { name: "Mescalero Apache" },
  { name: "Methow" },
  { name: "Mexicanero (Nahuas)" },
  { name: "Mexihcah (Triple Alliance)" },
  { name: "Meškwahki·aša·hina (Fox)" },
  { name: "Me̱'pha̱a̱ (Tlapaneco)" },
  { name: "Miami (Oklahoma)" },
  { name: "Miami" },
  { name: "Miccosukee" },
  { name: "Michumash" },
  { name: "Micqanaqa’n" },
  { name: "Miluk Coos" },
  { name: "Minang" },
  { name: "Mingin" },
  { name: "Miraña" },
  { name: "Mirning" },
  { name: "Misak" },
  { name: "Miskito" },
  { name: "Mississauga" },
  { name: "Mississaugas of the Credit First Nation" },
  { name: "Mithaka" },
  { name: "Miwa" },
  { name: "Miyan" },
  { name: "Mi’kmaq" },
  { name: "Mnicoujou" },
  { name: "Mochó" },
  { name: "Modoc (Oklahoma)" },
  { name: "Modoc" },
  { name: "Mohawk (Kalapuya)" },
  { name: "Mohawk" },
  { name: "Mohegan" },
  { name: "Mohican" },
  { name: "Mojave" },
  { name: "Mokaná" },
  { name: "Molalla" },
  { name: "Monacan" },
  { name: "Moneton" },
  { name: "Monqui" },
  { name: "Montaukett" },
  { name: "Moose Cree" },
  { name: "Mopan" },
  { name: "Moratok" },
  { name: "Moraughtacund" },
  { name: "Moriori" },
  { name: "Moses/Columbia" },
  { name: "Mountain Maidu" },
  { name: "Mpalitjanh" },
  { name: "Muaūpoko" },
  { name: "Muckleshoot" },
  { name: "Mudburra" },
  { name: "Muina Murui" },
  { name: "Muisca" },
  { name: "Munsee Lenape" },
  { name: "Muralag" },
  { name: "Murrinh-patha" },
  { name: "Muruwari" },
  { name: "Muscogee (Oklahoma)" },
  { name: "Musgamagw Dzawada'enuxw" },
  { name: "Muteamasa (Karapanã)" },
  { name: "Mutumui" },
  { name: "Mvskoke (Muscogee / Creek)" },
  { name: "Mánekenk/Haush" },
  { name: "Métis" },
  { name: "NWT Métis Nation" },
  { name: "Na-cho Nyak Dun" },
  { name: "Nacotchtank (Anacostan)" },
  { name: "Nahua ( Morelos, Puebla, Tlaxcala, Veracruz, Hidalgo, San Luis Potosi)" },
  { name: "Nahuas" },
  { name: "Nahuatl (Guerrero)" },
  { name: "Nahuatl (Mexico)" },
  { name: "Nahuatl (Michoacan)" },
  { name: "Nahuatl" },
  { name: "Nakako" },
  { name: "Nakara" },
  { name: "Nana" },
  { name: "Nandtaughtacund" },
  { name: "Nanrantsouak" },
  { name: "Nansemond" },
  { name: "Narangga" },
  { name: "Nari Nari" },
  { name: "Narragansett" },
  { name: "Nasa" },
  { name: "Natchez" },
  { name: "Natchitoches" },
  { name: "Nauset" },
  { name: "Nawu" },
  { name: "Nehalem" },
  { name: "Nentego (Nanticoke)" },
  { name: "Nespelem" },
  { name: "Nestucca" },
  { name: "Neusiok" },
  { name: "New River Shasta" },
  { name: "Newe (Western Shoshone)" },
  { name: "Ngaanyatjarra" },
  { name: "Ngadjuri" },
  { name: "Ngalakan" },
  { name: "Ngalawangka" },
  { name: "Ngalea" },
  { name: "Ngaliwuru" },
  { name: "Ngalkbun" },
  { name: "Ngamini" },
  { name: "Ngandi" },
  { name: "Ngandji" },
  { name: "Nganyaywana" },
  { name: "Ngan’gikurunggurr" },
  { name: "Ngan’giwumirri" },
  { name: "Ngarabal" },
  { name: "Ngargad" },
  { name: "Ngarigo" },
  { name: "Ngarinman" },
  { name: "Ngarinyin" },
  { name: "Ngarla" },
  { name: "Ngarluma" },
  { name: "Ngarrindjeri" },
  { name: "Ngarti" },
  { name: "Ngatatjara" },
  { name: "Ngatjumay" },
  { name: "Ngawun" },
  { name: "Ngi-iva (Popoloca)" },
  { name: "Ngombur" },
  { name: "Nguburinji" },
  { name: "Ngumbarl" },
  { name: "Ngunawal" },
  { name: "Nguri" },
  { name: "Ngurraiillam" },
  { name: "Ngā Rauru Kītahi" },
  { name: "Ngāi Tahu" },
  { name: "Ngāi Tai ki Tāmaki" },
  { name: "Ngāi Te Rangi" },
  { name: "Ngāi Tāmanuhiri" },
  { name: "Ngāitai (Bay Of Plenty)" },
  { name: "Ngāpuhi / Ngāti Kahu ki Whaingaroa" },
  { name: "Ngāpuhi" },
  { name: "Ngāti Apa ki te Rā Tō" },
  { name: "Ngāti Apa" },
  { name: "Ngāti Awa" },
  { name: "Ngāti Hako" },
  { name: "Ngāti Hauiti" },
  { name: "Ngāti Hauā" },
  { name: "Ngāti Hei" },
  { name: "Ngāti Hinerangi" },
  { name: "Ngāti Hineuru" },
  { name: "Ngāti Hāua (Upper Whanganui)" },
  { name: "Ngāti Kahu ki Whangaroa" },
  { name: "Ngāti Kahu" },
  { name: "Ngāti Kahungunu ki Heretaunga Tamatea" },
  { name: "Ngāti Kahungunu ki Wairarapa - Tāmaki Nui ā Rua" },
  { name: "Ngāti Kahungunu" },
  { name: "Ngāti Kea / Ngāti Tuarā" },
  { name: "Ngāti Korokī Kahukura" },
  { name: "Ngāti Kuia" },
  { name: "Ngāti Kuri" },
  { name: "Ngāti Kōata" },
  { name: "Ngāti Manawa" },
  { name: "Ngāti Manuhiri" },
  { name: "Ngāti Maru (Hauraki)" },
  { name: "Ngāti Maru (Taranaki)" },
  { name: "Ngāti Mutunga o Wharekauri (Chatham Islands)" },
  { name: "Ngāti Mutunga" },
  { name: "Ngāti Mākino" },
  { name: "Ngāti Paoa" },
  { name: "Ngāti Pikiao" },
  { name: "Ngāti Porou ki Harataunga ki Mataora" },
  { name: "Ngāti Porou" },
  { name: "Ngāti Pāhauwera" },
  { name: "Ngāti Pūkenga ki Waiau" },
  { name: "Ngāti Pūkenga" },
  { name: "Ngāti Rangi" },
  { name: "Ngāti Ranginui" },
  { name: "Ngāti Rangiteaorere" },
  { name: "Ngāti Rangitihi" },
  { name: "Ngāti Rangiwewehi" },
  { name: "Ngāti Raukawa ki te Tonga" },
  { name: "Ngāti Rehua" },
  { name: "Ngāti Rongomai" },
  { name: "Ngāti Ruanui" },
  { name: "Ngāti Ruapani mai Waikaremoana" },
  { name: "Ngāti Rāhiri Tumutumu" },
  { name: "Ngāti Rārua" },
  { name: "Ngāti Tahu / Ngāti Whaoa" },
  { name: "Ngāti Tama ki Te Tau Ihu" },
  { name: "Ngāti Tama" },
  { name: "Ngāti Tamaoho" },
  { name: "Ngāti Tamaterā" },
  { name: "Ngāti Tara Tokanui" },
  { name: "Ngāti Tarāwhai" },
  { name: "Ngāti Toa Rangatira" },
  { name: "Ngāti Tūwharetoa (Bay of Plenty)" },
  { name: "Ngāti Tūwharetoa" },
  { name: "Ngāti Whanaunga" },
  { name: "Ngāti Whare" },
  { name: "Ngāti Whātua o Kaipara" },
  { name: "Ngāti Whātua o Ōrākei" },
  { name: "Ngāti Whātua" },
  { name: "Ngātiwai" },
  { name: "Nhanta" },
  { name: "Nheengatu" },
  { name: "Nhuwala" },
  { name: "Nicarao/Nahoa" },
  { name: "Nicoleño" },
  { name: "Niitsítpiis-stahkoii ᖹᐟᒧᐧᐨᑯᐧ ᓴᐦᖾᐟ (Blackfoot / Niitsítapi ᖹᐟᒧᐧᒣᑯ)" },
  { name: "Nimanburu" },
  { name: "Nimiipuu (Nez Perce)" },
  { name: "Nipmuc" },
  { name: "Nisenan" },
  { name: "Nisg̱a'a" },
  { name: "Nisqually" },
  { name: "Nissaquogue" },
  { name: "Nitaskinan (Atikamekw / Nehirowisi Aski)" },
  { name: "Nomlaki" },
  { name: "Nongatl" },
  { name: "Nonuya" },
  { name: "Northeastern Pomo" },
  { name: "Northern Paiute" },
  { name: "Northern Pomo" },
  { name: "Northern Wintu" },
  { name: "Northern Yukian" },
  { name: "Nuenonne" },
  { name: "Nukunu" },
  { name: "Nunatsiavut" },
  { name: "Nunavik" },
  { name: "Nungali" },
  { name: "Nunggubuyu" },
  { name: "Nuwhaha" },
  { name: "Nuxalk" },
  { name: "Nuxwsa'7aq (Nooksack)" },
  { name: "Nyaki-nyaki" },
  { name: "Nyamal" },
  { name: "Nyanganyatjara" },
  { name: "Nyangumarda" },
  { name: "Nyawaygi" },
  { name: "Nyikina" },
  { name: "Nyul Nyul" },
  { name: "Náayerite (Cora)" },
  { name: "Núu-agha-tʉvʉ-pʉ̱ (Ute)" },
  { name: "Nükak Makü" },
  { name: "Nłeʔkepmx Tmíxʷ (Nlaka'pamux)" },
  { name: "Nʉmʉnʉʉ (Comanche)" },
  { name: "N’eney N’enet’s’ (Nenets)" },
  { name: "Obispeño" },
  { name: "Occaneechi" },
  { name: "Occohannock" },
  { name: "Odawa" },
  { name: "Odǫhwęja:deˀ (Cayuga)" },
  { name: "Oglala" },
  { name: "Ohlone" },
  { name: "Okanagan" },
  { name: "Okwanuchu" },
  { name: "Omaha" },
  { name: "Omàmìwininìwag (Algonquin)" },
  { name: "Onawmanient" },
  { name: "Onundagaonoga (Onondaga)" },
  { name: "Onöndowa'ga:' (Seneca)" },
  { name: "Onʌyote'a•ka (Oneida)" },
  { name: "Oohenumpa" },
  { name: "Opelousas" },
  { name: "Opiscopank" },
  { name: "Osage (Oklahoma)" },
  { name: "Oto" },
  { name: "Otoe-Missouri (Oklahoma)" },
  { name: "Otoe-Missouria (Oklahoma)" },
  { name: "Ottawa (Oklahoma)" },
  { name: "Očeti Šakówiŋ (Sioux)" },
  { name: "O’ de püt/Angpøn (Zoque)" },
  { name: "O’odham" },
  { name: "Pacaxes" },
  { name: "Pacheedaht" },
  { name: "Paipai (Akwa'ala)" },
  { name: "Palawa" },
  { name: "Palouse" },
  { name: "Paltas" },
  { name: "Palyku" },
  { name: "Pamlico (Pomouik)" },
  { name: "Pamunkey" },
  { name: "Paredarerme" },
  { name: "Pascua Yaqui" },
  { name: "Paspahegh" },
  { name: "Passamaquoddy" },
  { name: "Pasto" },
  { name: "Patamona/Ingarikó" },
  { name: "Patawomeck" },
  { name: "Patwin" },
  { name: "Paugussett" },
  { name: "Pauquunaukit (Wampanoag)" },
  { name: "Pawnee (Oklahoma)" },
  { name: "Pawtucket" },
  { name: "Payungu" },
  { name: "Payómkawichum (Luiseño)" },
  { name: "Pech" },
  { name: "Peerapper" },
  { name: "Pemón" },
  { name: "Pennacook" },
  { name: "Penobscot" },
  { name: "Pentucket" },
  { name: "Peoria (Oklahoma)" },
  { name: "Peoria" },
  { name: "Pequawket" },
  { name: "Pequot" },
  { name: "Peramangk" },
  { name: "Pericú" },
  { name: "Perquimans" },
  { name: "Pescado" },
  { name: "Petun" },
  { name: "Pijao" },
  { name: "Pinikura" },
  { name: "Pinjarup" },
  { name: "Pintupi" },
  { name: "Pipil" },
  { name: "Pirlatapa" },
  { name: "Pisamira" },
  { name: "Piscataway" },
  { name: "Pissaseck" },
  { name: "Pitjantjatjara" },
  { name: "Pitta-Pitta" },
  { name: "Plains Cree" },
  { name: "Pocumtuc" },
  { name: "Podunks" },
  { name: "Ponca (Oklahoma)" },
  { name: "Ponca" },
  { name: "Popeloutchom (Amah Mutsun)" },
  { name: "Popoluca (mixe-zoque)" },
  { name: "Poqomam" },
  { name: "Poqomchi’" },
  { name: "Poquonock" },
  { name: "Poquonook" },
  { name: "Potawatomi-Shawnee (Oklahoma)" },
  { name: "Poteskeet" },
  { name: "Pouākani" },
  { name: "Powhatan" },
  { name: "Pueblos" },
  { name: "Puinave" },
  { name: "Punuba" },
  { name: "Purduna" },
  { name: "Puruwá" },
  { name: "Puyallup" },
  { name: "Pyemmairrener" },
  { name: "Pâri (Pawnee)" },
  { name: "P’urhépecha" },
  { name: "Q'anjob'al" },
  { name: "Q'eqchi'" },
  { name: "Qayqayt" },
  { name: "Quapaw (Oklahoma)" },
  { name: "Quapaw" },
  { name: "Quatsino" },
  { name: "Quechan (Kwatsáan)" },
  { name: "Quechua" },
  { name: "Quechua-Kichwa" },
  { name: "Quileute" },
  { name: "Quillacinga" },
  { name: "Quinault" },
  { name: "Quinnipiac" },
  { name: "Quiyoughcohannock" },
  { name: "Quuiich (Lower Umpqua)" },
  { name: "Rama" },
  { name: "Ramaytush" },
  { name: "Rangitāne o Wairau" },
  { name: "Rangitāne" },
  { name: "Rappahannock" },
  { name: "Rarámuri (Tarahumara-Guarijio)" },
  { name: "Raukawa" },
  { name: "Rayados (Borrados)" },
  { name: "Rembarnga" },
  { name: "Rereahu" },
  { name: "Roanoke" },
  { name: "Rongowhakaata" },
  { name: "Rumsen" },
  { name: "Runixa Ngiigua (Chocho)" },
  { name: "Sac and Fox (Oklahoma)" },
  { name: "Sacapultec" },
  { name: "Sahtu Dene and Metis" },
  { name: "Sahtú Got’ine" },
  { name: "Salinan" },
  { name: "Salish & Kootenai Tribes" },
  { name: "Salish Kootenai (Flathead)" },
  { name: "Salmon River" },
  { name: "Saluda" },
  { name: "Samish" },
  { name: "San Carlos Apache" },
  { name: "San Poil" },
  { name: "Sana" },
  { name: "Santee" },
  { name: "Santiam" },
  { name: "Sapara" },
  { name: "Sappony" },
  { name: "Saraguro" },
  { name: "Sauk and Meskwaki" },
  { name: "Saura" },
  { name: "Schitsu’umsh (Coeur d’Alene)" },
  { name: "Secatogue" },
  { name: "Secotan" },
  { name: "Secwépemc (Secwépemcúl’ecw)" },
  { name: "Sekakawon" },
  { name: "Sekani" },
  { name: "Selk'nam" },
  { name: "Selkirk" },
  { name: "Semiahmoo" },
  { name: "Seminole (Oklahoma)" },
  { name: "Seminole Tribe of Florida (Big Cypress Reservation)" },
  { name: "Seminole Tribe of Florida (Brighton Reservation)" },
  { name: "Seminole Tribe of Florida (Hollywood Reservation)" },
  { name: "Seminole Tribe of Florida (Immokalee Reservation)" },
  { name: "Seminole Tribe of Florida (Tampa Reservation)" },
  { name: "Seminole" },
  { name: "Seneca-Cayuga (Oklahoma)" },
  { name: "Setauket" },
  { name: "Sewee" },
  { name: "Shakori" },
  { name: "Shasta" },
  { name: "Shawandasse Tula (Shawanwaki/Shawnee)" },
  { name: "Shigom" },
  { name: "Shinnecock" },
  { name: "Shita Got’ine" },
  { name: "Shiwiar-Achuar" },
  { name: "Shmuwich (Barbareño)" },
  { name: "Shoalwater Bay" },
  { name: "Shoshone-Bannock" },
  { name: "Shuar (Huambisa)" },
  { name: "Shíshálh" },
  { name: "Sicangu" },
  { name: "Sicoags" },
  { name: "Siekopa’aiInte/Aido-Pãi (Secoya)" },
  { name: "Sihapsa" },
  { name: "Siletz" },
  { name: "Sinkyone" },
  { name: "Siria-masã (Siriano)" },
  { name: "Sisseton" },
  { name: "Sissipahaw" },
  { name: "Siuslaw" },
  { name: "Sivuqaq (St. Lawrence Island) Yup’ik" },
  { name: "Skagit" },
  { name: "Skaruhreh/Tuscarora (North Carolina)" },
  { name: "Skwxwú7mesh-ulh Temíx̱w (Squamish)" },
  { name: "Skykomish" },
  { name: "Slijuala Xanuc (Chontal)" },
  { name: "Snohomish" },
  { name: "Snuneymuxw" },
  { name: "So'to (Yekuana)" },
  { name: "Sobaipuri" },
  { name: "Southeastern Pomo" },
  { name: "Southern Inuit (NunatuKavut)" },
  { name: "Southern Paiute" },
  { name: "Southern Pomo" },
  { name: "Spokane" },
  { name: "Squaxin" },
  { name: "St. Lawrence Iroquoians" },
  { name: "Stillaguamish" },
  { name: "Stoney" },
  { name: "Sturgeon Lake Cree" },
  { name: "Stz'uminus" },
  { name: "St̓át̓imc Tmicw (St'at'imc)" },
  { name: "Sugaree" },
  { name: "Sumas" },
  { name: "Suquamish" },
  { name: "Susquehannock" },
  { name: "Sutiaba" },
  { name: "Swinomish" },
  { name: "Syilx tmixʷ (Okanagan)" },
  { name: "Sápmi (Sámi)" },
  { name: "Söl'kup" },
  { name: "S’atsoyaha (Yuchi)" },
  { name: "S’ólh Téméxw (Stó:lō)" },
  { name: "Tagish" },
  { name: "Tahues" },
  { name: "Taino" },
  { name: "Takalak" },
  { name: "Takelma" },
  { name: "Taku River Tlingit" },
  { name: "Tama Dujo" },
  { name: "Tamaulipeco tribes" },
  { name: "Tampachoa (Mansos)" },
  { name: "Tamyen" },
  { name: "Tanacross" },
  { name: "Tanana" },
  { name: "Tanigua" },
  { name: "Tanimuka" },
  { name: "Tapachulteco (mixe-zoque)" },
  { name: "Tapuika" },
  { name: "Taranaki Whānui ki te Upoko o te Ika" },
  { name: "Taranaki" },
  { name: "Taungurung" },
  { name: "Tawahka" },
  { name: "Tawakoni" },
  { name: "Ta’an Kwäch’än" },
  { name: "Te Aitanga ā Māhaki" },
  { name: "Te Atiawa (Taranaki)" },
  { name: "Te Atiawa (Wellington)" },
  { name: "Te Atiawa ki Whakarongotai" },
  { name: "Te Atiawa o Te Waka-a-Māui" },
  { name: "Te Aupōuri" },
  { name: "Te Kawerau a Maki" },
  { name: "Te Korowai o Wainuiārua (Central Whanganui)" },
  { name: "Te Patukirikiri" },
  { name: "Te Rarawa" },
  { name: "Te Roroa" },
  { name: "Te Ure o Uenukukōpako / Ngāti Whakaue" },
  { name: "Te Uri o Hau" },
  { name: "Te Wairoa iwi and hapu" },
  { name: "Te Whānau a Apanui" },
  { name: "Te Ākitai Waiohua" },
  { name: "Tecuexe" },
  { name: "Tenino" },
  { name: "Tepehua" },
  { name: "Tepehuán" },
  { name: "Teppathiggi" },
  { name: "Tequesta" },
  { name: "Teslin Tlingit Council (BC)" },
  { name: "Teslin Tlingit Council (Yukon)" },
  { name: "Tetlit Gwich’in" },
  { name: "Te’mexw Treaty Association" },
  { name: "Thaayorre" },
  { name: "Thalanyji" },
  { name: "Tharawal" },
  { name: "Tharrgari" },
  { name: "Thiin" },
  { name: "Thul Garrie Waja (Bindal)" },
  { name: "Tillamook and Siletz" },
  { name: "Tillamook" },
  { name: "Timucua" },
  { name: "Tiwi" },
  { name: "Tjalkanti" },
  { name: "Tjer-di/Teribe Broram" },
  { name: "Tjerratj" },
  { name: "Tjungundji" },
  { name: "Tjupany" },
  { name: "Tla’amin Nation (Sliammon)" },
  { name: "Tobosos" },
  { name: "Tocobaga" },
  { name: "Tohono O’odham (Papago)" },
  { name: "Tojolwinik’otik (Tojolabal)" },
  { name: "Tolowa Dee-ni’" },
  { name: "Tolupan" },
  { name: "Tommeginne" },
  { name: "Tongva" },
  { name: "Tonkawa (Oklahoma)" },
  { name: "Tonkawa" },
  { name: "Tontotuna (Totoró)" },
  { name: "Toogee" },
  { name: "Toquaht" },
  { name: "Totonac" },
  { name: "Totonaco" },
  { name: "Totorames" },
  { name: "Trio" },
  { name: "Tr’ondëk Hwëch’in" },
  { name: "Ts'msyen La̱xyuup (Tsimshian)" },
  { name: "Tsankupi" },
  { name: "Tsase/Piapoco" },
  { name: "Tseshaht" },
  { name: "Tse’khene" },
  { name: "Tsilhqot'in Nen" },
  { name: "Tsnungwe" },
  { name: "Tsuu T'ina" },
  { name: "Tulalip" },
  { name: "Tunumiit Oraasiat" },
  { name: "Tunxis" },
  { name: "Tuqan" },
  { name: "Turrbal" },
  { name: "Tuscarora" },
  { name: "Tutelo" },
  { name: "Tututni" },
  { name: "Twana/Skokomish" },
  { name: "Tyerrernotepanner" },
  { name: "Tz'utujil" },
  { name: "Tzjon Non/ Tzo'tyio (Amuzgo)" },
  { name: "Tübatulabal" },
  { name: "Tāłtān Konelīne (Tahltan)" },
  { name: "Tłı̨chǫ Ndè" },
  { name: "Tūhoe" },
  { name: "Tūhourangi" },
  { name: "Uchucklesaht" },
  { name: "Ucluelet" },
  { name: "Ulwas" },
  { name: "Umbindhamu" },
  { name: "Umida" },
  { name: "Umpila" },
  { name: "Umukomasã/Desana" },
  { name: "Umurecoómajá (Tatuyo)" },
  { name: "Unangam Tanangin (Unangax̂ /Aleut)" },
  { name: "Unggarangi" },
  { name: "Unggumi" },
  { name: "Unkechaug" },
  { name: "Upper Kuskokwim" },
  { name: "Upper Tanana" },
  { name: "Uspantec" },
  { name: "Uutaalnganu" },
  { name: "Uwottüja" },
  { name: "Vad’d’alaizõd" },
  { name: "Vepslaine/Vepsalne (Veps)" },
  { name: "Vuntut Gwitchin" },
  { name: "Waanyi" },
  { name: "Wabanaki Confederacy" },
  { name: "Waccamaw (Woccon)" },
  { name: "Waco" },
  { name: "Wadi Wadi" },
  { name: "Wadigali" },
  { name: "Wadjigu" },
  { name: "Wagiman" },
  { name: "Wahkiakum" },
  { name: "Wahpekute" },
  { name: "Wahpeton" },
  { name: "Waikato" },
  { name: "Wailaki" },
  { name: "Wailwan" },
  { name: "Waitaha" },
  { name: "Waiwai" },
  { name: "Wajuk" },
  { name: "Waka Waka" },
  { name: "Wakabunga" },
  { name: "Wakaya" },
  { name: "Wakuenai/Walimanai (Kuripako)" },
  { name: "Walangama" },
  { name: "Walimanai (Baniwa)" },
  { name: "Wallmapu (Mapuche)" },
  { name: "Walmatjarri" },
  { name: "Wambaya" },
  { name: "Wanano/Kotiria" },
  { name: "Wandjiwalgu" },
  { name: "Wangan" },
  { name: "Wangkamana" },
  { name: "Wangkangurru" },
  { name: "Wangkathaa" },
  { name: "Wangkumara" },
  { name: "Wangunks" },
  { name: "Waorani" },
  { name: "Wapishana/Wapixana" },
  { name: "Wappinger" },
  { name: "Wappo" },
  { name: "Warao" },
  { name: "Wardaman" },
  { name: "Wardandi" },
  { name: "Warekena" },
  { name: "Wargamaygan" },
  { name: "Warlmanpa" },
  { name: "Warlpiri" },
  { name: "Warluwarra" },
  { name: "Warnindilyakwa" },
  { name: "Warraskoyack" },
  { name: "Warray" },
  { name: "Warriyangga" },
  { name: "Warumungu" },
  { name: "Warwa" },
  { name: "Wasco and Wishram" },
  { name: "Wateree" },
  { name: "Wathaurong" },
  { name: "Watjarri" },
  { name: "Waveroo" },
  { name: "Wawula" },
  { name: "Waxhaw" },
  { name: "Wayana" },
  { name: "Wayuu" },
  { name: "Wazhazhe Maⁿzhaⁿ (Osage)" },
  { name: "Waípinõmakã (Bará)" },
  { name: "Wašišiw Ɂítdeh (Washoe)" },
  { name: "We Wai Kai" },
  { name: "We Wai Kum" },
  { name: "Wemba Wemba" },
  { name: "Wendake" },
  { name: "Wenrohronon" },
  { name: "Wergaia" },
  { name: "Werowocomoco" },
  { name: "Western Apache" },
  { name: "Western Mono/Monache" },
  { name: "Western Nehântick" },
  { name: "Westo" },
  { name: "Wet’suwet’en" },
  { name: "Weyanock" },
  { name: "Whakatōhea" },
  { name: "Whanganui Iwi / Te Atihaunui a Pāpārangi" },
  { name: "Whanganui Land Settlement (Lower Whanganui)" },
  { name: "Whilkut" },
  { name: "White Mountain Apache" },
  { name: "White River-Kluane" },
  { name: "Wi'ma" },
  { name: "WiYaPeMiAk (Weapemeoc-Yeopim)" },
  { name: "Wichita" },
  { name: "Wichita-Caddo-Delaware (Oklahoma)" },
  { name: "Wicocomico" },
  { name: "Wiilman" },
  { name: "Wik" },
  { name: "Wiljali" },
  { name: "Willapa" },
  { name: "Winaq Qo’ (Mam)" },
  { name: "Winda Winda" },
  { name: "Winefelly" },
  { name: "Winik Atel (Tzeltal)" },
  { name: "Winikon bä lojon/Xk’ukwits/Ajlumob/Otulob (Ch'ol)" },
  { name: "Winnimem Wintu" },
  { name: "Winyah" },
  { name: "Wiradjuri" },
  { name: "Wirangu" },
  { name: "Wiwa" },
  { name: "Wixárika (Huichol)" },
  { name: "Wiyot" },
  { name: "Wolastoqiyik Wahsipekuk (Maliseet)" },
  { name: "Wongaibon" },
  { name: "Wonnarua" },
  { name: "Woodland Cree" },
  { name: "Woolna" },
  { name: "Worimi" },
  { name: "Worla" },
  { name: "Worora" },
  { name: "Wounaan" },
  { name: "Wudjari" },
  { name: "Wuikinuxv (Oweekeno)" },
  { name: "Wuli-wuli" },
  { name: "Wunambul" },
  { name: "Wuningangk" },
  { name: "Wunumara" },
  { name: "Wurundjeri" },
  { name: "Wuthathi" },
  { name: "Wyandot (Anderdon)" },
  { name: "Wyandotte (Oklahoma)" },
  { name: "Xinca" },
  { name: "Xixime" },
  { name: "Yadhaigana" },
  { name: "Yagalingu" },
  { name: "Yagán" },
  { name: "Yahooskin" },
  { name: "Yakama" },
  { name: "Yakina" },
  { name: "Yalarrnga" },
  { name: "Yamassee" },
  { name: "Yamayeka (Yamaye)" },
  { name: "Yambina" },
  { name: "Yamhill" },
  { name: "Yana" },
  { name: "Yanam (Ninam)" },
  { name: "Yanda" },
  { name: "Yandruwandha" },
  { name: "Yanga" },
  { name: "Yangga" },
  { name: "Yangman" },
  { name: "Yankton" },
  { name: "Yanktonai" },
  { name: "Yankuntjatjara" },
  { name: "Yanomami" },
  { name: "Yanyuwa" },
  { name: "Yarluyandi" },
  { name: "Yaruro/Pumé" },
  { name: "Yavapaiv Apache" },
  { name: "Yawarawarka" },
  { name: "Yawuru" },
  { name: "Yekooche" },
  { name: "Yeopim" },
  { name: "Yidinjdji" },
  { name: "Yihamwo (Yagua)" },
  { name: "Yiiji" },
  { name: "Yilba" },
  { name: "Yiman" },
  { name: "Yindjibarndi" },
  { name: "Yinggarda" },
  { name: "Yinhawangka" },
  { name: "Yinwum" },
  { name: "Yir Yoront" },
  { name: "Yirandali" },
  { name: "Yitha Yitha" },
  { name: "Yoeme (Yaqui)" },
  { name: "Yoko T’aan (Chontal)" },
  { name: "Yokuts" },
  { name: "Yoli (Concho)" },
  { name: "Yolngu" },
  { name: "Yoncalla" },
  { name: "Yoreme (Mayo)" },
  { name: "Yorta Yorta" },
  { name: "Youghtanund" },
  { name: "Yuat" },
  { name: "Yuggera" },
  { name: "Yuhaviatam/Maarenga’yam (Serrano)" },
  { name: "Yuin" },
  { name: "Yukpa" },
  { name: "Yulparitja" },
  { name: "Yupangathi" },
  { name: "Yup’ik/Cup’ik" },
  { name: "Yurok" },
  { name: "Yuru" },
  { name: "Yurutí" },
  { name: "Yurí" },
  { name: "Yuwi" },
  { name: "Zacateco " },
  { name: "Zenú" },
  { name: "ZioBain (Siona)" },
  { name: "Zuni (territory)" },
  { name: "ditidaqiic̓aq disib̓aʔk (Ditidaht)" },
  { name: "komi voitõr" },
  { name: "kòréβahώ (korebaju/Koreguaje)" },
  { name: "np̓əšqʷáw̓səxʷ (Wenatchi)" },
  { name: "nuučaan̓uuɫɁatḥ nism̓a (Nuu-chah-nulth)" },
  { name: "oθaakiiwaki‧hina‧ki (Sauk)" },
  { name: "pʌʌsíʌhʌ (Andoque/Paasiaja)" },
  { name: "sc̓əwaθenaɁɬ təməxʷ (Tsawwassen)" },
  { name: "sdukʷalbixʷ (Snoqualmie)" },
  { name: "sngaytskstx tum-xula7xw (Sinixt)" },
  { name: "sq̓əc̓iy̓aɁɬ təməxʷ (Katzie)" },
  { name: "səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh)" },
  { name: "xʷməθkʷəy̓əm" },
  { name: "x̣àʼisla w̓áwís (Haisla)" },
  { name: "Á,LEṈENEȻ ȽTE (W̱SÁNEĆ)" },
  { name: "Älsé (Alsea)" },
  { name: "Épera" },
  { name: "Ñuu Savi (Mixtecapan)" },
  { name: "Ópata (Tegüima-Eudebe-Hoba)" },
  { name: "ᏣᎳᎫᏪᏘᏱ Tsalaguwetiyi (Cherokee, East)" },
  { name: "ᒋᑦ ᐊᔅᒋᓄᐤ St'aschinuw (Naskapi)" },
];

const getNativeTribes = () => {

    return nativeTribes;
  };
  
  export default getNativeTribes;