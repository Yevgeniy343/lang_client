// user

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const addTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token;
};

// admin

export const addAdminToLocalStorage = (admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("admin");
};

export const getAdminFromLocalStorage = () => {
  const result = localStorage.getItem("admin");
  const admin = result ? JSON.parse(result) : null;
  return admin;
};

// jujry

export const addJuryToLocalStorage = (jury) => {
  localStorage.setItem("jury", JSON.stringify(jury));
};

export const removeJuryFromLocalStorage = () => {
  localStorage.removeItem("jury");
};

export const getJuryFromLocalStorage = () => {
  const result = localStorage.getItem("jury");
  const jury = result ? JSON.parse(result) : null;
  return jury;
};

export const addTokenJuryToLocalStorage = (tokenJ) => {
  localStorage.setItem("tokenJ", tokenJ);
};

export const removeTokenJuryFromLocalStorage = () => {
  localStorage.removeItem("tokenJ");
};

export const getTokenJuryFromLocalStorage = () => {
  const tokenJ = localStorage.getItem("tokenJ");
  return tokenJ;
};
