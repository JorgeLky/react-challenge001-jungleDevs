const validationEmail = (email) => {
  const validation = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
  return(validation.test(email))
}

export default validationEmail;