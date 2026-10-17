export type IconName =
	| 'graduation'
	| 'briefcase'
	| 'chat'
	| 'pin'
	| 'clock'
	| 'calendar'
	| 'mail'
	| 'phone';

export interface OfferCardContent {
	icon: IconName;
	title: string;
	subtitle: string;
	intro: string[];
	leadIn?: string;
	bullets?: string[];
	outro: string[];
}

export interface InfoItemContent {
	icon: IconName;
	text: string;
}

export interface SiteContent {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		offer: string;
		about: string;
		lessons: string;
		contact: string;
	};
	switchLabel: string;
	skipLink: string;
	hero: {
		brand: string;
		subtitle: string;
		tagline: string;
		intro: string;
		infoLine: string;
		cta: string;
	};
	learn: {
		heading: string;
		paragraphs: string[];
	};
	offerHeading: string;
	offers: OfferCardContent[];
	about: {
		heading: string;
		lead: string;
		paragraphs: string[];
	};
	lessons: {
		heading: string;
		subheading: string;
		items: InfoItemContent[];
		paragraphs: string[];
	};
	contact: {
		heading: string;
		lead: string;
		body: string;
		brand: string;
		tagline: string;
		cta: string;
	};
	footer: {
		tagline: string;
		impressum: string;
		datenschutz: string;
		rights: string;
	};
}
