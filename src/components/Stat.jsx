function numberShort(number) {
  if (number < 1000) return number;
  if (number > 999999)
    return `${String(number).slice(0, String(number).length - 6)}M+`;
  return `${String(number).slice(0, String(number).length - 3)}k+`;
}

function Stat({ stat, label }) {
  return (
    <div className="container-stat">
      <span className="stat-number">{numberShort(stat)}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default Stat;
