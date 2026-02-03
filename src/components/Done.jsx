import React, { useMemo } from "react";
import "./Done.css";

const Done = () => {
  const emojiSet = useMemo(() => ["💖", "✨", "🥰", "💌", "🌙", "💫", "🌸", "⭐", "💕", "🪐"], []);

  const emojis = useMemo(() => {
    const count = 26;
    return Array.from({ length: count }, (_, i) => ({
      id: `${i}-${Math.random().toString(16).slice(2)}`,
      emoji: emojiSet[Math.floor(Math.random() * emojiSet.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 18 + 14,
      driftX: Math.random() * 70 - 35,
      driftY: Math.random() * 60 - 30,
      dur: Math.random() * 7 + 6,
      delay: Math.random() * 3,
      rot: Math.random() * 20 - 10,
      opacity: Math.random() * 0.35 + 0.55,
    }));
  }, [emojiSet]);

  return (
    <div className="done-container">
      <div className="done-emoji-layer" aria-hidden="true">
        {emojis.map((e) => (
          <span
            key={e.id}
            className="done-emoji"
            style={{
              top: `${e.top}vh`,
              left: `${e.left}vw`,
              fontSize: `${e.size}px`,
              opacity: e.opacity,
              "--dx": `${e.driftX}px`,
              "--dy": `${e.driftY}px`,
              "--dur": `${e.dur}s`,
              "--delay": `${e.delay}s`,
              "--rot": `${e.rot}deg`,
            }}
          >
            {e.emoji}
          </span>
        ))}
      </div>

      <div className="done-card">
        <h1>Message Delivered 🌸</h1>
        <p>
          I just sent you a little message.
          <br />
          Please <span className="done-highlight">check your email</span> for the next response.
        </p>

        <p className="done-sub">
          If you don’t see it, check your <b>Spam/Promotions</b> folder too.
        </p>
      </div>
    </div>
  );
};

export default Done;