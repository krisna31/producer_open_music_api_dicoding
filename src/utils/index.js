/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const mapDBAlbumToModel = ({ id, name, year }) => ({
  id,
  name,
  year,
});

const mapDBSongsToModel = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

const mapDBSongToModel = ({ id, title, year, performer, genre, duration, albumId }) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
});

module.exports = { mapDBAlbumToModel, mapDBSongToModel, mapDBSongsToModel };
