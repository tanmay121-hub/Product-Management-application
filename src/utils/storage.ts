export type StoredUser = {
  id: number;
  name: string;
  email: string;
  password: string; // plain text for demo only (not secure)
};

const USERS_KEY = "users";
const AUTH_KEY = "auth_user";

export const getUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? (data as StoredUser[]) : [];
  } catch {
    return [];
  }
};

export const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getAuthUser = (): Omit<StoredUser, "password"> | null => {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as Omit<StoredUser, "password">) : null;
  } catch {
    return null;
  }
};

export const setAuthUser = (user: Omit<StoredUser, "password">) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const clearAuthUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const signup = (name: string, email: string, password: string) => {
  const users = getUsers();
  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) throw new Error("Email already exists");

  const newUser: StoredUser = { id: Date.now(), name, email, password };
  saveUsers([...users, newUser]);

  // auto login after signup (optional)
  setAuthUser({ id: newUser.id, name: newUser.name, email: newUser.email });
  return newUser;
};

export const login = (email: string, password: string) => {
  const users = getUsers();
  const found = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!found) throw new Error("Invalid email or password");

  setAuthUser({ id: found.id, name: found.name, email: found.email });
  return found;
};

export const logout = () => {
  clearAuthUser();
};
