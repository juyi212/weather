# weather web (날~알리미)
🌈 날씨 정보(현재 날씨, 오늘 날씨 정보, 현재부터 일주일 간의 날씨)를 알려주는 웹입니다. <br>
도시를 검색하여 그 도시의 날씨를 알 수 있습니다.<br>
데모링크 : https://weather-web-juyi212.netlify.app/ 

### Build with
- HTML
- CSS
- React.js / React Hooks
- OpenWeather API 

### Screen Shots
![image](https://user-images.githubusercontent.com/57897408/162203398-1f041ca9-2768-4006-b4eb-c72ce7b828cc.png)

### What I Learned 
- 강의를 통해 배웠던 ContextAPI, useMemo, useCallback 등 다양한 hooks들을 사용할 수 있었다. 
- ContextAPI를 직접 써보면서 리덕스와의 차이점을 조금 느끼게 되었다. 리덕스는 특정값이 업데이트 될때만 리렌더링이 가능하지만, ContextAPI는 특정 값만 업데이트 되는 것은 아니고 다른 값들도 같이 리렌더링 되는 것을 알게되었다. 연관이 되어있지 않으면 같은 context로 묶지말고, 따로 만들어주자! 
- 직접 webpack 설정 : plugins, output, entry 등 공부 
- 마지막에 랜더링이 덜 될 수 있도록 useMemo, useCallback을 적절하게 사용하려고 했는데 잘 된건지는 코드리뷰를 받아봐야 할 것같다. 
