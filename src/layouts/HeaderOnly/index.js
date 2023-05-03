import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}

export default DefaultLayout;
