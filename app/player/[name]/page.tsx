import { players } from "../../data/players";

export default function PlayerPage({ params }: { params: { name: string } }) {
  const player = players.find(p => p.name.toLowerCase() === params.name.toLowerCase());
  if (!player) return <h1 style={{ padding: 40 }}>Player not found</h1>;

  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif", background: "#020617", color: "#e5e7eb" }}>
      <a href="/" style={{ color: "#38bdf8" }}>← 戻る</a>
      <h1>{player.name}</h1>
      <p>{player.game}</p>
      <p>🎯 {player.sensitivity}</p>
      <p>⌨️ {player.mouse}</p>
    </main>
  );
}
