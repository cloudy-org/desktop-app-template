import React from "react";
import { useEffect } from "react";

import { initWindow } from "../cirrus/tauri_typescript";

function App() {
    useEffect(() => initWindow(), []); // Loads the tauri window when the app component is mounted.

    return (
        <div className="top-1/2 left-1/2 absolute -translate-y-1/2 -translate-x-1/2">
            <h1 className="text-center text-8xl font-bold mb-3">Cloudy</h1>
            <h3 className="text-nowrap font-mono">A template we use to get started with desktop apps.</h3>
        </div>
    );
}

export default App;