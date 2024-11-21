//10 , 유재석 , true
/* 
    JS의 데이터 기본타입
        1.문자열(String) : ""또는''또는 ``(백틱-키보드TAB)으로 감싼 자료
            10 vs "10" : 자료는 10 같다. 자료의 타입은 다르다.
            예] '안녕하세요', "유재석", `<div></div>`
        2.숫자(Number) : 
            예] 10, 7 , 3.14
        3.불리언(boolean)
            예] true 또는 false

    변수
        - 변수(변하는 수) vs 상수(고정된 수)
        1. 하나의 자료/데이터(위치 저장)를 저장할 수 있는 메모리 공간
        2. let 키워드 , const 키워드
        3. 메모리 공간, 상징적인 이름 = 변수명
        리터럴 : 데이터/자료 그 자체
            -각 언어들이 미리 정의해두고 동일한 데이터/자료를 참조 해야 사용하는 방법
            -메모리(저장소) 효율성 극대화 하기 위해서
            -예]
                let 변수1=10
                let 변수2=10 ---> 변수1와 변수2는 같은 값/자료를 참조한다. 값 1개
        4. 
*/
10 //숫자 타입의 자료
"안녕하세요" //문자열 타입의 자료
true //불리언 타입의 자료

let 숫자상자 = 10;  //숫자 타입의 자료를 '숫자상자' 변수의 저장
    //let 숫자상자 = 10 ---> 메모리(컴퓨터 기억하는곳) 2개( 10데이터(리터럴)가 저장된 메모리, 숫자상자(변수) 메모리)
let 숫자상자2 = 10;
let 문자열상자 = "안녕하세요";  //문자열 타입의 자료를 '문자열상자'변수의 저장
let 불리언상자=true; //불리언 타입의 자료를 "불리언상자" 변수에 저장

//[1]변수 선언 하는 방법
    //1. let : 변수 선언시 사용되는 키워드(미리만들어진단어) 인기검색어 키워드 
    //2. 변수명 : 데이터/자료를 저장하는 메모리의 상징적인 이름(식별-class/id)
    //  - 중복불가, 숫자로 시작, 띄어쓰기(컴퓨터)
    //3. = : 대입, 오른쪽 항(값)을 왼쪽 항(값) 대입하는 연산자
    //4. 리터럴/값 : 변수에 대입할 리터럴/값 그자체 또는 객체(주소값)
let 변수상자1 = 10;

//[2]변수 사용 하는 이유 : 값 저장, 값 재사용, 그 자체 값의 의미 부여, 중간 계산 기억
console.log(10,변수상자1);
변수상자1 = 20;
변수상자1 = 20+10;  //20 + 10 했을때 새로운 리터럴 30 대입한다.

//[3] 변수의 값 변경 하기
    //1.변경할변수명 = 새로운값 : 변경할변수명 = 새로운값;
변수상자1 = "유재석";
console.log(변수상자1);

//[4] 변수의 연산
let 점수1 = 10;
let 점수2 = 20;
let 결과 = 점수1+점수2;   //점수의 연산
    // 명령어 처리 순서
    //1. =대입 기준으로 오른쪽 먼저 처리, 점수1 + 점수2
    //2. '점수1' 변수가 가진 값을 호출/반환, 10 + 점수2
    //3. '점수2' 변수가 가진 값을 호출/반환, 10+20
    //4. 더하기 연산, 30, let 결과 30
    //5. 변수의 메모리 공간 호출, 
    //6. 대입 연산자, 결과(30)

점수2 = 100;// 점수2 변수의 값 수정
console.log(결과);

//[5] 변수의 값이 대입되지 않을때
let 이름
console.log(이름) //'undefined' 타입, 변수의 값을 초기화(처음)화 (대입) 없다. (값없다.)

//[6] 상수 만들기
    //1. const : 상수 만들기 위한 키워드
    //2. 상수면
    //3. = 
    //4. 리터럴
    const 고정상자 = "안녕하세요";
//[7] 상수 수정 불가능.
//고정상자 = 10;





