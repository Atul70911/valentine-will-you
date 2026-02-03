import React, { useMemo, useState } from "react";
import "./Propose.css";
import emailjs from "@emailjs/browser";

const Propose = ({ setPage, email }) => {
  const [noPosition, setNoPosition] = useState({ top: 64, left: 65 });
  const [yesScale, setYesScale] = useState(1);
  const [sending, setSending] = useState(false);

  // No starts beside Yes, becomes "floating" after first click
  const [noMoved, setNoMoved] = useState(false);

  const emojiSet = useMemo(
    () => ["💖", "✨", "🌙", "💫", "❤️", "🌸", "💕", "⭐", "🪐", "🥰"],
    []
  );

  const emojis = useMemo(() => {
    const count = 22;
    return Array.from({ length: count }, (_, i) => ({
      id: `${i}-${Math.random().toString(16).slice(2)}`,
      emoji: emojiSet[Math.floor(Math.random() * emojiSet.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 18 + 14,
      driftX: Math.random() * 60 - 30,
      dur: Math.random() * 6 + 6,
      delay: Math.random() * 2.5,
      rot: Math.random() * 18 - 9,
    }));
  }, [emojiSet]);

  const handleNoClick = () => {
    setNoMoved(true);

    // keep your existing style of logic
    setNoPosition({
      top: Math.random() * 55 + 15,
      left: Math.random() * 55 + 15,
    });

    setYesScale((prev) => prev + 0.3);
  };

  const handleYesClick = async () => {
    if (sending) return;
    if (!email) return alert("Email missing. Go back and enter email.");

    setSending(true);
    try {
      const templateParams = {
        email: email,
        to_name: "Bimbo",
        from_name: "Gola",
        message: "Yay! You said YES 💖",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      console.log("EmailJS success:", result);

      alert("Email sent! 😍❤️");
      setPage("Done"); // only after success
    } catch (err) {
      console.error("EmailJS error:", err);
      alert(err?.text || err?.message || "Failed to send email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="propose-container">
      <div className="emoji-layer" aria-hidden="true">
        {emojis.map((e) => (
          <span
            key={e.id}
            className="floating-emoji"
            style={{
              top: `${e.top}vh`,
              left: `${e.left}vw`,
              fontSize: `${e.size}px`,
              "--driftX": `${e.driftX}px`,
              "--dur": `${e.dur}s`,
              "--delay": `${e.delay}s`,
              "--rot": `${e.rot}deg`,
            }}
          >
            {e.emoji}
          </span>
        ))}
      </div>

      <div className="propose-card">
        <h1>Will you be My Valentine?</h1>

        <div className="btn-row">
          <button
            className="yes-btn"
            style={{ "--yes-scale": yesScale }}
            disabled={sending}
            onClick={handleYesClick}
          >
            {sending ? "Sending..." : "Yes ❤️"}
          </button>

          <button
            className="no-btn"
            onClick={handleNoClick}
            style={
              noMoved
                ? {
                    position: "fixed",
                    top: `${noPosition.top}vh`,
                    left: `${noPosition.left}vw`,
                    transform: "translate(-50%, -50%)",
                  }
                : undefined
            }
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default Propose;         