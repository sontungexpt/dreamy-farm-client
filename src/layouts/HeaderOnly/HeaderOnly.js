import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}

export default HeaderOnly;
