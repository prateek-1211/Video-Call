import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams(); 

    const myMeeting = async (element) => {
        const appId = 1757958631;
        const serveSecret = "474cae50897160fe21416980174fe248";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serveSecret,
            roomId,
            Date.now().toString(),
            "Piyush Garg"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  )
}

export default RoomPage;
