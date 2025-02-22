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
    setError('')
    setSuccess('')

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await account.updateRecovery(userId, secret, password);
      setSuccess("Password successfully reset! You can now go back to the app and login.");
      setTimeout(() => {
        const isMobile = /android|iphone|ipad/i.test(navigator.userAgent);
      
        if (isMobile) {
          // Use the Expo Go deep link
          // window.location.href = "exp://exp.host/@ms2techllc/community-app/login";
            window.location.href = "community://login"
          // Fallback: If the app isn't installed, try standalone deep link
          setTimeout(() => {
            window.location.href = "community://"; // Works for standalone apps only
          }, 3000);
        } else {
          // Fallback to web login for desktop users
          router.push("/login");
        }
      }, 1000);
      
      
      
    } catch (err) {
      setError(err.message);
    }
  };


  const openMobileApp = () => {
    window.location.href = "community://app/index"; // ✅ Opens the mobile app
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
