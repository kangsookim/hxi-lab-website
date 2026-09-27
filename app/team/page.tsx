import PageHeader from '@/components/PageHeader';
import {alumni,currentMembers,Member} from '@/data/site';

const groups=['Director','Graduate Students','Undergraduate Researchers','Visiting Researchers'];

function MemberLinks({member}:{member:Member}){
  if(!member.email && !member.links?.length) return null;
  return <div style={{marginTop:8,fontSize:13,lineHeight:1.55,color:'var(--muted)'}}>
    {member.email && <div style={{overflowWrap:'anywhere'}}>{member.email}</div>}
    {!!member.links?.length && <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:3}}>
      {member.links.map(link=><a key={link.label} href={link.url} target="_blank" rel="noreferrer" style={{color:'inherit',textDecoration:'underline',textUnderlineOffset:3}}>{link.label} ↗</a>)}
    </div>}
  </div>;
}

export default function Page(){return <><PageHeader eyebrow="Team" title="People behind HXIL" copy="Researchers, students, and collaborators working across XR, AI, human-computer interaction, healthcare, social computing, and intelligent immersive systems."/><section className="section"><div className="wrap">{groups.map(g=>{const ms=currentMembers.filter(m=>m.group===g); if(!ms.length)return null; return <div className="team-section" key={g}><div className="team-heading"><span>{g}</span><span>{ms.length.toString().padStart(2,'0')}</span></div><div className="team-grid">{ms.map(m=><article className="person" key={m.name}><img src={m.image} alt={m.name}/><h3>{m.name}</h3><p>{m.role}</p>{m.affiliation&&<small>{m.affiliation}</small>}{m.period&&<small>{m.period}</small>}{m.history&&<small className="member-history">{m.history}</small>}<MemberLinks member={m}/></article>)}</div></div>})}</div></section><section className="section soft"><div className="wrap"><div className="section-title"><div><div className="eyebrow">Alumni</div><h2>Former members & visiting researchers</h2></div></div><div className="alumni-grid">{alumni.map(m=><article key={m.name}><img src={m.image} alt={m.name}/><div><h3>{m.name}</h3><p>{m.role}</p><small>{m.affiliation?`${m.affiliation} · `:''}{m.period}</small>{m.history&&<small className="member-history">{m.history}</small>}<MemberLinks member={m}/></div></article>)}</div></div></section></>}
