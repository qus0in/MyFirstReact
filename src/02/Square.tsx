import React from 'react'

class Square extends React.Component<{ value: number }, { value: any }> {
  constructor(props: any) {
    super(props)
    this.state = { value: null, }
  }

  render() {
    // return (
    //   <button className="square" onClick={
    //     // function() { console.log('click') }
    //     () => console.log('click') // arrow function
    //   }>
    //     {this.props.value}
    //   </button>
    // )
    return (
      <button
        className="square"
        onClick={() => this.setState({ 'value': 'X' })
        }>
        {this.state.value}
      </button>
    )
  }
}

export default Square