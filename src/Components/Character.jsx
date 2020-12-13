import React, { Fragment } from 'react'

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

function Character({
  name,
  image,
  status,
  species,
  gender,
}) {
  return (
    <Fragment key={name}>
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

export default Character
