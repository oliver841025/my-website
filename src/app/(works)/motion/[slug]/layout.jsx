import Footer from '../../../../components/footer/Footer';
import BackHome from '../../../../components/back_home/BackHome';
import '../../../../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackHome filter={'/?filter=work'}/>
        <Footer />
      </body>
    </html>
  );
}
