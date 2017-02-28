import React, { PropTypes } from 'react'

class Container extends React.Component {
  constructor(props){
    super(props)
    this.state = {sets: []}
  }
  componentDidMount(){
    fetch('/ajax/cards')
      .then((response) => {
       return response.json() 
      })
      .then((json) => {
        let set = json.data ? json.data : []
        set.push('Add New')
        this.setState({sets: set});
      })
  }
	render(){
    const data = this.state.sets.map(function(item){
      return (<div className="col"><Card header={item} content="" /></div>)
    })
		return (
        <div className="grid">
          <div className="row">{data}</div>
        </div> 
        )
	}
}

class Card extends React.Component {
  addNewCard(){
    console.log('add new card')
  }
  render(){
    if(this.props.header == 'Add New'){
      return (<div className="card" onClick={this.addNewCard}>
                <div className="header">{this.props.header}</div>
                <div className="content">{this.props.content}</div>
              </div>)
    }
    return (<div className="card">
              <div className="header">{this.props.header}</div>
              <div className="content">{this.props.content}</div>
            </div>)
  }
}

export default Container;
