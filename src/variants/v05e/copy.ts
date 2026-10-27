// All page copy for variant 05e ("Mind the Gap"). Keeping text here, out of
// index.astro, so it's easy to read and compare against the other variants.

export type IconName = 'pin' | 'clock' | 'calendar' | 'duo' | 'mail' | 'phone' | 'graduation' | 'briefcase' | 'chat' | 'arrow' | 'check';

export interface OfferCopy {
	id: string;
	icon: IconName;
	title: string;
	subtitle: string;
	imageAlt: string;
	intro: string[];
	leadIn?: string;
	bullets?: string[];
	outro: string[];
}

export interface StepCopy {
	title: string;
	body: string;
}

export interface ChooserItem {
	label: string;
	note: string;
	href: string;
}

export interface FactItem {
	icon: IconName;
	label: string;
}

export interface FaqItem {
	q: string;
	a: string;
}

export const contactDetails = {
	email: 'kym-elizabeth@gmx.de',
	emailHref: 'mailto:kym-elizabeth@gmx.de',
	phoneDisplay: '0151 40462441',
	phoneHref: 'tel:+4915140462441',
};

export const copy = {
	meta: {
		title: 'Variante 05e – English with Kym',
		description:
			'Englisch-Einzelunterricht in Schwabmünchen für Schule, Beruf und mehr Sprechsicherheit. Unter der Woche abends ab 17 Uhr oder samstags – schreib mir, wo du stehst und was du erreichen willst.',
	},
	skipLink: 'Zum Inhalt springen',
	brand: {
		name: 'English with Kym',
		place: 'Schwabmünchen',
	},
	nav: {
		offer: 'Angebot',
		steps: 'Ablauf',
		faq: 'Fragen',
		contact: 'Kontakt',
	},
	hero: {
		badge: 'English with Kym · Schwabmünchen',
		headline: 'Englisch-Einzelunterricht in Schwabmünchen.',
		headlineLine2: 'Für Schule, Beruf oder einfach mehr Sprechsicherheit.',
		sub: 'Persönlich, flexibel und ganz auf dich abgestimmt – unter der Woche abends oder samstags, bei mir vor Ort.',
		infoLine: 'Schwabmünchen · Einzelunterricht · Werktags ab 17 Uhr & samstags',
		intro: 'Schreib mir kurz, wo du aktuell stehst und was du erreichen willst – den Rest besprechen wir gemeinsam.',
		ctaPrimary: 'Schreib mir eine E-Mail',
		ctaSecondary: 'Oder anrufen',
		imageAlt: 'Big Ben in London vor blauem Himmel',
	},
	steps: {
		eyebrow: 'Mind the Gap',
		heading: 'In drei Schritten zum ersten Termin',
		items: [
			{
				title: 'Du meldest dich',
				body: 'Per E-Mail oder Telefon – erzähl mir kurz, wer du bist, wo du aktuell stehst und was du erreichen willst.',
			},
			{
				title: 'Wir sprechen darüber',
				body: 'Gemeinsam schauen wir, was du wirklich brauchst: Nachhilfe, Business English oder einfach mehr Übung im Sprechen.',
			},
			{
				title: 'Dein Unterricht beginnt',
				body: 'Einzelunterricht in Schwabmünchen – unter der Woche abends ab 17 Uhr oder samstags.',
			},
		] as StepCopy[],
	},
	chooser: {
		heading: 'Wofür brauchst du Englisch?',
		items: [
			{ label: 'Ich bin Schüler/in', note: 'Nachhilfe von der 5. Klasse bis zum Abitur', href: '#nachhilfe' },
			{ label: 'Ich brauche Englisch im Beruf', note: 'Business English für Meetings, E-Mails und mehr', href: '#business' },
			{ label: 'Ich will einfach mehr sprechen', note: 'Konversation im Einzelunterricht', href: '#konversation' },
		] as ChooserItem[],
	},
	offerHeading: 'Mein Angebot',
	offers: [
		{
			id: 'nachhilfe',
			icon: 'graduation',
			title: 'Englisch-Nachhilfe',
			subtitle: '5. Klasse bis Abitur',
			imageAlt: 'Ein Mädchen macht Hausaufgaben an einem Schreibtisch',
			intro: ['Steht bald eine Arbeit an, oder hakt es bei einem bestimmten Thema? Wir arbeiten in deinem Tempo an dem, was gerade zählt.'],
			leadIn: 'Dabei geht es zum Beispiel um:',
			bullets: [
				'Grammatik und Wortschatz',
				'Hausaufgaben und Schulaufgaben',
				'Lese- und Hörverständnis',
				'Schreiben und Textgestaltung',
				'Sprechen und Aussprache',
				'Vorbereitung auf Tests und Klassenarbeiten',
				'Abiturvorbereitung',
			],
			outro: ['Ziel ist nicht nur die nächste Note, sondern ein echtes Gefühl für die Sprache.'],
		},
		{
			id: 'business',
			icon: 'briefcase',
			title: 'Business English',
			subtitle: 'Englisch für den Berufsalltag',
			imageAlt: 'Zwei Frauen im Gespräch bei einem Meeting am Fenster',
			intro: ['Du verstehst E-Mails und Calls auf Englisch, aber im entscheidenden Moment fehlen dir die Worte? Wir üben genau die Situationen, die bei dir im Job wirklich vorkommen.'],
			leadIn: 'Dazu gehören zum Beispiel:',
			bullets: [
				'Besprechungen und Präsentationen',
				'E-Mails und schriftliche Kommunikation',
				'Telefonate und Videokonferenzen',
				'Wortschatz für den Berufsalltag',
				'Gespräche mit internationalen Kolleg*innen und Kunden',
				'Vorstellungsgespräche auf Englisch',
				'Allgemeine Kommunikation im Berufsleben',
			],
			outro: ['Dafür bringe ich über 35 Jahre Erfahrung mit Schulungen und Vorträgen auf Englisch mit.'],
		},
		{
			id: 'konversation',
			icon: 'chat',
			title: 'Konversation im Einzelunterricht',
			subtitle: 'Mehr sprechen, mit weniger Sorge um Fehler',
			imageAlt: 'Hände, Kaffeetassen und ein Gebäckstück auf einem Tisch bei einem entspannten Gespräch',
			intro: [
				'Du verstehst Englisch gut, kommst im Gespräch aber selten dazu, es selbst zu sprechen? Im Einzelunterricht übst du in Ruhe und ohne Publikum.',
			],
			outro: [
				'Wir sprechen über Alltag, Reisen, Beruf, Hobbys oder aktuelle Themen – was dich interessiert, wird zum Thema. Nebenbei wachsen Wortschatz, Aussprache und Redefluss.',
				'Ziel ist nicht perfektes Englisch, sondern Englisch mit Selbstvertrauen.',
			],
		},
	] as OfferCopy[],
	facts: {
		heading: 'Der Unterricht auf einen Blick',
		items: [
			{ icon: 'pin', label: 'Schwabmünchen' },
			{ icon: 'duo', label: 'Einzelunterricht' },
			{ icon: 'clock', label: 'Werktags ab 17 Uhr' },
			{ icon: 'calendar', label: 'Samstags' },
		] as FactItem[],
	},
	about: {
		heading: 'Über Kym',
		lead: 'Englisch ist meine Muttersprache – Menschen beim Sprechen zu unterstützen, ist meine Erfahrung.',
		paragraphs: [
			'Geboren bin ich in London, seit über 30 Jahren lebe ich in Deutschland.',
			'Seit mehr als 35 Jahren halte ich Schulungen und Vorträge auf Englisch, seit über 15 Jahren unterrichte ich privat Englisch.',
			'Ob Schüler/in, berufstätig oder einfach auf der Suche nach mehr Sprechsicherheit – mein Unterricht ist persönlich, praxisnah und auf dich abgestimmt.',
		],
		imageAlt: 'Eine rote Telefonzelle in London bei Nacht mit Lichtspuren vorbeifahrender Autos',
	},
	faq: {
		heading: 'Häufige Fragen',
		items: [
			{ q: 'Wo findet der Unterricht statt?', a: 'In Schwabmünchen.' },
			{ q: 'Wann hast du Zeit?', a: 'Unter der Woche abends ab 17:00 Uhr sowie samstags.' },
			{ q: 'Ist es Einzelunterricht?', a: 'Ja, der Unterricht findet in der Regel als Einzelunterricht statt, ganz auf dich abgestimmt.' },
			{
				q: 'Für welches Niveau oder Alter ist der Unterricht geeignet?',
				a: 'Für Schüler/innen von der 5. Klasse bis zum Abitur, für Berufstätige und für alle, die einfach mehr Englisch sprechen möchten – ganz gleich, wo du aktuell stehst.',
			},
			{
				q: 'Wie melde ich mich an?',
				a: 'Schreib mir eine E-Mail oder ruf mich an und erzähl mir kurz etwas über dich, dein aktuelles Niveau und deine Ziele.',
			},
		] as FaqItem[],
	},
	contact: {
		eyebrow: 'Nächster Halt: dein Unterricht',
		heading: 'Bereit, loszulegen?',
		lead: 'Ich freue mich, von dir zu hören.',
		body: 'Schreib mir kurz etwas über dich, dein aktuelles Englischniveau und deine Ziele – dann melde ich mich bei dir zurück.',
		ctaPrimary: 'Schreib mir eine E-Mail',
		ctaSecondary: 'Oder ruf mich an',
	},
	footer: {
		tagline: 'Individueller Englischunterricht in Schwabmünchen',
		rights: 'English with Kym',
		impressum: 'Impressum',
		datenschutz: 'Datenschutz',
		allVariants: 'Alle Varianten',
	},
};
