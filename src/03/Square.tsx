import React from 'react'

class Square extends React.Component<{ onClick: any, value: any }> {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button >
    )
  }
}

export default Square