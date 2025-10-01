import { userCredentials } from "../constants/credentials";

// Isso e apenas para efeitos de demonstração. Em um app real,
// nunca armazene credenciais no frontend.
export const validateCredentials = async (user, password) => {
  const hashedPassword = await hashPassword(password);
  return (
    user === userCredentials.user &&
    hashedPassword === userCredentials.hashedPassword
  );
};

// Function to hash a password using the Web Cryptography API
async function hashPassword(password) {
  // Convert the password string to a byte array
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // Use the subtle crypto API to digest the data with SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash buffer to a hexadecimal string for storage
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}
