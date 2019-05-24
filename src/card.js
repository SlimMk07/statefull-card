import React from 'react'
class Card extends React.Component {

  render() {
    return (
      <div className='main'>
        <div className="head">
          <h1 className='credit'>CREDIT CARD</h1>
        </div>
        <img className='puce' src={require('./puce.png')} />
        <p className='card-number'>{this.props.number ? this.props.number : '**** **** **** ****'}</p>
        <div className='bottom'>
          <div className='left'>
            <p className="holder">{this.props.name ? this.props.name : '**********'}</p>
          </div>
          <div className="middle">
            <div className='text'>
              <p className="valid">VALID<br />THRU</p>
              <i class="fas fa-caret-right"></i>
              <p className="date">MONTH/YEAR<br /><span>{this.props.date ? this.props.date : '**/**'}</span></p>
            </div>
            <img className='master' src={require('./master.png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;