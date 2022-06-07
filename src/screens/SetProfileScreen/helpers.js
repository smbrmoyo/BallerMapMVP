export const checkName = (name) => {
  if (name == "" || name.length > 15) return false;
  else return true;
};

export const checkUsername = (username) => {
  if (username == "" || username.length > 15) return false;
  else return true;
};

export const checkBio = (bio) => {
  if (bio.length > 30) return false;
  else return true;
};
