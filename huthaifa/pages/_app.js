import "../styles/globals.css";
import MainLayout from "components/mainLayout/MainLayout";

function MyApp({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}

export default MyApp;
