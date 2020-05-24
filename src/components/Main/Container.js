import React from "react";

import ReusableContainer from "./containers/ReusableContainer";
import Collaboration from "../../media/collaboration.mp4";
import Integration from "../../media/integrations.mp4";
import Snap from "../../media/snap.mp4";

function Container() {
  return (
    <React.Fragment>
      <ReusableContainer
        media={Collaboration}
        title="Workflow that just works"
        paragraph="Collaboration should be simple, straightforward, and effective.
      With Pitch, it is. Discuss current activities, manage tasks, and
      stay productive as a team. Create on any device, online or
      offline, and get great work done faster."
      />
      <ReusableContainer
        media={Snap}
        mediaFirst
        title="Formatting that’s effortless"
        paragraph="Work on your story — we’ll take care of the rest. Pitch’s smart formatting options turn raw ideas into stunning slides.
    
    Whether you’re a casual builder or you work on slides every day, Pitch gives your team design superpowers."
      />

      <ReusableContainer
        media={Integration}
        title="Connected to what matters"
        paragraph="Knowledge isn’t static — why should your presentations be? We integrate with the tools you rely on every day to keep information and conversations up-to-date, turning presentations into living documents."
      />
    </React.Fragment>
  );
}

export default Container;
