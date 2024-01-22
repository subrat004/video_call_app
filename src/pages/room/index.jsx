import React from "react";
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage=()=>{
    const {roomId} =useParams();
    const myMeeting=async (element)=>{
        const appID=1570260692;
        const serverSecret="5fc605023eabd449319f050d0aa51ff2";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'Subrat');

        const zp=ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }

    return(
        <div className="room-page">
            <div ref={myMeeting} />
        </div>
    )
}
export default RoomPage