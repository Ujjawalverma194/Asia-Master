import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          margin: 0,
          color: "#263b96",
          fontWeight: "800",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "32px",
          marginBottom: "15px",
          color: "#111",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "#666",
          maxWidth: "500px",
          marginBottom: "30px",
        }}
      >
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          background: "#ffc400",
          color: "#111",
          textDecoration: "none",
          padding: "14px 28px",
          borderRadius: "30px",
          fontWeight: "700",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
