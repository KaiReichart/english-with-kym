// Copy for design variant 05c — "The Business Line".
// All page text lives here so it can be compared against other variants.

export type IconName =
	| 'graduation'
	| 'briefcase'
	| 'chat'
	| 'pin'
	| 'clock'
	| 'calendar'
	| 'mail'
	| 'phone';

export interface OfferContent {
	icon: IconName;
	title: string;
	subtitle: string;
	imageAlt: string;
	intro: string[];
	leadIn?: string;
	bullets?: string[];
	outro: string[];
}

export interface ScenarioStop {
	title: string;
	body: string;
}

export interface InfoItem {
	icon: IconName;
	text: string;
}

export interface Copy05c {
	meta: {
		title: string;
		description: string;
	};
	skipLink: string;
	nav: {
		offer: string;
		about: string;
		lessons: string;
		contact: string;
	};
	hero: {
		kicker: string;
		headline: string;
		tagline: string;
		intro: string;
		infoLine: string;
		ctaPrimary: string;
		ctaSecondary: string;
		imageAlt: string;
	};
	scenarios: {
		eyebrow: string;
		heading: string;
		stops: ScenarioStop[];
		bridge: string;
	};
	offerEyebrow: string;
	offerHeading: string;
	offers: OfferContent[];
	about: {
		eyebrow: string;
		heading: string;
		lead: string;
		paragraphs: string[];
		imageAlt: string;
	};
	lessons: {
		eyebrow: string;
		heading: string;
		subheading: string;
		items: InfoItem[];
		paragraphs: string[];
	};
	contact: {
		eyebrow: string;
		heading: string;
		lead: string;
		body: string;
		ctaLabel: string;
	};
	footer: {
		tagline: string;
		impressum: string;
		datenschutz: string;
		rights: string;
		allVariants: string;
	};
}

export const copy: Copy05c = {
	meta: {
		title: 'Variante 05c – English with Kym',
		description:
			'Business English, Englischnachhilfe und Konversation im Einzelunterricht in Schwabmünchen. Native Speaker mit über 35 Jahren Erfahrung in Schulungen und Vorträgen auf Englisch.',
	},
	skipLink: 'Zum Inhalt springen',
	nav: {
		offer: 'Angebot',
		about: 'Über Kym',
		lessons: 'Unterricht',
		contact: 'Kontakt',
	},
	hero: {
		kicker: 'English with Kym · Schwabmünchen',
		headline: 'Englisch, mit dem du im Job überzeugst.',
		tagline: 'Business English · Englischnachhilfe · Konversation im Einzelunterricht',
		intro:
			'Wenn du im Job auf Englisch überzeugen musst, in Meetings, am Telefon oder im Bewerbungsgespräch, gebe ich dir das Handwerkszeug dafür. Suchst du Nachhilfe für die Schule oder einfach mehr Übung im Sprechen, bist du bei mir ebenso richtig.',
		infoLine: 'Unterricht in Schwabmünchen · Einzelunterricht · Abends ab 17 Uhr und samstags',
		ctaPrimary: 'Kontakt aufnehmen',
		ctaSecondary: 'Mein Angebot',
		imageAlt: 'Big Ben in London mit einer Statue im Vordergrund vor blauem Himmel',
	},
	scenarios: {
		eyebrow: 'Der Berufsalltag',
		heading: 'Diese Momente kennst du',
		stops: [
			{
				title: 'Das Meeting',
				body: 'Du verstehst jedes Wort, aber bei deinem eigenen Beitrag fehlen dir plötzlich die passenden.',
			},
			{
				title: 'Die Präsentation',
				body: 'Die Folien stehen. Jetzt muss der Vortrag auf Englisch genauso überzeugen wie auf Deutsch.',
			},
			{
				title: 'Der Call mit London oder New York',
				body: 'Die Leitung steht, dein Satzbau manchmal noch nicht.',
			},
			{
				title: 'Das Bewerbungsgespräch',
				body: 'Eine Stelle, ein Gespräch auf Englisch, und keine zweite Chance.',
			},
		],
		bridge: 'Business English bedeutet, vorbereitet zu sein, bevor der Moment kommt.',
	},
	offerEyebrow: 'Leistungen',
	offerHeading: 'Mein Angebot',
	offers: [
		{
			icon: 'briefcase',
			title: 'Business English',
			subtitle: 'Für den Berufsalltag auf Englisch',
			imageAlt: 'Zwei Frauen im Gespräch bei einem Meeting am Fenster',
			intro: [
				'Im Job reicht Schulenglisch oft nicht aus. Entscheidend ist, wie du dich in Meetings, am Telefon oder im Gespräch mit Kunden aus dem Ausland schlägst.',
			],
			leadIn: 'Ich orientiere mich an den Situationen, die in deinem Berufsalltag tatsächlich vorkommen:',
			bullets: [
				'Besprechungen und Präsentationen',
				'E-Mails und schriftliche Kommunikation',
				'Telefonate und Videokonferenzen',
				'Fachwortschatz für den Berufsalltag',
				'Gespräche mit internationalen Kolleginnen, Kollegen und Kunden',
				'Vorstellungsgespräche auf Englisch',
				'Allgemeine Kommunikation im Berufsalltag',
			],
			outro: [
				'Seit über 35 Jahren halte ich selbst Schulungen und Vorträge auf Englisch. Diese Erfahrung bringe ich in jede Stunde mit ein.',
			],
		},
		{
			icon: 'graduation',
			title: 'Englischnachhilfe',
			subtitle: 'Von der 5. Klasse bis zum Abitur',
			imageAlt: 'Ein Mädchen macht Hausaufgaben an einem Schreibtisch',
			intro: [
				'Für die Schule gilt dasselbe Prinzip wie im Job: Sicherheit kommt durch Übung, nicht durch Druck.',
			],
			leadIn: 'Ich unterstütze dich individuell bei:',
			bullets: [
				'Grammatik und Wortschatz',
				'Hausaufgaben und Schulaufgaben',
				'Lese- und Hörverständnis',
				'Schreiben und Textgestaltung',
				'Sprechen und Aussprache',
				'Vorbereitung auf Tests und Klassenarbeiten',
				'Abiturvorbereitung',
			],
			outro: [
				'Wir arbeiten in deinem Tempo, an genau den Themen, die dir aktuell Mühe machen.',
			],
		},
		{
			icon: 'chat',
			title: 'Englisch-Konversation im Einzelunterricht',
			subtitle: 'Sprechen üben ganz ohne Druck',
			imageAlt: 'Hände, Kaffeetassen und ein Gebäckstück auf einem Tisch bei einem entspannten Gespräch',
			intro: [
				'Du verstehst Englisch gut, aber sprichst es selten selbst.',
				'Im Einzelunterricht übst du in einer entspannten Atmosphäre, in deinem Tempo.',
			],
			outro: [
				'Wir sprechen über Alltag, Reisen, Beruf, Hobbys oder aktuelle Themen, was dich gerade interessiert. Dabei verbesserst du nebenbei Wortschatz, Aussprache und Redefluss.',
				'Englisch mit Selbstvertrauen ist das Ziel, nicht perfektes Englisch.',
			],
		},
	],
	about: {
		eyebrow: 'Hintergrund',
		heading: 'Über Kym',
		lead: 'Englisch ist meine Muttersprache. Seminare und Vorträge auf Englisch sind mein Handwerk.',
		paragraphs: [
			'Ich wurde in London geboren und lebe seit über 30 Jahren in Deutschland.',
			'Seit mehr als 35 Jahren halte ich Schulungen und Vorträge auf Englisch. Seit über 15 Jahren unterrichte ich Englisch zusätzlich im Einzelunterricht.',
			'Diese Erfahrung bringe ich in jede Stunde mit ein, ob es um die nächste Präsentation geht, um ein Bewerbungsgespräch oder um die Englischarbeit in der Schule.',
			'Mein Unterricht ist individuell, direkt und auf dich zugeschnitten.',
		],
		imageAlt: 'Eine rote Telefonzelle in London bei Nacht mit Lichtspuren vorbeifahrender Autos',
	},
	lessons: {
		eyebrow: 'Organisatorisches',
		heading: 'Englischunterricht in Schwabmünchen',
		subheading: 'Individueller Einzelunterricht',
		items: [
			{ icon: 'pin', text: 'Schwabmünchen' },
			{ icon: 'clock', text: 'Unter der Woche ab 17:00 Uhr' },
			{ icon: 'calendar', text: 'Samstags' },
		],
		paragraphs: [
			'Der Unterricht findet in der Regel im Einzelunterricht statt, ganz auf deine Ziele zugeschnitten.',
			'Ob Bewerbungsgespräch, die nächste Präsentation oder die Englischarbeit in der Schule, wir konzentrieren uns auf das, was für dich gerade zählt.',
		],
	},
	contact: {
		eyebrow: 'Kontakt',
		heading: 'Bereit fürs nächste Meeting auf Englisch?',
		lead: 'Ich freue mich auf deine Nachricht.',
		body: 'Schreib mir kurz etwas über dich, dein aktuelles Englischniveau und dein Ziel, zum Beispiel das nächste Meeting, eine Präsentation oder die Vorbereitung auf die Abiturprüfung.',
		ctaLabel: 'Kontakt aufnehmen',
	},
	footer: {
		tagline: 'Business English und individueller Unterricht in Schwabmünchen',
		impressum: 'Impressum',
		datenschutz: 'Datenschutz',
		rights: 'English with Kym',
		allVariants: 'Alle Varianten',
	},
};
