import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("introPlayed", "true");

      navigate("/community-standard-69872655134");
    }, 5000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "100%" }}
      >
        <source src="/Mate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Intro;
