import { useEffect, useRef } from "react";
import Phaser from "phaser";

export default function PhaserGame({ config }) {
  const gameRef = useRef(null);
  const phaserInstance = useRef(null);

  useEffect(() => {
    if (!phaserInstance.current) {
      phaserInstance.current = new Phaser.Game({
        ...config,
        parent: gameRef.current,
      });
    }
    return () => {
      if (phaserInstance.current) {
        phaserInstance.current.destroy(true);
        phaserInstance.current = null;
      }
    };
  }, [config]);

  return <div ref={gameRef} style={{ width: "100%", height: "100%" }} />;
}
