"use client";

import { useState } from "react";
import { players } from "./data/players";

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredPlayers = players.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif", background: "#020617", color: "#e5e7eb" }}>
      <h1 style={{ fontSize: 32 }}>Pro Gamer Settings</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="プレイヤー名で検索"
        style={{ marginTop: 20, padding: 10, width: 260, borderRadius: 8 }}
      />
      <div style={{ marginTop: 20 }}>
        {filteredPlayers.map(player => (
          <a key={player.name} href={`/player/${player.name.toLowerCase()}`}>
            <div style={{ padding: 20, border: "1px solid #334155", borderRadius: 12, marginBottom: 10 }}>
              <h2>{player.name}</h2>
              <p>{player.game}</p>
              <p>🎯 {player.sensitivity}</p>
              <p>⌨️ {player.mouse}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
