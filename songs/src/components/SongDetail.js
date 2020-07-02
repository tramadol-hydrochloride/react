import React from "react";
import {connect} from 'react-redux';

const SongDetail = ({song}) => {

    if (!song) {
        return <div>Please select a song...</div>
    }

    return (
        <div>
            <h4>Song Detail For:</h4>
            <div>
                <p>
                    {song.title}<br/>
                    {song.duration}
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);
