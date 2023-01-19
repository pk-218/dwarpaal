import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export const QRCode = ({ path }) => {
  const [qr, setQr] = useState("");

  useEffect(async () => {
    const dynamicQr = await import(path);
    setQr(dynamicQr.default);
  }, []);

  return <Image alt="QR code for TOTP 2FA" src={qr} />;
};
