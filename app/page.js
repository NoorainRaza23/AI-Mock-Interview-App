import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <Link href="/dashboard" className='font-bold text-xl bg-purple-700 text-white px-2 -skew-x-12 font-mono' style={styles.topLink}>
        AI Interview
      </Link>
      <h1 style={styles.heading}>AI Mock Interview App</h1>
      <p style={styles.description}>
        Welcome to our AI-powered Mock Interview platform. Prepare for your
        dream job with confidence.
      </p>
      <Link href="/dashboard">
        <Button style={styles.button}>Get Started</Button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  topLink: {
    marginBottom: "200px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
};
