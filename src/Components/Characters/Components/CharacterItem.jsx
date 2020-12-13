import React from 'react'
import { Link } from "react-router-dom"

import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

function CharacterItem({
  id,
  name,
  image,
  status,
  species,
  gender,
}) {
  return (
    <Link key={name} to={`/characters/${id}`}>
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
    </Link>
  )
}

export default CharacterItem
