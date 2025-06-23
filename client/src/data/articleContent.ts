export interface ArticleContent {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  imageUrl: string;
  content: string;
  author: string;
  readTime: string;
}

export const articlesData: ArticleContent[] = [
  {
    id: 1,
    title: "Ghidul complet pentru calculul mediei la facultate",
    description: "Învață cum să calculezi corect media cu credite ECTS și să înțelegi sistemul de notare universitar românesc.",
    category: "Ghiduri",
    date: "20 Jan 2025",
    slug: "ghid-calcul-medie-facultate",
    imageUrl: "/images/guide-grade-calculation.svg",
    author: "Calculator Medie Facultate",
    readTime: "8 min",
    content: `
<h2>Introducere în calculul mediei la facultate</h2>

<p>Calculul mediei la facultate este un aspect fundamental pentru orice student din România. Înțelegerea modului în care se calculează media poate face diferența între obținerea unei burse de merit și ratarea unei oportunități importante.</p>

<h2>Tipuri de medii universitare</h2>

<h3>1. Media aritmetică simplă</h3>
<p>Aceasta se calculează prin împărțirea sumei tuturor notelor la numărul de discipline:</p>
<div class="bg-gray-100 p-4 rounded-lg my-4">
<strong>Formula:</strong> Media = (Nota1 + Nota2 + ... + NotaN) / N
</div>

<h3>2. Media ponderată cu credite ECTS</h3>
<p>Aceasta este media oficială folosită în sistemul universitar românesc și ia în considerare creditele fiecărei discipline:</p>
<div class="bg-blue-100 p-4 rounded-lg my-4">
<strong>Formula:</strong> Media ponderată = Σ(Nota × Credite) / Σ(Credite)
</div>

<h2>Sistemul de credite ECTS</h2>

<p>European Credit Transfer System (ECTS) este sistemul european de transfer și acumulare de credite, adoptat și în România. Un an academic standard are 60 de credite ECTS.</p>

<h3>Distribuția creditelor:</h3>
<ul>
<li><strong>Discipline fundamentale:</strong> 6-8 credite</li>
<li><strong>Discipline de specialitate:</strong> 4-6 credite</li>
<li><strong>Discipline opționale:</strong> 3-5 credite</li>
<li><strong>Lucrarea de licență:</strong> 10-12 credite</li>
</ul>

<h2>Clasificările academice</h2>

<p>Pe baza mediei generale, studenții pot obține următoarele clasificări:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="bg-green-100 p-4 rounded-lg">
<h4 class="font-bold text-green-800">Summa Cum Laude</h4>
<p class="text-green-700">Media: 9.50 - 10.00</p>
</div>
<div class="bg-blue-100 p-4 rounded-lg">
<h4 class="font-bold text-blue-800">Magna Cum Laude</h4>
<p class="text-blue-700">Media: 8.50 - 9.49</p>
</div>
<div class="bg-yellow-100 p-4 rounded-lg">
<h4 class="font-bold text-yellow-800">Cum Laude</h4>
<p class="text-yellow-700">Media: 8.00 - 8.49</p>
</div>
<div class="bg-gray-100 p-4 rounded-lg">
<h4 class="font-bold text-gray-800">Fără mențiune</h4>
<p class="text-gray-700">Media: 6.00 - 7.99</p>
</div>
</div>

<h2>Exemple practice de calcul</h2>

<h3>Exemplul 1: Media aritmetică</h3>
<p>Student cu notele: 9, 8, 10, 7, 9</p>
<p><strong>Calcul:</strong> (9 + 8 + 10 + 7 + 9) / 5 = 43 / 5 = <strong>8.60</strong></p>

<h3>Exemplul 2: Media ponderată</h3>
<p>Același student cu creditele: 6, 4, 5, 3, 6</p>
<p><strong>Calcul:</strong> (9×6 + 8×4 + 10×5 + 7×3 + 9×6) / (6+4+5+3+6) = 207 / 24 = <strong>8.63</strong></p>

<h2>Sfaturi pentru optimizarea mediei</h2>

<ul>
<li><strong>Concentrează-te pe disciplinele cu credite mari:</strong> O notă mai mare la o disciplină cu 6 credite are mai mult impact decât una cu 3 credite</li>
<li><strong>Nu neglija disciplinele opționale:</strong> Acestea pot compensa note mai mici de la materiile dificile</li>
<li><strong>Planifică strategice examenele:</strong> Prioritizează pregătirea pentru disciplinele cu impact mare asupra mediei</li>
<li><strong>Solicită consultații:</strong> Profesorii pot oferi sfaturi pentru îmbunătățirea notelor</li>
</ul>

<h2>Importanța mediei în cariera universitară</h2>

<p>Media la facultate influențează:</p>
<ul>
<li><strong>Eligibilitatea pentru burse de merit</strong></li>
<li><strong>Accesul la programe de master</strong></li>
<li><strong>Participarea la programe de mobilitate (Erasmus)</strong></li>
<li><strong>Oportunități de cercetare și stagii</strong></li>
<li><strong>Recomandări pentru angajare</strong></li>
</ul>

<h2>Concluzie</h2>

<p>Calculul corect al mediei la facultate este esențial pentru succesul academic. Înțelegerea sistemului de credite ECTS și a modului de calcul al mediei ponderate te va ajuta să iei decizii informate pe parcursul studiilor universitare.</p>

<p>Folosește calculatorul nostru pentru a-ți verifica rapid media și pentru a planifica strategiile de îmbunătățire a performanțelor academice.</p>
`
  },
  {
    id: 2,
    title: "Sistemul de credite ECTS în universitățile românești",
    description: "Totul despre sistemul European Credit Transfer System și cum funcționează în România.",
    category: "Educație",
    date: "18 Jan 2025",
    slug: "sistem-credite-ects-romania",
    imageUrl: "/images/ects-system.svg",
    author: "Calculator Medie Facultate",
    readTime: "6 min",
    content: `
<h2>Ce este sistemul ECTS?</h2>

<p>European Credit Transfer and Accumulation System (ECTS) este un sistem european de transfer și acumulare de credite, implementat în toate universitățile din România pentru a facilita mobilitatea studențească și recunoașterea calificărilor în spațiul european al învățământului superior.</p>

<h2>Principiile sistemului ECTS</h2>

<h3>1. Volumul de lucru al studentului</h3>
<p>Un credit ECTS reprezintă aproximativ 25-30 de ore de studiu, incluzând:</p>
<ul>
<li>Cursuri și seminarii</li>
<li>Studiu individual</li>
<li>Pregătirea pentru examene</li>
<li>Activități practice și de laborator</li>
<li>Realizarea de proiecte și lucrări</li>
</ul>

<h3>2. Distribuția anuală</h3>
<p>Un an academic standard conține <strong>60 de credite ECTS</strong>, distribuate de obicei astfel:</p>
<ul>
<li>Semestrul I: 30 credite</li>
<li>Semestrul II: 30 credite</li>
</ul>

<h2>Implementarea în România</h2>

<h3>Structura ciclurilor de studii</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Ciclul I - Studii de licență</h4>
<ul class="text-blue-700">
<li><strong>Durata:</strong> 3-4 ani (în funcție de domeniu)</li>
<li><strong>Credite totale:</strong> 180-240 ECTS</li>
<li><strong>Credite/an:</strong> 60 ECTS</li>
</ul>
</div>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Ciclul II - Studii de master</h4>
<ul class="text-green-700">
<li><strong>Durata:</strong> 1-2 ani</li>
<li><strong>Credite totale:</strong> 60-120 ECTS</li>
<li><strong>Credite/an:</strong> 60 ECTS</li>
</ul>
</div>

<div class="bg-purple-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Ciclul III - Studii de doctorat</h4>
<ul class="text-purple-700">
<li><strong>Durata:</strong> 3-4 ani</li>
<li><strong>Credite totale:</strong> 180-240 ECTS</li>
<li><strong>Cercetare:</strong> Component principal</li>
</ul>
</div>

<h2>Tipuri de discipline și credite</h2>

<h3>Categorii de discipline</h3>

<table class="w-full border-collapse border border-gray-300 my-6">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 p-3 text-left">Tipul disciplinei</th>
<th class="border border-gray-300 p-3 text-left">Credite obișnuite</th>
<th class="border border-gray-300 p-3 text-left">Descriere</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-3">Fundamentale</td>
<td class="border border-gray-300 p-3">6-8 credite</td>
<td class="border border-gray-300 p-3">Materii de bază ale domeniului</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Specialitate</td>
<td class="border border-gray-300 p-3">4-6 credite</td>
<td class="border border-gray-300 p-3">Discipline specifice specializării</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Complementare</td>
<td class="border border-gray-300 p-3">3-5 credite</td>
<td class="border border-gray-300 p-3">Materii auxiliare și interdisciplinare</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Opționale</td>
<td class="border border-gray-300 p-3">3-6 credite</td>
<td class="border border-gray-300 p-3">Discipline la alegerea studentului</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Practică/Stagiu</td>
<td class="border border-gray-300 p-3">4-10 credite</td>
<td class="border border-gray-300 p-3">Activități practice în domeniu</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Lucrare de licență</td>
<td class="border border-gray-300 p-3">10-12 credite</td>
<td class="border border-gray-300 p-3">Proiect final de absolvire</td>
</tr>
</tbody>
</table>

<h2>Scala de notare ECTS</h2>

<p>Sistemul ECTS folosește o scală de notare standardizată la nivel european:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
<div class="bg-green-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-green-800 text-2xl">A</h4>
<p class="text-green-700 font-semibold">Excelent</p>
<p class="text-sm text-green-600">90-100% (echivalent 9.50-10.00)</p>
</div>
<div class="bg-blue-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-blue-800 text-2xl">B</h4>
<p class="text-blue-700 font-semibold">Foarte bine</p>
<p class="text-sm text-blue-600">80-89% (echivalent 8.50-9.49)</p>
</div>
<div class="bg-cyan-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-cyan-800 text-2xl">C</h4>
<p class="text-cyan-700 font-semibold">Bine</p>
<p class="text-sm text-cyan-600">70-79% (echivalent 7.50-8.49)</p>
</div>
<div class="bg-yellow-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-yellow-800 text-2xl">D</h4>
<p class="text-yellow-700 font-semibold">Satisfăcător</p>
<p class="text-sm text-yellow-600">60-69% (echivalent 6.50-7.49)</p>
</div>
<div class="bg-orange-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-orange-800 text-2xl">E</h4>
<p class="text-orange-700 font-semibold">Suficient</p>
<p class="text-sm text-orange-600">50-59% (echivalent 6.00-6.49)</p>
</div>
<div class="bg-red-100 p-4 rounded-lg text-center">
<h4 class="font-bold text-red-800 text-2xl">F</h4>
<p class="text-red-700 font-semibold">Respins</p>
<p class="text-sm text-red-600">0-49% (echivalent sub 6.00)</p>
</div>
</div>

<h2>Avantajele sistemului ECTS</h2>

<h3>Pentru studenți:</h3>
<ul>
<li><strong>Mobilitate facilă:</strong> Recunoașterea automată a studiilor în țările UE</li>
<li><strong>Transparență:</strong> Înțelegerea clară a volumului de lucru pentru fiecare disciplină</li>
<li><strong>Flexibilitate:</strong> Posibilitatea de a studia în mai multe țări</li>
<li><strong>Comparabilitate:</strong> Evaluarea obiectivă a competențelor dobândite</li>
</ul>

<h3>Pentru instituții:</h3>
<ul>
<li><strong>Standardizare:</strong> Curriculum armonizat la nivel european</li>
<li><strong>Cooperare:</strong> Parteneriate internaționale mai ușoare</li>
<li><strong>Calitate:</strong> Asigurarea calității prin standarde comune</li>
</ul>

<h2>Cum să folosești eficient creditele ECTS</h2>

<h3>Planificarea semestrului</h3>
<ol>
<li><strong>Distribuie echilibrat creditele</strong> între semestre</li>
<li><strong>Balansează dificultatea</strong> disciplinelor în funcție de credite</li>
<li><strong>Rezervă timp suficient</strong> pentru disciplinele cu multe credite</li>
<li><strong>Planifică strategic</strong> disciplinele opționale</li>
</ol>

<h3>Strategii pentru maximizarea mediei</h3>
<ul>
<li>Concentrează-te pe disciplinele cu credite mari</li>
<li>Alege opționale care îți vin natural</li>
<li>Investește timp proporțional cu numărul de credite</li>
<li>Monitorizează progresul pe parcursul semestrului</li>
</ul>

<h2>Concluzie</h2>

<p>Sistemul ECTS este fundamental pentru succesul academic în România și oferă flexibilitate și oportunități de mobilitate în întreaga Europă. Înțelegerea acestui sistem te va ajuta să iei decizii informate despre parcursul tău universitar și să optimizezi rezultatele academice.</p>
`
  },
  {
    id: 3,
    title: "Cum să obții bursa de studiu: calculul mediei",
    description: "Criterii și calcule pentru obținerea bursei de merit în universitățile românești.",
    category: "Burse",
    date: "15 Jan 2025",
    slug: "bursa-studiu-calcul-medie",
    imageUrl: "/images/scholarship-guide.svg",
    author: "Calculator Medie Facultate",
    readTime: "7 min",
    content: `
<h2>Tipuri de burse universitare în România</h2>

<p>Sistemul universitar românesc oferă mai multe tipuri de burse pentru sprijinirea studenților merituoși și a celor cu nevoi sociale. Înțelegerea criteriilor și a modului de calcul este esențială pentru obținerea unei burse.</p>

<h2>Bursa de merit</h2>

<h3>Criterii de eligibilitate</h3>
<p>Bursa de merit se acordă studenților cu rezultate academice excepționale, pe baza mediei generale.</p>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Criterii standard pentru bursa de merit:</h4>
<ul class="text-green-700">
<li><strong>Media minimă:</strong> 8.50 (poate varia între universități)</li>
<li><strong>Fără restanțe</strong> în semestrul anterior</li>
<li><strong>Comportament academic</strong> ireproșabil</li>
<li><strong>Participare activă</strong> la activități universitare (bonus)</li>
</ul>
</div>

<h3>Calculul mediei pentru bursă</h3>
<p>Media se calculează folosind formula ponderată cu credite ECTS:</p>

<div class="bg-blue-100 p-4 rounded-lg my-4">
<strong>Formula:</strong> Media pentru bursă = Σ(Nota × Credite ECTS) / Σ(Credite ECTS)
</div>

<h3>Exemple de calcul</h3>

<div class="bg-gray-50 p-6 rounded-lg my-6">
<h4 class="font-bold mb-4">Exemplul 1: Student eligibil pentru bursă</h4>
<table class="w-full border-collapse border border-gray-300">
<thead>
<tr class="bg-gray-200">
<th class="border border-gray-300 p-2">Disciplina</th>
<th class="border border-gray-300 p-2">Nota</th>
<th class="border border-gray-300 p-2">Credite</th>
<th class="border border-gray-300 p-2">Nota × Credite</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-2">Matematică</td>
<td class="border border-gray-300 p-2">9</td>
<td class="border border-gray-300 p-2">6</td>
<td class="border border-gray-300 p-2">54</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Programare</td>
<td class="border border-gray-300 p-2">10</td>
<td class="border border-gray-300 p-2">8</td>
<td class="border border-gray-300 p-2">80</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Fizică</td>
<td class="border border-gray-300 p-2">8</td>
<td class="border border-gray-300 p-2">5</td>
<td class="border border-gray-300 p-2">40</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Limba engleză</td>
<td class="border border-gray-300 p-2">9</td>
<td class="border border-gray-300 p-2">3</td>
<td class="border border-gray-300 p-2">27</td>
</tr>
<tr class="bg-yellow-100 font-bold">
<td class="border border-gray-300 p-2">TOTAL</td>
<td class="border border-gray-300 p-2">-</td>
<td class="border border-gray-300 p-2">22</td>
<td class="border border-gray-300 p-2">201</td>
</tr>
</tbody>
</table>

<p class="mt-4"><strong>Media calculată:</strong> 201 ÷ 22 = <span class="text-green-600 font-bold">9.14</span></p>
<p class="text-green-600"><strong>Rezultat: ELIGIBIL pentru bursa de merit!</strong></p>
</div>

<h2>Bursa socială</h2>

<h3>Criterii de acordare</h3>
<p>Bursa socială se acordă studenților cu situația materială precară, indiferent de rezultatele academice.</p>

<div class="bg-orange-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-orange-800 mb-4">Documente necesare:</h4>
<ul class="text-orange-700">
<li><strong>Adeverință de venit</strong> pentru toate persoanele din familie</li>
<li><strong>Certificat de naștere</strong> pentru toți membrii familiei</li>
<li><strong>Declarație pe propria răspundere</strong> privind situația familială</li>
<li><strong>Documente medicale</strong> (dacă este cazul)</li>
</ul>
</div>

<h3>Calculul venitului pe membru de familie</h3>
<div class="bg-orange-100 p-4 rounded-lg my-4">
<strong>Formula:</strong> Venit/membru = Venitul total al familiei / Numărul de membri
</div>

<p><strong>Plafonul pentru bursa socială:</strong> De obicei 2-3 salarii minime pe membru de familie (variază între universități).</p>

<h2>Bursa de merit și socială (combinată)</h2>

<p>Studenții care îndeplinesc atât criteriile de merit cât și cele sociale pot beneficia de ambele tipuri de burse.</p>

<div class="bg-purple-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Condiții cumulative:</h4>
<ul class="text-purple-700">
<li>Media minimă pentru bursa de merit</li>
<li>Venitul pe membru de familie sub plafon</li>
<li>Documentația completă pentru ambele categorii</li>
</ul>
</div>

<h2>Valorile burselor (2024-2025)</h2>

<table class="w-full border-collapse border border-gray-300 my-6">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 p-3 text-left">Tipul bursei</th>
<th class="border border-gray-300 p-3 text-left">Valoare lunară</th>
<th class="border border-gray-300 p-3 text-left">Observații</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-3">Bursa de merit</td>
<td class="border border-gray-300 p-3">500-1000 RON</td>
<td class="border border-gray-300 p-3">Variază în funcție de media obținută</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Bursa socială</td>
<td class="border border-gray-300 p-3">400-800 RON</td>
<td class="border border-gray-300 p-3">În funcție de situația materială</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Bursa combinată</td>
<td class="border border-gray-300 p-3">800-1500 RON</td>
<td class="border border-gray-300 p-3">Suma celor două tipuri</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Bursa de performanță</td>
<td class="border border-gray-300 p-3">1000-2000 RON</td>
<td class="border border-gray-300 p-3">Pentru studenți excepționali</td>
</tr>
</tbody>
</table>

<h2>Procesul de aplicare</h2>

<h3>Calendarul burselor</h3>
<ol>
<li><strong>Septembrie:</strong> Depunerea dosarelor pentru semestrul I</li>
<li><strong>Octombrie:</strong> Evaluarea și clasificarea candidaților</li>
<li><strong>Noiembrie:</strong> Comunicarea rezultatelor</li>
<li><strong>Februarie:</strong> Reînnoirea pentru semestrul II</li>
</ol>

<h3>Documentele necesare</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Pentru bursa de merit:</h4>
<ul class="text-blue-700">
<li>Cerere tip (se completează online)</li>
<li>Foaia matricolă actualizată</li>
<li>Adeverință de student</li>
<li>Copie CI/Pașaport</li>
</ul>
</div>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Pentru bursa socială (suplimentar):</h4>
<ul class="text-green-700">
<li>Adeverințe de venit pentru toți membrii familiei</li>
<li>Certificat de naștere pentru toți membrii</li>
<li>Declarație pe propria răspundere</li>
<li>Documente medicale (dacă aplicabil)</li>
</ul>
</div>

<h2>Strategii pentru obținerea bursei</h2>

<h3>Pentru bursa de merit:</h3>
<ul>
<li><strong>Planifică-ți studiul strategic:</strong> Concentrează-te pe disciplinele cu credite mari</li>
<li><strong>Participă activ la cursuri:</strong> Implicarea poate influența pozitiv nota finală</li>
<li><strong>Solicită consultații:</strong> Clarifică neclaritățile înainte de examene</li>
<li><strong>Formează grupuri de studiu:</strong> Învățarea colaborativă îmbunătățește înțelegerea</li>
</ul>

<h3>Menținerea bursei:</h3>
<ul>
<li>Menține media peste pragul minim</li>
<li>Evită restanțele</li>
<li>Respectă regulamentul universității</li>
<li>Actualizează documentația la timp</li>
</ul>

<h2>Drepturi și obligații</h2>

<h3>Drepturile bursierului:</h3>
<ul>
<li>Primirea sumei lunar, până în data de 25</li>
<li>Contestarea rezultatelor în termen de 5 zile</li>
<li>Informare transparentă despre criterii</li>
<li>Confidențialitatea datelor personale</li>
</ul>

<h3>Obligațiile bursierului:</h3>
<ul>
<li>Menținerea performanțelor academice</li>
<li>Actualizarea situației în caz de modificări</li>
<li>Respectarea regulamentului universitar</li>
<li>Returnarea sumelor primite nedatorit</li>
</ul>

<h2>Concluzie</h2>

<p>Obținerea unei burse universitare poate face diferența în parcursul academic și poate reduce semnificativ povara financiară a studiilor. Calculul corect al mediei și înțelegerea criteriilor sunt esențiale pentru succesul aplicației tale.</p>

<p>Folosește calculatorul nostru pentru a verifica dacă îndeplinești criteriile de medie pentru bursa de merit și planifică-ți strategia academică în consecință.</p>
`
  },
  {
    id: 4,
    title: "Clasificarea academică: Summa Cum Laude explicată",
    description: "Înțelege clasificările academice și ce înseamnă pentru cariera ta universitară.",
    category: "Clasificări",
    date: "12 Jan 2025",
    slug: "clasificarea-academica-summa-cum-laude",
    imageUrl: "/images/academic-classification.svg",
    author: "Calculator Medie Facultate",
    readTime: "5 min",
    content: `
<h2>Sistemul de clasificări academice în România</h2>

<p>Clasificările academice reprezintă un sistem de recunoaștere a excelenței în învățământul superior, folosit pentru a evidenția performanțele deosebite ale studenților la absolvirea studiilor universitare.</p>

<h2>Tipurile de clasificări academice</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
<div class="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg border-l-4 border-yellow-500">
<h3 class="font-bold text-yellow-800 text-xl mb-3">🏆 Summa Cum Laude</h3>
<p class="text-yellow-700 font-semibold">Media: 9.50 - 10.00</p>
<p class="text-yellow-600 mt-2">Cea mai înaltă distincție academică. Se acordă studenților cu performanțe excepționale.</p>
</div>

<div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg border-l-4 border-blue-500">
<h3 class="font-bold text-blue-800 text-xl mb-3">🥈 Magna Cum Laude</h3>
<p class="text-blue-700 font-semibold">Media: 8.50 - 9.49</p>
<p class="text-blue-600 mt-2">Distincție de mare merit. Recunoaște performanțe academice foarte bune.</p>
</div>

<div class="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg border-l-4 border-green-500">
<h3 class="font-bold text-green-800 text-xl mb-3">🥉 Cum Laude</h3>
<p class="text-green-700 font-semibold">Media: 8.00 - 8.49</p>
<p class="text-green-600 mt-2">Distincție academică pentru performanțe bune și consistente.</p>
</div>

<div class="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg border-l-4 border-gray-500">
<h3 class="font-bold text-gray-800 text-xl mb-3">📜 Fără mențiune</h3>
<p class="text-gray-700 font-semibold">Media: 6.00 - 7.99</p>
<p class="text-gray-600 mt-2">Absolvire cu succes, fără distincție academică specifică.</p>
</div>
</div>

<h2>Originea și semnificația termenilor</h2>

<h3>Etimologia clasificărilor</h3>
<p>Termenii provin din latina tradițională universitară:</p>

<ul>
<li><strong>Summa Cum Laude:</strong> "Cu cea mai mare laudă/distincție"</li>
<li><strong>Magna Cum Laude:</strong> "Cu mare laudă/distincție"</li>
<li><strong>Cum Laude:</strong> "Cu laudă/distincție"</li>
</ul>

<h2>Calculul pentru obținerea clasificărilor</h2>

<h3>Media se calculează ponderat cu creditele ECTS</h3>

<div class="bg-blue-100 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Formula de calcul:</h4>
<div class="bg-white p-4 rounded border">
<code class="text-lg">Media finală = Σ(Nota × Credite ECTS) / Σ(Credite ECTS)</code>
</div>
</div>

<h3>Exemplu practic de calcul</h3>

<div class="bg-gray-50 p-6 rounded-lg my-6">
<h4 class="font-bold mb-4">Student candidat pentru Summa Cum Laude:</h4>

<table class="w-full border-collapse border border-gray-300 mb-4">
<thead>
<tr class="bg-gray-200">
<th class="border border-gray-300 p-3 text-left">An/Semestru</th>
<th class="border border-gray-300 p-3 text-left">Media semestrială</th>
<th class="border border-gray-300 p-3 text-left">Credite</th>
<th class="border border-gray-300 p-3 text-left">Puncte</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-3">Anul I - Sem. 1</td>
<td class="border border-gray-300 p-3">9.20</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">276</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Anul I - Sem. 2</td>
<td class="border border-gray-300 p-3">9.40</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">282</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Anul II - Sem. 1</td>
<td class="border border-gray-300 p-3">9.60</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">288</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Anul II - Sem. 2</td>
<td class="border border-gray-300 p-3">9.80</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">294</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Anul III - Sem. 1</td>
<td class="border border-gray-300 p-3">9.70</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">291</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Anul III - Sem. 2</td>
<td class="border border-gray-300 p-3">9.90</td>
<td class="border border-gray-300 p-3">30</td>
<td class="border border-gray-300 p-3">297</td>
</tr>
<tr class="bg-yellow-100 font-bold">
<td class="border border-gray-300 p-3">TOTAL</td>
<td class="border border-gray-300 p-3">-</td>
<td class="border border-gray-300 p-3">180</td>
<td class="border border-gray-300 p-3">1728</td>
</tr>
</tbody>
</table>

<p class="text-lg"><strong>Media finală:</strong> 1728 ÷ 180 = <span class="text-yellow-600 font-bold text-xl">9.60</span></p>
<p class="text-yellow-600 font-bold text-xl">🏆 SUMMA CUM LAUDE!</p>
</div>

<h2>Impactul clasificărilor academice</h2>

<h3>Asupra carierei profesionale</h3>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Avantaje în carieră:</h4>
<ul class="text-green-700 space-y-2">
<li>✅ <strong>CV diferențiat:</strong> Clasificarea se menționează pe diplomă și în CV</li>
<li>✅ <strong>Avantaj la angajare:</strong> Angajatorii apreciază excelența academică</li>
<li>✅ <strong>Oportunități de cercetare:</strong> Acces preferențial la programe de cercetare</li>
<li>✅ <strong>Programe de master selective:</strong> Prioritate la programele competitive</li>
<li>✅ <strong>Burse și finanțări:</strong> Eligibilitate pentru burse de merit</li>
</ul>
</div>

<h3>Asupra continuării studiilor</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Pentru studiile postuniversitare:</h4>
<ul class="text-blue-700 space-y-2">
<li>🎓 <strong>Master:</strong> Acceptare prioritară la programe de prestigiu</li>
<li>🔬 <strong>Doctorat:</strong> Avantaj în competiția pentru locurile bugetate</li>
<li>🌍 <strong>Mobilități internaționale:</strong> Eligibilitate pentru burse Erasmus+</li>
<li>🏛️ <strong>Programe de cercetare:</strong> Acces la granturi și proiecte</li>
</ul>
</div>

<h2>Statistici și frecvența clasificărilor</h2>

<h3>Distribuția tipică într-o generație</h3>

<div class="bg-gray-100 p-6 rounded-lg my-6">
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div class="bg-yellow-200 p-4 rounded">
<div class="text-2xl font-bold text-yellow-800">2-5%</div>
<div class="text-sm text-yellow-700">Summa Cum Laude</div>
</div>
<div class="bg-blue-200 p-4 rounded">
<div class="text-2xl font-bold text-blue-800">8-12%</div>
<div class="text-sm text-blue-700">Magna Cum Laude</div>
</div>
<div class="bg-green-200 p-4 rounded">
<div class="text-2xl font-bold text-green-800">15-20%</div>
<div class="text-sm text-green-700">Cum Laude</div>
</div>
<div class="bg-gray-200 p-4 rounded">
<div class="text-2xl font-bold text-gray-800">65-75%</div>
<div class="text-sm text-gray-700">Fără mențiune</div>
</div>
</div>
</div>

<h2>Sfaturi pentru obținerea unei clasificări academice</h2>

<h3>Strategii pe termen lung</h3>

<ol class="space-y-4 my-6">
<li>
<strong>Planificare strategică:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Începe din primul semestru să vizezi o medie mare</li>
<li>• Concentrează-te pe disciplinele cu credite mari</li>
<li>• Balansează dificultatea materiilor pe semestre</li>
</ul>
</li>

<li>
<strong>Tehnici de studiu eficiente:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Participă activ la toate cursurile și seminariile</li>
<li>• Formează grupuri de studiu cu colegi motivați</li>
<li>• Solicită consultații când ai neclarități</li>
</ul>
</li>

<li>
<strong>Managementul timpului:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Aloca timp proporțional cu creditele fiecărei materii</li>
<li>• Începe pregătirea pentru examene din timp</li>
<li>• Evită acumularea de restanțe</li>
</ul>
</li>
</ol>

<h3>Monitorizarea progresului</h3>

<div class="bg-purple-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Verificări regulate:</h4>
<ul class="text-purple-700 space-y-2">
<li>📊 Calculează media după fiecare sesiune</li>
<li>🎯 Stabilește ținte de medie pentru semestrul următor</li>
<li>📈 Monitorizează trendul mediei pe parcursul anilor</li>
<li>⚠️ Identifică rapid materiile care îți trag media în jos</li>
</ul>
</div>

<h2>Mențiuni speciale și premii</h2>

<p>Pe lângă clasificările standard, multe universități acordă:</p>

<ul>
<li><strong>Premiul de excelență:</strong> Pentru cel mai bun student al promoției</li>
<li><strong>Premii pe domenii:</strong> Pentru performanțe în anumite specializări</li>
<li><strong>Mențiuni pentru lucrarea de licență:</strong> Pentru proiecte deosebite</li>
<li><strong>Premii pentru implicare:</strong> Pentru activități extracurriculare</li>
</ul>

<h2>Concluzie</h2>

<p>Clasificările academice sunt o recunoaștere durabilă a excelenței tale universitare. <strong>Summa Cum Laude</strong> reprezintă vârful performanței academice și poate deschide uși importante în cariera profesională și de cercetare.</p>

<p>Planifică-ți parcursul universitar strategic, folosește calculatorul nostru pentru a monitoriza progresul și nu uita că fiecare notă contribuie la rezultatul final. Consistența și dedicarea sunt cheia succesului academic!</p>
`
  },
  {
    id: 5,
    title: "Echivalența notelor ECTS: Ghid complet",
    description: "Cum se convertesc notele din sistemul românesc în echivalentele ECTS europene.",
    category: "ECTS",
    date: "10 Jan 2025",
    slug: "echivalenta-note-ects",
    imageUrl: "/images/ects-equivalency.svg",
    author: "Calculator Medie Facultate",
    readTime: "6 min",
    content: `
<h2>Introducere în conversiile ECTS</h2>

<p>Conversia notelor între sistemul românesc și scala ECTS este esențială pentru mobilități studențești, transferuri între universități europene și recunoașterea calificărilor la nivel internațional.</p>

<h2>Sistemele de notare comparate</h2>

<div class="grid md:grid-cols-2 gap-8 my-8">
<div class="bg-blue-50 p-6 rounded-lg">
<h3 class="font-bold text-blue-800 mb-4">Sistemul Românesc</h3>
<ul class="text-blue-700 space-y-2">
<li><strong>Scala:</strong> 1-10 (cu 6 nota de trecere)</li>
<li><strong>Precizie:</strong> Cu două zecimale (ex: 8.75)</li>
<li><strong>Notă minimă de promovare:</strong> 6.00</li>
<li><strong>Nota maximă:</strong> 10.00</li>
</ul>
</div>

<div class="bg-green-50 p-6 rounded-lg">
<h3 class="font-bold text-green-800 mb-4">Sistemul ECTS</h3>
<ul class="text-green-700 space-y-2">
<li><strong>Scala:</strong> A, B, C, D, E, F</li>
<li><strong>Bazat pe:</strong> Distribuția statistică a performanțelor</li>
<li><strong>Note de trecere:</strong> A, B, C, D, E</li>
<li><strong>Notă de respingere:</strong> F</li>
</ul>
</div>
</div>

<h2>Tabelul de conversie standard</h2>

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse border border-gray-300 bg-white">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 p-4 text-left">Nota ECTS</th>
<th class="border border-gray-300 p-4 text-left">Descrierea ECTS</th>
<th class="border border-gray-300 p-4 text-left">Echivalent RO</th>
<th class="border border-gray-300 p-4 text-left">Procent studenți</th>
<th class="border border-gray-300 p-4 text-left">Descrierea RO</th>
</tr>
</thead>
<tbody>
<tr class="bg-green-50">
<td class="border border-gray-300 p-4 font-bold text-green-800 text-xl">A</td>
<td class="border border-gray-300 p-4 text-green-700">Excellent</td>
<td class="border border-gray-300 p-4 font-bold">9.50 - 10.00</td>
<td class="border border-gray-300 p-4">Top 10%</td>
<td class="border border-gray-300 p-4 text-green-700">Excelent</td>
</tr>
<tr class="bg-blue-50">
<td class="border border-gray-300 p-4 font-bold text-blue-800 text-xl">B</td>
<td class="border border-gray-300 p-4 text-blue-700">Very Good</td>
<td class="border border-gray-300 p-4 font-bold">8.50 - 9.49</td>
<td class="border border-gray-300 p-4">Next 25%</td>
<td class="border border-gray-300 p-4 text-blue-700">Foarte Bine</td>
</tr>
<tr class="bg-cyan-50">
<td class="border border-gray-300 p-4 font-bold text-cyan-800 text-xl">C</td>
<td class="border border-gray-300 p-4 text-cyan-700">Good</td>
<td class="border border-gray-300 p-4 font-bold">7.50 - 8.49</td>
<td class="border border-gray-300 p-4">Next 30%</td>
<td class="border border-gray-300 p-4 text-cyan-700">Bine</td>
</tr>
<tr class="bg-yellow-50">
<td class="border border-gray-300 p-4 font-bold text-yellow-800 text-xl">D</td>
<td class="border border-gray-300 p-4 text-yellow-700">Satisfactory</td>
<td class="border border-gray-300 p-4 font-bold">6.50 - 7.49</td>
<td class="border border-gray-300 p-4">Next 25%</td>
<td class="border border-gray-300 p-4 text-yellow-700">Satisfăcător</td>
</tr>
<tr class="bg-orange-50">
<td class="border border-gray-300 p-4 font-bold text-orange-800 text-xl">E</td>
<td class="border border-gray-300 p-4 text-orange-700">Sufficient</td>
<td class="border border-gray-300 p-4 font-bold">6.00 - 6.49</td>
<td class="border border-gray-300 p-4">Last 10%</td>
<td class="border border-gray-300 p-4 text-orange-700">Suficient</td>
</tr>
<tr class="bg-red-50">
<td class="border border-gray-300 p-4 font-bold text-red-800 text-xl">F</td>
<td class="border border-gray-300 p-4 text-red-700">Fail</td>
<td class="border border-gray-300 p-4 font-bold">1.00 - 5.99</td>
<td class="border border-gray-300 p-4">Respinși</td>
<td class="border border-gray-300 p-4 text-red-700">Respins</td>
</tr>
</tbody>
</table>
</div>

<h2>Exemple practice de conversie</h2>

<h3>Conversie din sistemul românesc în ECTS</h3>

<div class="grid md:grid-cols-2 gap-6 my-8">
<div class="bg-gray-50 p-6 rounded-lg">
<h4 class="font-bold mb-4">Exemplul 1: Student cu media 8.75</h4>
<div class="space-y-2">
<p><strong>Nota românească:</strong> 8.75</p>
<p><strong>Intervalul ECTS:</strong> 8.50 - 9.49</p>
<p class="text-blue-600 font-bold text-lg">Echivalent ECTS: B (Very Good)</p>
</div>
</div>

<div class="bg-gray-50 p-6 rounded-lg">
<h4 class="font-bold mb-4">Exemplul 2: Student cu media 6.25</h4>
<div class="space-y-2">
<p><strong>Nota românească:</strong> 6.25</p>
<p><strong>Intervalul ECTS:</strong> 6.00 - 6.49</p>
<p class="text-orange-600 font-bold text-lg">Echivalent ECTS: E (Sufficient)</p>
</div>
</div>
</div>

<h3>Conversie din ECTS în sistemul românesc</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Exemple de conversie inversă:</h4>
<ul class="text-blue-700 space-y-2">
<li><strong>ECTS A</strong> → Nota românească: <strong>9.75</strong> (mijlocul intervalului 9.50-10.00)</li>
<li><strong>ECTS B</strong> → Nota românească: <strong>9.00</strong> (mijlocul intervalului 8.50-9.49)</li>
<li><strong>ECTS C</strong> → Nota românească: <strong>8.00</strong> (mijlocul intervalului 7.50-8.49)</li>
<li><strong>ECTS D</strong> → Nota românească: <strong>7.00</strong> (mijlocul intervalului 6.50-7.49)</li>
<li><strong>ECTS E</strong> → Nota românească: <strong>6.25</strong> (mijlocul intervalului 6.00-6.49)</li>
</ul>
</div>

<h2>Variații între universități</h2>

<p>Este important să știi că fiecare universitate poate avea propriile echivalențe. Iată câteva exemple:</p>

<div class="grid md:grid-cols-3 gap-6 my-8">
<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold mb-3">Universitatea București</h4>
<ul class="text-sm space-y-1">
<li>A: 9.50-10.00</li>
<li>B: 8.50-9.49</li>
<li>C: 7.50-8.49</li>
<li>D: 6.50-7.49</li>
<li>E: 6.00-6.49</li>
</ul>
</div>

<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold mb-3">Universitatea Tehnică</h4>
<ul class="text-sm space-y-1">
<li>A: 9.00-10.00</li>
<li>B: 8.00-8.99</li>
<li>C: 7.00-7.99</li>
<li>D: 6.00-6.99</li>
<li>E: 5.50-5.99</li>
</ul>
</div>

<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold mb-3">Universitatea de Medicină</h4>
<ul class="text-sm space-y-1">
<li>A: 9.70-10.00</li>
<li>B: 9.00-9.69</li>
<li>C: 8.00-8.99</li>
<li>D: 7.00-7.99</li>
<li>E: 6.00-6.99</li>
</ul>
</div>
</div>

<h2>Aplicații practice</h2>

<h3>Pentru mobilități Erasmus+</h3>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Proces de conversie pentru Erasmus:</h4>
<ol class="text-green-700 space-y-2">
<li><strong>Înainte de plecare:</strong> Universitatea românească furnizează tabelul de conversie</li>
<li><strong>În timpul mobilității:</strong> Notele primite în sistemul ECTS al universității gazdă</li>
<li><strong>La întoarcere:</strong> Conversie înapoi în sistemul românesc pentru recunoaștere</li>
<li><strong>Validare:</strong> Creditele și notele se înregistrează în sistemul universității de origine</li>
</ol>
</div>

<h3>Pentru transferuri internaționale</h3>

<p>Când te transferi la o universitate din altă țară europeană:</p>

<ul class="my-4 space-y-2">
<li>📋 <strong>Solicită transcript oficial</strong> cu notele în format ECTS</li>
<li>📊 <strong>Furnizează tabelul de conversie</strong> al universității tale</li>
<li>✅ <strong>Verifică echivalențele</strong> cu universitatea destinație</li>
<li>📝 <strong>Completează formulare specifice</strong> pentru recunoașterea creditelor</li>
</ul>

<h2>Calculatorul de conversie</h2>

<div class="bg-purple-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Pași pentru conversie automată:</h4>
<ol class="text-purple-700 space-y-2">
<li>Introdu nota în sistemul românesc (1.00 - 10.00)</li>
<li>Selectează tipul de conversie (standard sau specifică universității)</li>
<li>Obții automat echivalentul ECTS</li>
<li>Vezi și descrierea calitativă a performanței</li>
</ol>
</div>

<h2>Sfaturi pentru optimizarea conversiilor</h2>

<h3>Pentru studenții români care pleacă în Erasmus</h3>

<ul class="space-y-3 my-6">
<li>
<strong>Înainte de plecare:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Informează-te despre sistemul de notare al universității gazdă</li>
<li>• Stabilește obiective realiste pentru notele pe care vrei să le obții</li>
<li>• Înțelege cât de dificil este să obții note mari în sistemul destinație</li>
</ul>
</li>

<li>
<strong>În timpul mobilității:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Concentrează-te pe obținerea notelor B și A în sistemul ECTS</li>
<li>• Comunică cu profesorii despre expectațiile lor</li>
<li>• Folosește resursele suplimentare pentru învățare</li>
</ul>
</li>
</ul>

<h3>Pentru studenții străini în România</h3>

<ul class="space-y-3 my-6">
<li>
<strong>Adaptarea la sistemul românesc:</strong>
<ul class="mt-2 ml-4 space-y-1">
<li>• Sistemul românesc este numeric și mai precis</li>
<li>• Note peste 8.00 sunt considerate foarte bune</li>
<li>• Participarea la cursuri influențează nota finală</li>
</ul>
</li>
</ul>

<h2>Erori comune în conversii</h2>

<div class="bg-red-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-red-800 mb-4">⚠️ Greșeli de evitat:</h4>
<ul class="text-red-700 space-y-2">
<li><strong>Conversia directă matematică:</strong> Nu converti ECTS A = 10.00 automat</li>
<li><strong>Ignorarea contextului:</strong> Nu ții cont de specificul universității</li>
<li><strong>Rotunjirile greșite:</strong> Nu rotunjești notele înainte de conversie</li>
<li><strong>Omiterea documentației:</strong> Nu uiți să păstrezi tabelele de conversie oficiale</li>
</ul>
</div>

<h2>Concluzie</h2>

<p>Înțelegerea conversiilor între sistemul românesc și ECTS este crucială pentru mobilitatea academică și recunoașterea calificărilor. Folosește întotdeauna tabelele oficiale ale universităților implicate și nu te baza doar pe conversii aproximative.</p>

<p>Calculatorul nostru te poate ajuta să faci conversii rapide, dar pentru documente oficiale, consultă întotdeauna serviciile de relații internaționale ale universității tale.</p>
`
  },
  {
    id: 6,
    title: "Calculul mediei ponderate pentru studenții la master",
    description: "Particularități ale calculului mediei pentru programele de masterat în România.",
    category: "Master",
    date: "8 Jan 2025",
    slug: "medie-ponderata-master",
    imageUrl: "/images/master-gpa.svg",
    author: "Calculator Medie Facultate",
    readTime: "7 min",
    content: `
<h2>Specificul calculului mediei la master</h2>

<p>Calculul mediei la programele de masterat are particularități distincte față de ciclul de licență, fiind adaptat pentru nivelul avansat de studii și cerințele specifice programelor postuniversitare.</p>

<h2>Structura programelor de master în România</h2>

<div class="grid md:grid-cols-2 gap-8 my-8">
<div class="bg-blue-50 p-6 rounded-lg">
<h3 class="font-bold text-blue-800 mb-4">Master de 1 an (60 ECTS)</h3>
<ul class="text-blue-700 space-y-2">
<li><strong>Semestrul I:</strong> 30 ECTS (cursuri)</li>
<li><strong>Semestrul II:</strong> 20 ECTS (cursuri) + 10 ECTS (disertație)</li>
<li><strong>Discipline:</strong> 8-10 materii</li>
<li><strong>Disertația:</strong> 10-15 ECTS</li>
</ul>
</div>

<div class="bg-green-50 p-6 rounded-lg">
<h3 class="font-bold text-green-800 mb-4">Master de 2 ani (120 ECTS)</h3>
<ul class="text-green-700 space-y-2">
<li><strong>Anul I:</strong> 60 ECTS (cursuri și seminarii)</li>
<li><strong>Anul II:</strong> 45 ECTS (cursuri) + 15 ECTS (disertație)</li>
<li><strong>Discipline:</strong> 15-20 materii</li>
<li><strong>Disertația:</strong> 15-20 ECTS</li>
</ul>
</div>
</div>

<h2>Formula de calculul mediei la master</h2>

<h3>Media generală ponderată</h3>

<div class="bg-purple-100 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Formula completă:</h4>
<div class="bg-white p-4 rounded border text-center">
<code class="text-lg">Media Master = (Σ(Nota disciplină × Credite disciplină) + Nota disertație × Credite disertație) / Credite totale</code>
</div>
</div>

<h3>Componente ale mediei</h3>

<div class="grid md:grid-cols-3 gap-6 my-8">
<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold text-center mb-3">Discipline teoretice</h4>
<ul class="text-sm space-y-1">
<li>• Cursuri fundamentale</li>
<li>• Cursuri de specialitate</li>
<li>• Seminarii</li>
<li>• Practică/stagiu</li>
</ul>
<p class="text-center mt-3 font-bold text-blue-600">70-85% din credite</p>
</div>

<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold text-center mb-3">Disertația de master</h4>
<ul class="text-sm space-y-1">
<li>• Cercetare originală</li>
<li>• Metodologie</li>
<li>• Analiză de date</li>
<li>• Prezentare publică</li>
</ul>
<p class="text-center mt-3 font-bold text-green-600">15-30% din credite</p>
</div>

<div class="border border-gray-300 p-4 rounded-lg">
<h4 class="font-bold text-center mb-3">Activități complementare</h4>
<ul class="text-sm space-y-1">
<li>• Proiecte de grup</li>
<li>• Conferințe</li>
<li>• Publicații</li>
<li>• Internshipuri</li>
</ul>
<p class="text-center mt-3 font-bold text-purple-600">0-10% din credite</p>
</div>
</div>

<h2>Exemplu complet de calcul - Master 1 an</h2>

<div class="bg-gray-50 p-6 rounded-lg my-8">
<h4 class="font-bold mb-4">Student la Master în Informatică (60 ECTS)</h4>

<h5 class="font-semibold mb-3 text-blue-800">Semestrul I (30 ECTS):</h5>
<table class="w-full border-collapse border border-gray-300 mb-4">
<thead>
<tr class="bg-blue-100">
<th class="border border-gray-300 p-2 text-left">Disciplina</th>
<th class="border border-gray-300 p-2 text-center">Nota</th>
<th class="border border-gray-300 p-2 text-center">Credite</th>
<th class="border border-gray-300 p-2 text-center">Puncte</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-2">Algoritmi Avansați</td>
<td class="border border-gray-300 p-2 text-center">9.50</td>
<td class="border border-gray-300 p-2 text-center">8</td>
<td class="border border-gray-300 p-2 text-center">76.0</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Machine Learning</td>
<td class="border border-gray-300 p-2 text-center">9.00</td>
<td class="border border-gray-300 p-2 text-center">8</td>
<td class="border border-gray-300 p-2 text-center">72.0</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Arhitecturi Distribuite</td>
<td class="border border-gray-300 p-2 text-center">8.75</td>
<td class="border border-gray-300 p-2 text-center">6</td>
<td class="border border-gray-300 p-2 text-center">52.5</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Metodologii de Cercetare</td>
<td class="border border-gray-300 p-2 text-center">9.25</td>
<td class="border border-gray-300 p-2 text-center">4</td>
<td class="border border-gray-300 p-2 text-center">37.0</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Disciplină opțională</td>
<td class="border border-gray-300 p-2 text-center">8.50</td>
<td class="border border-gray-300 p-2 text-center">4</td>
<td class="border border-gray-300 p-2 text-center">34.0</td>
</tr>
</tbody>
</table>

<h5 class="font-semibold mb-3 text-green-800">Semestrul II (30 ECTS):</h5>
<table class="w-full border-collapse border border-gray-300 mb-4">
<thead>
<tr class="bg-green-100">
<th class="border border-gray-300 p-2 text-left">Disciplina</th>
<th class="border border-gray-300 p-2 text-center">Nota</th>
<th class="border border-gray-300 p-2 text-center">Credite</th>
<th class="border border-gray-300 p-2 text-center">Puncte</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-2">Data Mining</td>
<td class="border border-gray-300 p-2 text-center">9.75</td>
<td class="border border-gray-300 p-2 text-center">6</td>
<td class="border border-gray-300 p-2 text-center">58.5</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Cloud Computing</td>
<td class="border border-gray-300 p-2 text-center">8.25</td>
<td class="border border-gray-300 p-2 text-center">6</td>
<td class="border border-gray-300 p-2 text-center">49.5</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Securitate Informatică</td>
<td class="border border-gray-300 p-2 text-center">9.00</td>
<td class="border border-gray-300 p-2 text-center">4</td>
<td class="border border-gray-300 p-2 text-center">36.0</td>
</tr>
<tr>
<td class="border border-gray-300 p-2">Stagiu de practică</td>
<td class="border border-gray-300 p-2 text-center">9.50</td>
<td class="border border-gray-300 p-2 text-center">4</td>
<td class="border border-gray-300 p-2 text-center">38.0</td>
</tr>
<tr class="bg-yellow-100 font-bold">
<td class="border border-gray-300 p-2">Disertația de master</td>
<td class="border border-gray-300 p-2 text-center">9.75</td>
<td class="border border-gray-300 p-2 text-center">10</td>
<td class="border border-gray-300 p-2 text-center">97.5</td>
</tr>
</tbody>
</table>

<div class="bg-yellow-100 p-4 rounded mt-4">
<h5 class="font-bold mb-2">Calculul final:</h5>
<p><strong>Total puncte:</strong> 271.5 + 279.5 = 551.0</p>
<p><strong>Total credite:</strong> 60 ECTS</p>
<p class="text-xl font-bold text-green-600">Media finală: 551.0 ÷ 60 = 9.18</p>
<p class="text-green-600 font-bold">🏆 Clasificare: Magna Cum Laude</p>
</div>
</div>

<h2>Particularități ale disertației de master</h2>

<h3>Evaluarea disertației</h3>

<div class="bg-orange-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-orange-800 mb-4">Componentele evaluării:</h4>
<ul class="text-orange-700 space-y-2">
<li><strong>Nota conducătorului de lucrare (40%):</strong> Procesul de cercetare și redactare</li>
<li><strong>Nota referentului (30%):</strong> Evaluarea conținutului științific</li>
<li><strong>Nota prezentării publice (30%):</strong> Susținerea în fața comisiei</li>
</ul>
</div>

<h3>Criterii de evaluare a disertației</h3>

<table class="w-full border-collapse border border-gray-300 my-6">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 p-3 text-left">Criteriul</th>
<th class="border border-gray-300 p-3 text-center">Ponderea</th>
<th class="border border-gray-300 p-3 text-left">Descrierea</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 p-3">Originalitatea cercetării</td>
<td class="border border-gray-300 p-3 text-center">25%</td>
<td class="border border-gray-300 p-3">Contribuția științifică originală</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Metodologia aplicată</td>
<td class="border border-gray-300 p-3 text-center">20%</td>
<td class="border border-gray-300 p-3">Corectitudinea metodelor de cercetare</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Analiza rezultatelor</td>
<td class="border border-gray-300 p-3 text-center">20%</td>
<td class="border border-gray-300 p-3">Interpretarea și validitatea concluziilor</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Calitatea redactării</td>
<td class="border border-gray-300 p-3 text-center">15%</td>
<td class="border border-gray-300 p-3">Structura, claritatea și corectitudinea</td>
</tr>
<tr>
<td class="border border-gray-300 p-3">Prezentarea orală</td>
<td class="border border-gray-300 p-3 text-center">20%</td>
<td class="border border-gray-300 p-3">Capacitatea de comunicare și apărare</td>
</tr>
</tbody>
</table>

<h2>Burse și clasificări la master</h2>

<h3>Criterii pentru bursa de merit la master</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-blue-800 mb-4">Condiții standard:</h4>
<ul class="text-blue-700 space-y-2">
<li><strong>Media minimă:</strong> 8.75 (mai mare decât la licență)</li>
<li><strong>Fără restanțe</strong> și fără întârzieri în depunerea lucrărilor</li>
<li><strong>Participare activă</strong> la conferințe și evenimente științifice</li>
<li><strong>Publicații științifice</strong> (bonus semnificativ)</li>
</ul>
</div>

<h3>Clasificările de merit specifice masterului</h3>

<div class="grid md:grid-cols-2 gap-6 my-8">
<div class="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg">
<h4 class="font-bold text-yellow-800 mb-3">🏆 Summa Cum Laude Master</h4>
<p class="text-yellow-700 font-semibold">Media: 9.70 - 10.00</p>
<p class="text-yellow-600 text-sm mt-2">Performanță excepțională cu disertație foarte bună (min. 9.50)</p>
</div>

<div class="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg">
<h4 class="font-bold text-blue-800 mb-3">🥈 Magna Cum Laude Master</h4>
<p class="text-blue-700 font-semibold">Media: 9.00 - 9.69</p>
<p class="text-blue-600 text-sm mt-2">Performanță foarte bună cu disertație de calitate (min. 9.00)</p>
</div>
</div>

<h2>Programe de master cu specificități</h2>

<h3>Master prin cercetare</h3>

<p>Pentru programele orientate spre cercetare, calculul mediei are particularități:</p>

<ul class="space-y-2 my-4">
<li><strong>Disertația:</strong> 40-50% din credite (în loc de 15-20%)</li>
<li><strong>Publicații științifice:</strong> Bonus de până la 0.5 puncte la media finală</li>
<li><strong>Participări la conferințe:</strong> Puncte bonus pentru prezentări</li>
<li><strong>Stagii de cercetare:</strong> Evaluare separată cu impact asupra mediei</li>
</ul>

<h3>Master profesional</h3>

<p>Pentru programele orientate spre practică:</p>

<ul class="space-y-2 my-4">
<li><strong>Proiectul final:</strong> 20-25% din credite</li>
<li><strong>Stagiile de practică:</strong> Pondere mare în calculul mediei</li>
<li><strong>Portofoliul profesional:</strong> Evaluare continuă</li>
<li><strong>Certificări externe:</strong> Bonus pentru certificări relevante domeniului</li>
</ul>

<h2>Strategii pentru optimizarea mediei la master</h2>

<h3>Planificarea pe semestre</h3>

<div class="bg-green-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-green-800 mb-4">Semestrul I:</h4>
<ul class="text-green-700 space-y-2">
<li>• Concentrează-te pe fundamentele teoretice</li>
<li>• Stabilește relații cu profesorii pentru disertație</li>
<li>• Participă activ la seminarii și discuții</li>
<li>• Începe să te gândești la tema disertației</li>
</ul>
</div>

<div class="bg-purple-50 p-6 rounded-lg my-6">
<h4 class="font-bold text-purple-800 mb-4">Semestrul II:</h4>
<ul class="text-purple-700 space-y-2">
<li>• Balansează timpul între cursuri și disertație</li>
<li>• Dedică 40-50% din timp disertației</li>
<li>• Solicită feedback regulat de la conducător</li>
<li>• Pregătește prezentarea finală din timp</li>
</ul>
</div>

<h3>Managementul disertației</h3>

<ol class="space-y-3 my-6">
<li><strong>Alegerea temei (luna 1-2):</strong> Selectează o temă care îți place și este fezabilă</li>
<li><strong>Cercetarea bibliografică (luna 2-4):</strong> Studiază literatura de specialitate</li>
<li><strong>Dezvoltarea metodologiei (luna 4-6):</strong> Stabilește abordarea de cercetare</li>
<li><strong>Implementarea/analiza (luna 6-10):</strong> Realizează partea practică</li>
<li><strong>Redactarea (luna 8-12):</strong> Scrie și revizuiește lucrarea</li>
<li><strong>Pregătirea prezentării (ultima lună):</strong> Exersează susținerea</li>
</ol>

<h2>Impact asupra continuării studiilor</h2>

<h3>Pentru doctorat</h3>

<p>Media de master influențează semnificativ accesul la programele de doctorat:</p>

<ul class="space-y-2 my-4">
<li><strong>Admitere:</strong> Media minimă de obicei 8.50-9.00</li>
<li><strong>Bursă doctorală:</strong> Preferință pentru medii peste 9.25</li>
<li><strong>Recomandări:</strong> Profesorii consideră atent performanțele de master</li>
<li><strong>Cercetare:</strong> Calitatea disertației de master este crucială</li>
</ul>

<h2>Concluzie</h2>

<p>Calculul mediei la master necesită o abordare strategică, acordând atenție specială disertației care are o pondere semnificativă. Planificarea atentă a timpului între cursuri și cercetare, precum și alegerea temei potrivite pentru disertație sunt factori cheie pentru obținerea unei medii mari.</p>

<p>Folosește calculatorul nostru pentru a monitoriza progresul mediei pe parcursul masterului și pentru a planifica obiectivele de performanță pentru fiecare semestru.</p>
`
  }
];

export const getArticleBySlug = (slug: string): ArticleContent | undefined => {
  return articlesData.find(article => article.slug === slug);
};

export const getAllArticles = (): ArticleContent[] => {
  return articlesData;
};