import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
	const [url, setUrl] = useState("");
	const [qrcode, setQrcode] = useState("");

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 600,
			margin: 2
		},(err, url) => {
			if (err) return console.log(err);
			setQrcode(url)
		})
	}
    return (
        <div className="app">
            <h1>QR Code Generator</h1>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="e.g. https://google.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={GenerateQRCode}>Generate</button>
            </div>
            {qrcode && (
                <div className="image-container">
                    <img src={qrcode}></img>
					<a href={qrcode} download="qrcode.png">Click to Download</a>
                </div>
            )}
        </div>
    );
}

export default App;
