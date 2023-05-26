import React from "react";
import {
  GitbookButton,
  GitbookButtonGroup,
  GitbookContent,
  GitbookDescription,
  GitbookImg,
  GitbookWrapper,
} from "./styles";

export const GitBookSection: React.FC = () => {
  return (
    <GitbookWrapper id="gitbook">
      <GitbookContent>
        <GitbookDescription>
          <h1>
            EGGCELENT PROJECT
            <br />
            <span>NET COLLECTION</span>
          </h1>
          <p>
            Lörem ipsum sMF hykaligt athleisure facial recognition vertikal,
            tillväxtföretag inte computer vison. RFID personalisering.
          </p>
          <GitbookButtonGroup>
            <GitbookButton className="join">Join Discord</GitbookButton>
            <GitbookButton className="check">Check Twitter</GitbookButton>
          </GitbookButtonGroup>
        </GitbookDescription>
        <GitbookImg>
          <img src="/assets/images/chickens/N1.png" alt="" />
        </GitbookImg>
      </GitbookContent>
    </GitbookWrapper>
  );
};