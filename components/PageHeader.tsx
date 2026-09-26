import type { ReactNode } from 'react';

export default function PageHeader({eyebrow,title,copy,children}:{eyebrow:string;title:string;copy:string;children?:ReactNode}){return <section className="page-head"><div className="wrap"><div className="eyebrow light">{eyebrow}</div><h1>{title}</h1><p>{copy}</p>{children}</div></section>}
