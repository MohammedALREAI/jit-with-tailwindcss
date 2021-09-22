const Layout = ({ children, bgcolor }) => {
  return (
    <div className={`flex justify-center min-w-full max-w-full bg-${bgcolor}`}>
      <div className="">{children}</div>
      {/* <div className="bg-dark">{children}</div> */}
    </div>
  );
};

export default Layout;
