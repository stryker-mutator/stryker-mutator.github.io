import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const languages = [
  {
    title: 'JavaScript and friends',
    imageUrl: 'images/JavascriptLogo.png',
    docsLink: 'docs/stryker/readme',
    isPreview: false,
  },
  {
    title: 'C#',
    imageUrl: 'images/CSharpLogo.png',
    docsLink: 'docs/stryker-net/Configuration',
    isPreview: true,
  },
  {
    title: 'Scala',
    imageUrl: 'images/ScalaLogo.png',
    docsLink: 'docs/stryker4s/configuration',
    isPreview: true,
  },
];

function Language({ imageUrl, title, isPreview, docsLink }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <a href={docsLink}>
          <figure className={clsx('text--center', isPreview && styles.previewRibbon)}>
            <img className={styles.languageImage} src={imgUrl} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        </a>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.bannerContainer)}>
          <div>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
                to={useBaseUrl('docs/')}
              >
                Get Started
              </Link>
            </div>
          </div>
          <picture className={styles.heroImage}>
            <source media="(min-width:662px)" srcset="images/strykerman.png"></source>
            <img src="images/gun.png" alt="Strykerman"></img>
          </picture>
        </div>
      </header>
      <main>
        {languages && languages.length > 0 && (
          <section className={styles.languages}>
            <div className="container">
              <h2 className="text--center">Getting started with Stryker</h2>
              <div className="row">
                {languages.map((props, idx) => (
                  <Language key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
