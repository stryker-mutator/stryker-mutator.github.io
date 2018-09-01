import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import { register } from './navbar-toggle';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('shell', shell);
hljs.initHighlightingOnLoad();
register();
