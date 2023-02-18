import { HStack, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import timerIcon from "..//assets/svg/timerIconTop.svg";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <HStack
      color={"white"}
      fontWeight={"bold"}
      fontSize={[18, 40]}
      bg={"transparent"}
      border={["1px solid white", "2px solid white"]}
      w={[100, 190]}
      px={3}
      borderRadius={"full"}
      justifyContent={"space-evenly"}
      h={"4vh"}
    >
      <Img w={["18px", "35px"]} src={timerIcon} />
      <Text pt={["2px"]}>
        {isRunning
          ? `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
          : "0:00"}
      </Text>
    </HStack>
  );
};

export default Timer;
