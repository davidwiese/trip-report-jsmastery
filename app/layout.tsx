import "@styles/globals.css";

export const metadata = {
	title: "Trip Report",
	description: "Discover and share your favorite hikes, climbs, and more!",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
