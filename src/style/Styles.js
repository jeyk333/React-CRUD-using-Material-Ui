const Styles = {
  //Header Component
  appBar: {
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  logo: {
    marginTop: "5px"
  },

  //CreateData Component
  formWrapper: {
    width: "80%",
    margin: "30px auto"
  },
  button: {
    marginTop: 40
  },

  //ListCard Component
  card: {
    width: 400,
    margin: "20px auto",
    cursor: "pointer",
    transition: "box-shadow .3s",
    position: "relative",
    "&:hover": {
      boxShadow: "0 0 25px rgba(33,33,33,.2)"
    }
  },
  delete: {
    position: "absolute",
    right: 0,
    top: 0
  },
  edit: {
    position: "absolute",
    right: "40px",
    top: 0
  },
  body: {
    color: "rgba(0,0,0,0.6)"
  },
  details: {
    width: "80%",
    margin: "0 auto",
    marginTop: "10px"
  }
};

export default Styles;
