export default function Qqq() {
     
    // 타입추론

    let aaa = "안녕하세요"
    aaa = "ddd"

    // 타입명시
    let bbb:string = "반갑습니다"
    bbb = "dd"

    // 문자타입(선언과 할당 분리)
    let ccc: string
    ccc = "반가워요!!"

    // 숫자타입
    let ddd: number = 10

    // 불린타입
    let eee: boolean = true
    eee = false

    // 배열타입
    let fff: number[] = [12,31,23]
    let ggg: string[] = ['철수','영희']
    let hhh: (string | number)[] = ['철수','영희',10]

    // 객체타입
    interface IProfile {
        name : string
        age : number | string
        school : string
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    // age에 number, string 둘다 쓸 수 있음.
    profile.age = "10살"

    // 함수타입 => 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시, 타입명시 필요).
    const add = (number1:number, number2:number, unit:string): string => {
        return number1 + number2 + unit
    }
    const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!

    // any타입
    let qqq: any = "철수" // 자바스크립트와 동일!
    qqq = 1
    qqq = "weqw"
    qqq = true

    return <></>
}
