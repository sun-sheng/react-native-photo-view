import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class PhotoView extends Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems:'center', justifyContent:'center' }}
                centerContent={true}
                maximumZoomScale={this.props.maximumZoomScale}
                minimumZoomScale={this.props.minimumZoomScale}>

                <TouchableWithoutFeedback
                    onLongPress={this.props.onLongTap}
                    onPress={this.props.onTap}>

                    <Image {...this.props}/>

                </TouchableWithoutFeedback>

            </ScrollView>
        );
    }
}

PhotoView.defaultProps = {
  onLongTap: function() {},
  onTap: function() {}
};
