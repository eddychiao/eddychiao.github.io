import React, { useState } from "react";
import "./Bookshelf.css";
import { Theme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { books, Book } from "../const/bookdata";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface BookshelfProps {
	theme: Theme;
}

const olCoverUrl = (isbn: string) =>
	`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

// ── ShelfBook ─────────────────────────────────────────────────────────────────
interface ShelfBookProps {
	book: Book;
	theme: Theme;
}

const ShelfBook: React.FC<ShelfBookProps> = ({ book, theme }) => {
	// Start optimistic — show cover immediately; fall back if OL returns a
	// 1×1 placeholder GIF (naturalWidth === 1) or the request errors out.
	const [imgOk, setImgOk] = useState(!!book.isbn);

	const hasCover = !!book.isbn && imgOk;

	return (
		<div className="Bookshelf-book">
			{hasCover ? (
				<img
					src={olCoverUrl(book.isbn as string)}
					alt={book.title}
					className="Bookshelf-book-cover"
					onLoad={(e) => {
						if ((e.target as HTMLImageElement).naturalWidth <= 1)
							setImgOk(false);
					}}
					onError={() => setImgOk(false)}
				/>
			) : (
				<div
					className="Bookshelf-book-fallback"
					style={{
						backgroundColor: theme.buttonColor + "20",
						borderColor: theme.buttonColor + "40",
					}}
				/>
			)}
			<div className="Bookshelf-book-label">
				<span
					className="Bookshelf-book-label-title"
					style={{ color: theme.textColor }}>
					{book.title}
				</span>
				<span
					className="Bookshelf-book-label-author"
					style={{ color: theme.textColor }}>
					{book.author}
				</span>
			</div>
		</div>
	);
};

// ── Bookshelf page ────────────────────────────────────────────────────────────
const Bookshelf: React.FC<BookshelfProps> = ({ theme }) => {
	const navigate = useNavigate();

	const booksByYear: Record<string, Book[]> = {};
	for (const book of books) {
		if (!booksByYear[book.yearRead]) booksByYear[book.yearRead] = [];
		booksByYear[book.yearRead].push(book);
	}
	const years = Object.keys(booksByYear).sort((a, b) => Number(b) - Number(a));

	return (
		<div
			className="Bookshelf"
			style={{ backgroundColor: theme.backgroundColor }}>
			{/* ── Back ──────────────────────────────────────────────────── */}
			<button
				className="Bookshelf-back"
				style={{ color: theme.headerColor }}
				onClick={() => navigate("/projects")}>
				<ArrowBackRoundedIcon fontSize="small" />
				Projects
			</button>

			{/* ── Header ────────────────────────────────────────────────── */}
			<div className="Bookshelf-title" style={{ color: theme.headerColor }}>
				Bookshelf
			</div>
			<div
				className="Bookshelf-divider"
				style={{ backgroundColor: theme.buttonColor }}
			/>
			<div
				className="Bookshelf-description"
				style={{ color: theme.textColor }}></div>

			{/* ── Shelves ───────────────────────────────────────────────── */}
			<div className="Bookshelf-shelves">
				{years.map((year) => (
					<div key={year} className="Bookshelf-shelf">
						<div
							className="Bookshelf-shelf-year"
							style={{ color: theme.buttonColor }}>
							{year}
						</div>

						<div className="Bookshelf-shelf-unit">
							<div className="Bookshelf-shelf-books">
								{booksByYear[year].map((book) => (
									<ShelfBook key={book.id} book={book} theme={theme} />
								))}
							</div>
							<div
								className="Bookshelf-shelf-plank"
								style={{ backgroundColor: theme.buttonColor + "66" }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Bookshelf;
