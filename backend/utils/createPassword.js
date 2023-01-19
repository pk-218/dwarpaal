import crypto from "crypto";

const generatePassword = () => {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

function generateToken() {
  const value = crypto.randomBytes(32).toString("hex");
  const hash = crypto.createHash("sha256");

  hash.update(value);
  const token = hash.digest("hex");

  return token;
}

export { generatePassword, generateToken };
