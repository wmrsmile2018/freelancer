import { Pagination } from 'antd';
import clsx from 'clsx';
import { memo } from 'react';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import { Title } from '../../../components/title';
import './styles.scss';

export const MovieMiniCard = memo(({ name, year, index, ...rest }) => {
  const classes = clsx('movie-mini-card');
  return (
    <MarginGroup className={classes} {...rest}>
      <p className='movie-index movie-cell'>{index}</p>
      <p className='movie-name movie-cell'>{name}</p>
      <p className='movie-year movie-cell'>{year}</p>
    </MarginGroup>
  );
});

const mock = [
  { name: '1', year: '1' },
  { name: '2', year: '2' },
  { name: '3', year: '3' },
  { name: '4', year: '4' },
];

export const MoviesView = memo(() => {
  const classnames = clsx('movies');
  return (
    <MarginGroup isColumn className={classnames}>
      <Title title='Список фильмов' />
      <MarginGroup>
        <MarginGroup isColumn>
          <MovieMiniCard name={'Наименование'} year={'Год'} index={'№'} />
          {mock.map((el, i) => (
            <MovieMiniCard
              key={el.name}
              index={i + 1}
              name={el.name}
              year={el.year}
            />
          ))}
          <Pagination defaultCurrent={1} total={50} />
        </MarginGroup>
        {/* 1/4 empty field */}
      </MarginGroup>
    </MarginGroup>
  );
});
