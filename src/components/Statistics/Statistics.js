import PropTypes from 'prop-types';
import style from '../Statistics/statistics.module.css';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
        ;
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
