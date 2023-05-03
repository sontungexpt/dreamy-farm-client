import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

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
