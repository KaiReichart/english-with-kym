// All page copy for variant 05d ("Letters from London") lives here so it can
// be compared against other sub-variants without digging through markup.

export type IconName = 'graduation' | 'briefcase' | 'chat' | 'pin' | 'clock' | 'calendar' | 'mail' | 'phone';

export interface OfferContent {
	icon: IconName;
	chapterPart: string;
	title: string;
	subtitle: string;
	imageAlt: string;
	intro: string[];
	leadIn: string;
	bullets: string[];
	outro: string[];
}

export interface InfoItemContent {
	icon: IconName;
	text: string;
}

export const copy = {
	meta: {
		description:
			'Englischunterricht in Schwabmünchen von einer gebürtigen Londonerin: Nachhilfe, Business English und Konversation – persönlich, eins zu eins, praxisnah.',
	},
	skipLink: 'Zum Inhalt springen',
	nav: {
		offer: 'Angebot',
		about: 'Meine Geschichte',
		lessons: 'Unterricht',
		contact: 'Kontakt',
	},
	hero: {
		brand: 'English with Kym',
		brandSub: 'Schwabmünchen',
		eyebrow: 'Ein Brief aus London',
		h1: 'Geboren in London. Seit über 30 Jahren in Schwabmünchen.',
		letter: ['Ich unterrichte Englisch in Schwabmünchen, meistens eins zu eins.', '15 Jahre privat, nach 35 Jahren mit Schulungen und Vorträgen davor.'],
		infoLine: 'Unterricht in Schwabmünchen, eins zu eins, unter der Woche ab 17 Uhr und samstags.',
		ctaPrimary: 'Schreib mir',
		ctaSecondary: 'Mein Angebot',
		imageAlt: 'Big Ben und die Houses of Parliament in London vor blauem Himmel',
		stampLabel: 'Luftpost',
		stampRoute: 'London – Schwabmünchen',
		postcardCaption: 'Grüße aus London',
		postmarkLabel: 'GB',
	},
	learn: {
		chapterNumber: '01',
		chapterLabel: 'Kapitel Eins',
		heading: 'Mehr als Grammatik',
		paragraphs: [
			'Grammatik und Vokabeln sind das Werkzeug. Das Ziel ist, dass du dich traust, den Mund aufzumachen.',
			'Seit über 35 Jahren stehe ich selbst vor Gruppen, mit Schulungen und Vorträgen auf Englisch. Ich weiß, wie es sich anfühlt, in einer fremden Sprache überzeugen zu müssen, und genau da setzt mein Unterricht an.',
			'Ich unterrichte so, wie ich selbst gern gelernt hätte: entspannt, praxisnah, persönlich.',
		],
	},
	conversation: {
		chapterNumber: '02',
		chapterLabel: 'Kapitel Zwei',
		icon: 'chat' as IconName,
		heading: 'Einfach ins Gespräch kommen',
		subtitle: 'Konversation im Einzelunterricht',
		imageAlt: 'Hände, Kaffeetassen und ein Gebäckstück auf einem Tisch bei einem entspannten Gespräch',
		paragraphs: [
			'Vielleicht verstehst du Englisch längst gut. Sobald es im Gespräch schnell wird, fehlen dir aber die Worte.',
			'Im Einzelunterricht reden wir über das, was dich wirklich interessiert: deinen Alltag, deine letzte Reise, deinen Job, dein Hobby, die Nachrichten von heute.',
			'Dabei feilen wir nebenbei an Wortschatz, Aussprache und Redefluss.',
		],
		closing: ['Mein Ziel für dich ist selbstbewusstes Englisch.', 'Perfekt muss es dabei nicht sein.'],
	},
	workAndSchool: {
		chapterNumber: '03',
		chapterLabel: 'Kapitel Drei',
		heading: 'Für Schule und Beruf',
		offers: [
			{
				icon: 'graduation',
				chapterPart: 'Teil eins',
				title: 'Englischnachhilfe',
				subtitle: 'Von der 5. Klasse bis zum Abitur',
				imageAlt: 'Ein Mädchen macht Hausaufgaben an einem Schreibtisch',
				intro: ['Steckst du bei einem Thema fest, oder soll die nächste Schulaufgabe einfach besser laufen?'],
				leadIn: 'Ich helfe dir bei:',
				bullets: [
					'Grammatik und Wortschatz',
					'Hausaufgaben und Schulaufgaben',
					'Lese- und Hörverständnis',
					'Schreiben',
					'Sprechen und Aussprache',
					'Vorbereitung auf Tests und Klassenarbeiten',
					'Abiturvorbereitung',
				],
				outro: ['Wir arbeiten in deinem Tempo, an dem, was gerade hakt.'],
			},
			{
				icon: 'briefcase',
				chapterPart: 'Teil zwei',
				title: 'Business English',
				subtitle: 'Englisch für den Berufsalltag',
				imageAlt: 'Zwei Frauen im Gespräch bei einem Meeting am Fenster',
				intro: ['Im Meeting auf Englisch, und die Worte wollen nicht kommen?'],
				leadIn: 'Wir üben die Situationen, die bei dir wirklich vorkommen:',
				bullets: [
					'Besprechungen und Präsentationen',
					'E-Mails und schriftliche Kommunikation',
					'Telefonate und Videoanrufe',
					'Wortschatz für den Berufsalltag',
					'Gespräche mit internationalen Kolleginnen und Kunden',
					'Vorstellungsgespräche',
					'allgemeine Kommunikation im Berufsalltag',
				],
				outro: ['Ich habe selbst über 35 Jahre lang auf Englisch geschult und vorgetragen – ich weiß, worauf es im Berufsalltag ankommt.'],
			},
		] as OfferContent[],
	},
	about: {
		chapterNumber: '04',
		chapterLabel: 'Kapitel Vier',
		heading: 'London, Schwabmünchen und alles dazwischen',
		lead: 'Englisch ist meine Muttersprache. Schwabmünchen ist seit über 30 Jahren mein Zuhause.',
		paragraphs: [
			'Ich bin in London geboren, wo man früh lernt, dass der Tee kalt wird, wenn man nicht aufpasst.',
			'Seit über 30 Jahren lebe ich in Deutschland. Seit mehr als 35 Jahren halte ich Schulungen und Vorträge auf Englisch, seit über 15 Jahren unterrichte ich privat.',
			'Am meisten freut es mich, wenn jemand merkt, dass es auch ohne perfekte Grammatik klappt: in der Schule, im Job oder einfach im Alltag.',
			'Mein Unterricht ist persönlich und eins zu eins.',
		],
		imageAlt: 'Eine rote Telefonzelle in London bei Nacht mit Lichtspuren vorbeifahrender Autos',
	},
	lessons: {
		chapterNumber: '05',
		chapterLabel: 'Kapitel Fünf',
		heading: 'Zeit und Ort',
		subheading: 'Eins zu eins, nach deinem Takt',
		items: [
			{ icon: 'pin', text: 'Schwabmünchen' },
			{ icon: 'clock', text: 'Unter der Woche ab 17 Uhr' },
			{ icon: 'calendar', text: 'Samstags' },
		] as InfoItemContent[],
		paragraphs: [
			'Der Unterricht findet in der Regel eins zu eins statt, damit wir uns ganz auf dich konzentrieren können.',
			'Ob Prüfungsvorbereitung, Berufsenglisch oder einfach mehr Sicherheit im Gespräch: wir richten den Unterricht nach dem, was dir am meisten hilft.',
		],
	},
	contact: {
		chapterNumber: '06',
		chapterLabel: 'Kapitel Sechs',
		heading: 'Schreib mir',
		lead: 'Ich freue mich, von dir zu lesen.',
		body: 'Erzähl mir kurz, wer du bist, wie dein Englisch gerade steht und was du erreichen willst, per E-Mail oder Telefon.',
		signOff: 'Bis bald, Kym',
		email: 'kym-elizabeth@gmx.de',
		phone: '0151 40462441',
	},
	footer: {
		tagline: 'Englischunterricht in Schwabmünchen',
		impressum: 'Impressum',
		datenschutz: 'Datenschutz',
		allVariants: 'Alle Varianten',
		rights: 'English with Kym',
	},
};
