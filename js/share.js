function kakaoShare() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 닮은 오버워치 캐릭터 연애유형',
      description: 'MBTI',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
      },
    },
    buttons: [
      {
        title: '테스트 참여하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });
}