export default function SectionLabel({ color = '#00f5ff', children }) {
  return (
    <div style={{
      color, fontSize:11, fontWeight:800,
      letterSpacing:3, textTransform:'uppercase', marginBottom:10,
    }}>
      {children}
    </div>
  );
}
