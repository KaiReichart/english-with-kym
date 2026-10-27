// Copy for Variant 05a: "The Classic". German, informal "du", first person
// "ich" from Kym. Keep this file the single source of truth for all page
// text so headlines/CTAs can be compared against the other sub-variants.

export type IconName = 'pin' | 'clock' | 'calendar' | 'mail' | 'phone';

export interface OfferCopy {
	title: string;
	subtitle: string;
	imageAlt: string;
	intro: string[];
	leadIn?: string;
	bullets: string[];
	outro: string[];
}

export interface InfoItem {
	icon: IconName;
	text: string;
}

export const copy = {
	meta: {
		title: 'Variante 05a · English with Kym',
		description:
			'Englischunterricht in Schwabmünchen von einer Muttersprachlerin aus London: Nachhilfe, Business English und Konversation im persönlichen Einzelunterricht.',
	},
	skipLink: 'Zum Inhalt springen',
	nav: {
		offer: 'Angebot',
		about: 'Über Kym',
		lessons: 'Unterricht',
		contact: 'Kontakt',
	},
	brand: {
		name: 'English with Kym',
		place: 'Schwabmünchen',
	},
	hero: {
		kicker: 'Englischunterricht in Schwabmünchen',
		titleLines: ['Englisch aus London,', 'Unterricht in Schwabmünchen.'],
		bylineLabel: 'Unterrichtet von',
		bylineName: 'Kym, geboren in London',
		intro:
			'Ich bin Muttersprachlerin aus London und lebe seit über 30 Jahren in Deutschland. Seit 15 Jahren unterrichte ich Englisch: persönlich, praxisnah und genau auf dich abgestimmt.',
		infoLine: 'Einzelunterricht in Schwabmünchen, abends ab 17 Uhr und samstags.',
		ctaPrimary: 'Schreib mir',
		ctaSecondary: 'Zum Angebot',
		imageAlt: 'Big Ben in London vor blauem Himmel',
	},
	learn: {
		station: 'Philosophie',
		heading: 'Praxis statt Theorie',
		paragraphs: [
			'Englisch soll funktionieren: im Gespräch, in der Schule, im Beruf. Deshalb steht bei mir das Sprechen im Mittelpunkt, nicht nur die Regel dahinter.',
			'Seit mehr als 35 Jahren halte ich selbst Schulungen und Vorträge auf Englisch. Diese Praxis bringe ich in jede Unterrichtsstunde ein.',
			'Dazu kommen über 15 Jahre privater Unterricht. Mein Unterricht ist entspannt, persönlich und auf dich zugeschnitten.',
		],
	},
	offers: {
		station: 'Angebot',
		heading: 'Für Schule, Beruf und Alltag',
		cards: [
			{
				title: 'Englischnachhilfe',
				subtitle: '5. Klasse bis Abitur',
				imageAlt: 'Ein Mädchen macht Hausaufgaben an einem Schreibtisch',
				intro: ['Ob Vokabeltest oder Abiturklausur, ich unterstütze dich genau da, wo es gerade hakt.'],
				leadIn: 'Gemeinsam üben wir:',
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
					'Wir arbeiten in deinem Tempo, ob es um ein einzelnes Thema geht oder um bessere Noten insgesamt.',
					'Individueller Englischunterricht von der 5. Klasse bis zum Abitur.',
				],
			},
			{
				title: 'Business English',
				subtitle: 'Englisch für den Berufsalltag',
				imageAlt: 'Zwei Frauen im Gespräch bei einem Meeting am Fenster',
				intro: ['Im Meeting plötzlich auf Englisch nach Worten suchen? Das lässt sich üben.'],
				leadIn: 'Wir arbeiten an den Situationen, die im Job wirklich vorkommen:',
				bullets: [
					'Besprechungen und Präsentationen',
					'E-Mails und schriftliche Kommunikation',
					'Telefonate und Videokonferenzen',
					'Wortschatz für den Berufsalltag',
					'Gespräche mit internationalen Kollegen und Kunden',
					'Vorstellungsgespräche auf Englisch',
					'Allgemeine Kommunikation im Berufsleben',
				],
				outro: [
					'35 Jahre eigene Erfahrung mit Schulungen und Vorträgen auf Englisch fließen direkt in deinen Unterricht ein.',
				],
			},
			{
				title: 'Englisch-Konversation',
				subtitle: 'Einzelunterricht, ganz ohne Druck',
				imageAlt: 'Hände, Kaffeetassen und ein Gebäckstück auf einem Tisch bei einem entspannten Gespräch',
				intro: [
					'Du verstehst mehr Englisch, als du sprichst? Dafür fehlt im Alltag oft einfach die Gelegenheit.',
				],
				bullets: [],
				outro: [
					'Wir sprechen über Alltag, Reisen, Beruf, Hobbys oder was dich gerade beschäftigt, und verbessern dabei Wortschatz, Aussprache und Redefluss.',
					'Das Ziel ist sicheres Englisch, nicht perfektes Englisch.',
				],
			},
		] satisfies OfferCopy[],
	},
	about: {
		station: 'Über Kym',
		heading: 'Über Kym',
		lead: 'Englisch ist meine Muttersprache, seit über 30 Jahren lebe ich in Deutschland.',
		paragraphs: [
			'Geboren und aufgewachsen bin ich in London.',
			'Seit mehr als 35 Jahren halte ich Schulungen und Vorträge auf Englisch, seit über 15 Jahren unterrichte ich privat.',
			'Ob Schüler, Berufstätige oder jemand, der einfach entspannter Englisch sprechen möchte, mir geht es immer um dasselbe: mehr Sicherheit im Englischen.',
			'Mein Unterricht bleibt dabei persönlich: praxisnah, entspannt und auf dich zugeschnitten.',
		],
		imageAlt: 'Eine rote Telefonzelle in London bei Nacht mit Lichtspuren vorbeifahrender Autos',
	},
	lessons: {
		station: 'Unterricht',
		heading: 'Wie der Unterricht abläuft',
		subheading: 'Einzelunterricht, individuell geplant',
		items: [
			{ icon: 'pin', text: 'Schwabmünchen' },
			{ icon: 'clock', text: 'Abends ab 17 Uhr' },
			{ icon: 'calendar', text: 'Auch samstags' },
		] satisfies InfoItem[],
		paragraphs: [
			'Der Unterricht findet in der Regel als Einzelunterricht statt, damit wir uns ganz auf dich konzentrieren können.',
			'Ob Prüfungsvorbereitung, Berufsalltag oder einfach mehr Sicherheit im Sprechen, wir setzen den Schwerpunkt dort, wo er dir am meisten hilft.',
		],
	},
	contact: {
		station: 'Kontakt',
		heading: 'Fang einfach an',
		lead: 'Ich freue mich, von dir zu hören.',
		body: 'Schreib mir kurz, wer du bist, wie dein Englisch gerade steht und was du erreichen willst.',
		email: 'kym-elizabeth@gmx.de',
		phone: '0151 40462441',
		phoneHref: 'tel:+4915140462441',
	},
	footer: {
		tagline: 'Individueller Englischunterricht in Schwabmünchen',
		impressum: 'Impressum',
		datenschutz: 'Datenschutz',
		allVariants: 'Alle Varianten',
	},
};
