/* eslint-disable @typescript-eslint/naming-convention */

import './accordion.scss';
import { classMap } from '../../../../src/lib/utils/template/classMap';
import { html } from '../../../../src/lib/utils/template/mhtml';
import { AccordionSlide } from './AccordionSlide';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AccordionSlideTemplateProps = {
  heading: string;
  content: string;
  expanded?: boolean;
};

export function accordionSlideTemplate(
  { heading, content, expanded }: AccordionSlideTemplateProps,
  ref?: string,
): string {
  return html`<div
    data-component=${AccordionSlide.displayName}
    data-ref=${ref}
    data-expanded=${expanded}
  >
    <div data-ref="slide-wrapper" class=${classMap({ expanded: !!expanded })}>
      <h4 data-ref="slide-heading">${heading}</h4>
      <p data-ref="slide-content">${content}</p>
    </div>
  </div>`;
}
