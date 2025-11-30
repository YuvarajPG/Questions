import "../styles/global.css";
import "../styles/SVG.css";
import Header from '../components/header'
import Footer from "../components/footer";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="ribbon-svgrepo-com.svg" type="image/x-icon" />
        {/* <link rel="shortcut icon" href="heart.svg" type="image/x-icon" /> */}
        <title>My Website</title>
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
