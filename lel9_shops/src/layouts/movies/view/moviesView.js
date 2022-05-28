import { Pagination, Switch } from 'antd';
import clsx from 'clsx';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import { Title } from '../../../components/title';
import './styles.scss';

export const MovieMiniCard = memo(
  ({ className, name, year, index, onClick, ...rest }) => {
    const classes = clsx('movie-mini-card', className);
    return (
      <MarginGroup className={classes} onClick={onClick} {...rest}>
        <p className='movie-index movie-cell'>{index}</p>
        <p className='movie-name movie-cell'>{name}</p>
        <p className='movie-year movie-cell'>{year}</p>
      </MarginGroup>
    );
  }
);

export const MoviesView = memo(
  ({ movies, onSwitch, onChange, maxLength, onClickMovie }) => {
    const classes = clsx('movies');
    return (
      <>
        <MarginGroup isColumn className={classes}>
          <MarginGroup className={`${classes}-title`} gap={10}>
            <Title title={`Список фильмов`} />
            <Switch
              checkedChildren='все'
              unCheckedChildren='новые'
              defaultChecked
              onClick={onSwitch}
            />
          </MarginGroup>

          <MarginGroup className={`${classes}-content`}>
            <MarginGroup isColumn className={`${classes}-table`}>
              <MovieMiniCard
                className={'movie-table-header'}
                name={'Наименование'}
                year={'Год'}
                index={'№'}
              />
              {movies.map((el, i) => (
                <MovieMiniCard
                  key={el.movieId}
                  index={i + 1}
                  onClick={onClickMovie(el.movieId)}
                  name={el.title}
                  year={el.year}
                />
              ))}
              <Pagination
                onChange={onChange}
                defaultCurrent={1}
                total={maxLength}
              />
            </MarginGroup>
            <MarginGroup className={`${classes}-empty-place`}>
              {/* 1/4 empty field */}
            </MarginGroup>
          </MarginGroup>
        </MarginGroup>
      </>
    );
  }
);
