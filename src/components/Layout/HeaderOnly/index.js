import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
