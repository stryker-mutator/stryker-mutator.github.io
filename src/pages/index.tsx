import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CSharpLogo from '@site/static/images/CSharpLogo.svg';
import JavaScriptLogo from '@site/static/images/JavascriptLogo.svg';
import ScalaLogo from '@site/static/images/ScalaLogo.svg';
import Layout from '@theme/Layout';
import React, { ComponentType, PropsWithChildren, SVGProps } from 'react';
import AssessmentSvg from '../icons/assessment.svg';
import GroupsSvg from '../icons/groups.svg';
import MutationsSvg from '../icons/mutations.svg';
import PublicSvg from '../icons/public.svg';
import TargetSvg from '../icons/target.svg';
import TranslateSvg from '../icons/translate.svg';

import './styles.css';

type LanugageProps = {
  title: string;
  image: ComponentType<SVGProps<SVGSVGElement>>;
  docsLink: string;
};

const languages: LanugageProps[] = [
  {
    title: 'JavaScript and friends',
    image: JavaScriptLogo,
    docsLink: 'docs/stryker-js/introduction/',
  },
  {
    title: 'C#',
    image: CSharpLogo,
    docsLink: 'docs/stryker-net/introduction/',
  },
  {
    title: 'Scala',
    image: ScalaLogo,
    docsLink: 'docs/stryker4s/getting-started/',
  },
];

function Language({ image: Image, title, docsLink }: LanugageProps) {
  return (
    <div className="col col--4 feature">
      {Image && (
        <Link to={docsLink}>
          <figure className="text--center">
            <Image role="img" className="languageImage" />
            <figcaption>{title}</figcaption>
          </figure>
        </Link>
      )}
    </div>
  );
}

const features: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; content: React.ReactNode }[] = [
  {
    icon: MutationsSvg,
    title: 'Mutations',
    content: (
      <span>
        Control more than <Link to="/docs/mutation-testing-elements/supported-mutators">30 supported mutations</Link>.
      </span>
    ),
  },
  {
    icon: TargetSvg,
    title: 'Speed',
    content: <span>Use code analysis and parallel test runner processes to speed things up.</span>,
  },
  {
    icon: PublicSvg,
    title: 'Test runner agnostic',
    content: <span>Run tests with your favorite test runner.</span>,
  },
  {
    icon: GroupsSvg,
    title: 'Open source',
    content: (
      <span>
        Free as in Speech. Maintained by the open source community at{' '}
        <Link to="https://github.com/stryker-mutator">GitHub</Link>.
      </span>
    ),
  },
  {
    icon: TranslateSvg,
    title: 'Multilingual',
    content: (
      <span>
        Stryker has support for <Link to="/docs/stryker-js/introduction">JavaScript &amp; TypeScript</Link>,{' '}
        <Link to="/docs/stryker-net/introduction">C#</Link> and <Link to="/docs/stryker4s/getting-started">Scala</Link>.
      </span>
    ),
  },
  {
    icon: AssessmentSvg,
    title: 'Clever reports',
    content: (
      <span>
        Use{' '}
        <Link to="https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master">
          clever reports
        </Link>{' '}
        to sniff out surviving mutants and improve test effectiveness.
      </span>
    ),
  },
];

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
      <header className="hero hero--primary heroBanner">
        <div className="container bannerContainer">
          <div className="col col--12">
            <div>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className="col col--12">
              <img
                className="heroImage"
                src={useBaseUrl('images/stryker-gun.svg')}
                srcSet={`${useBaseUrl('images/stryker-gun.svg')} 200w, ${useBaseUrl('images/stryker-man.svg')}`}
                sizes="(min-width: 662px) 400px, 200px"
                width={200}
                height={200}
                alt="Strykerman"
              ></img>
            </div>
          </div>

          <div className="row buttons">
            <Link className="button button--outline button--secondary button--lg getStarted" to={useBaseUrl('docs/')}>
              Introduction
            </Link>

            <Link
              className="button button--outline button--primary button--lg getStarted"
              to={'https://stryker-mutator.io/stryker-playground/'}
            >
              Playground
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="languages">
          <div className="container">
            <div className="row sectionHeader">
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
          <div className="container">
            <div className="row sectionHeader">
              <div className="col col--12 text--center">
                <h2>Features</h2>
              </div>
            </div>
            <div className="row">
              {features.map((props) => (
                <Feature key={props.title}>
                  <div className="featureTitle">
                    <props.icon className="featureIcon" />
                    <h3>{props.title}</h3>
                  </div>
                  <p>{props.content}</p>
                </Feature>
              ))}
            </div>
            <br></br>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
