import Link from 'next/link';

export default function FundingSubnav({active}:{active:'current'|'past'}) {
  return (
    <div className="funding-subnav">
      <Link className={active==='current'?'active':''} href="/funding-collaborators">Current Research Support</Link>
      <Link className={active==='past'?'active':''} href="/funding-collaborators/past-support">Past Research Support</Link>
    </div>
  );
}
