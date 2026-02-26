import React from "react";
function Profile() {
  return (
    <div style={styles.page}>
      <div
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 25px 50px rgba(0, 255, 255, 0.3), 0 0 20px rgba(255, 0, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 15px 35px rgba(0,0,0,0.2)";
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          style={styles.avatar}
        />
        <h1 style={styles.name}>Hilary Nyuyki</h1>
        <p style={styles.bio}>
          Futuristic web developer. I craft next-gen interfaces with React,  
          blending tech and design into immersive experiences.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#00ffff";
            e.target.style.color = "#1b1b2f";
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow =
              "0 0 20px #00ffff, 0 0 40px #ff00ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#3498db";
            e.target.style.color = "white";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
          onClick={() => alert("Engage Hyperdrive! 🚀")}
        >
          Connect With Me
        </button>
        <div style={styles.socials}>
          <span style={styles.socialIcon}>💻</span>
          <span style={styles.socialIcon}>🐦</span>
          <span style={styles.socialIcon}>📸</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
    fontFamily: "'Orbitron', sans-serif",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    borderRadius: "25px",
    padding: "50px",
    textAlign: "center",
    maxWidth: "400px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    border: "1px solid rgba(0, 255, 255, 0.2)",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "25px",
    border: "3px solid #00ffff",
    transition: "transform 0.3s",
  },
  name: {
    fontSize: "30px",
    color: "#00ffff",
    marginBottom: "15px",
    textShadow: "0 0 5px #00ffff, 0 0 10px #ff00ff",
  },
  bio: {
    fontSize: "16px",
    color: "#fff",
    marginBottom: "25px",
    lineHeight: "1.5",
    textShadow: "0 0 5px rgba(255,255,255,0.2)",
  },
  button: {
    padding: "14px 35px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  socials: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    fontSize: "24px",
    color: "#00ffff",
    textShadow: "0 0 5px #00ffff, 0 0 10px #ff00ff",
  },
  socialIcon: {
    cursor: "pointer",
    transition: "transform 0.2s",
  },
};

export default Profile;