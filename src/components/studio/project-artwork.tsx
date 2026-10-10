export function ProjectArtwork({ index, alt }: { index: number; alt: string }) {
  return <div className={`project-artwork artwork-${index % 3}`} role="img" aria-label={alt}>
    <svg viewBox="0 0 600 400" aria-hidden="true">
      {index % 3 === 0 ? <g className="art-lines"><circle cx="300" cy="200" r="112" />{Array.from({ length: 9 }, (_, i) => <ellipse key={i} cx="300" cy="200" rx={18 + i * 11} ry="112" transform="rotate(-30 300 200)" />)}<ellipse cx="300" cy="200" rx="112" ry="40" transform="rotate(-30 300 200)" /></g>
      : index % 3 === 1 ? <g className="art-lines">{Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${175 + i * 10} ${145 - i * 7} L${330 + i * 10} ${110 + i * 7} L${425 - i * 3} ${250 + i * 5} L${250 - i * 6} ${300 - i * 5} Z`} />)}</g>
      : <g className="art-lines">{Array.from({ length: 13 }, (_, i) => <ellipse key={i} cx="300" cy="200" rx={110 - i * 3} ry={35 + i * 4} transform={`rotate(${i * 14} 300 200)`} />)}</g>}
    </svg>
    <span className="artwork-label">ARTWORK PLACEHOLDER</span><span className="artwork-index">{String(index + 1).padStart(2, "0")}</span>
  </div>;
}