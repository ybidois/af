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
    <Box py={[5, 6, 7, 8]} my={[5, 6, 7, 8]} mx={[7, 8, 9, 10]} bg="pink1">
      <div sx={{ variant: "text.countdown" }}>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>
            Le concours est fini !{" "}
            <span role="img" aria-label="kiss">
              😘
            </span>
          </span>
        )}
      </div>
    </Box>
  );
};

export default CountdownTimer;
