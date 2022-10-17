// From https://raymondjulin.com/blog/drawing-diagrams-in-sanity-with-mermaid-js

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useColorMode } from '@docusaurus/theme-common';
import './Mermaid.css';

interface Props {
  chart: string;
  _key: string;
}

/**
 * React component of Mermaid for use in .md(x) files
 * See https://mermaid-js.github.io for diagram syntax
 * @example
 * <Mermaid _key="http-call" chart={`
 * flowchart TD
 *   cr([Create Request]) --> backoffice[Backoffice Server REST]
 * `}/>
 */
export default function Mermaid({ chart, _key }: Props) {
  const id = `mermaid-${_key}`;
  const theme = useColorMode().colorMode === 'dark' ? 'dark' : 'default';

  const [chartHtml, setChartHtml] = useState('');

  // We run this as an effect instead of top level outside the component
  // so we can use the color mode to toggle mermaid themes
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme,
    });
  }, [theme]);

  // This effect renders and updates the DOM node with innerHTML.
  useEffect(() => {
    try {
      mermaid.mermaidAPI.render(id, chart, (result) => setChartHtml(result));
    } catch (error) {
      console.error('Could not render Mermaid diagram', error);
    }
  }, [theme, chart]);

  // We return a faux element with an id because Mermaid
  // does DOM manipulation on the existing node based on id
  // during its rendering phase. If you use a single node for final
  // render and mermaids render process I found it to crash thus this weird looking hack
  return (
    <>
      <div key="faux" id={id} />
      <div key="preview" className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: chartHtml }} />
    </>
  );
}
