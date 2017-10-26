class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    //manage state for videoList and videoPlayer
      //set default click state of any
        //App instance/children to be false
  }
  //make a handler for videoListEntry

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.props.videos[0]} /></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.props.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


