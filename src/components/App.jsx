import Stat from './Stat';

function App() {
  return (
    <main className="card">
      <div className="card__stats-half">
        <h1 className="card__heading">
          Get <span className="highlight-purple card__heading">insights</span>{' '}
          that help your business grow.
        </h1>
        <p className="card__description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="card__stats">
          <Stat stat={10530} label="companies" />
          <Stat stat={314} label="templates" />
          <Stat stat={12000000} label="queries" />
        </div>
      </div>
      <div className="card__img-half">
        <picture>
          <source
            className="card-img"
            srcSet="/images/image-header-desktop.jpg"
            media="(min-width: 40rem)"
          />
          <img
            className="card-img"
            src="/images/image-header-mobile.jpg"
            alt=""
          />
        </picture>
      </div>
    </main>
  );
}

export default App;

/*
et insights that help your business grow.

  Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.

  10k+ companies
  314 templates
  12m+ queries
  */
