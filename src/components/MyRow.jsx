import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToLiveAction,
  addToFavoriteAction,
  removeFromFavorites,
} from '../redux/actions'

const MyRow = (props) => {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favoriteSongs.favorites)

  const myFetch = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          props.artist
      )

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        const fourSongs = data.data.slice(0, 4)

        console.log(fourSongs)
        setSongs(fourSongs)
        setIsLoading(false)
      } else {
        throw new Error()
      }
    } catch (err) {
      setIsLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    myFetch()
  }, [])

  return (
    <>
      {error && (
        <Alert variant="danger" className="text-center w-50 mx-auto fs-5">
          Warning! Failed to load data, please if the error persist contact us!{' '}
          <i className="bi bi-emoji-frown"></i>
        </Alert>
      )}
      <div className="col-10">
        <div id="rock">
          <h2>{props.genre}</h2>
          <Row className="justify-content-center ">
            {isLoading && (
              <Spinner animation="border" variant="danger"></Spinner>
            )}
          </Row>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 ">
            {songs.map((song) => {
              return (
                <div className="col text-center" key={song.id}>
                  <img
                    onClick={() => {
                      dispatch(addToLiveAction(song))
                    }}
                    className="img-fluid"
                    src={song.album.cover_big}
                    alt="track"
                  />
                  <p className="m-0">Track: {song.title}</p>
                  <p className="mb-3">Artist: {song.artist.name}</p>

                  {!favorites.includes(song.title) ? (
                    <i
                      className="bi bi-heart text-white  me-3"
                      onClick={() => {
                        dispatch(addToFavoriteAction(song.title))
                      }}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-heart-fill text-white me-3"
                      onClick={() => {
                        dispatch(removeFromFavorites(song.title))
                      }}
                    ></i>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default MyRow
