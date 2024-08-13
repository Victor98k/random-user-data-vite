import { useState, useEffect } from "react";
import axios from "axios";

// Task 2: Fetch Random User Data
// Write a React component that fetches random user data from the Random User Generator
// API. Use React's useState and useEffect hooks to manage component state and handle the
// API request.

// Display at least the user's name,
// email, phone number, and profile picture.

// Im testing the API with postman to see what data attributes i need in my interface.
// Based of the instructions for the test.

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    country: string;
  };
}

const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      //   throw new Error("try error");
      const response = await axios.get("https://randomuser.me/api/");
      // console.log(response.data);
      setUser(response.data.results[0]);
    } catch (err) {
      setError("Failed to get user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error, fetchUser };
};

export default useRandomUser;
