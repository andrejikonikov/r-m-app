import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GET_CHARACTERS from '../Queries/Characters'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

function ListView() {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  function renderItem({
    name,
    image,
    status,
    species,
    gender,
  }) {
    return (
      <Fragment>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
          />
          <Chip label={status} />
          <Chip label={species} />
          <Chip label={gender} />
        </ListItem>
        <Divider />
      </Fragment>
    )
  }

  const { characters: { results } } = data || { characters: { results: []} }

  if (loading) {
    return (<CircularProgress />)
  }

  if (error) {
    return (
      <p severity="error">Something went wrong, try later.</p>
    )
  }

  return (
    <div className="List">
      <List>
        {results.map((character) => renderItem(character))}
      </List>
    </div>
  );
}

export default ListView;
