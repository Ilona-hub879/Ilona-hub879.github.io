**PRIVĀTUMA POLITIKA**

**Pēdējās izmaiņas: 2026. gada 18. septembrī**

Šī privātuma politika (turpmāk — Politika) izskaidro, kā pašnodarbinātā persona Ilona Samoviča (reģ.nr. LV07098010209, adrese: Gaismas ielā 6, Daugavpils, Latvija) (turpmāk — Pārzinis) apstrādā lietotāju personas datus AI GDPR Audit tool lietotnē (turpmāk — Lietotne).

Lietotne ir automatizēts rīks, kas izmanto mākslīgā intelekta (AI) tehnoloģijas, lai veiktu dokumentu sākotnējo ekspresanalīzi ar maksimāli pilnu skrīningu (iepriekšēju auditu). Analīzes pamatā ir liels valodu modelis, kas apmācīts atpazīt juridiskajos tekstos modeļus, terminus un struktūras, kas saistītas ar VDAR un citu datu aizsardzības tiesību aktu prasībām. Lietotne nav juridisko pakalpojumu sniedzējs, neaizvieto kvalificētu juristu vai advokātu, un tās sniegtajiem ieteikumiem ir tikai informatīvs raksturs. **Galīgo lēmumu par dokumentu atbilstību un** **labojumu veikšanu vienmēr pieņem pats Lietotājs (cilvēks).**

**1\. Vispārīgie noteikumi**

1.1. Lietotnes infrastruktūru nodrošina Next.js (Vercel) un Python/FastAPI tehnoloģijas, bet datu analīzi — GeminiAI (Google Cloud) API pakalpojumi.

1.2. Lietotne ir paredzēta tikai pilngadīgām personām (sasniegušām 18 gadu vecumu) saimnieciskās, profesionālās darbības vai personīgu interešu ietvaros. Lietojot šo rīku, Jūs apstiprināt savu pilngadību. Lietotne **nepārbauda** Lietotāja vecumu vai uzņēmējdarbības statusu; Lietotājs apliecina to, turpinot lietot pakalpojumu.

1.3. Pakalpojums tiek sniegts pēc principa "maksā par katru dokumentu" (pay-per-document): katra jauna dokumenta analīzei ir nepieciešama atsevišķa samaksa, ja vien netiek izmantots Demo režīms vai aktīvs ikmēneša abonements (sk. 2.5. punktu un Lietošanas noteikumus).  
1.4. Lietotājs ir atbildīgs par augšupielādētā dokumenta saturu un apņemas neaugšupielādēt dokumentus, kas satur īpašu kategoriju personas datus (piemēram, datus par veselību, rasi, atnisko piederību, politiskajiem uzskatiem, reliģisko pārliecību) vai datus par sodāmību, ja vien Lietotājam nav tiesiska pamata šādu datu nodošanai analīzei. Lietotne nav paredzēta šādu datu apstrādei, un Pārzinis neuzņemas atbildību par to nejaušu apstrādi.  
Lietotājs apņemas neaugšupielādēt dokumentus, kas satur nacionālos identifikatorus, piemēram, personas kodu, bez īpašas nepieciešamības un tiesiska pamata.

**2\. Apstrādātie dati un to nolūki**

Pārzinis apstrādā tikai minimāli nepieciešamos datus, lai nodrošinātu Lietotnes funkcionalitāti:

- **2.1. Augšupielādētā dokumenta saturs:** Tiek apstrādāts vienīgi tam nolūkam, lai veiktu automātisku teksta analīzi un sagatavotu provizorisko GDPR audita ziņojumu. **Dokumentu ierobežojumi:** Vienā auditā pieņemts **PDF vai DOCX**, ne vairāk kā **15 (piecpadsmit) lappuses** un **1 MB** faila izmērs, ja Lietotnē nav norādīts citādi.
- **2.2. Kontaktinformācija:** Lietotāja e-pasta adrese tiek apstrādāta, lai nosūtītu pirkuma apstiprinājumu (maksājuma čeku), transakcijas pakalpojuma e-pastus (tostarp piekļuvi ziņōjumam un abonementa dzīvescikla paziņojumus) un unikālu saiti (_magic link_) piekļuvei ģenerētajam ziņojumam.
- **2.3. Sesijas un maksājumu metadati:** session_id, e-pasta adrese, maksājuma statuss (piemēram, _pending/paid_), maksājuma identifikatori, kā arī pieprasījuma izveides un apstrādes laika zīmes.
- **2.4. Drošības dati (ļaunprātīgas izmantošanas novēršanai):** IP adrese, pārlūkprogrammas identifikatori (tostarp digitālais nospiedums jeb fingerprint), lai novērstu pakalpojuma ļaunprātīgu izmantošanu, kontrolētu Demo režīma limitus un API pieprasījumu biežumu. **Produkta mārketinga analītika vai reklāmas izsekošanas sīkdatnes šajā Lietotnē netiek izmantotas.**
- **2.5. Abonementa metadata (ja piemērojams):** e-pasta adrese, kā piekļuves identifikators (bez atsevišķa paroles konta), abonementa statuss, tekošā norēķinu perioda datumi un dokumentu izmantošanas skaitītaji ikmēneša plānam.

**3\. Demo režīma noteikumi**

3.1. Demo režīms ir paredzēts tikai tam, lai Lietotājs iepazītos ar Lietotnes darbības principiem un analīzes kvalitāti.  
3.2. Lai novērstu sistēmas pārslodzi un krāpniecību, bezmaksas pārbaudes Demo režīmā tiek tehniski ierobežotas līdz **2 (diviem) pilniem AI auditiem dienā** katram Lietotājam. Lietotājs tiek identificēts, izmantojot **e-pasta adresi** (obligāta augšupielādei), **IP adresi** un **pārlūkprogrammas digitālo nospiedumu (fingerprint)**, kas tiek apstrādāti tikai Demo limitu kontrolei un ļaunprātīgas izmantošanas novēršanai (sk. 2.4. punktu). Ja kāds no šiem rādītājiem ir sasniedzis dienas limitu, jaunam dokumentam var būt nepieciešama atsevišķa apmaksa vai abonements.

**4\. Datu glabāšana, drošība un "Zero-Retention" princips**

4.1. **Dokumentu tūlītēja dzēšana (Zero-Retention):** Augšupielādētie dokumenti netiek glabāti pastāvīgi un netiek ierakstīti Pārziņa datubāzēs kā ilgtermiņa ieraksti. Dokumenta saturs tiek apstrādats analīzei; privāta pagaidu kopija šifrētā objektu krātuvē var tikt turēta tikai līdz veiksmīgai analīzes pabeigšanai vai, ja maksājums vēl nav veikts, ne ilgāk par neapmaksātas sesijas glabāšanas termiņu (sk. 4.3.). Pēc veiksmīgas analīzes pagaidu fails tiek dzēsts. Pagaidu faili no sesijām, kurās analīze nav pabeigta vai apmaksāta, tiek dzēsti saskaņā ar 4.3. un 4.4. punktā norādītajiem termiņiem.  
Oriģinālais augšupielādētais fails netiek glabāts Pārziņa datubāzē kā pilna dokumenta kopija. Tomēr **analīzes rezultāts** (strukturēts AI audita ziņojums, kas var ietvert dokumenta fragmentu citātus vai pārfrāzes) tiek glabāts kā **sesijas metadatu daļa** tikai tik ilgi, cik nepieciešams piekļuvei saskaņā ar 4.3. punktu, pēc tam tiek dzēsts vai anonimizēts atbilstoši tehniskajiem noteikumiem.  
4.2. **AI modeļu apmācības aizliegums:** Lietotāja augšupielādēto dokumentu saturs un tajos esošie dati **nekādā** **gadījumā netiek izmantoti** mākslīgā intelekta modeļu (tostarp Google Gemini) apmācībai vai uzlabošanai. Pārzinis nosūta saturu tikai analīzes API izsaukumiem saskaņā ar Google Cloud / Gemini pakalpojumu noteikumiem un **neizmanto** Lietotāja dokumentus savā AI modeļu apmācībā.

4.3. Pārzinis glabā minimālos sesijas, maksājumu un **analīzes rezultātu** metadatus (sk. 2.2., 2.3., 2.4. un 2.5. punktu), tostarp **analysis_result** JSON formātā, **dokumenta faila nosaukumu** (ja norādīts), valodu un valsts/ jurisdikcijas kodu analīzei, lai nodrošinātu Lietotājam piekļuvi apmaksātajam ziņojumam ar unikālu saiti līdz 45 (četrdesmit piecām) dienām pēc maksājuma un risinātu iespējamos tehniskos incidentus. Pēc šī termiņa piekļuves saite beidzas, un ar to saistītie analīzes rezultāti tiek dzēsti. Pamestās neapmaksātās sesijas (melnraksti bez maksājuma) tiek glabātas ne ilgās kā 7 (septiņas) dienas. Lietotājam ietecams lejupielādēt un saglabāt apmaksātā ziņojuma lokālo kopiju.  
4.4. **Citi glabāšanas termiņi**

- **Demo limitu skaitītāji** (neidentificējoši hash no IP, e-pasta un fingerprint): līdz **14 (četrpadsmit) dienām**, pēc tam automātiski dzēsti.
- **Neapmaksātas sesijas** (statuss _pending_ bez apmaksas): līdz **7 (septiņām) dienām**, pēc tam sesija un saistītie dati tiek dzēsti.
- **Apmaksāts ziņojums:** piekļuve un **analysis_result** — līdz **45 (četrdesmit piecām) dienām** pēc apmaksas; pēc tam piekļuves tokens un analīzes saturs tiek noņemti. **Sesijas un maksājumu metadati** (e-pasts, maksājuma identifikatori, dokumenta nosaukums u.c.) iekt glabāti grāmatvedības nolūkos saskaņā ar Latvijas Republikas Grāmatvedības likumu, kā arī strīdu risināšanas un drošības nolūkos līdz noilguma termiņa beigām.
- **Abonementa metadati** (2.5.): tiek glabāti, kamēr abonements ir aktīvs vai nepieciešams norēķinu un atbalsta nolūkos; pēc abonementa izbeigšanas — saskaņā ar Pārziņa iekšējo datu minimizācijas praksi un likuma prasībām.
- **Maksājumu webhook žurnāls** (tehniskā idempotence): minimāli notikumu identifikatori, bez dokumenta satura.

**5\. Maksājumu apstrāde**

5.1. Maksājumu apstrādi un nodokļu (tostarp PVN/VAT) aprēķināšanu Pārziņa vārdā veic **Merchant of Record (MoR) / maksājumu starpnieks, ko** Pārzinis ie piesaistījis. Konkrētais maksājumu sniedzējs laika gaitā var mainīties; Pārzinis izmanto līdzvērtīgu MoR vai maksājumu starpnieku, nenorādot fiksētu zīmolu šajā Politikā.

5.2. Pārzinis nepiekļūst, neapstrādā un neglabā Lietotāja bankas karšu vai citu maksājumu līdzekļu datus. Pārzinis saņem tikai maksājumu starpnieka nosūtīto maksājuma statusu un saistītos transakcijas metadatus.  
5.3. Ja abonementa maksājums neizdodas, kamēr tekošais norēķinu periods vēl ir atvērts, Lietotne var saglabāt iepriekš apmaksātā perioda piekļuvi līdz perioda beigu datumam, vienlaikus aicinot Lietotāju atjaunināt maksājuma datus, izmantojot maksājumu sniedzēja klientu rīkus vai saites no pakalpojuma e-pastiem.

  

**6\. Datu nodošana trešajām personām (Apstrādātāji)**

Lietotnes darbības nodrošināšanai dati tiek nodoti šādiem uzticamiem pakalpojumu sniedzējiem:

- **6.1. Google Cloud / GeminiAI API:** Saņem augšupielādētā dokumenta saturu, lai veiktu automatizētu teksta analīzi un sagatavotu audita ziņojumu. Dati tiek nosūtīti tikai analīzes API izsaukumiem un netiek izmantoti AI modeļu apmācībai.
- **6.2. Supabase:** Datubāze sesiju metadatiem, abonementa skaitītājiem un analīzes rezultātu glabāšanai (sk. 4.3.), kā arī **privāta objektu krātuve** (Storage) īslaicīgiem augšupielādētajiem failiem līdz analīzes pabeigšanai vai neapmaksātās sesijas termiņa beigām (sk. 4.1.)
- **6.3. Maksājumu starpnieks (MoR):** Saņem nepieciešamos datus pirkuma darījuma noformēšanai un čeka nosūtīšanai Lietotājam. Pārzinis var nomainīt maksājumu sniedzēju; apstrāde joprojām ierobežota ar maksājuma izpildi un saistītajiem metadatiem.
- **6.4. E-pasta piegādes sniedzējs:** Saņem Lietotāja e-pasta adresi un ziņojuma saturu, kas nepieciešams transakcijas e-pastu nosūtīšanai (ziņojuma saites, abonementa paziņojumi). Pārzinis var nomainīt e-pasta piegādes sniedzēju, nemainot apstrādes mērķi.

**Datu nosūtīšana ārpus ES/EEZ.** Lai nodrošinātu Lietotnes darbību, mēs izmantojam globālus pakalpojumu sniedzējus, piemēram, Google (ASV) un Supabase (ASV). Tas nozīmē, ka Jūsu dati, tostarp dokumentu saturs analīzes laikā un metadati, var tikt nosūtīti un apstrādāti ārpus Eiropas Savienības. Šāda nosūtīšana tiek veikta, nodrošinot atbilstošus aizsardzības pasākumus saskaņā ar VDAR prasībām, piemēram, AS-ASV Datu privātuma ietvars, vai slēdzot standarta līguma klauzulas.  

**7\. Apstrādes tiesiskais pamats un Atbilstība ES tiesību aktiem**

7.1. Personas datu apstrādes tiesiskais pamats ir:

- Līguma izpilde jeb pakalpojuma sniegšana pēc Lietotāja pieprasījuma (GDPR 6. panta 1. punkta b) apakšpunkts) – attiecas uz dokumenta satura, kontaktinformācijas, sesijas un maksājumu metadata apstrādi, lai nodrošinātu pakalpojuma funkcionalitāti.
- Pārziņa leģitīmās intereses (GDPR 6.panta 1.punkta f) apakšpunkts) – attiecas uz drošības datu apstrādi, lai novērstu krāpniecību, automatizētu sistēmas pārslodzi un aizsargātu pakalpojuma integritāti. Pārzinis ir izvērtējis, ka šī apstrāde ir nepieciešama pakalpojuma drošai darbībai un ka Pārziņa intereses nav svarīgākas par datu subjekta tiesībām un brīvībām, jo dati tiek izmantoti tikai šim ierobežotajam mērķim un tiek glabāti minimālu laiku.

7.2. Atbilstoši **Eiropas Savienības Mākslīgā intelekta aktam (EU AI Act)**, šī Lietotne ir klasificējama kā zema riska AI sistēma, jo tā neveic autonomu lēmumu pieņemšanu, kam ir juridiskas vai līdzīgi būtiskas sekas, bet darbojas tikai kā konsultatīvs palīgrīks fiziskas personas (Lietotāja) pārraudzībā. Tā nav paredzēta izmantošanai augsta riska jomās, piemēram, darbinieku atlasē, kredītspējas vērtēšanā vai tiesvedībā.

**8\. Lietotāja tiesības**

8.1. Jums ir tiesības piekļūt saviem metadatiem, pieprasīt to labošanu, dzēšanu vai apstrādes ierobežošanu, kā arī iebilst pret apstrādi, kā arī tiesības uz datu pārnesamību, ciktāl to pieļauj normatīvie akti. Jums ir arī tiesības iesniegt sūdzību uzraudzības iestādei (Latvijā – Datu valsts inspekcijai), ia uzskatāt, ka Jūsu datu apstrāde pārkāpj normatīvo aktu prasības.

8.2. **Svarīgs paziņojums:** Oriģinālo augšupielādēto failu Pārzinis pēc analīzes parasti **neglabā** un nevar atjaunot pēc sesijas beigām. **Analīzes ziņojumu** (ar ierobežotu derīguma termiņu, sk. 4.3.) Lietotājs var piekļūt caur unikālo saiti, kamēr saite ir aktīva; pēc termiņa beigām saistītie analīzes rezultāti tiek dzēsti vai noņemti no aktīvās piekļuves.

8.3. Lai īstenotu savas datu subjekta tiesības vai uzdotu jautājumus, lūdzam sazināties ar mums elektroniski: [**info@prosolvely.com**](mailto:info@prosolvely.com).

**9\. Paziņojums par iepazīšanos ar noteikumiem**

9.1. Augšupielādējot dokumentu, ievadot e-pasta adresi un turpinot procesu uz apmaksu, Jūs apliecināt, ka esat pilnībā iepazinies ar šo Politiku un Lietošanas noteikumiem, izprotat un piekrītat tiem.