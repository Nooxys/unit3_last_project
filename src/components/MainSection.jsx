import MyRow from './MyRow'

const MainSection = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage my-4">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <MyRow genre="On TOP" artist="nothing,nowhere" />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <MyRow genre="Metalcore" artist="Bring Me The Horizon" />
        </div>
      </div>
      <div className="row">
        <div className="col-10" id="lastsection">
          <MyRow genre="Just For You" artist="Radiohead" />
        </div>
      </div>
    </main>
  )
}
export default MainSection
