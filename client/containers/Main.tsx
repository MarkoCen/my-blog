import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedWraperFn from '../components/AnimatedWraper';

class MainPage extends Component<any> {
    public render() {
        return (
            <div style={this.props.style}>Hello World Main</div>
        );
    }
}

export default AnimatedWraperFn(MainPage);
