import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
	title: "Trip Report",
	description: "Discover and share your favorite hikes, climbs, and more!",
};

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<main className="app">
					<Nav />
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
