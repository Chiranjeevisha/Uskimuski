import React, { useState, useEffect } from "react";
import "./custom.css";
import playButton from "../assets/svg/playButton.svg";
import pauseButton from "../assets/svg/pause-buttonPink.svg";
// import parrotSound from "../assets/audio/ParrotNoise.mp3";
import { Box, Img } from "@chakra-ui/react";
import { Howl } from "howler";

function MusicComponent(props) {
  // const { play, setPlay } = props;
  // const [music] = useState(new Audio(parrotSound));
  const { music } = props;
  const [wave, setWave] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const audio = new Howl({
    src: music,
  });
  audio.on("end", function () {
    setIsPlaying(true);
    setWave(wave);
    audio.pause();
    console.log("paused");
  });
  // useEffect(() => {
  //   audioMusic();
  // }, [play]);

  // useEffect(() => {
  //   if (props.index !== 3) {
  //     music.pause();
  //     setPlay(false);
  //     setWave(false);
  //   }
  // }, [props.index]);

  function audioMusic() {
    if (isPlaying) {
      setIsPlaying(false);
      console.log("playing");
      audio.play();
    } else {
      setIsPlaying(true);
      audio.pause();
      console.log("paused");
    }
  }

  return (
    <div my={3}>
      <Box
        h={[9, 14]}
        w={[215, 400]}
        position={"absolute"}
        bottom={["-20%", "-14%"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"2px solid #F77783"}
        borderRadius={50}
        overflow={"hidden"}
        bgColor={"white"}

        //  className="row border border-danger rounded-5 overflow-hidden bg-light h-100"
      >
        <Box
          display={"flex"}
          h={[10, 16]}
          //  className="col-2 d-flex justify-content-center playIconSize"
        >
          <Img
            mt={[2, 2.5]}
            h={["25px", "45px"]}
            w={["25px", "45px"]}
            onClick={() => {
              // setPlay(!play);
              setWave(!wave);
              audioMusic();
            }}
            src={isPlaying ? playButton : pauseButton}
            alt="play"
          />
        </Box>
        <Box
        // className="col-10 px-5"
        // px={1}
        >
          <Box className="loading" display={"flex"} alignItems={"center"}>
            <Box
              borderRadius={80}
              bg={"white"}
              className={`rectangle_1 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              borderRadius={80}
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              className={`rectangle_2 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              borderRadius={80}
              h={[4, 6]}
              className={`rectangle_3 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              borderRadius={80}
              h={[6, 8]}
              className={`rectangle_4 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              borderRadius={80}
              h={[4, 6]}
              className={`rectangle_5 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              borderRadius={80}
              h={[2, 4]}
              className={`rectangle_6 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_7 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_8 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[7, 9]}
              borderRadius={80}
              className={`rectangle_9 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_10 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_1 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_2 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_3 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_4 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_5 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_6 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_7 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_8 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[7, 9]}
              borderRadius={80}
              className={`rectangle_9 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_10 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              borderRadius={80}
              h={[4, 6]}
              className={`rectangle_1 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_2 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_3 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_4 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_5 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_6 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_7 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_8 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_9 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_10 ${wave ? "tryCheck" : "tryCheck2"}  `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[7, 9]}
              borderRadius={80}
              className={`rectangle_1 ${wave ? "tryCheck" : "tryCheck2"}  h-25`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_2 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_3 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_4 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_5 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_6 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[7, 9]}
              borderRadius={80}
              className={`rectangle_7 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[6, 8]}
              borderRadius={80}
              className={`rectangle_8 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[4, 6]}
              borderRadius={80}
              className={`rectangle_9 ${wave ? "tryCheck" : "tryCheck2"} `}
            ></Box>
            <Box
              w={[0.5, 1]}
              mx={[1.1, 0.5]}
              h={[2, 4]}
              borderRadius={80}
              className={`rectangle_10 me-2 ${wave ? "tryCheck" : "tryCheck2"}`}
            ></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MusicComponent;
