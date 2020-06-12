/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Box } from "theme-ui";
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2021-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        my: [5],
      }}
    >
      <div
        sx={{
          variant: "text.countdown",
          textAlign: "center",
          backgroundColor: "pink1",
          maxWidth: ["80%"],
          padding: [6],
        }}
      >
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>
            Le concours est fini !
            <span role="img" aria-label="kiss">
              😘
            </span>
          </span>
        )}
      </div>
      <div sx={{ variant: "styles.h4", textAlign: "center" }}>
        avant le lancement officiel
      </div>
    </div>
  );
};

export default CountdownTimer;
