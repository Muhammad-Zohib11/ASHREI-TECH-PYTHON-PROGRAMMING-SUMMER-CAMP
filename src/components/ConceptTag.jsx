export default function ConceptTag({ label, color = '#00f5ff', locked = false }) {
  return (
    <span style={{
      background: locked ? 'rgba(255,255,255,0.03)' : `${color}12`,
      color:      locked ? 'rgba(255,255,255,0.2)'  : color,
      border:     `1px solid ${locked ? 'rgba(255,255,255,0.05)' : color + '30'}`,
      borderRadius: 99, padding:'3px 9px',
      fontSize:10, fontWeight:700,
    }}>
      {label}
    </span>
  );
}
