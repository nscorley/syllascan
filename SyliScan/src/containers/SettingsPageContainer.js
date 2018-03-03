import React from 'react';
import { connect } from 'react-redux';
import SettingsPage from '../components/SettingsPage';

// TODO: toggle between event and reminder?
// TODO: adjust "level" of parsing
// TODO: provide identifying name of class
// TODO: maybe reminder options?

const mapStateToProps = (state) => ({
    image: state.image,
})

export default connect(mapStateToProps)(SettingsPage);