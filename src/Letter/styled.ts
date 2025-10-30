import styled from "styled-components";

export const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  background-color: #f3f0e9;
`;

export const ClickToOpenText = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #a08c5b;
  z-index: 3;
`;

export const EnvelopeFlap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #f7e9c3;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  z-index: 2;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;

export const EnvelopeBody = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #f7e9c3;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

export const Envelope = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f7e9c3;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
  }
`;

export const LetterModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #888;
  cursor: pointer;
  line-height: 1;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const MyImage = styled.img`
  width: 50%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
`;

export const LetterImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
`;

export const LetterText = styled.p`
  font-size: 1.1rem;
  text-align: left;
`;

export const LetterSignature = styled.p`
  text-align: right;
  margin-top: 30px;
  font-style: italic;
`;

export const LetterContentPaper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #fffaf0;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  font-family: "Georgia", serif;
  line-height: 1.7;
  color: #333;
  box-sizing: border-box;
`;
