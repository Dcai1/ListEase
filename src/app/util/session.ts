import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique user ID for anonymous users.
 * This ID is stored in localStorage and is used to track user sessions.
 *
 * @returns {string} A unique user ID or an empty string if localStorage is unavailable.
 */
export function getAnonymousUserId(): string {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    const storage = localStorage;
    let userId = storage.getItem("anonUserId");
    // Generate a new UUID for the user
    if (!userId) {
      userId = uuidv4();
      storage.setItem("anonUserId", userId);
    }

    return userId;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "";
  }
}
