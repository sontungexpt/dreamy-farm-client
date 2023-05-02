import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
