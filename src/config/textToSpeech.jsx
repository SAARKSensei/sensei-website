import { cache } from "react";
import axios from "axios";
export const getTextToAudio = cache(async (text) => {
  const headers = {
    Authorization:
      "Bearer WW3c4VfPcQOsVPNcJe6sdp1kJ8YCD6nTUAHknECEIVZcm5z6HvPmF2",
  };
  const data = {
    Text: text, // Up to 500,000 characters
    VoiceId: "Scarlett", // Dan, Will, Scarlett, Liv, Amy
    Bitrate: "192k", // 320k, 256k, 192k, ...
    Speed: "-0.12", // -1.0 to 1.0
    Pitch: "0.89", // -0.5 to 1.5
    TimestampType: "word", // word or sentence
    //'CallbackUrl': '<URL>', // pinged when ready
  };
  try {
    const synthesisResponse = await axios({
      method: "post",
      url: "https://api.v7.unrealspeech.com/synthesisTasks",
      headers: headers,
      data: data,
    });

    // console.log(synthesisResponse.data);
    const audioUri = synthesisResponse.data.SynthesisTask.OutputUri;

    const timestampsResponse = await axios({
      method: "get",
      url: synthesisResponse.data.SynthesisTask.TimestampsUri,
    });

    console.log(timestampsResponse.data);

    return {
      audio: audioUri,
      timestamps: timestampsResponse.data,
    };
  } catch (error) {
    console.error("Error fetching audio and timestamps:", error);
  }
});
