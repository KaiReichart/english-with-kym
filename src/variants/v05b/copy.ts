// All copy for variant 05b ("Next Stop: Abitur") lives here, typed, so it can
// be compared against the other sub-variants without digging through markup.

export type IconName = 'graduation' | 'briefcase' | 'chat' | 'pin' | 'clock' | 'calendar' | 'mail' | 'phone';

export interface Station {
	label: string;
	focus: string;
	terminus?: boolean;
}

export interface LineCard {
	number: string;
	accent: 'navy' | 'red';
	icon: IconName;
	title: string;
	subtitle: string;
	imageAlt: string;
	intro: string[];
	leadIn?: string;
	bullets?: string[];
	outro: string[];
}

export interface InfoItem {
	icon: IconName;
	text: string;
}

export const copy = {
	meta: {
		title: 'Variante 05b · English with Kym',
		description:
			'Englisch-Nachhilfe von der 5. Klasse bis zum Abitur, Business English und Konversation: individueller Unterricht in Schwabmünchen bei English with Kym.',
	},
	skipLink: 'Zum Inhalt springen',
	nav: {
		offer: 'Angebot',
		about: 'Über Kym',
		lessons: 'Unterricht',
		contact: 'Kontakt',
	},
	header: {
		brand: 'English with Kym',
		brandTag: 'Schwabmünchen',
	},
	hero: {
		badge: 'Englisch-Nachhilfe · Schwabmünchen',
		heading: 'Nächster Halt: Abitur.',
		tagline: '5. Klasse bis Abitur · Business English · Konversation',
		intro:
			'Du willst in Englisch wieder mitkommen oder richtig gut werden? Ich begleite dich von der nächsten Vokabelarbeit bis zur Abiturprüfung, Station für Station und in deinem Tempo.',
		infoLine: 'Einzelunterricht in Schwabmünchen · unter der Woche ab 17 Uhr und samstags',
		parentNote: {
			label: 'Für Eltern',
			text: 'Ihr Kind lernt einzeln und in seinem Tempo, ohne Druck, mit einem klaren Ziel vor Augen: mehr Sicherheit in der Schule.',
		},
		ctaPrimary: 'Schreib mir',
		ctaSecondary: 'Linie ansehen',
		imageAlt: 'Big Ben in London mit einer Statue im Vordergrund vor blauem Himmel',
	},
	line: {
		eyebrow: 'Englisch-Nachhilfe',
		heading: 'Deine Linie zum Abitur',
		lead: 'Fünf Jahre Schule, eine Linie, ein Ziel. So kannst du sie dir vorstellen:',
		stations: [
			{ label: '5./6. Klasse', focus: 'Grammatik und Wortschatz von Anfang an sauber aufbauen.' },
			{ label: '7.–9. Klasse', focus: 'Schulaufgaben, Lese- und Hörverständnis sicher im Griff.' },
			{ label: '10. Klasse', focus: 'Schreiben und Sprechen für die Klassenarbeiten trainieren.' },
			{ label: 'Oberstufe', focus: 'Ausdruck und Aussprache auf ein neues Niveau heben.' },
			{ label: 'Abitur', focus: 'Gezielt und ruhig auf die Prüfung vorbereiten.', terminus: true },
		] satisfies Station[],
		leadIn: 'Ganz gleich, an welcher Station du gerade stehst, wir arbeiten konkret an diesen Themen:',
		bullets: [
			'Grammatik und Wortschatz',
			'Hausaufgaben und Schulaufgaben',
			'Lese- und Hörverständnis',
			'Schreiben und Textgestaltung',
			'Sprechen und Aussprache',
			'Vorbereitung auf Tests und Klassenarbeiten',
			'Abiturvorbereitung',
		],
		outro:
			'Ob eine einzelne Fünf ausgebügelt werden soll oder das große Ziel Abitur im Blick ist: Wir arbeiten in deinem Tempo, Station für Station.',
		imageAlt: 'Ein Mädchen macht Hausaufgaben an einem Schreibtisch',
	},
	otherLines: {
		eyebrow: 'Auch für Erwachsene',
		heading: 'Zwei weitere Linien',
		intro: 'Englisch hört nicht mit dem Abitur auf. Für den Beruf und für den Alltag fahren zwei weitere Linien.',
		cards: [
			{
				number: '02',
				accent: 'red',
				icon: 'briefcase',
				title: 'Business English',
				subtitle: 'Englisch für den Beruf',
				imageAlt: 'Zwei Frauen im Gespräch bei einem Meeting am Fenster',
				intro: ['Englisch im Job gebraucht, aber die richtigen Worte fehlen manchmal?'],
				leadIn: 'Mein Unterricht orientiert sich an echten Situationen aus dem Arbeitsalltag, zum Beispiel:',
				bullets: [
					'Besprechungen und Präsentationen',
					'E-Mails und schriftliche Kommunikation',
					'Telefonate und Videokonferenzen',
					'Wortschatz für den Berufsalltag',
					'Gespräche mit internationalen Kolleginnen, Kollegen und Kunden',
					'Vorstellungsgespräche auf Englisch',
					'Allgemeine Kommunikation im Berufsleben',
				],
				outro: [
					'Durch meine langjährige Erfahrung mit Schulungen und Vorträgen auf Englisch weiß ich, worauf es im Berufsalltag ankommt.',
				],
			},
			{
				number: '03',
				accent: 'navy',
				icon: 'chat',
				title: 'Englisch-Konversation',
				subtitle: 'Eins-zu-eins, zum freien Sprechen',
				imageAlt: 'Hände, Kaffeetassen und ein Gebäckstück auf einem Tisch bei einem entspannten Gespräch',
				intro: [
					'Du verstehst schon viel, sprichst aber selten frei Englisch?',
					'Im Einzelunterricht übst du in einer entspannten Atmosphäre, ohne Bewertung, ohne Druck.',
				],
				outro: [
					'Wir sprechen über Alltag, Reisen, Beruf, Hobbys oder aktuelle Themen: was dich interessiert. Dabei wachsen Wortschatz, Aussprache und Redefluss ganz nebenbei.',
					'Das Ziel ist nicht perfektes Englisch, sondern selbstbewusstes Englisch.',
				],
			},
		] satisfies LineCard[],
	},
	about: {
		eyebrow: 'Hintergrund',
		heading: 'Über Kym',
		lead: 'Englisch ist meine Muttersprache. Menschen Mut zum Sprechen zu machen, ist meine Erfahrung.',
		paragraphs: [
			'Ich bin in London geboren und lebe seit über 30 Jahren in Deutschland.',
			'Seit mehr als 35 Jahren halte ich Schulungen und Vorträge auf Englisch, seit über 15 Jahren unterrichte ich privat: von der ersten Vokabelarbeit bis zum Abitur, vom ersten Meeting auf Englisch bis zum entspannten Alltagsgespräch.',
			'Am meisten freut es mich, wenn aus „Ich kann kein Englisch" ein „Das schaffe ich" wird.',
		],
		imageAlt: 'Eine rote Telefonzelle in London bei Nacht mit Lichtspuren vorbeifahrender Autos',
	},
	lessons: {
		eyebrow: 'Organisatorisches',
		heading: 'So läuft der Unterricht',
		subheading: 'Einzelunterricht, individuell abgestimmt',
		items: [
			{ icon: 'pin', text: 'Schwabmünchen' },
			{ icon: 'clock', text: 'Unter der Woche ab 17:00 Uhr' },
			{ icon: 'calendar', text: 'Samstags' },
		] satisfies InfoItem[],
		paragraphs: [
			'Der Unterricht findet in der Regel einzeln statt, ganz auf die jeweiligen Ziele abgestimmt, entspannt, praxisnah und persönlich.',
			'Ob Vorbereitung auf die nächste Arbeit, auf das Abitur, auf den Berufsalltag oder einfach mehr Sicherheit im Sprechen: Der Unterricht richtet sich nach dem, was am meisten weiterhilft.',
		],
	},
	contact: {
		eyebrow: 'Kontakt',
		heading: 'Bereit für die nächste Station?',
		lead: 'Ich freue mich, von dir zu hören.',
		body: 'Schreib mir kurz, wer du bist, wo du gerade stehst und was du erreichen möchtest. Den Rest besprechen wir persönlich.',
		email: 'kym-elizabeth@gmx.de',
		phone: '0151 40462441',
		phoneHref: 'tel:+4915140462441',
	},
	footer: {
		tagline: 'Individueller Englischunterricht in Schwabmünchen',
		impressum: 'Impressum',
		datenschutz: 'Datenschutz',
		rights: 'English with Kym',
		allVariants: 'Alle Varianten',
	},
};
