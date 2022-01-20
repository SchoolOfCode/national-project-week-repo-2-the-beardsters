function Darkmode() {
  return (
    <div className="switch-container">
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">
        <i className="fa fa-moon"></i>
        <i className="fa fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
}

export default Darkmode;
