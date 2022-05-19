import { Select } from 'antd';
import clsx from 'clsx';
import { memo } from 'react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Title } from '../../../components/title';
import { MarginGroup } from '../../../components/marginGroup/marginGroup';
import './styles.scss';

const { Option } = Select;

const MAX_RATING = 5;
const MIN_RATING = 0;
const STEP = 0.5;

const generateArrayNumberWithStep = (startWith, endWith, step) => {
  const array = [];
  for (let i = 0; startWith + step * i <= endWith; i++) {
    array[i] = startWith + step * i;
  }
  return array;
};

const InfoBlock = memo(({ title, value, className }) => {
  const classes = clsx('infoblock', className);
  return (
    <MarginGroup className={classes}>
      <p className='infoblock-title'>{title}:</p>
      <p className='infoblock-value'>{value}</p>
    </MarginGroup>
  );
});

export const MovieView = memo(
  ({
    movie,
    movieRating,
    tags,
    tag,
    onAddTag,
    onChangeRating,
    onAddRating,
    onChangeTag,
  }) => {
    const classnames = clsx('movie');
    return (
      <MarginGroup isColumn className={classnames} gap={5}>
        <Title title={'Описание фильма'} />
        <MarginGroup isColumn gap={5}>
          <InfoBlock
            className='movie-name'
            value={movie.title}
            title={'Наименование'}
          />
          <InfoBlock className='movie-year' value={movie.year} title={'Год'} />
        </MarginGroup>
        <MarginGroup isColumn gap={10}>
          <MarginGroup className='movie-genres'>
            <p className='movie-title'>Жанры:</p>
            <MarginGroup gap={5}>
              {movie.genres.map((genre, i) => (
                <p key={i} className='movie-genre'>
                  {genre}
                </p>
              ))}
            </MarginGroup>
          </MarginGroup>
          <MarginGroup className='movie-tags'>
            <p className='movie-title'>Теги</p>
            <MarginGroup gap={10}>
              {tags.map((tag, i) => (
                <p key={i} className='movie-tag'>
                  {tag.tag}
                </p>
              ))}
            </MarginGroup>
          </MarginGroup>
        </MarginGroup>
        <MarginGroup isColumn className='movie-inputs'>
          {!movieRating ? (
            <MarginGroup gap={5}>
              <Select placeholder={'рейтинг'} onChange={onChangeRating}>
                {generateArrayNumberWithStep(MIN_RATING, MAX_RATING, STEP).map(
                  (rating) => (
                    <Option key={rating} value={rating}>
                      {rating}
                    </Option>
                  )
                )}
              </Select>
              <Button onClick={onAddRating}>Добавить оценку</Button>
            </MarginGroup>
          ) : (
            <Input name={'оценка'} value={movieRating} disabled />
          )}
          <MarginGroup gap={5}>
            <Input name={'тег'} value={tag} onChange={onChangeTag} />
            <Button onClick={onAddTag}>Добавить тег</Button>
          </MarginGroup>
        </MarginGroup>
      </MarginGroup>
    );
  }
);
