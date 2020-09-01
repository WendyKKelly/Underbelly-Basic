import { CMS_NAME } from '../lib/constants';

export default function Intro() {
  return (
    <>
      <section className="wild-title">
        <h1 className="post-title">Love Your Whole Self</h1>
        <h4 className="wild">Wild & Precious Stories</h4>
      </section>
      <style jsx>
        {`
          .wild-title {
            text-align: center;
            margin-left: 2vh;
          }

          .post-title {
            font-family: 'Raleway', sans-serif;
            font-size: 2.5em;
            color: #8dbb85;
            text-align: center;
            margin-left: 2vh;
            padding-top: 0.8vh;
          }
          body {
            font-family: 'Raleway', sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Alice', serif;
            margin-top: 0;
          }
          p {
            font-family: 'Raleway', sans-serif;
          }
        `}
      </style>
    </>
  );
}
