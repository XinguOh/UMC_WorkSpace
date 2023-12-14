import React from 'react'
import Ad from './Ad';

class AdPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {showAd : false};
    this.handleToggleClick=this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(preState=>({
      showAd:!preState.showAd
    }));
  }
  render() {
  return (
    <div>
        {this.state.showAd && <Ad Ad/>}
        <button onClick={this.handleToggleClick}>
        {this.state.showAd ? '광고 안보기':'광고 보기'}
      </button>
    </div>
  )}
}
export default AdPage;

/*
export default function AdPage() {
  const [showAd,setShowAd]=useState(false);
  const handleToggleClick=()=>{
    setShowAd(prevshowAd=>!prevshowAd);
  }
  return (
    <div>
      {showAd && <Ad Ad={showAd}/>}
      <button onClick={handleToggleClick}>
        {showAd ? '광고 안보기':'광고 보기'}
      </button>
    </div>
  )
}*/