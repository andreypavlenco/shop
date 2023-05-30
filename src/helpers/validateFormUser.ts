interface validateType {
  username: string;
  email: string;
  phone: string;
  address: string;
}

export const validateFormUser = (data: validateType): boolean => {
  const { username, email, phone, address } = data;

  if (!username) {
    alert('Error write Name ');
    return false;
  }
  if (!email) {
    alert('Error write Email ');
    return false;
  }
  if (!phone) {
    alert('Error write Phone');
    return false;
  }

  if (!address) {
    alert('Error write Address');
    return false;
  }
  return true;
};
