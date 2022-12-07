import css from './Statistics.module.css';
import getRandomHexColor from '../../utils/randomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statistics_title}>{title}</h2>}

      <ul className={css.statistics_list}>
        {stats.map(item => {
          const bgColor = getRandomHexColor();
          return (
            <li
              className={css.statistics_item}
              key={item.id}
              style={{
                background: `${bgColor}`,
              }}
            >
              <span className={css.statistics_label}>{item.label}</span>
              <span className={css.statistics_percentage}>
                {item.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
