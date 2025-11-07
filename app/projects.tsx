import Image from "next/image";

export default function Projects() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <div className="grid" style={{ display: 'grid', height: '100%', width: '100%', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gap: '16px', padding: '8px' }}>
    
      <div 
        style={{ fontFamily: "'M PLUS 2 Variable', sans-serif", gridColumn: 'span 1', gridRow: 'span 20', backgroundColor: 'rgba(255, 182, 193, 0.5)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Salmon</p>
      </div>
    
      <div 
        style={{ fontFamily: "'M PLUS 2 Variable', sans-serif", gridColumn: 'span 2', gridRow: 'span 10', backgroundColor: 'rgba(173, 255, 47, 0.5)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Broccoli</p>
      </div>
    
      <div 
        style={{ fontFamily: "'M PLUS 2 Variable', sans-serif", gridColumn: 'span 1', gridRow: 'span 10', backgroundColor: 'rgba(255, 255, 224, 0.5)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Tamago</p>
      </div>
    
      <div 
        style={{ fontFamily: "'M PLUS 2 Variable', sans-serif", gridColumn: 'span 1', gridRow: 'span 10', backgroundColor: 'rgba(210, 180, 140, 0.5)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Pork</p>
      </div>
    
      <div 
        style={{ fontFamily: "'M PLUS 2 Variable', sans-serif", gridColumn: 'span 2', gridRow: 'span 10', backgroundColor: 'rgba(144, 238, 144, 0.5)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Edamame</p>
      </div>
    </div>
  </div>
  );
}
