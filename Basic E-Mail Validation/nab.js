function validateEmail(str) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str))
  {
    return (true);
  }
    return (false);
}