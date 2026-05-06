export interface Book {
	id: string;
	title: string;
	author: string;
	isbn?: string;
	yearRead: string;
	description?: string;
	rating?: number;
}

// Replace / add books here — covers are pulled from Open Library using the ISBN
export const books: Book[] = [
	// ── 2026 ──────────────────────────────────────────────────────────────────
	{
		id: "east-of-eden",
		title: "East of Eden",
		author: "John Steinbeck",
		isbn: "9780142004234",
		yearRead: "2026",
	},
	{
		id: "abundance",
		title: "Abundance",
		author: "Ezra Klein",
		isbn: "9781668023488",
		yearRead: "2026",
	},
	{
		id: "1984",
		title: "1984",
		author: "George Orwell",
		isbn: "9780358375401",
		yearRead: "2026",
	},
	{
		id: "the-anthropocene-reviewed",
		title: "The Anthropocene Reviewed",
		author: "John Green",
		isbn: "9780525555216",
		yearRead: "2026",
	},
	{
		id: "how-to-hide-empire",
		title: "How to Hide an Empire",
		author: "David Immerwahr",
		isbn: "9781250251091",
		yearRead: "2026",
	},
	{
		id: "art-and-fear",
		title: "Art & Fear",
		author: "David Bayles & Ted Orland",
		isbn: "9780961454739",
		yearRead: "2026",
	},
	{
		id: "never-let-me-go",
		title: "Never Let Me Go",
		author: "Kazuo Ishiguro",
		isbn: "9781400078776",
		yearRead: "2026",
	},
	{
		id: "culture-care",
		title: "Culture Care",
		author: "Makoto Fujimora",
		isbn: "9780830845033",
		yearRead: "2026",
	},

	// ── 2025 ──────────────────────────────────────────────────────────────────
	{
		id: "james-a-novel",
		title: "James: A Novel",
		author: "Percival Everett",
		isbn: "9780385550369",
		yearRead: "2025",
	},
	{
		id: "a-promised-land",
		title: "A Promised Land",
		author: "Barack Obama",
		isbn: "9781524763169",
		yearRead: "2025",
	},
	{
		id: "pachinko",
		title: "Pachinko",
		author: "Min Jin Lee",
		isbn: "9788383822723",
		yearRead: "2025",
	},
	{
		id: "crying-in-hmart",
		title: "Crying in H Mart",
		author: "Michelle Zauner",
		isbn: "9781984898951",
		yearRead: "2025",
	},
	{
		id: "stay-true",
		title: "Stay True",
		author: "Hua Hsu",
		isbn: "9780385547772",
		yearRead: "2025",
	},
	{
		id: "strangers-in-the-land",
		title: "Strangers in the Land",
		author: "Michael Luo",
		isbn: "9780385548571",
		yearRead: "2025",
	},
	{
		id: "brave-new-world",
		title: "Brave New World",
		author: "Aldous Huxley",
		isbn: "9780060850524",
		yearRead: "2025",
	},
	{
		id: "three-body-problem",
		title: "The Three Body Problem",
		author: "Cixin Liu",
		isbn: "9780765382030",
		yearRead: "2025",
	},
	{
		id: "life-together",
		title: "Life Together",
		author: "Dietrich Bonhoeffer",
		isbn: "9780060608521",
		yearRead: "2025",
	},
	{
		id: "beyond-good-and-evil",
		title: "Beyond Good and Evil",
		author: "Friedrich Nietzsche",
		isbn: "9780679724650",
		yearRead: "2025",
	},
];
