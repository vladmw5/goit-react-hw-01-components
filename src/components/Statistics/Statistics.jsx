import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/randomHex';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(el => (
          <li
            key={el.id}
            className={s.item}
            style={{
              backgroundColor: getRandomHexColor(),
              flexBasis: `${el.percentage}%`,
            }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{`${el.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
