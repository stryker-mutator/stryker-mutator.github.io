import { useColorMode } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { WrapperProps } from '@docusaurus/types';
import Giscus from '@giscus/react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import React from 'react';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  // Current page is a blog post page, or the blog list overview page
  const { isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage) {
    return <Footer {...props} />;
  }

  const { colorMode } = useColorMode();

  return (
    <>
      <Footer {...props} />

      <Giscus
        repo="stryker-mutator/stryker-mutator.github.io"
        repoId="MDEwOlJlcG9zaXRvcnk1OTE3NzI0Nw=="
        category="Blog posts"
        categoryId="DIC_kwDOA4b5H84CR7Bj"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
