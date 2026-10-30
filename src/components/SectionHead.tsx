import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadProps = {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
};

export default function SectionHead({ index, label, title, lede, id }: SectionHeadProps) {
  return (
    <Reveal as="header" className="sectionHead">
      <p className="eyebrow">
        <span className="idx">{index}</span>
        <span className="rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </Reveal>
  );
}
