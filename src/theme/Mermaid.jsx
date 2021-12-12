// From https://raymondjulin.com/blog/drawing-diagrams-in-sanity-with-mermaid-js

import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import useThemeContext from '@theme/hooks/useThemeContext';
import './Mermaid.css';

/**
 * React component of Mermaid for use in .md(x) files
 * See https://mermaid-js.github.io for diagram syntax
 * @example
 * <Mermaid _key="http-call" chart={`
 * flowchart TD
 *   cr([Create Request]) --> backoffice[Backoffice Server REST]
 * `}/>
 * @param {{chart: string, _key: string}} input
 */
export default function Mermaid({ chart, _key }) {
  const id = `mermaid-${_key}`;
  const ref = React.useRef();
  const theme = useThemeContext().isDarkTheme ? 'dark' : 'default';

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
    if (ref.current) {
      try {
        mermaid.mermaidAPI.render(id, chart, (result) => {
          ref.current.innerHTML = result;
        });
      } catch (error) {
        console.error('Could not render Mermaid diagram', error);
      }
    }
  }, [theme, chart]);

  // We return a faux element with an id because Mermaid
  // does DOM manipulation on the existing node based on id
  // during its rendering phase. If you use a single node for final
  // render and mermaids render process I found it to crash thus this weird looking hack
  return (
    <>
      <div key="faux" id={id} />
      <div key="preview" className="mermaid-diagram" ref={ref} />
    </>
  );
}
