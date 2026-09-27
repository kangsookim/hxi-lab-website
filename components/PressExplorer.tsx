import {pressItems} from '@/data/press';

export default function PressExplorer(){
  return <>
    <div className="media-intro">
      <div>
        <div className="eyebrow">Press</div>
        <h2>HXIL in the press</h2>
      </div>
      <p>Selected press coverage and research features since 2021.</p>
    </div>
    <div className="media-list">
      {pressItems.map((item,index)=><a
        className="media-item"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        key={`${item.date}-${item.title}-${index}`}
      >
        <div className="media-thumb"><img src={item.image} alt=""/></div>
        <div className="media-copy">
          <div className="media-meta"><span>{item.source}</span><time>{item.date}</time></div>
          <h3>{item.title}</h3>
          <span className="media-link">Read / watch ↗</span>
        </div>
      </a>)}
    </div>
  </>
}
