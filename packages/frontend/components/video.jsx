import { useEffect, useRef } from "react";

export default function Video({ peer, userName }) {
  const vRef = useRef();
  useEffect(async () => {
    if (vRef.current) {
     vRef.current.src = URL.createObjectURL(peer.stream)
     await vRef.current.play();
    }
  }, [peer]);
  return peer && peer.stream ? (
    <article
      className="w-full h-full bg-black rounded-lg shadow-md remote-video"
      data-username={userName}
    >
      <video
        className="w-full h-full bg-black rounded-lg shadow-md"
        playsInline
        src={vRef.current.src}
        controls
      ></video>
    </article>
  ) : null;
}
