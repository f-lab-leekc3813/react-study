export default function TypescriptUtilityPage() {
    interface Iprofile{
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1. Pick 타입
    type aaa = Pick<Iprofile,"name" | "age">

    // 2.Omit 타입
    type bbb = Omit<Iprofile,"school">

    // 3. Partial 타입
    type ccc = Partial<Iprofile>

    // 4. Required 타입
    type ddd = Required<Iprofile>

    // 5. Record 타입
    type eee = "철수" | "영희" | "훈이" // Union 타입
    let child: eee
    child = "철수"

    type fff = Record<eee, Iprofile> // Record 타입

    // ======( type vs interface) 차이: 선언병합 =====
    interface Iprofile{
        candy: number
    }

    let profile: Partial<Iprofile> = {}
    profile.candy = 10
}