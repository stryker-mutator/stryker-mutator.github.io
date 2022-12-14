import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CSharpLogo from '@site/static/images/CSharpLogo.svg';
import JavaScriptLogo from '@site/static/images/JavascriptLogo.svg';
import ScalaLogo from '@site/static/images/ScalaLogo.webp';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { ComponentType, PropsWithChildren, SVGProps } from 'react';
import AssessmentSvg from '../icons/assessment.svg';
import GroupsSvg from '../icons/groups.svg';
import MutationsSvg from '../icons/mutations.svg';
import PublicSvg from '../icons/public.svg';
import TargetSvg from '../icons/target.svg';
import TranslateSvg from '../icons/translate.svg';
import styles from './styles.module.css';

const languages = [
  {
    title: 'JavaScript and friends',
    image: JavaScriptLogo,
    docsLink: 'docs/stryker-js/introduction',
  },
  {
    title: 'C#',
    image: CSharpLogo,
    docsLink: 'docs/stryker-net/Introduction',
  },
  {
    title: 'Scala',
    image: ScalaLogo,
    docsLink: 'docs/stryker4s/getting-started',
  },
];

type LanugageProps = {
  title: string;
  image: string | ComponentType<SVGProps<SVGSVGElement>>;
  docsLink: string;
};

function Language({ image: Image, title, docsLink }: LanugageProps) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {Image && (
        <a href={docsLink}>
          <figure className={clsx('text--center')}>
            {typeof Image === 'string' ? (
              <img className={styles.languageImage} height={200} width={200} src={Image} alt={title} />
            ) : (
              <Image role="img" className={styles.languageImage} />
            )}
            <figcaption>{title}</figcaption>
          </figure>
        </a>
      )}
    </div>
  );
}

type FeatureProps = PropsWithChildren<{}>;

export const Feature = ({ children }: FeatureProps) => (
  <div className="col col--4">
    <div className="feature">{children}</div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout description="Stryker Mutator: Test your tests with mutation testing.">
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
                Introduction
              </Link>
            </div>
          </div>
          <div>
            <img
              className={styles.heroImage}
              src={useBaseUrl('images/stryker-gun.svg')}
              srcSet={`${useBaseUrl('images/stryker-gun.svg')} 200w, ${useBaseUrl('images/stryker-man.svg')}`}
              sizes="(min-width: 662px) 400px, 200px"
              width={200}
              height={200}
              alt="Strykerman"
            ></img>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.languages}>
          <div className={clsx('container')}>
            <div className={clsx('row', styles.sectionHeader)}>
              <div className="col col--12 text--center">
                <h2>Getting started with Stryker</h2>
                <div className="row">
                  {languages.map((props) => (
                    <Language key={props.title} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={clsx('container')}>
            <div className={clsx('row', styles.sectionHeader)}>
              <div className="col col--12 text--center">
                <h2>Features</h2>
              </div>
            </div>
            <div className="row">
              <Feature>
                <div className={styles.featureTitle}>
                  <MutationsSvg className={styles.featureIcon} />
                  <h3>Mutations</h3>
                </div>
                <p>
                  Control more than{' '}
                  <a href="/docs/mutation-testing-elements/supported-mutators">30 supported mutations</a>.
                </p>
              </Feature>

              <Feature>
                <div className={styles.featureTitle}>
                  <TargetSvg className={styles.featureIcon} />
                  <h3>Speed</h3>
                </div>
                <p>Use code analysis and parallel test runner processes to speed things up.</p>
              </Feature>

              <Feature>
                <div className={styles.featureTitle}>
                  <PublicSvg className={styles.featureIcon} />
                  <h3>Test runner agnostic</h3>
                </div>
                <p>Run tests with your favorite test runner.</p>
              </Feature>

              <Feature>
                <div className={styles.featureTitle}>
                  <GroupsSvg className={styles.featureIcon} />
                  <h3>Open source</h3>
                </div>
                <p>
                  Free as in Speech. Maintained by the open source community at{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/stryker-mutator">
                    GitHub
                  </a>
                  .
                </p>
              </Feature>

              <Feature>
                <div className={styles.featureTitle}>
                  <TranslateSvg className={styles.featureIcon} />
                  <h3>Multilingual</h3>
                </div>
                <p>
                  Stryker has support for <a href="/docs/stryker-js/introduction">JavaScript &amp; TypeScript</a>,{' '}
                  <a href="/docs/stryker-net/Introduction">C#</a> and{' '}
                  <a href="/docs/stryker4s/getting-started">Scala</a>.
                </p>
              </Feature>

              <Feature>
                <div className={styles.featureTitle}>
                  <AssessmentSvg className={styles.featureIcon} />
                  <h3>Clever reports</h3>
                </div>
                <p>
                  Use{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master"
                  >
                    clever reports
                  </a>{' '}
                  to sniff out surviving mutants and improve test effectiveness.
                </p>
              </Feature>
            </div>
            <br></br>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
