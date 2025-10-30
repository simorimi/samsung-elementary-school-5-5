import { useState } from "react";
import myPicture from "../assets/나.png";
import studentsPicture from "../assets/단체.png";
import * as S from "./styled";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLetter = () => setIsOpen(true);
  const closeLetter = () => setIsOpen(false);

  return (
    <S.LetterContainer>
      {!isOpen && (
        <S.Envelope onClick={openLetter}>
          <S.EnvelopeFlap />
          <S.EnvelopeBody />
          <S.ClickToOpenText>
            5학년 5반 친구들에게 편지가 도착했어요!
          </S.ClickToOpenText>
        </S.Envelope>
      )}

      {isOpen && (
        <S.LetterModalBackdrop onClick={closeLetter}>
          <S.LetterContentPaper onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={closeLetter}>&times;</S.CloseButton>

            <h3>사랑하는 삼성초 5학년 5반 친구들</h3>

            <S.LetterImage src={studentsPicture} alt="아이들 사진" />

            <S.LetterText>
              안녕, 사랑하는 5학년 5반 친구들! 교생 선생님이야. 벌써 선생님과
              함께하는 마지막 시간이 다가왔네. 시간이 너무 빠르다, 그치?
              너희들은 선생님과 함께한 시간들이 어땠어? 선생님은 정말정말
              행복했어. 선생님 인생에서 손에 꼽을 만큼 행복한 시간이었단다.
              솔직히 처음에는 조금 긴장하는 마음으로 왔는데, 소중하고 예쁜
              너희들을 만나니 선생님도 가만히 있을 수가 없더라고. '어떻게 하면
              너희와 더 행복한 추억을 하나라도 더 만들 수 있을까?' 매일 생각하게
              되었단다. 선생님을 이렇게 행복하게 해 줘서 진심으로 고마워. 너희는
              정말 한 명 한 명 모두 예쁘고 소중한 사람이야. 공부를 잘해서,
              운동을 잘해서, 착해서 예쁜 게 아니라, 너희의 '존재 자체'가 주변
              사람들에게 행복을 주는 소중한 존재란다. 그러니 항상 자신감을
              가지고, 앞으로의 세상을 당당하게 살아갔으면 좋겠어. 때로는
              친구들과 다투기도 하고 힘든 일도 생기겠지만, 늘 그랬듯 훌훌
              털어버리고 다시 일어나 씩씩하게 나아가기를 바랄게. 선생님은 너희를
              항상 기억하고, 너희와의 추억을 되새기며 행복하게 살아갈게.
              너희에게도 선생님과의 추억이 삶에서 작은 행복으로 기억되기를 바라.
              마지막으로, 너희들만의 고유한 색깔로 이 세상을 멋지게 색칠해
              나가기를 응원할게!
            </S.LetterText>

            <S.LetterSignature>
              - 2025년 10월 31일, 너희를 많이 사랑하는 심호림 교생 선생님이 -
            </S.LetterSignature>
            <S.ImageWrapper>
              <S.MyImage src={myPicture} alt="나 사진" />
            </S.ImageWrapper>
          </S.LetterContentPaper>
        </S.LetterModalBackdrop>
      )}
    </S.LetterContainer>
  );
};

export default Letter;
