var playlist = {
  [key] : 'value'
}

function updatePlaylist(obj, key, value) {
  playlist = Object.assign({}, obj, {[key]: value})
  return playlist
}

function removeFromPlaylist(obj, key) {
  playlist = delete obj.key
  return playlist
}