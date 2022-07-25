import React from 'react'

class Square extends React.Component<{ value: number }> {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

export default Square