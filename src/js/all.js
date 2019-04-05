import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import scala from 'highlight.js/lib/languages/scala';
import cs from 'highlight.js/lib/languages/cs';
import xml from 'highlight.js/lib/languages/xml';

import { register } from './navbar-toggle';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('scala', scala);
hljs.registerLanguage('cs', cs);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.initHighlightingOnLoad();
register();
