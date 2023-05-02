import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
