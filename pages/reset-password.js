import { useState } from "react";
import { useRouter } from "next/router";
import { account } from "../lib/appwrite";

export default function ResetPassword() {
  const router = useRouter();
  const { secret, userId } = router.query;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await account.updateRecovery(userId, secret, password);
      setSuccess("Password successfully reset! Redirecting...");
      setTimeout(() => {
        const isMobile = /android|iphone|ipad/i.test(navigator.userAgent);
      
        if (isMobile) {
          // Use the Expo development URL when testing in Expo Go
          window.location.href = "exp://exp.host/@your-username/your-app-name/login";
      
          // Fallback if the app isn't installed
          setTimeout(() => {
            window.location.href = "https://mysociety.com/download"; // Change to App Store or Play Store
          }, 3000);
        } else {
          // Web fallback
          router.push("/login");
        }
      }, 1000);
      
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reset Your Password</h2>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <form onSubmit={handleResetPassword} style={styles.form}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Reset Password</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "320px",
    gap: "10px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  success: {
    color: "green",
    fontSize: "14px",
    marginBottom: "10px",
  },
};
