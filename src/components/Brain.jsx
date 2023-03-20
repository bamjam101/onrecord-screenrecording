import { useReactMediaRecorder } from "react-media-recorder";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";

const appId = "101";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function Brain() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });
  console.log(mediaBlobUrl);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        Your browser does not support speech recognition. Transcribing process
        failed abruptly.
      </span>
    );
  }

  function saveFile(mediaBlobUrl) {
    let filename = window.prompt("Enter file name"),
      downloadLink = document.createElement("a");
    downloadLink.href = mediaBlobUrl;
    downloadLink.download = `${filename}.mp4`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(mediaBlobUrl); // clear from memory
    document.body.removeChild(downloadLink);
  }
  useEffect(() => {
    if (mediaBlobUrl) {
      saveFile(mediaBlobUrl);
    }
  }, [mediaBlobUrl]);
  return (
    <div className="">
      <section>
        <p>{status}</p>
        <button type="button" onClick={startRecording}>
          Start Recording
        </button>
        <button type="button" onClick={stopRecording}>
          Stop
        </button>
        <video src={mediaBlobUrl} autoPlay loop controls></video>
      </section>
      <section>
        <div
          className={`w-3 h-3 rounded-full ${
            listening ? "bg-lime-500" : "bg-red-500"
          }`}
        ></div>
        <button type="button" onClick={startListening}>
          Start Listening
        </button>
        <button type="button" onClick={SpeechRecognition.stopListening}>
          Stop
        </button>
        <button type="button" onClick={resetTranscript}>
          Reset
        </button>
        <p>{transcript}</p>
      </section>
    </div>
  );
}

export default Brain;
