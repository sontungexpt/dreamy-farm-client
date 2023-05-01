import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}

export default DefaultLayout;
