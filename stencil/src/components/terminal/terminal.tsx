import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'my-terminal',
  styleUrl: 'terminal.scss',
  shadow: true
})
export class MyTerminal implements ComponentInterface {
  @Prop() label: string = 'MyLabel';

  componentWillLoad() {
    console.log("MyTerminal -> componentWillLoad -> this.label", this.label)
  }

  componentDidLoad() {
    console.log("MyTerminal -> componentDidLoad -> this.label", this.label)
  }

  componentWillUpdate() {
    console.log("MyTerminal -> componentWillUpdate -> this.label", this.label)
  }

  componentDidUpdate() {
    console.log("MyTerminal -> componentDidUpdate -> this.label", this.label)
  }

  render() {
    return <div>{this.label}</div>;
  }
}
