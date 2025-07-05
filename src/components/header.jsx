let styles = {
  header: {
    backgroundColor: "#03a9fa",
  },
  logo: {
    color: "fff",
    fontFamily: "Antonio, sans-serif",
    textAlign: "center",
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>LOGO</div>
      <input />
    </header>
  );
};

export default Header;
